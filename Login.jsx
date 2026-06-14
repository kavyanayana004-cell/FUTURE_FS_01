import { useState } from "react";
import { login } from "../api/api";

export default function Login({ setToken }) {
    const [form, setForm] = useState({
    username: "",
    password: "",
});

const handleSubmit = async (e) => {
  e.preventDefault();

  alert("Login button clicked");
  console.log("Form data:", form);

  try {
    const res = await login(form);

    console.log("Response:", res);
    alert("Login API returned");

    if (res?.token) {
      localStorage.setItem("token", res.token);
      setToken(res.token);
    } else {
      alert("No token received");
    }
  } catch (err) {
    console.error("Login error:", err);
    alert("Error: " + err.message);
  }
};

  return (
    <div style={{ padding: "20px" }}>
      <h2>CRM Login</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Username"
            value={form.username}
            onChange={(e) =>
              setForm({ ...form, username: e.target.value })
            }
          />
        </div>

        <div style={{ marginTop: "10px" }}>
          <input
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={(e) =>
              setForm({ ...form, password: e.target.value })
            }
          />
        </div>

        <button type="submit" style={{ marginTop: "10px" }}>
          Login
        </button>
      </form>
    </div>
  );
}