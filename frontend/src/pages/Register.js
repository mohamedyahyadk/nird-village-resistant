import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { API_URL } from "../api";
import { API_URL } from "../config";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("STUDENT");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    const res = await fetch(`${API_URL}/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password, role }),
    });
    const data = await res.json();
    if (res.ok) {
      alert("User registered successfully!");
      navigate("/login");
    } else {
      alert(data.msg || "Registration failed");
    }
  };

  return (
    <form onSubmit={handleRegister} style={{ padding: "20px" }}>
      <h2>Register</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <br />
      <br />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <br />
      <br />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <br />
      <br />
      <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="STUDENT">STUDENT</option>
        <option value="TEACHER">TEACHER</option>
        <option value="PARENT">PARENT</option>
        <option value="TECH">TECH</option>
        <option value="ADMIN">ADMIN</option>
      </select>
      <br />
      <br />
      <button type="submit">Register</button>
    </form>
  );
}

export default Register;
