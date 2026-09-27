import { NextRequest, NextResponse } from "next/server";

const TOKEN_ENDPOINT = "https://accounts.spotify.com/api/token";

export async function GET(request: NextRequest) {
  const code = request.nextUrl.searchParams.get("code");
  const error = request.nextUrl.searchParams.get("error");

  if (error) {
    return NextResponse.json(
      {
        error: "Spotify authorization failed",
        details: error,
      },
      { status: 400 },
    );
  }

  if (!code) {
    return NextResponse.json(
      {
        error: "Missing authorization code",
      },
      { status: 400 },
    );
  }

  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    return NextResponse.json(
      {
        error: "Spotify credentials are not configured",
      },
      { status: 500 },
    );
  }

  const redirectUri =
    `${process.env.NEXT_PUBLIC_SITE_URL ?? "http://127.0.0.1:3000"}` +
    "/api/spotify/callback";

  const basicAuth = Buffer.from(`${clientId}:${clientSecret}`).toString(
    "base64",
  );

  const response = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Basic ${basicAuth}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "authorization_code",
      code,
      redirect_uri: redirectUri,
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    return NextResponse.json(
      {
        error: "Failed to exchange Spotify authorization code",
        details: data,
      },
      { status: response.status },
    );
  }

  return new NextResponse(
    `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Spotify Connected</title>
          <style>
            body {
              font-family: system-ui, sans-serif;
              max-width: 700px;
              margin: 60px auto;
              padding: 20px;
            }

            code {
              display: block;
              padding: 16px;
              background: #f4f4f4;
              border-radius: 10px;
              word-break: break-all;
            }

            .warning {
              color: #b91c1c;
            }
          </style>
        </head>

        <body>
          <h1>Spotify connected</h1>

          <p>
            Copy the refresh token below into your
            <code>.env.local</code>.
          </p>

          <code>${data.refresh_token}</code>

          <p class="warning">
            Keep this token private. Do not commit it to GitHub.
          </p>
        </body>
      </html>
    `,
    {
      headers: {
        "Content-Type": "text/html",
      },
    },
  );
}
