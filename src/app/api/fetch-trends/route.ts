import { NextResponse } from "next/server";
import { fetchTrendData } from "@/app/lib/data";
// import { fetchGoogleTrendsSerp } from "@/app/lib/data";
// import { analyzeTrendsWithGPT } from '@/lib/ai/analyze';

// export async function GetDownloads() {
//     try {
//         const data = await fetchTrendData();
//         return NextResponse.json({ message: data });
//     } catch (error) {
//         console.error("Error fetching trend data:", error);
//         return NextResponse.json({ error: "Failed to fetch trend data" }, { status: 500 });
//     }
// }

// export async function POST(req: Request) {
//   const { keyword } = await req.json();

//   const trendsData = await fetchGoogleTrendsSerp(keyword);
//   const summary = await analyzeTrendsWithGPT(trendsData);

//   return NextResponse.json({ trendsData, summary });
// }