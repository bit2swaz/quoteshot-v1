/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/prefer-nullish-coalescing */

import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("query");
  const page = searchParams.get("page") || "1"; // Get the page number, default to 1

  if (!query) {
    return NextResponse.json(
      { error: "Query parameter is required" },
      { status: 400 },
    );
  }

  const accessKey = process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY;

  if (!accessKey) {
    return NextResponse.json(
      { error: "Unsplash API key is not configured" },
      { status: 500 },
    );
  }

  // Add the page parameter to the Unsplash API URL
  const url = `https://api.unsplash.com/search/photos?query=${encodeURIComponent(
    query,
  )}&per_page=9&orientation=squarish&page=${page}`;

  try {
    const response = await fetch(url, {
      headers: {
        Authorization: `Client-ID ${accessKey}`,
      },
    });

    if (!response.ok) {
      throw new Error(`Unsplash API responded with status: ${response.status}`);
    }

    const data = await response.json();

    const imageUrls = data.results.map((photo: any) => photo.urls.regular);

    return NextResponse.json(imageUrls);
  } catch (error) {
    console.error("Error fetching from Unsplash:", error);
    return NextResponse.json(
      { error: "Failed to fetch images from Unsplash" },
      { status: 500 },
    );
  }
}
