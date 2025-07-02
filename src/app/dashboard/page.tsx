'use client';
import { Suspense } from "react";
import { lusitana } from "@/app/ui/fonts";
import FiltersPanel from "../ui/dashboard/filter";
import TrendChartCard from "../ui/dashboard/trend";
import GPTInsightCard from "../ui/dashboard/gptinsight";
import OpportunitiesTable from "../ui/dashboard/opportunities";
import { useEffect, useState } from "react";
import {fetchTrendData} from "@/app/lib/data";

export default function Page() {
    const [data, setData] = useState<any>(null);

    return (
        <main className="min-h-screen bg-gradient-to-b from-[#0a0f1c] via-[#0b1120] to-[#0f172a] text-white p-6 flex flex-col lg:flex-row gap-6">
            <h1 className="heading-primary mb-4">
                Trend Radar
            </h1>

            <div className="flex flex-col gap-4 w-full lg:w-1/3">
                <div className="p-4">
                    <FiltersPanel setData={setData} />
                </div>

                <div className="panel h-[300px] overflow-y-auto">
                    <GPTInsightCard summary={data?.summary} />
                </div>
            </div>

            <div className="flex flex-col gap-4 w-full lg:w-2/3">
                <div className="panel h-[350px] overflow-hidden">
                    <TrendChartCard data={data?.chartData} />
                </div>

                <div className="panel h-[300px] overflow-y-auto">
                    <OpportunitiesTable opportunities={data?.opportunities} />
                </div>
            </div>
        </main>
    );
}