import { useState } from "react";

export default function Leads() {
  const [leads, setLeads] = useState([
    {
      id: 1,
      name: "Michael Johnson",
      email: "michael@gmail.com",
      status: "New",
    },
    {
      id: 2,
      name: "Sarah Williams",
      email: "sarah@gmail.com",
      status: "Qualified",
    },
  ]);

  const [form, setForm] = useState({
    name: "",
    email: "",
    status: "New",
  });

  const addLead = () => {
    if (!form.name || !form.email) return;

    setLeads([
      ...leads,
      {
        id: Date.now(),
        ...form,
      },
    ]);

    setForm({
      name: "",
      email: "",
      status: "New",
    });
  };

  const deleteLead = (id) => {
    setLeads(leads.filter((lead) => lead.id !== id));
  };

  return (
    <div className="p-8 bg-slate-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Lead Management</h1>

      {/* Add Lead Form */}
      <div className="bg-white p-6 rounded-2xl shadow-sm mb-8">
        <h2 className="text-xl font-semibold mb-4">
          Add New Lead
        </h2>

        <div className="grid md:grid-cols-3 gap-4">
          <input
            type="text"
            placeholder="Name"
            value={form.name}
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
            className="border p-3 rounded-xl"
          />

          <input
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
            className="border p-3 rounded-xl"
          />

          <select
            value={form.status}
            onChange={(e) =>
              setForm({ ...form, status: e.target.value })
            }
            className="border p-3 rounded-xl"
          >
            <option>New</option>
            <option>Qualified</option>
            <option>Proposal</option>
          </select>
        </div>

        <button
          onClick={addLead}
          className="mt-4 bg-blue-600 text-white px-5 py-3 rounded-xl"
        >
          Add Lead
        </button>
      </div>

      {/* Leads Table */}
      <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
        <table className="w-full">
          <thead className="bg-slate-100">
            <tr>
              <th className="p-4 text-left">Name</th>
              <th className="p-4 text-left">Email</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-left">Action</th>
            </tr>
          </thead>

          <tbody>
            {leads.map((lead) => (
              <tr key={lead.id} className="border-t">
                <td className="p-4">{lead.name}</td>
                <td className="p-4">{lead.email}</td>
                <td className="p-4">{lead.status}</td>
                <td className="p-4">
                  <button
                    onClick={() => deleteLead(lead.id)}
                    className="bg-red-500 text-white px-3 py-2 rounded-lg"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}