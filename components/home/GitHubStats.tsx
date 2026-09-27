import { ArrowUpRight } from "lucide-react";

const username = "Sanket2004";
const profileUrl = `https://github.com/${username}`;
const apiHeaders = {
  Accept: "application/vnd.github+json",
  "X-GitHub-Api-Version": "2022-11-28",
};

interface GitHubProfile {
  public_repos: number;
  followers: number;
}

interface GitHubRepository {
  stargazers_count: number;
  forks_count: number;
}

interface GitHubStatsData {
  repositories: number;
  stars: number;
  forks: number;
  followers: number;
}

async function getGitHubStats(): Promise<GitHubStatsData> {
  const cache = { next: { revalidate: 3600 } };
  const [profileResponse, repositoriesResponse] = await Promise.all([
    fetch(`https://api.github.com/users/${username}`, {
      ...cache,
      headers: apiHeaders,
    }),
    fetch(
      `https://api.github.com/users/${username}/repos?per_page=100&type=owner`,
      {
        ...cache,
        headers: apiHeaders,
      },
    ),
  ]);

  if (!profileResponse.ok || !repositoriesResponse.ok) {
    throw new Error("GitHub stats are unavailable.");
  }

  const [profile, repositories] = (await Promise.all([
    profileResponse.json(),
    repositoriesResponse.json(),
  ])) as [GitHubProfile, GitHubRepository[]];

  return {
    repositories: profile.public_repos,
    stars: repositories.reduce(
      (total, repo) => total + repo.stargazers_count,
      0,
    ),
    forks: repositories.reduce((total, repo) => total + repo.forks_count, 0),
    followers: profile.followers,
  };
}

const numberFormat = new Intl.NumberFormat("en");

export default async function GitHubStats() {
  let stats: GitHubStatsData | null = null;

  try {
    stats = await getGitHubStats();
  } catch {
    stats = null;
  }

  const metrics: { label: string; value: number }[] = stats
    ? [
        { label: "Public repositories", value: stats.repositories },
        { label: "Stars earned", value: stats.stars },
        { label: "Forks", value: stats.forks },
        { label: "Followers", value: stats.followers },
      ]
    : [];

  return (
    <section className="w-full space-y-5 py-6">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div className="space-y-1">
          <h2 className="text-2xl font-light tracking-tight sm:text-3xl">
            GitHub activity
          </h2>
          <p className="text-sm font-light text-muted-foreground">
            A snapshot of my public work.
          </p>
        </div>
        <a
          href={profileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          @{username}
          <ArrowUpRight
            size={14}
            className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </a>
      </div>

      {stats ? (
        <dl className="grid grid-cols-2 border-y border-dashed border-border/70 sm:grid-cols-4">
          {metrics.map(({ label, value }, index) => (
            <div
              key={label}
              className={`space-y-1 py-4 ${index % 2 === 1 ? "border-l border-dashed border-border/70 pl-4 sm:pl-5" : "pr-4 sm:pr-5"} ${index > 1 ? "border-t border-dashed border-border/70 sm:border-t-0" : ""} ${index > 0 ? "sm:border-l sm:border-dashed sm:border-border/70 sm:pl-5" : ""}`}
            >
              <dt className="text-xs text-muted-foreground sm:text-sm">
                {label}
              </dt>
              <dd className="text-2xl font-light tracking-tight">
                {numberFormat.format(value)}
              </dd>
            </div>
          ))}
        </dl>
      ) : (
        <p className="border-t border-dashed border-border/70 pt-4 text-sm text-muted-foreground">
          Live stats are temporarily unavailable. Visit my GitHub profile to
          explore my public work.
        </p>
      )}
    </section>
  );
}
