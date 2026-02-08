import axios from "axios";
import { useState } from "react";

export default function AppointmentForm() {
  const [form, setForm] = useState({});

  const submit = async () => {
    await axios.post("http://localhost:5000/api/appointments", form);
    alert("Your appointment request has been submitted.");
  };

  return (
    <div className="grid gap-3 max-w-md">
      <input className="border p-2 rounded" placeholder="Full Name"
        onChange={e => setForm({ ...form, name: e.target.value })} />

      <input className="border p-2 rounded" placeholder="Phone Number"
        onChange={e => setForm({ ...form, phone: e.target.value })} />

      <input className="border p-2 rounded" placeholder="Email Address"
        onChange={e => setForm({ ...form, email: e.target.value })} />

      <input className="border p-2 rounded" type="date"
        onChange={e => setForm({ ...form, date: e.target.value })} />

      <textarea className="border p-2 rounded" placeholder="Message"
        onChange={e => setForm({ ...form, message: e.target.value })} />

      <button
        onClick={submit}
        className="bg-blue-700 text-white py-2 rounded hover:bg-blue-800"
      >
        Book Appointment
      </button>
    </div>
  );
}