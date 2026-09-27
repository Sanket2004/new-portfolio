"use client";

import { ExternalLink, Music2 } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

interface SpotifyNowPlayingData {
  isPlaying: boolean;
  title: string;
  artist: string;
  album: string | null;
  albumArt: string | null;
  spotifyUrl: string | null;
  progressMs: number;
  durationMs: number;
}

export default function SpotifyNowPlaying() {
  const [track, setTrack] = useState<SpotifyNowPlayingData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNowPlaying = async () => {
      try {
        const response = await fetch("/api/spotify/now-playing", {
          cache: "no-store",
        });

        if (!response.ok) {
          setTrack(null);
          return;
        }

        const data = await response.json();

        if (data.isPlaying) {
          setTrack(data);
        } else {
          setTrack(null);
        }
      } catch {
        setTrack(null);
      } finally {
        setLoading(false);
      }
    };

    fetchNowPlaying();

    // Check every 10 seconds
    const interval = setInterval(fetchNowPlaying, 10_000);

    return () => clearInterval(interval);
  }, []);

  const progress =
    track && track.durationMs > 0
      ? (track.progressMs / track.durationMs) * 100
      : 0;

  return (
    <section className="w-full space-y-5 py-6">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div className="space-y-1">
          <h2 className="text-2xl font-light tracking-tight sm:text-3xl">
            Now playing
          </h2>
          <p className="text-sm font-light text-muted-foreground">
            A little peek at what I&apos;m listening to.
          </p>
        </div>
        <span className="inline-flex items-center gap-2 text-xs text-muted-foreground">
          <span
            className={`size-2 rounded-full ${track?.isPlaying ? "animate-pulse bg-emerald-500" : "bg-muted-foreground/40"}`}
            aria-hidden="true"
          />
          {loading
            ? "Checking Spotify"
            : track?.isPlaying
              ? "Listening now"
              : "Not playing"}
        </span>
      </div>

      <div className="flex min-h-[76px] items-center gap-4 border-y border-dashed border-border/70 py-3">
        <div className="relative size-14 shrink-0 overflow-hidden rounded-md border border-border bg-muted">
          {track?.albumArt ? (
            <Image
              src={track.albumArt}
              alt={track.album ?? track.title}
              fill
              sizes="56px"
              className="object-cover"
            />
          ) : (
            <div className="flex size-full items-center justify-center text-muted-foreground">
              <Music2 className="size-5" strokeWidth={1.5} />
            </div>
          )}
        </div>

        {track ? (
          <div className="min-w-0 flex-1 space-y-1">
            <p className="truncate text-sm font-medium">{track.title}</p>
            <p className="truncate text-sm text-muted-foreground">
              {track.artist}
              {track.album ? ` · ${track.album}` : ""}
            </p>
            {track.isPlaying && (
              <div
                className="mt-2 h-1 w-full overflow-hidden rounded-full bg-muted"
                role="progressbar"
                aria-label="Track progress"
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={Math.min(Math.round(progress), 100)}
              >
                <div
                  className="h-full rounded-full bg-primary transition-[width] duration-1000"
                  style={{ width: `${Math.min(progress, 100)}%` }}
                />
              </div>
            )}
          </div>
        ) : (
          <p className="text-sm text-muted-foreground">
            {loading ? "Checking Spotify..." : "Nothing playing right now."}
          </p>
        )}

        {track?.spotifyUrl && (
          <a
            href={track.spotifyUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open song in Spotify"
            title="Open in Spotify"
            className="ml-auto inline-flex size-9 shrink-0 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
          >
            <ExternalLink className="size-4" aria-hidden="true" />
          </a>
        )}
      </div>
    </section>
  );
}
