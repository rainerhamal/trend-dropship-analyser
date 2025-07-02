import { generateYAxis } from "@/app/lib/utils"
import { fetchTrendData } from "@/app/lib/data";
import FiltersPanel from "./filter";
import { useEffect, useState } from "react";

export default function OpportunitiesTable({
  opportunities = [],
}: {
  opportunities: any[];
}) {
  return (
    <div className="rounded-2xl p-6 shadow-inner shadow-cyan-500/10 h-[350px] text-white">
      <h2 className="text-base font-semibold mb-4 text-cyan-300">
        Top Opportunities
      </h2>

      {opportunities.length === 0 ? (
        <div className="text-sm text-gray-400">
          No opportunities yet. Run analysis to generate them.
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm table-auto border-collapse">
            <thead>
              <tr className="text-left border-b border-cyan-800 text-cyan-400">
                <th className="px-4 py-2">Product</th>
                <th className="px-4 py-2">Score</th>
                <th className="px-4 py-2">Niche</th>
                <th className="px-4 py-2">Source</th>
              </tr>
            </thead>
            <tbody>
              {opportunities.map((item, idx) => (
                <tr
                  key={idx}
                  className="border-b border-gray-700 hover:bg-[#1e2028] transition"
                >
                  <td className="px-4 py-2">{item.name}</td>
                  <td className="px-4 py-2">{item.score}</td>
                  <td className="px-4 py-2">{item.niche}</td>
                  <td className="px-4 py-2">{item.source}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}