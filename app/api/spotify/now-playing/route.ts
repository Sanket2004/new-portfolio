import { NextResponse } from "next/server";

const TOKEN_ENDPOINT = "https://accounts.spotify.com/api/token";

const NOW_PLAYING_ENDPOINT =
  "https://api.spotify.com/v1/me/player/currently-playing";

async function getAccessToken() {
  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
  const refreshToken = process.env.SPOTIFY_REFRESH_TOKEN;

  if (!clientId || !clientSecret || !refreshToken) {
    throw new Error("Spotify environment variables are missing");
  }

  const basicAuth = Buffer.from(
    `${clientId}:${clientSecret}`,
  ).toString("base64");

  const response = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Basic ${basicAuth}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: refreshToken,
    }),
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to refresh Spotify access token");
  }

  return response.json();
}

export async function GET() {
  try {
    const { access_token } = await getAccessToken();

    const response = await fetch(NOW_PLAYING_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
      cache: "no-store",
    });

    // Nothing is playing
    if (response.status === 204) {
      return NextResponse.json({
        isPlaying: false,
      });
    }

    if (!response.ok) {
      return NextResponse.json(
        {
          error: "Spotify API request failed",
        },
        {
          status: response.status,
        },
      );
    }

    const data = await response.json();

    if (!data?.item) {
      return NextResponse.json({
        isPlaying: false,
      });
    }

    const track = data.item;

    return NextResponse.json({
      isPlaying: Boolean(data.is_playing),

      title: track.name,

      artist: track.artists
        ?.map((artist: { name: string }) => artist.name)
        .join(", "),

      album: track.album?.name ?? null,

      albumArt: track.album?.images?.[0]?.url ?? null,

      spotifyUrl: track.external_urls?.spotify ?? null,

      progressMs: data.progress_ms ?? 0,

      durationMs: track.duration_ms ?? 0,
    });
  } catch (error) {
    console.error("Spotify error:", error);

    return NextResponse.json(
      {
        error: "Unable to fetch Spotify playback",
      },
      {
        status: 500,
      },
    );
  }
}
