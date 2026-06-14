export default function Reports() {
  return (
    <div className="p-8 bg-slate-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Reports</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow">
          <h3 className="text-gray-500">Total Revenue</h3>
          <p className="text-3xl font-bold mt-2">$54,230</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <h3 className="text-gray-500">Total Leads</h3>
          <p className="text-3xl font-bold mt-2">452</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <h3 className="text-gray-500">Customers</h3>
          <p className="text-3xl font-bold mt-2">1,248</p>
        </div>
      </div>
    </div>
  );
}