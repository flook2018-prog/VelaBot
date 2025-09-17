import React, { useState } from "react";

export default function AccountSettings({ user }) {
  const [accounts, setAccounts] = useState([]);
  const [bank, setBank] = useState("SCB");
  const [accountNo, setAccountNo] = useState("");
  const [accountName, setAccountName] = useState("");
  const [note, setNote] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleAddAccount = (e) => {
    e.preventDefault();
    if (!accountNo || !accountName) {
      setError("กรุณากรอกชื่อบัญชีและเลขบัญชี");
      setSuccess("");
      return;
    }
    setAccounts([
      ...accounts,
      { bank, accountNo, accountName, note }
    ]);
    setAccountNo("");
    setAccountName("");
    setNote("");
    setSuccess("เพิ่มบัญชีสำเร็จ");
    setError("");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200 py-8">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-purple-700 text-center">ตั้งค่าบัญชี SCB</h2>
        <form onSubmit={handleAddAccount} className="space-y-4">
          <div>
            <label className="block mb-1 text-gray-700">ชื่อบัญชี</label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
              value={accountName}
              onChange={(e) => setAccountName(e.target.value)}
            />
          </div>
          <div>
            <label className="block mb-1 text-gray-700">เลขบัญชี</label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
              value={accountNo}
              onChange={(e) => setAccountNo(e.target.value)}
            />
          </div>
          <div>
            <label className="block mb-1 text-gray-700">ธนาคาร</label>
            <select
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
              value={bank}
              onChange={(e) => setBank(e.target.value)}
            >
              <option value="SCB">SCB</option>
              <option value="KBank">KBank</option>
              <option value="BBL">BBL</option>
              <option value="Krungsri">Krungsri</option>
              <option value="TTB">TTB</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div>
            <label className="block mb-1 text-gray-700">หมายเหตุ</label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
              value={note}
              onChange={(e) => setNote(e.target.value)}
            />
          </div>
          {error && <div className="text-red-500 text-sm">{error}</div>}
          {success && <div className="text-green-600 text-sm">{success}</div>}
          <button type="submit" className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition">เพิ่มบัญชี</button>
        </form>
        <div className="mt-8">
          <h3 className="text-lg font-semibold mb-2 text-purple-700">บัญชีที่เชื่อมแล้ว</h3>
          {accounts.length === 0 ? (
            <div className="text-gray-500">ยังไม่มีบัญชีที่เชื่อม</div>
          ) : (
            <ul className="space-y-2">
              {accounts.map((acc, idx) => (
                <li key={idx} className="border rounded p-2 flex flex-col bg-purple-50">
                  <span className="font-medium">{acc.accountName} ({acc.bank})</span>
                  <span className="text-sm text-gray-600">เลขบัญชี: {acc.accountNo}</span>
                  {acc.note && <span className="text-xs text-gray-500">{acc.note}</span>}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
