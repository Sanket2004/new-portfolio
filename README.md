This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Spotify Now Playing

The homepage can show the track currently playing on your Spotify account. It uses the Spotify Web API and requires a refresh token authorized with the `user-read-currently-playing` scope.

1. Create an app in the [Spotify Developer Dashboard](https://developer.spotify.com/dashboard) and configure a redirect URI for the Authorization Code flow.
2. Authorize your Spotify account with the `user-read-currently-playing` scope and obtain a refresh token using [Spotify's Authorization Code flow](https://developer.spotify.com/documentation/web-api/tutorials/code-flow).
3. Copy `.env.example` to `.env.local` and set `SPOTIFY_CLIENT_ID`, `SPOTIFY_CLIENT_SECRET`, and `SPOTIFY_REFRESH_TOKEN`.
4. Restart the app. Credentials are only read by the server; playback is checked once per minute.

Spotify refresh tokens expire after six months. Reauthorize the account and update `SPOTIFY_REFRESH_TOKEN` when needed.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

Import this repository into [Vercel](https://vercel.com/new). Vercel detects Next.js automatically; use the repository root as the Root Directory and keep the default build settings (`npm run build`). Do not set a custom Output Directory.

The site can be deployed without Spotify credentials. To enable Spotify login and Now Playing in production, add these variables in the Vercel project settings under **Settings > Environment Variables**:

- `SPOTIFY_CLIENT_ID`
- `SPOTIFY_CLIENT_SECRET`
- `SPOTIFY_REFRESH_TOKEN`
- `NEXT_PUBLIC_SITE_URL` (the canonical site origin, for example `https://your-domain.com`, with no trailing slash)

Set them for the Production environment and redeploy. Also add `https://your-domain.com/api/spotify/callback` as a redirect URI in the Spotify Developer Dashboard. Use the same `NEXT_PUBLIC_SITE_URL` value locally in `.env.local`; copy `.env.example` as a starting point. Keep Spotify secrets out of source control.
