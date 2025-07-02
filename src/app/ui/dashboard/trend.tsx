'use client';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer  } from "recharts";

export default function TrendChartCard({ data }: { data: any[] }) {
    const hasData = data && data.length && data[0].values && data[0].dates;

    let transformed: any[] = [];
    if (hasData) {
        transformed = data[0].dates.map((date: string, i: number) => {
            const point: { [key: string]: any } = { date };
            data.forEach((item: any) => {
                point[item.name] = item.values[i];
            });
            return point;
        });
    }

    return (
    <div className="rounded-2xl p-6 shadow-inner shadow-cyan-500/10 h-[350px] text-white">
      <h2 className="text-base font-semibold mb-4 text-cyan-300">
        Trend Overview
      </h2>

      {hasData ? (
        <div className="w-full h-[260px] overflow-x-auto">
          <ResponsiveContainer
            width={data[0].dates.length > 7 ? 1000 : '100%'}
            height="100%"
          >
            <LineChart data={transformed}>
              <CartesianGrid stroke="#2a2d3a" strokeDasharray="3 3" />
              <XAxis dataKey="date" stroke="#a0aec0" />
              <YAxis stroke="#a0aec0" />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#1f212a',
                  borderColor: '#2d3748',
                  color: '#fff',
                }}
                labelStyle={{ color: '#63b3ed' }}
                itemStyle={{ color: '#cbd5e0' }}
              />
              {data.map((item, index) => (
                <Line
                  key={index}
                  type="monotone"
                  dataKey={item.name}
                  stroke={`hsl(${(index * 60) % 360}, 100%, 60%)`}
                  strokeWidth={2}
                  dot={{ r: 3 }}
                />
              ))}
            </LineChart>
          </ResponsiveContainer>
        </div>
      ) : (
        <div className="text-sm text-gray-400">
          No trend data yet. Run analysis to visualize product interest over time.
        </div>
      )}
    </div>
  );
}