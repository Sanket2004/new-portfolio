import { NextResponse } from "next/server";

export async function GET() {
  const clientId = process.env.SPOTIFY_CLIENT_ID;

  if (!clientId) {
    return NextResponse.json(
      { error: "SPOTIFY_CLIENT_ID is not configured" },
      { status: 500 },
    );
  }

  const redirectUri =
    `${process.env.NEXT_PUBLIC_SITE_URL ?? "http://127.0.0.1:3000"}` +
    "/api/spotify/callback";

  const params = new URLSearchParams({
    client_id: clientId,
    response_type: "code",
    redirect_uri: redirectUri,
    scope: "user-read-currently-playing",
  });

  return NextResponse.redirect(
    `https://accounts.spotify.com/authorize?${params.toString()}`,
  );
}
