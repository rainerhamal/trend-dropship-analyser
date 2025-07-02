import { sql } from '@vercel/postgres';
import { unstable_noStore as noStore } from 'next/cache';
// import googleTrends from 'google-trends-api';

export async function fetchTrendData() {
    noStore();

    try{
        console.log( 'Fetching trend data...' );
        return 'data fetched';
    } catch
    {
        console.log( 'Data fetching failed...')
        return 'error fetching data';
    }
}

// export const fetchGoogleTrendsData = async (keyword: string) => {
//   try {
//     const results = await googleTrends.interestOverTime({
//       keyword,
//       startTime: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
//     });
//     return JSON.parse(results);
//   } catch (error) {
//     console.error("Google Trends fetch error:", error);
//     return [];
//   }
// };