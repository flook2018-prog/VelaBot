import React, { useState } from "react";import React, { useState } from "react";

import { FaUser, FaCog, FaArrowLeft, FaBank, FaPlus, FaEdit, FaTrash, FaShieldAlt, FaBell, FaKey } from "react-icons/fa";import { FaUser, FaCog, FaArrowLeft, FaBank, FaPlus, FaEdit, FaTrash, FaShieldAlt, FaBell, FaKey } from "react-icons/fa";



export default function AccountSettings({ onBack }) {export default function AccountSettings({ onBack }) {

  const [activeTab, setActiveTab] = useState("profile");  const [activeTab, setActiveTab] = useState("profile");

  const [accounts, setAccounts] = useState([  const [accounts, setAccounts] = useState([

    { id: 1, bank: "SCB", accountNo: "1234567890", accountName: "บัญชีหลัก", note: "บัญชีออมทรัพย์" },    { id: 1, bank: "SCB", accountNo: "1234567890", accountName: "บัญชีหลัก", note: "บัญชีออมทรัพย์" },

    { id: 2, bank: "KBank", accountNo: "9876543210", accountName: "บัญชีรอง", note: "บัญชีกระแสรายวัน" }    { id: 2, bank: "KBank", accountNo: "9876543210", accountName: "บัญชีรอง", note: "บัญชีกระแสรายวัน" }

  ]);  ]);

  const [profile, setProfile] = useState({  const [profile, setProfile] = useState({

    name: "ผู้ใช้งาน",    name: "ผู้ใช้งาน",

    email: "user@example.com",    email: "user@example.com",

    phone: "081-234-5678"    phone: "081-234-5678"

  });  });

  const [showAddAccount, setShowAddAccount] = useState(false);

  const bankColors = {  const [newAccount, setNewAccount] = useState({

    "SCB": "text-purple-600 bg-purple-50",    bank: "SCB",

    "KBank": "text-green-600 bg-green-50",    accountNo: "",

    "BBL": "text-blue-600 bg-blue-50",    accountName: "",

    "Krungsri": "text-yellow-600 bg-yellow-50",    note: ""

    "TTB": "text-indigo-600 bg-indigo-50"  });

  };

  const bankColors = {

  const tabs = [    "SCB": "text-purple-600 bg-purple-50",

    { id: "profile", label: "ข้อมูลส่วนตัว", icon: FaUser },    "KBank": "text-green-600 bg-green-50",

    { id: "accounts", label: "บัญชีธนาคาร", icon: FaBank },    "BBL": "text-blue-600 bg-blue-50",

    { id: "security", label: "ความปลอดภัย", icon: FaShieldAlt },    "Krungsri": "text-yellow-600 bg-yellow-50",

    { id: "notifications", label: "การแจ้งเตือน", icon: FaBell }    "TTB": "text-indigo-600 bg-indigo-50"

  ];  };



  return (  const handleAddAccount = (e) => {

    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">    e.preventDefault();

      {/* Header */}    if (!newAccount.accountNo || !newAccount.accountName) {

      <div className="bg-white shadow-sm border-b border-gray-100">      return;

        <div className="max-w-6xl mx-auto px-4 py-4">    }

          <div className="flex items-center space-x-3">    setAccounts([

            <button      ...accounts,

              onClick={onBack}      { 

              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"        id: accounts.length + 1,

            >        ...newAccount

              <FaArrowLeft className="text-gray-600" />      }

            </button>    ]);

            <FaCog className="text-2xl text-blue-600" />    setNewAccount({ bank: "SCB", accountNo: "", accountName: "", note: "" });

            <h1 className="text-2xl font-bold text-gray-800">ตั้งค่าบัญชี</h1>    setShowAddAccount(false);

          </div>  };

        </div>

      </div>  const handleDeleteAccount = (id) => {

    setAccounts(accounts.filter(acc => acc.id !== id));

      <div className="max-w-6xl mx-auto px-4 py-8">  };

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

          {/* Sidebar */}  const tabs = [

          <div className="lg:col-span-1">    { id: "profile", label: "ข้อมูลส่วนตัว", icon: FaUser },

            <div className="bg-white rounded-2xl shadow-lg p-6">    { id: "accounts", label: "บัญชีธนาคาร", icon: FaBank },

              <nav className="space-y-2">    { id: "security", label: "ความปลอดภัย", icon: FaShieldAlt },

                {tabs.map((tab) => (    { id: "notifications", label: "การแจ้งเตือน", icon: FaBell }

                  <button  ];

                    key={tab.id}

                    onClick={() => setActiveTab(tab.id)}  return (

                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all ${    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200 py-8">

                      activeTab === tab.id      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">

                        ? "bg-blue-50 text-blue-700 border border-blue-200"        <h2 className="text-2xl font-bold mb-6 text-purple-700 text-center">ตั้งค่าบัญชี SCB</h2>

                        : "text-gray-600 hover:bg-gray-50"        <form onSubmit={handleAddAccount} className="space-y-4">

                    }`}          <div>

                  >            <label className="block mb-1 text-gray-700">ชื่อบัญชี</label>

                    <tab.icon className="text-lg" />            <input

                    <span className="font-medium">{tab.label}</span>              type="text"

                  </button>              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-400"

                ))}              value={accountName}

              </nav>              onChange={(e) => setAccountName(e.target.value)}

            </div>            />

          </div>          </div>

          <div>

          {/* Content */}            <label className="block mb-1 text-gray-700">เลขบัญชี</label>

          <div className="lg:col-span-3">            <input

            <div className="bg-white rounded-2xl shadow-lg">              type="text"

              {/* Profile Tab */}              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-400"

              {activeTab === "profile" && (              value={accountNo}

                <div className="p-8">              onChange={(e) => setAccountNo(e.target.value)}

                  <h2 className="text-2xl font-bold text-gray-800 mb-6">ข้อมูลส่วนตัว</h2>            />

                            </div>

                  <div className="space-y-6">          <div>

                    <div className="flex items-center space-x-6">            <label className="block mb-1 text-gray-700">ธนาคาร</label>

                      <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center">            <select

                        <FaUser className="text-3xl text-white" />              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-400"

                      </div>              value={bank}

                      <div>              onChange={(e) => setBank(e.target.value)}

                        <h3 className="text-xl font-semibold text-gray-800">{profile.name}</h3>            >

                        <p className="text-gray-600">ผู้ใช้งานระบบ</p>              <option value="SCB">SCB</option>

                      </div>              <option value="KBank">KBank</option>

                    </div>              <option value="BBL">BBL</option>

              <option value="Krungsri">Krungsri</option>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">              <option value="TTB">TTB</option>

                      <div className="space-y-2">              <option value="Other">Other</option>

                        <label className="text-sm font-medium text-gray-700">ชื่อ-นามสกุล</label>            </select>

                        <input          </div>

                          type="text"          <div>

                          value={profile.name}            <label className="block mb-1 text-gray-700">หมายเหตุ</label>

                          onChange={(e) => setProfile({...profile, name: e.target.value})}            <input

                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"              type="text"

                        />              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-400"

                      </div>              value={note}

                      <div className="space-y-2">              onChange={(e) => setNote(e.target.value)}

                        <label className="text-sm font-medium text-gray-700">หมายเลขโทรศัพท์</label>            />

                        <input          </div>

                          type="text"          {error && <div className="text-red-500 text-sm">{error}</div>}

                          value={profile.phone}          {success && <div className="text-green-600 text-sm">{success}</div>}

                          onChange={(e) => setProfile({...profile, phone: e.target.value})}          <button type="submit" className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition">เพิ่มบัญชี</button>

                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"        </form>

                        />        <div className="mt-8">

                      </div>          <h3 className="text-lg font-semibold mb-2 text-purple-700">บัญชีที่เชื่อมแล้ว</h3>

                      <div className="space-y-2 md:col-span-2">          {accounts.length === 0 ? (

                        <label className="text-sm font-medium text-gray-700">อีเมล</label>            <div className="text-gray-500">ยังไม่มีบัญชีที่เชื่อม</div>

                        <input          ) : (

                          type="email"            <ul className="space-y-2">

                          value={profile.email}              {accounts.map((acc, idx) => (

                          onChange={(e) => setProfile({...profile, email: e.target.value})}                <li key={idx} className="border rounded p-2 flex flex-col bg-purple-50">

                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"                  <span className="font-medium">{acc.accountName} ({acc.bank})</span>

                        />                  <span className="text-sm text-gray-600">เลขบัญชี: {acc.accountNo}</span>

                      </div>                  {acc.note && <span className="text-xs text-gray-500">{acc.note}</span>}

                    </div>                </li>

              ))}

                    <div className="pt-4">            </ul>

                      <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all">          )}

                        บันทึกการเปลี่ยนแปลง        </div>

                      </button>      </div>

                    </div>    </div>

                  </div>  );

                </div>}

              )}

              {/* Accounts Tab */}
              {activeTab === "accounts" && (
                <div className="p-8">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-gray-800">บัญชีธนาคาร</h2>
                  </div>

                  <div className="space-y-4">
                    {accounts.map((account) => (
                      <div key={account.id} className="bg-gray-50 rounded-xl p-4 flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className={`px-3 py-1 rounded-full text-sm font-semibold ${bankColors[account.bank] || 'bg-gray-100 text-gray-600'}`}>
                            {account.bank}
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-800">{account.accountName}</h3>
                            <div className="text-sm text-gray-600">
                              <span className="font-mono">{account.accountNo}</span>
                              {account.note && <span className="ml-2">• {account.note}</span>}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                            <FaEdit />
                          </button>
                          <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                            <FaTrash />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Security Tab */}
              {activeTab === "security" && (
                <div className="p-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">ความปลอดภัย</h2>
                  
                  <div className="space-y-6">
                    <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                      <div className="flex items-center space-x-3">
                        <FaShieldAlt className="text-2xl text-green-600" />
                        <div>
                          <h3 className="font-semibold text-green-800">บัญชีของคุณปลอดภัย</h3>
                          <p className="text-sm text-green-600">การยืนยันตัวตนครบถ้วน</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-50 rounded-xl p-6 space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <FaKey className="text-xl text-gray-600" />
                          <div>
                            <h3 className="font-semibold text-gray-800">เปลี่ยนรหัสผ่าน</h3>
                            <p className="text-sm text-gray-600">อัปเดตรหัสผ่านเป็นระยะๆ</p>
                          </div>
                        </div>
                        <button className="bg-blue-600 text-white px-4 py-2 rounded-xl font-semibold hover:bg-blue-700 transition-colors">
                          เปลี่ยน
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Notifications Tab */}
              {activeTab === "notifications" && (
                <div className="p-8">
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