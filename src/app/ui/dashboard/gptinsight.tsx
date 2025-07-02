

export default function GPTInsightCard({ summary }: { summary?: string }) {
    return (
        <div className="rounded-2xl p-6 shadow-inner shadow-cyan-500/10 h-[300px] text-white text-sm">
            <h3 className="font-semibold text-cyan-300 text-base mb-3">GPT Insights</h3>
            <p className="whitespace-pre-line leading-relaxed text-cyan-100">
                {summary?.trim() ? summary : "No insights yet. Run analysis to get AI summary analysis."}
            </p>
        </div>
    );
}