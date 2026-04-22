import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const location = searchParams.get("location");

    const apiKey = process.env.GOOGLE_PLACES_API_KEY;
    let placeId: string | undefined;

    if (location === "auckland") {
      placeId = process.env.AUCKLAND_PLACE_ID;
    } else if (location === "waikato") {
      placeId = process.env.WAIKATO_PLACE_ID;
    } else {
      return NextResponse.json(
        { error: "Invalid location parameter" },
        { status: 400 },
      );
    }

    if (!apiKey || !placeId) {
      return NextResponse.json(
        { error: "API key or Place ID not configured" },
        { status: 500 },
      );
    }

    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews&key=${apiKey}&reviews_sort=newest`;

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
