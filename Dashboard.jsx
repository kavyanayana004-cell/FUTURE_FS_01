import { useState } from "react";

import Sidebar from "../components/Sidebar";
import StatsCard from "../components/StatsCard";

import {
  FiUsers,
  FiClipboard,
  FiDollarSign,
  FiCheckCircle,
} from "react-icons/fi";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

/* CHART DATA */
const chartData = [
  { day: "Mon", revenue: 18000 },
  { day: "Tue", revenue: 15000 },
  { day: "Wed", revenue: 23000 },
  { day: "Thu", revenue: 31000 },
  { day: "Fri", revenue: 26000 },
  { day: "Sat", revenue: 22000 },
  { day: "Sun", revenue: 35000 },
];

/* ACTIVITIES */
const activities = [
  "New customer added - Michael Johnson",
  "New deal created - Website Redesign",
  "Task completed - Client Follow Up",
  "New lead added - Sarah Williams",
];

/* CUSTOMERS DATA */
const customers = [
  {
    name: "Michael Johnson",
    company: "Tech Solutions Inc.",
    deals: 8,
    revenue: "$12,430",
    status: "Active",
  },
  {
    name: "Sarah Williams",
    company: "Bright Future Ltd.",
    deals: 5,
    revenue: "$8,250",
    status: "Active",
  },
  {
    name: "David Brown",
    company: "Digital Agency",
    deals: 6,
    revenue: "$7,890",
    status: "Pending",
  },
  {
    name: "Emily Davis",
    company: "Innovate Corp",
    deals: 4,
    revenue: "$6,420",
    status: "Active",
  },
];

export default function Dashboard() {
  const [search, setSearch] = useState("");
  const [showNotif, setShowNotif] = useState(false);

  /* FILTER DATA BASED ON SEARCH */
  const filteredCustomers = customers.filter((c) =>
    `${c.name} ${c.company}`
      .toLowerCase()
      .includes(search.toLowerCase().trim())
  );

  const filteredActivities = activities.filter((item) =>
    item.toLowerCase().includes(search.toLowerCase().trim())
  );

  return (
    <div className="flex min-h-screen bg-slate-100">
      <Sidebar />

      <main className="flex-1 p-6">
        {/* HEADER */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-4 mb-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-800">
              Welcome Back 👋
            </h1>
            <p className="text-gray-500 mt-2">
              Here's what's happening today
            </p>
          </div>

          {/* RIGHT CONTROLS */}
          <div className="flex items-center gap-4">
            {/* SEARCH BAR */}
            <input
              type="text"
              placeholder="Search customers..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="px-4 py-3 w-72 rounded-xl border border-gray-200 bg-white outline-none"
            />

            {/* NOTIFICATION */}
            <div className="relative">
              <button
                onClick={() => setShowNotif(!showNotif)}
                className="bg-white p-3 rounded-xl shadow"
              >
                🔔
              </button>

              {showNotif && (
                <div className="absolute right-0 mt-3 w-64 bg-white shadow-lg rounded-xl p-3 z-50">
                  <p className="text-sm py-1">🔔 New customer added</p>
                  <p className="text-sm py-1">💰 Payment received</p>
                  <p className="text-sm py-1">📦 Order shipped</p>
                </div>
              )}
            </div>

            {/* PROFILE */}
            <div className="bg-white px-4 py-2 rounded-xl shadow flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center">
                K
              </div>

              <div>
                <p className="font-semibold">Kavya</p>
                <p className="text-xs text-gray-500">Admin</p>
              </div>
            </div>
          </div>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 mb-8">
          <StatsCard title="Customers" value="1,248" icon={<FiUsers />} growth="12.5" color="bg-indigo-500" />
          <StatsCard title="Leads" value="452" icon={<FiClipboard />} growth="8.2" color="bg-blue-500" />
          <StatsCard title="Revenue" value="$54,230" icon={<FiDollarSign />} growth="20.1" color="bg-green-500" />
          <StatsCard title="Tasks" value="32" icon={<FiCheckCircle />} growth="5.4" color="bg-pink-500" />
        </div>

        {/* CHART + ACTIVITY */}
        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          {/* CHART */}
          <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-bold mb-4">Sales Overview</h2>

            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="day" />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="revenue"
                    stroke="#4f46e5"
                    strokeWidth={3}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* ACTIVITY */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-bold mb-4">Recent Activity</h2>

            <div className="space-y-3">
              {filteredActivities.map((item, index) => (
                <div
                  key={index}
                  className="p-3 bg-slate-50 rounded-xl hover:bg-slate-100"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CUSTOMERS TABLE */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <div className="flex justify-between items-center mb-5">
            <h2 className="text-xl font-bold">Top Customers</h2>
            <button className="text-blue-600">View All</button>
          </div>
          <div className="text-sm text-gray-500 mb-2">
            Found: {filteredCustomers.length} customers
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b text-left">
                  <th className="pb-4">Customer</th>
                  <th className="pb-4">Company</th>
                  <th className="pb-4">Deals</th>
                  <th className="pb-4">Revenue</th>
                  <th className="pb-4">Status</th>
                </tr>
              </thead>

              <tbody>
                {filteredCustomers.length > 0 ? (
                  filteredCustomers.map((c) => (
                    <tr key={c.name} className="border-b">
                      <td className="py-4">{c.name}</td>
                      <td>{c.company}</td>
                      <td>{c.deals}</td>
                      <td>{c.revenue}</td>
                      <td
                        className={
                          c.status === "Active"
                            ? "text-green-600"
                            : "text-yellow-500"
                        }
                      >
                        {c.status}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className="text-center py-6 text-gray-500">
                      No customers found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}