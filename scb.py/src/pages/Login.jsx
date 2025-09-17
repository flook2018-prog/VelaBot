
import React, { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";

export default function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // กำหนดรหัสผ่านจริง (hardcode)
  const VALID_USER = "admin";
  const VALID_PASS = "1234";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !password) {
      setError("กรุณากรอกชื่อผู้ใช้และรหัสผ่าน");
      return;
    }
    if (username === VALID_USER && password === VALID_PASS) {
      setError("");
      onLogin(username);
    } else {
      setError("ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#f0f2f5] to-[#ffe082] px-2">
      <form
        onSubmit={handleSubmit}
        className="login-box bg-white rounded-2xl shadow-2xl p-10 pt-9 pb-8 min-w-[340px] max-w-[95vw] flex flex-col items-center relative animate-fadeIn border border-[#ffe082]/30"
        style={{boxShadow: '0 8px 32px rgba(108,52,131,0.13), 0 1.5px 8px rgba(255,152,0,0.08)'}}
        autoComplete="on"
      >
        <img src="/static/icons8-lion-head-64.png" alt="Logo" className="login-logo w-16 h-16 object-contain mb-2 rounded-xl shadow" style={{boxShadow:'0 2px 8px rgba(108,52,131,0.10)'}} />
        <h2 className="text-center text-[#6c3483] mb-4 text-[1.6em] tracking-wide w-full">เข้าสู่ระบบ</h2>
        <div className="input-group w-full mb-4 flex flex-col items-center">
          <label htmlFor="username" className="block mb-2 text-[#333] font-medium tracking-wide w-[60%] min-w-[120px] max-w-[220px] mx-auto pl-1">ชื่อผู้ใช้</label>
          <input
            type="text"
            id="username"
            name="username"
            required
            autoFocus
            placeholder="กรอกชื่อผู้ใช้..."
            className="block w-[60%] min-w-[120px] max-w-[220px] px-3 py-2 rounded-lg border border-[#e0e0e0] bg-[#fafafa] text-base focus:border-[#6c3483] focus:bg-[#fffbe7] transition mx-auto"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
        </div>
        <div className="input-group w-full mb-4 flex flex-col items-center">
          <label htmlFor="password" className="block mb-2 text-[#333] font-medium tracking-wide w-[60%] min-w-[120px] max-w-[220px] mx-auto pl-1">รหัสผ่าน</label>
          <input
            type="password"
            id="password"
            name="password"
            required
            placeholder="กรอกรหัสผ่าน..."
            className="block w-[60%] min-w-[120px] max-w-[220px] px-3 py-2 rounded-lg border border-[#e0e0e0] bg-[#fafafa] text-base focus:border-[#6c3483] focus:bg-[#fffbe7] transition mx-auto"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        {error && <div className="error w-full text-[#c0392b] text-center mb-3 bg-[#ffeaea] rounded-md py-2 text-base">{error}</div>}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-[#6c3483] to-[#ff9800] text-white py-3 rounded-lg font-bold shadow-md hover:from-[#ff9800] hover:to-[#6c3483] transition text-[1.15em] mt-1"
        >เข้าสู่ระบบ</button>
        <div className="login-hint text-[#888] text-sm text-center mt-3">สำหรับผู้ดูแลระบบเท่านั้น</div>
      </form>
    </div>
  );
}
