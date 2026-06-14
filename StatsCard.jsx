import React from "react";

export default function StatsCard({
  title,
  value,
  icon,
  color,
  growth,
}) {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-5 flex justify-between items-center">
      <div>
        <p className="text-gray-500 text-sm">{title}</p>

        <h2 className="text-3xl font-bold mt-1">
          {value}
        </h2>

        <p className="text-green-500 text-sm mt-2">
          ↑ {growth}% this week
        </p>
      </div>

      <div
        className={`w-14 h-14 rounded-full flex items-center justify-center text-white text-2xl ${color}`}
      >
        {icon}
      </div>
    </div>
  );
}