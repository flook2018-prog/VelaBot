import React from "react";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { to: "/", label: "หน้าหลัก" },
  { to: "/account-settings", label: "ตั้งค่าบัญชี" },
  { to: "/transfer", label: "โอนเงิน" },
  { to: "/history", label: "ประวัติธุรกรรม" },
];

export default function Navbar({ user, onLogout }) {
  const location = useLocation();
  return (
    <nav className="bg-purple-700 text-white px-4 py-3 flex items-center justify-between shadow">
      <div className="flex items-center space-x-4">
        <span className="font-bold text-lg tracking-wide">SCB Transfer</span>
        {navItems.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className={`px-3 py-1 rounded hover:bg-purple-800 transition ${location.pathname === item.to ? "bg-purple-900" : ""}`}
          >
            {item.label}
          </Link>
        ))}
      </div>
      <div className="flex items-center space-x-3">
        <span className="hidden sm:inline">{user && `👤 ${user}`}</span>
        <button
          onClick={onLogout}
          className="bg-white text-purple-700 px-3 py-1 rounded hover:bg-purple-100 font-semibold transition"
        >
          ออกจากระบบ
        </button>
      </div>
    </nav>
  );
}
