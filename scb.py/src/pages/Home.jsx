import React from "react";

export default function Home({ user }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md text-center">
        <h1 className="text-3xl font-bold text-purple-700 mb-4">ยินดีต้อนรับ {user}!</h1>
        <p className="text-gray-600">ระบบโอนเงิน SCB ที่ใช้งานง่ายและปลอดภัย</p>
      </div>
    </div>
  );
}
