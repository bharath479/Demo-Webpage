import axios from "axios";
import { useState } from "react";

export default function AdminLogin({ onLogin }) {
  const [form, setForm] = useState({});

  const login = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/admin/login", form);
      localStorage.setItem("token", res.data.token);
      onLogin();
    } catch {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="max-w-sm mx-auto mt-20 p-6 shadow rounded">
      <h2 className="text-xl font-semibold mb-4">Admin Login</h2>

      <input className="border p-2 w-full mb-2"
        placeholder="Username"
        onChange={e => setForm({ ...form, username: e.target.value })}
      />

      <input className="border p-2 w-full mb-4"
        type="password"
        placeholder="Password"
        onChange={e => setForm({ ...form, password: e.target.value })}
      />

      <button
        onClick={login}
        className="bg-blue-700 text-white w-full py-2 rounded"
      >
        Login
      </button>
    </div>
  );
}
