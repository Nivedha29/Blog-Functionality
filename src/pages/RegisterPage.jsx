import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Api } from "../services/api";
import { useAuth } from "../state/AuthContext";

export default function RegisterPage() {
  const { login } = useAuth();
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const [err, setErr] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setErr(null);
      const { user } = await Api.register(form);
      login(user, user.token);
      navigate("/", { replace: true });
    } catch (e2) {
      setErr(e2);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
  <div className="auth-card">
      <h2>Create account</h2>
      {err && <div className="alert error">Registration failed: {JSON.stringify(err)}</div>}
      <form className="card form" onSubmit={submit}>
        <div className="field">
          <label>Username</label>
          <input value={form.username} onChange={(e)=>setForm(f=>({...f,username:e.target.value}))}/>
        </div>
        <div className="field">
          <label>Email</label>
          <input type="email" value={form.email} onChange={(e)=>setForm(f=>({...f,email:e.target.value}))}/>
        </div>
        <div className="field">
          <label>Password</label>
          <input type="password" value={form.password} onChange={(e)=>setForm(f=>({...f,password:e.target.value}))}/>
        </div>
        <button className="btn primary" disabled={loading}>{loading ? "Creating..." : "Sign up"}</button>
      </form>
    </div>
    </div>
  );
}