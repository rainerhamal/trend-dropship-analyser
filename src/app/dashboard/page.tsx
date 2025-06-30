import { Suspense } from "react";
import { lusitana } from "@/app/ui/fonts";
import FiltersPanel from "../ui/filterpanel/filter";
import TrendChartCard from "../ui/trendchart/trend";
import GPTInsightCard from "../ui/gptinsight/gptinsight";
import OpportunitiesTable from "../ui/opportunities/opportunities";

export default async function Page() {
    return (
        <main className="flex flex-col lg:flex-row gap-6 p-6">
            <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl text-black`}>
                Trend Radar
            </h1>
            <div className="flex flex-col gap-4 wfull lg:w-1/3">
                <FiltersPanel />
                <GPTInsightCard />
            </div>

            <div className="flex flex-col gap-4 w-full lg:w-2/3">
                <TrendChartCard />
                <OpportunitiesTable />
            </div>
        </main>
    )
}