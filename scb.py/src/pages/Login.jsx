
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
        className="login-box bg-white/90 rounded-[2.5rem] shadow-2xl p-16 pt-14 pb-12 min-w-[680px] max-w-[95vw] flex flex-col items-center relative animate-fadeIn border border-[#ffe082]/30"
        style={{boxShadow: '0 12px 48px rgba(108,52,131,0.13), 0 2.5px 16px rgba(255,152,0,0.10)'}}
        autoComplete="on"
      >
  <img src="/cash-payment.png" alt="Logo" className="login-logo w-24 h-24 object-contain mb-4 rounded-3xl shadow-lg border-4 border-[#fffbe7] bg-[#fffbe7]" style={{boxShadow:'0 4px 16px rgba(108,52,131,0.10)'}} />
        <h2 className="text-center text-[#6c3483] mb-8 text-[2.2em] tracking-wide w-full font-bold drop-shadow">เข้าสู่ระบบ</h2>
        <div className="input-group w-full mb-7 flex flex-col items-center">
          <label htmlFor="username" className="block mb-3 text-[#333] font-semibold tracking-wide w-[60%] min-w-[240px] max-w-[440px] mx-auto pl-1">ชื่อผู้ใช้</label>
          <input
            type="text"
            id="username"
            name="username"
            required
            autoFocus
            placeholder="กรอกชื่อผู้ใช้..."
            className="block w-[60%] min-w-[240px] max-w-[440px] px-5 py-4 rounded-2xl border border-[#e0e0e0] bg-[#fafafa] text-lg focus:border-[#6c3483] focus:bg-[#fffbe7] transition mx-auto shadow-sm focus:shadow-lg outline-none"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
        </div>
        <div className="input-group w-full mb-7 flex flex-col items-center">
          <label htmlFor="password" className="block mb-3 text-[#333] font-semibold tracking-wide w-[60%] min-w-[240px] max-w-[440px] mx-auto pl-1">รหัสผ่าน</label>
          <input
            type="password"
            id="password"
            name="password"
            required
            placeholder="กรอกรหัสผ่าน..."
            className="block w-[60%] min-w-[240px] max-w-[440px] px-5 py-4 rounded-2xl border border-[#e0e0e0] bg-[#fafafa] text-lg focus:border-[#6c3483] focus:bg-[#fffbe7] transition mx-auto shadow-sm focus:shadow-lg outline-none"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        {error && <div className="error w-full text-[#c0392b] text-center mb-5 bg-[#ffeaea] rounded-xl py-3 text-lg font-medium shadow">{error}</div>}
        <button
          type="submit"
          className="w-[60%] min-w-[240px] max-w-[440px] bg-gradient-to-r from-[#6c3483] to-[#ff9800] text-white py-4 rounded-2xl font-bold shadow-lg hover:from-[#ff9800] hover:to-[#6c3483] transition text-[1.25em] mt-2 tracking-wide outline-none border-0 focus:ring-4 focus:ring-[#ffe082]/60"
          style={{letterSpacing:'1px'}}
        >เข้าสู่ระบบ</button>
        <div className="login-hint text-[#888] text-base text-center mt-6">สำหรับผู้ดูแลระบบเท่านั้น</div>
      </form>
    </div>
  );
}
