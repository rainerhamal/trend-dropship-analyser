'use client';
import { useState } from "react";
import axios from "axios";

export default function FiltersPanel({ setData }: any) {
    const [platforms, setPlatforms] = useState<string[]>(['GoogleTrends']);
    const [loading, setLoading] = useState(false);

    const togglePlatform = (platform: string) => {
        setPlatforms(prev =>
            prev.includes(platform) ? prev.filter(p => p !== platform) : [...prev, platform]
        );
    };

    const handleRun = async () => {
        setLoading(true);
        try {
            const res = await axios.post("http://localhost:8000/api/analyse");
            setData(res.data);
        } catch (err) {
            console.error("Error calling backend:", err);
        }
        setLoading(false);
    };

    return (
    <div className="relative w-[280px] h-[280px] mx-auto rounded-full glass-circle flex flex-col items-center justify-center p-6">
        {/* Outer animated ring */}
        <div className="absolute inset-0 rounded-full border border-white/20 radiant-ring pointer-events-none" />

        {/* <h2 className="text-cyan-300 font-semibold text-center text-sm mb-2">Filters & Controls</h2> */}

        {/* Date Range */}
        {/* <label htmlFor="dateRange" className="text-cyan-100 text-xs mb-1">Date Range</label>
        <select
            name="dateRange"
            id="dateRange"
            className="w-40 mb-3 p-1 bg-[#1f222c] text-white text-xs border border-cyan-500/20 rounded focus:outline-none focus:ring-1 focus:ring-cyan-500"
        >
            <option value="sevendays">Last 7 Days</option>
            <option value="3days">Last 3 Days</option>
        </select> */}

        {/* Platform Checkbox */}
        {/* <label className="inline-flex items-center gap-2 text-cyan-100 text-xs mb-3">
            <input
                type="checkbox"
                checked={platforms.includes('GoogleTrends')}
                onChange={() => togglePlatform('GoogleTrends')}
                className="accent-cyan-500"
            />
            Google Trends
        </label> */}

        {/* Run Analysis Button */}
        <button
            onClick={handleRun}
            disabled={loading}
            className={`w-20 h-20 rounded-full flex items-center justify-center text-sm font-bold shadow-md border transition duration-300
                ${loading
                    ? 'animate-breathe border-cyan-300 text-white bg-white/10'
                    : 'hover:bg-cyan-300 text-white border-white/30'
                }`} 
            style={{
                background: "linear-gradient(135deg, rgba(180,230,255,0.2), rgba(255,255,255,0.05))",
                boxShadow: "0 0 12px rgba(180, 230, 255, 0.6), 0 0 20px rgba(180, 230, 255, 0.2)",
                }}  
        >
            {loading ? <span className="animate-spin">⟳</span> : "Run Analysis"}
        </button>
    </div>
);

}