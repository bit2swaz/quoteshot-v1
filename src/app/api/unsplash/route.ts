/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  // Get the search query from the URL parameters
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("query");

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

  const url = `https://api.unsplash.com/search/photos?query=${encodeURIComponent(
    query,
  )}&per_page=9&orientation=squarish`;

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

    // We only need the image URLs, so we'll extract them.
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
