import { Link, useLocation } from "react-router-dom";
import {
  FiHome,
  FiUsers,
  FiClipboard,
  FiSettings,
  FiBarChart2,
} from "react-icons/fi";

export default function Sidebar() {
  const location = useLocation();

  const menu = [
    { icon: <FiHome />, label: "Dashboard", path: "/" },
    { icon: <FiUsers />, label: "Customers", path: "/customers" },
    { icon: <FiClipboard />, label: "Leads", path: "/leads" },
    { icon: <FiBarChart2 />, label: "Reports", path: "/reports" },
    { icon: <FiSettings />, label: "Settings", path: "/settings" },
  ];

  return (
    <div className="w-64 bg-slate-900 text-white min-h-screen relative flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-slate-700">
        <h1 className="text-3xl font-extrabold tracking-wide">
          Mini CRM
        </h1>
      </div>

      {/* Menu */}
      <div className="p-4 flex-1">
        {menu.map((item) => (
          <Link
            key={item.label}
            to={item.path}
            className={`w-full flex items-center gap-3 p-3 rounded-xl mb-2 transition ${
              location.pathname === item.path
                ? "bg-blue-600 text-white"
                : "hover:bg-slate-800 text-slate-300"
            }`}
          >
            <span className="text-lg">{item.icon}</span>
            <span>{item.label}</span>
          </Link>
        ))}
      </div>

      {/* Upgrade Card */}
      <div className="p-4">
        <div className="bg-blue-600 rounded-xl p-4">
          <h3 className="font-bold text-sm">
            Upgrade to Pro
          </h3>

          <p className="text-xs mt-2 text-blue-100">
            Unlock premium CRM features and analytics.
          </p>

          <button className="mt-3 w-full bg-white text-blue-600 py-2 rounded-lg font-semibold">
            Upgrade
          </button>
        </div>
      </div>
    </div>
  );
}