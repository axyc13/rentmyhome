import { NextResponse } from "next/server";

export async function GET() {
  try {
    const apiKey = process.env.GOOGLE_PLACES_API_KEY;
    const placeId = process.env.NEXT_PUBLIC_PLACE_ID;

    if (!apiKey || !placeId) {
      return NextResponse.json(
        { error: "API key or Place ID not configured" },
        { status: 500 },
      );
    }

    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews&key=${apiKey}`;

    const response = await fetch(url);

    if (!response.ok) {
      const text = await response.text();
      console.log("Response text:", text);
      return NextResponse.json(
        { error: "Failed to fetch reviews" },
        { status: response.status },
      );
    }

    const data = await response.json();
    console.log("API response status:", data.status);

    if (data.status !== "OK") {
      console.log("API error details:", data);
      return NextResponse.json(
        { error: `API Error: ${data.status}` },
        { status: 500 },
      );
    }

    return NextResponse.json({ reviews: data.result.reviews || [] });
  } catch (error) {
    console.error("Server error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
