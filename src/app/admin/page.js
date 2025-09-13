"use client";
import { useState, useEffect } from "react";
import AddProjectForm from "../../components/adminview/AddProjectForm";

export default function AdminPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  // check token on first load
  useEffect(() => {
    const token = sessionStorage.getItem("token");
    setIsLoggedIn(token === "secure-token");
    setLoading(false);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === "admin@example.com" && password === "12345") {
      sessionStorage.setItem("token", "secure-token");
      setIsLoggedIn(true);
    } else {
      setError("Invalid email or password");
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem("token");
    setIsLoggedIn(false);
    setEmail("");
    setPassword("");
  };

  if (loading) return <p style={{ color: "#fff", textAlign: "center", marginTop: "50px" }}>Loading...</p>;

  if (!isLoggedIn) {
    // Login form render karega
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          backgroundColor: "#ffffffff", // dark purple background
          fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        }}
      >
        <form
          onSubmit={handleLogin}
          style={{
            display: "flex",
            flexDirection: "column",
            width: "350px",
            padding: "40px",
            borderRadius: "12px",
            backgroundColor: "#2e0033", // lighter purple card
            boxShadow: "0 8px 25px rgba(0,0,0,0.6)",
          }}
        >
          <h2 style={{ color: "#fff", textAlign: "center", marginBottom: "30px", fontSize: "28px" }}>
            Admin Login
          </h2>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
              marginBottom: "20px",
              padding: "12px",
              borderRadius: "8px",
              border: "none",
              outline: "none",
              fontSize: "16px",
              backgroundColor: "#3d003d",
              color: "#fff",
            }}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{
              marginBottom: "20px",
              padding: "12px",
              borderRadius: "8px",
              border: "none",
              outline: "none",
              fontSize: "16px",
              backgroundColor: "#3d003d",
              color: "#fff",
            }}
          />
          {error && (
            <p style={{ color: "#ff4d4d", marginBottom: "20px", textAlign: "center", fontWeight: "bold" }}>{error}</p>
          )}
          <button
            type="submit"
            style={{
              padding: "12px",
              borderRadius: "8px",
              border: "none",
              backgroundColor: "#800080", // main purple button
              color: "#fff",
              fontSize: "16px",
              cursor: "pointer",
              transition: "0.3s",
            }}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#993399")}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#800080")}
          >
            Login
          </button>
        </form>
      </div>
    );
  }

  // Logged in → show admin panel
  return (
    <div style={{ display: "flex", minHeight: "100vh", backgroundColor: "#1a001a" }}>
     
      <div style={{ flex: 1, padding: "20px", color: "#fff" }}>
        <button
          onClick={handleLogout}
          style={{
            padding: "10px 20px",
            background: "#800080",
            color: "white",
            border: "none",
            borderRadius: "8px",
            marginBottom: "20px",
            cursor: "pointer",
            transition: "0.3s",
          }}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#993399")}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#800080")}
        >
          Logout
        </button>
        
        <AddProjectForm />
      </div>
    </div>
  );
}
