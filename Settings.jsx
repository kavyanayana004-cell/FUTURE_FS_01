import { useState } from "react";

export default function Settings() {
  const [activeTab, setActiveTab] = useState("Profile");

  const tabs = [
    "Profile",
    "Security",
    "Notifications",
    "Appearance",
    "Team",
  ];

  return (
    <div className="min-h-screen bg-slate-100 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-slate-800 mb-6">
          Settings
        </h1>

        <div className="grid grid-cols-12 gap-6">
          {/* Left Sidebar */}
          <div className="col-span-3">
            <div className="bg-white rounded-2xl shadow-sm p-4">
              <h2 className="font-semibold text-slate-700 mb-4">
                Preferences
              </h2>

              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`w-full text-left px-4 py-3 rounded-xl mb-2 transition ${
                    activeTab === tab
                      ? "bg-blue-600 text-white"
                      : "hover:bg-slate-100 text-slate-700"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Right Content */}
          <div className="col-span-9">
            <div className="bg-white rounded-2xl shadow-sm p-8">

              {/* Profile */}
              {activeTab === "Profile" && (
                <>
                  <h2 className="text-2xl font-semibold mb-6">
                    Profile Information
                  </h2>

                  <div className="grid md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="border border-slate-200 p-3 rounded-xl"
                    />

                    <input
                      type="email"
                      placeholder="Email Address"
                      className="border border-slate-200 p-3 rounded-xl"
                    />

                    <input
                      type="text"
                      placeholder="Role"
                      className="border border-slate-200 p-3 rounded-xl"
                    />

                    <input
                      type="text"
                      placeholder="Department"
                      className="border border-slate-200 p-3 rounded-xl"
                    />
                  </div>
                </>
              )}

              {/* Security */}
              {activeTab === "Security" && (
                <>
                  <h2 className="text-2xl font-semibold mb-6">
                    Security Settings
                  </h2>

                  <div className="space-y-4">
                    <input
                      type="password"
                      placeholder="Current Password"
                      className="w-full border border-slate-200 p-3 rounded-xl"
                    />

                    <input
                      type="password"
                      placeholder="New Password"
                      className="w-full border border-slate-200 p-3 rounded-xl"
                    />

                    <input
                      type="password"
                      placeholder="Confirm Password"
                      className="w-full border border-slate-200 p-3 rounded-xl"
                    />
                  </div>
                </>
              )}

              {/* Notifications */}
              {activeTab === "Notifications" && (
                <>
                  <h2 className="text-2xl font-semibold mb-6">
                    Notification Preferences
                  </h2>

                  <div className="space-y-4">
                    <label className="flex items-center justify-between border p-4 rounded-xl">
                      <span>Email Notifications</span>
                      <input type="checkbox" />
                    </label>

                    <label className="flex items-center justify-between border p-4 rounded-xl">
                      <span>Lead Alerts</span>
                      <input type="checkbox" />
                    </label>

                    <label className="flex items-center justify-between border p-4 rounded-xl">
                      <span>Task Reminders</span>
                      <input type="checkbox" />
                    </label>
                  </div>
                </>
              )}

              {/* Appearance */}
              {activeTab === "Appearance" && (
                <>
                  <h2 className="text-2xl font-semibold mb-6">
                    Appearance
                  </h2>

                  <select className="border border-slate-200 p-3 rounded-xl">
                    <option>Light Theme</option>
                    <option>Dark Theme</option>
                  </select>
                </>
              )}

              {/* Team */}
              {activeTab === "Team" && (
                <>
                  <h2 className="text-2xl font-semibold mb-6">
                    Team Management
                  </h2>

                  <div className="border rounded-xl overflow-hidden">
                    <table className="w-full">
                      <thead className="bg-slate-50">
                        <tr>
                          <th className="p-4 text-left">Name</th>
                          <th className="p-4 text-left">Role</th>
                          <th className="p-4 text-left">Status</th>
                        </tr>
                      </thead>

                      <tbody>
                        <tr className="border-t">
                          <td className="p-4">Kavya</td>
                          <td className="p-4">Admin</td>
                          <td className="p-4 text-green-600">Active</td>
                        </tr>

                        <tr className="border-t">
                          <td className="p-4">John</td>
                          <td className="p-4">Manager</td>
                          <td className="p-4 text-green-600">Active</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </>
              )}

              <button className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl transition">
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}