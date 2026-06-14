export default function LeadTable({ leads = [] }) {
  return (
    <table className="crm-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Status</th>
        </tr>
      </thead>

      <tbody>
        {leads.map((lead) => (
          <tr key={lead._id}>
            <td>{lead.name}</td>
            <td>{lead.email}</td>
            <td>{lead.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}