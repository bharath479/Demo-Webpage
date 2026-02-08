import axios from "axios";
import { useEffect, useState } from "react";

export default function AdminDashboard() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/admin/appointments", {
      headers: {
        Authorization: localStorage.getItem("token")
      }
    }).then(res => setAppointments(res.data));
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-4">Appointments</h2>

      <table className="w-full border">
        <thead className="bg-gray-100">
          <tr>
            <th className="border p-2">Name</th>
            <th className="border p-2">Phone</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Date</th>
            <th className="border p-2">Message</th>
          </tr>
        </thead>

        <tbody>
          {appointments.map(a => (
            <tr key={a._id}>
              <td className="border p-2">{a.name}</td>
              <td className="border p-2">{a.phone}</td>
              <td className="border p-2">{a.email}</td>
              <td className="border p-2">{a.date}</td>
              <td className="border p-2">{a.message}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
