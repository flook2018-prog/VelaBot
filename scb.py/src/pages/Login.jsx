
import React, { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";

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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#051021] to-[#6e8efb]">
      <form onSubmit={handleSubmit} className="bg-white/80 p-8 rounded-2xl shadow-2xl w-full max-w-md relative backdrop-blur-md border border-[#00f0a6]/10">
        <div className="flex flex-col items-center mb-6">
          <div className="bg-gradient-to-r from-[#00f0a6] to-[#6e8efb] p-3 rounded-full mb-2 shadow-lg">
            <FaUser className="text-3xl text-white drop-shadow" />
          </div>
          <h2 className="text-2xl font-bold text-center text-[#00f0a6] mb-1">เข้าสู่ระบบ</h2>
          <p className="text-xs text-gray-500 text-center mb-2">กรุณากรอกชื่อผู้ใช้และรหัสผ่านเพื่อเข้าใช้งานระบบ</p>
        </div>
        <div className="mb-4 relative">
          <label className="block mb-1 text-gray-700">ชื่อผู้ใช้</label>
          <div className="flex items-center bg-white rounded-lg border focus-within:ring-2 focus-within:ring-[#00f0a6]">
            <FaUser className="ml-3 text-gray-400" />
            <input
              type="text"
              className="w-full px-3 py-2 bg-transparent border-0 focus:outline-none rounded-lg"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              autoFocus
              placeholder="Username"
            />
          </div>
        </div>
        <div className="mb-4 relative">
          <label className="block mb-1 text-gray-700">รหัสผ่าน</label>
          <div className="flex items-center bg-white rounded-lg border focus-within:ring-2 focus-within:ring-[#00f0a6]">
            <FaLock className="ml-3 text-gray-400" />
            <input
              type="password"
              className="w-full px-3 py-2 bg-transparent border-0 focus:outline-none rounded-lg"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
          </div>
        </div>
        {error && <div className="mb-4 text-red-500 text-sm text-center">{error}</div>}
        <button type="submit" className="w-full bg-gradient-to-r from-[#00f0a6] to-[#6e8efb] text-white py-2 rounded-lg font-bold shadow-md hover:from-[#6e8efb] hover:to-[#00f0a6] transition">เข้าสู่ระบบ</button>
        <div className="mt-4 text-xs text-gray-400 text-center">© {new Date().getFullYear()} VelaBot</div>
      </form>
    </div>
  );
}
