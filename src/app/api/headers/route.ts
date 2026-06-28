import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const headers: Record<string, string> = {};
  request.headers.forEach((value, key) => {
    // Skip internal Next.js headers
    if (!key.startsWith("x-middleware") && !key.startsWith("x-invoke")) {
      headers[key] = value;
    }
  });

  return NextResponse.json({ headers });
}
