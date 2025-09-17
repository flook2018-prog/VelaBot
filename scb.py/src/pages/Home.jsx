import React from "react";
import { FaMoneyBillTransfer, FaHistory, FaCog, FaShieldAlt, FaUser } from "react-icons/fa";

export default function Home({ user, onNavigate }) {
  const menuItems = [
    {
      id: "transfer",
      title: "โอนเงิน",
      description: "โอนเงินอย่างปลอดภัย รวดเร็ว และง่ายดาย",
      icon: FaMoneyBillTransfer,
      color: "from-green-500 to-emerald-600",
      bgColor: "bg-green-50"
    },
    {
      id: "history",
      title: "ประวัติธุรกรรม",
      description: "ดูประวัติการโอนเงินย้อนหลัง พร้อมรายละเอียด",
      icon: FaHistory,
      color: "from-blue-500 to-cyan-600",
      bgColor: "bg-blue-50"
    },
    {
      id: "settings",
      title: "ตั้งค่าบัญชี",
      description: "จัดการบัญชีธนาคารและความปลอดภัย",
      icon: FaCog,
      color: "from-purple-500 to-violet-600",
      bgColor: "bg-purple-50"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-200">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-blue-100">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img src="/cash-payment.png" alt="Logo" className="w-10 h-10 rounded-xl shadow-sm" />
              <h1 className="text-2xl font-bold text-blue-700 tracking-wide">VelaBot Banking</h1>
            </div>
            <div className="flex items-center space-x-3 bg-blue-50 px-4 py-2 rounded-full">
              <FaUser className="text-blue-600" />
              <span className="text-blue-700 font-medium">{user}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-100 to-blue-50 border-b border-blue-100">
        <div className="max-w-6xl mx-auto px-4 py-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-extrabold text-blue-800 mb-4 drop-shadow">ยินดีต้อนรับ!</h2>
            <p className="text-xl text-blue-700 mb-4">ระบบโอนเงินออนไลน์ที่ปลอดภัยและน่าเชื่อถือ</p>
            <div className="flex items-center justify-center md:justify-start space-x-2 text-green-600 mb-2">
              <FaShieldAlt className="text-lg" />
              <span className="font-semibold">ปลอดภัย 100%</span>
            </div>
            <div className="text-blue-500 text-base">วันนี้ {new Date().toLocaleDateString('th-TH', { year: 'numeric', month: 'long', day: 'numeric' })}</div>
          </div>
          <div className="flex-1 flex justify-center">
            <img src="/cash-payment.png" alt="Banking Illustration" className="w-56 h-56 md:w-72 md:h-72 object-contain rounded-3xl shadow-xl border-8 border-white bg-white" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Menu Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {menuItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.id}
                onClick={() => onNavigate?.(item.id)}
                className={`${item.bgColor} rounded-3xl p-8 cursor-pointer transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl border border-blue-100 group`}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform`}>
                  <IconComponent className="text-3xl text-white" />
                </div>
                <h3 className="text-2xl font-bold text-blue-800 mb-2">{item.title}</h3>
                <p className="text-blue-600 mb-4">{item.description}</p>
                <div className={`inline-flex items-center px-5 py-2 bg-gradient-to-r ${item.color} text-white rounded-full text-base font-semibold shadow-md hover:shadow-lg transition-shadow group-hover:scale-105`}>
                  เข้าใช้งาน →
                </div>
              </div>
            );
          })}
        </div>

        {/* Security Notice */}
        <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-2xl p-8 text-center">
          <div className="flex items-center justify-center mb-3">
            <FaShieldAlt className="text-yellow-600 text-2xl mr-2" />
            <h4 className="text-lg font-bold text-yellow-800">ข้อมูลความปลอดภัย</h4>
          </div>
          <p className="text-yellow-700">
            ข้อมูลของคุณได้รับการเข้ารหัสและปกป้องด้วยมาตรฐานระดับธนาคาร<br />
            กรุณาอย่าแชร์ข้อมูลการเข้าสู่ระบบกับผู้อื่น
          </p>
        </div>
      </div>
    </div>
  );
}
