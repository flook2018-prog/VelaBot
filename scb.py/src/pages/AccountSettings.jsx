import React, { useState } from "react";
import { FaUserCircle, FaLock, FaEnvelope, FaPhone, FaChevronRight, FaEdit, FaSave } from "react-icons/fa";

const initialUser = {
  name: "สมหญิง ตั้งใจดี",
  email: "somying@email.com",
  phone: "0812345678",
  accountNo: "1234567890",
  bank: "SCB",
};

export default function AccountSettings() {
  const [user, setUser] = useState(initialUser);
  const [editMode, setEditMode] = useState(false);
  const [form, setForm] = useState(initialUser);

  const handleEdit = () => {
    setEditMode(true);
    setForm(user);
  };

  const handleSave = () => {
    setUser(form);
    setEditMode(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-200">
      <div className="bg-white shadow-sm border-b border-blue-100">
        <div className="max-w-3xl mx-auto px-4 py-4 flex items-center space-x-3">
          <FaUserCircle className="text-3xl text-blue-600" />
          <h1 className="text-2xl font-bold text-blue-700">ตั้งค่าบัญชีผู้ใช้</h1>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-4 py-10">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          {/* Profile Section */}
          <div className="flex items-center space-x-6 mb-8">
            <FaUserCircle className="text-6xl text-blue-400" />
            <div>
              <div className="text-xl font-bold text-blue-800">{user.name}</div>
              <div className="text-sm text-blue-500">บัญชี {user.bank} <span className="font-mono">{user.accountNo}</span></div>
            </div>
          </div>

          {/* Editable Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <FaEnvelope className="text-blue-400" />
              {editMode ? (
                <input
                  type="email"
                  className="border border-blue-200 rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-blue-500"
                  value={form.email}
                  onChange={e => setForm({ ...form, email: e.target.value })}
                />
              ) : (
                <span className="text-blue-800">{user.email}</span>
              )}
            </div>
            <div className="flex items-center space-x-4">
              <FaPhone className="text-blue-400" />
              {editMode ? (
                <input
                  type="tel"
                  className="border border-blue-200 rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-blue-500"
                  value={form.phone}
                  onChange={e => setForm({ ...form, phone: e.target.value })}
                />
              ) : (
                <span className="text-blue-800">{user.phone}</span>
              )}
            </div>
          </div>

          {/* Actions */}
          <div className="mt-10 flex justify-end gap-4">
            {editMode ? (
              <button
                className="bg-blue-600 text-white px-6 py-2 rounded-xl font-bold shadow hover:bg-blue-700 transition"
                onClick={handleSave}
              >
                <FaSave className="inline mr-2" /> บันทึก
              </button>
            ) : (
              <button
                className="bg-gray-100 text-blue-700 px-6 py-2 rounded-xl font-bold shadow hover:bg-blue-200 transition"
                onClick={handleEdit}
              >
                <FaEdit className="inline mr-2" /> แก้ไขข้อมูล
              </button>
            )}
          </div>

          {/* Security Section */}
          <div className="mt-12">
            <div className="text-lg font-semibold text-blue-700 mb-4 flex items-center gap-2">
              <FaLock className="text-blue-400" /> ความปลอดภัย
            </div>
            <div className="bg-blue-50 rounded-xl p-6 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-blue-800">เปลี่ยนรหัสผ่าน</span>
                <button className="text-blue-600 hover:underline flex items-center gap-1">
                  <FaChevronRight />
                </button>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-blue-800">เปิดใช้งาน 2FA (Two-Factor Authentication)</span>
                <button className="text-blue-600 hover:underline flex items-center gap-1">
                  <FaChevronRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
import React, { useState } from "react";import React, { useState } from "react";

import { FaUser, FaCog, FaArrowLeft, FaBank, FaPlus, FaEdit, FaTrash, FaShieldAlt, FaBell, FaKey } from "react-icons/fa";import { FaUser, FaCog, FaArrowLeft, FaBank, FaPlus, FaEdit, FaTrash, FaShieldAlt, FaBell, FaKey } from "react-icons/fa";



export default function AccountSettings({ onBack }) {export default function AccountSettings({ onBack }) {

  const [activeTab, setActiveTab] = useState("profile");  const [activeTab, setActiveTab] = useState("profile");

  const [accounts, setAccounts] = useState([  const [accounts, setAccounts] = useState([

    { id: 1, bank: "SCB", accountNo: "1234567890", accountName: "บัญชีหลัก", note: "บัญชีออมทรัพย์" },    { id: 1, bank: "SCB", accountNo: "1234567890", accountName: "บัญชีหลัก", note: "บัญชีออมทรัพย์" },

    { id: 2, bank: "KBank", accountNo: "9876543210", accountName: "บัญชีรอง", note: "บัญชีกระแสรายวัน" }    { id: 2, bank: "KBank", accountNo: "9876543210", accountName: "บัญชีรอง", note: "บัญชีกระแสรายวัน" }

  ]);  ]);

  const [profile, setProfile] = useState({  const [profile, setProfile] = useState({

                  <h2 className="text-2xl font-bold text-gray-800 mb-6">การแจ้งเตือน</h2>
                  
                  <div className="space-y-4">
                    <div className="bg-gray-50 rounded-xl p-4 flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold text-gray-800">การแจ้งเตือนธุรกรรม</h3>
                        <p className="text-sm text-gray-600">รับแจ้งเตือนเมื่อมีการทำธุรกรรม</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" defaultChecked />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                      </label>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}