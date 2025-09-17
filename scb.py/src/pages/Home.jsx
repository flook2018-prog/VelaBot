import React from "react";
import { FaMoneyBillTransfer, FaHistory, FaCog, FaShieldAlt, FaUser, FaHome } from "react-icons/fa";

export default function Home({ user, onNavigate }) {
  const menuItems = [
    {
      id: "transfer",
      title: "โอนเงิน",
      description: "โอนเงินอย่างปลอดภัย",
      icon: FaMoneyBillTransfer,
      color: "from-green-500 to-emerald-600",
      bgColor: "bg-green-50"
    },
    {
      id: "history",
      title: "ประวัติธุรกรรม",
      description: "ดูประวัติการโอนเงิน",
      icon: FaHistory,
      color: "from-blue-500 to-cyan-600",
      bgColor: "bg-blue-50"
    },
    {
      id: "settings",
      title: "ตั้งค่าบัญชี",
      description: "จัดการบัญชีธนาคาร",
      icon: FaCog,
      color: "from-purple-500 to-violet-600",
      bgColor: "bg-purple-50"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img src="/cash-payment.png" alt="Logo" className="w-10 h-10 rounded-xl shadow-sm" />
              <h1 className="text-2xl font-bold text-gray-800">VelaBot Banking</h1>
            </div>
            <div className="flex items-center space-x-3 bg-gray-50 px-4 py-2 rounded-full">
              <FaUser className="text-gray-600" />
              <span className="text-gray-700 font-medium">{user}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            ยินดีต้อนรับสู่ VelaBot Banking
          </h2>
          <p className="text-xl text-gray-600 mb-2">
            ระบบโอนเงินที่ปลอดภัย รวดเร็ว และใช้งานง่าย
          </p>
          <div className="flex items-center justify-center space-x-2 text-green-600">
            <FaShieldAlt className="text-lg" />
            <span className="font-semibold">ปลอดภัย 100%</span>
          </div>
        </div>

        {/* Menu Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {menuItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.id}
                onClick={() => onNavigate?.(item.id)}
                className={`${item.bgColor} rounded-2xl p-6 cursor-pointer transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl border border-gray-100`}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center mb-4 shadow-lg`}>
                  <IconComponent className="text-2xl text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
                <div className="mt-4">
                  <div className={`inline-flex items-center px-4 py-2 bg-gradient-to-r ${item.color} text-white rounded-full text-sm font-semibold shadow-md hover:shadow-lg transition-shadow`}>
                    เข้าใช้งาน →
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Security Notice */}
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-2xl p-6 text-center">
          <div className="flex items-center justify-center mb-3">
            <FaShieldAlt className="text-amber-600 text-2xl mr-2" />
            <h4 className="text-lg font-bold text-amber-800">ข้อมูลความปลอดภัย</h4>
          </div>
          <p className="text-amber-700">
            ข้อมูลของคุณได้รับการเข้ารหัสและปกป้องด้วยมาตรฐานระดับธนาคาร
            <br />
            กรุณาอย่าแชร์ข้อมูลการเข้าสู่ระบบกับผู้อื่น
          </p>
        </div>
      </div>
    </div>
  );
}
