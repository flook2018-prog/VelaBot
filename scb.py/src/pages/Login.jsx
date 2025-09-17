import React, { useState } from "react";

export default function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username && password) {
      // For demo: accept any username/password
      onLogin(username);
    } else {
      setError("กรุณากรอกชื่อผู้ใช้และรหัสผ่าน");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center text-purple-700">เข้าสู่ระบบ</h2>
        <div className="mb-4">
          <label className="block mb-1 text-gray-700">ชื่อผู้ใช้</label>
          <input
            type="text"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            autoFocus
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 text-gray-700">รหัสผ่าน</label>
          <input
            type="password"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <div className="mb-4 text-red-500 text-sm">{error}</div>}
        <button type="submit" className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition">เข้าสู่ระบบ</button>
      </form>
    </div>
  );
}
