import React, { useState } from "react";

const banks = [
  { value: "SCB", label: "SCB" },
  { value: "KBank", label: "KBank" },
  { value: "BBL", label: "BBL" },
  { value: "Krungsri", label: "Krungsri" },
  { value: "TTB", label: "TTB" },
  { value: "Other", label: "Other" },
];

export default function TransferForm({ user }) {
  const [recipientName, setRecipientName] = useState("");
  const [accountNo, setAccountNo] = useState("");
  const [bank, setBank] = useState("SCB");
  const [amount, setAmount] = useState("");
  const [note, setNote] = useState("");
  const [status, setStatus] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!recipientName || !accountNo || !amount) {
      setError("กรุณากรอกข้อมูลให้ครบถ้วน");
      setStatus(null);
      return;
    }
    // Mock transfer logic
    setTimeout(() => {
      setStatus({ success: true, message: "โอนเงินสำเร็จ" });
      setError("");
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200 py-8">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-purple-700 text-center">โอนเงิน</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 text-gray-700">ชื่อผู้รับ</label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
              value={recipientName}
              onChange={(e) => setRecipientName(e.target.value)}
            />
          </div>
          <div>
            <label className="block mb-1 text-gray-700">เลขบัญชีผู้รับ</label>
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
              {banks.map((b) => (
                <option key={b.value} value={b.value}>{b.label}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block mb-1 text-gray-700">จำนวนเงิน (บาท)</label>
            <input
              type="number"
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              min="1"
            />
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
          <button type="submit" className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition">โอนเงิน</button>
        </form>
        {status && (
          <div className={`mt-6 text-center text-lg font-semibold ${status.success ? "text-green-600" : "text-red-600"}`}>
            {status.message}
          </div>
        )}
      </div>
    </div>
  );
}
