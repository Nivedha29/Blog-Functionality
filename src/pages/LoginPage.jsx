import React, { useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { Api } from "../services/api";
import { useAuth } from "../state/AuthContext";

export default function LoginPage() {
  const { user, login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const [form, setForm] = useState({ email: "", password: "" });
  const [err, setErr] = useState(null);
  const [loading, setLoading] = useState(false);

  if (user) return <Navigate to={from} replace />;

  const submit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setErr(null);
      const { user } = await Api.login(form);
      login(user, user.token);
      navigate(from, { replace: true });
    } catch (e2) {
      setErr(e2);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
  <div className="auth-card">
    <h2>Sign in</h2>
     {err && <div className="alert error">Login failed: {JSON.stringify(err)}</div>}
      <form className="card form" onSubmit={submit}>
        <div className="field">
          <label>Email</label>
          <input type="email" value={form.email} onChange={(e)=>setForm(f=>({...f,email:e.target.value}))}/>
        </div>
        <div className="field">
          <label>Password</label>
          <input type="password" value={form.password} onChange={(e)=>setForm(f=>({...f,password:e.target.value}))}/>
        </div>
        <button className="btn primary" disabled={loading}>{loading ? "Signing in..." : "Sign in"}</button>
      </form>
    </div>
    </div>
  );
}