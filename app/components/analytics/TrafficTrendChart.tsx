export default function TrafficTrendChart() {
  // Standard sample data (vehicle count per day)
  const data = [
    { day: "Mon", count: 420 },
    { day: "Tue", count: 500 },
    { day: "Wed", count: 470 },
    { day: "Thu", count: 620 },
    { day: "Fri", count: 700 },
    { day: "Sat", count: 580 },
    { day: "Sun", count: 450 },
  ];

  // SVG dimensions
  const width = 300;
  const height = 160;
  const padding = 30;

  const maxValue = Math.max(...data.map(d => d.count));

  // Convert data to SVG points
  const points = data
    .map((d, i) => {
      const x =
        padding +
        (i * (width - padding * 2)) / (data.length - 1);
      const y =
        height -
        padding -
        (d.count / maxValue) * (height - padding * 2);
      return `${x},${y}`;
    })
    .join(" ");

  return (
    <div className="bg-white p-5 rounded-xl shadow">
      <h2 className="font-semibold mb-3">
        Traffic Flow Trend (Last 7 Days)
      </h2>

      <div className="bg-gray-100 rounded p-3">
        <svg
          width="100%"
          viewBox={`0 0 ${width} ${height}`}
          className="mx-auto"
        >
          {/* Y Axis */}
          <line
            x1={padding}
            y1={padding}
            x2={padding}
            y2={height - padding}
            stroke="#9CA3AF"
          />

          {/* X Axis */}
          <line
            x1={padding}
            y1={height - padding}
            x2={width - padding}
            y2={height - padding}
            stroke="#9CA3AF"
          />

          {/* Line */}
          <polyline
            fill="none"
            stroke="#2563EB"
            strokeWidth="3"
            points={points}
          />

          {/* Data Points */}
          {data.map((d, i) => {
            const x =
              padding +
              (i * (width - padding * 2)) /
                (data.length - 1);
            const y =
              height -
              padding -
              (d.count / maxValue) *
                (height - padding * 2);

            return (
              <circle
                key={i}
                cx={x}
                cy={y}
                r="4"
                fill="#2563EB"
              />
            );
          })}

          {/* X Axis Labels */}
          {data.map((d, i) => {
            const x =
              padding +
              (i * (width - padding * 2)) /
                (data.length - 1);

            return (
              <text
                key={i}
                x={x}
                y={height - 10}
                textAnchor="middle"
                fontSize="10"
                fill="#374151"
              >
                {d.day}
              </text>
            );
          })}
        </svg>
      </div>

      <p className="text-xs text-gray-500 text-center mt-2">
        Standard vehicle count vs time visualization
      </p>
    </div>
  );
}
