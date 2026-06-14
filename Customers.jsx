import { useState } from "react";

export default function Customers() {
  const [customers] = useState([
    {
      id: 1,
      name: "Michael Johnson",
      company: "Tech Solutions",
      email: "michael@gmail.com",
      status: "Active",
    },
    {
      id: 2,
      name: "Sarah Williams",
      company: "Bright Future Ltd",
      email: "sarah@gmail.com",
      status: "Active",
    },
    {
      id: 3,
      name: "David Brown",
      company: "Digital Agency",
      email: "david@gmail.com",
      status: "Pending",
    },
  ]);

  return (
    <div className="p-8 bg-slate-50 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">
          Customers
        </h1>

        <button className="bg-blue-600 text-white px-5 py-3 rounded-xl">
          + Add Customer
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
        <table className="w-full">
          <thead className="bg-slate-100">
            <tr>
              <th className="p-4 text-left">Name</th>
              <th className="p-4 text-left">Company</th>
              <th className="p-4 text-left">Email</th>
              <th className="p-4 text-left">Status</th>
            </tr>
          </thead>

          <tbody>
            {customers.map((customer) => (
              <tr key={customer.id} className="border-t">
                <td className="p-4">{customer.name}</td>
                <td className="p-4">{customer.company}</td>
                <td className="p-4">{customer.email}</td>
                <td className="p-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      customer.status === "Active"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {customer.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}