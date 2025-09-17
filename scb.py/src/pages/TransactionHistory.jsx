import React, { useState } from "react";

// Mock data for demonstration
const mockTransactions = [
  {
    id: 1,
    date: "2025-09-17 10:00",
    recipient: "สมชาย ใจดี",
    accountNo: "1234567890",
    bank: "SCB",
    amount: 5000,
    note: "ค่าเช่าบ้าน",
    status: "success",
  },
  {
    id: 2,
    date: "2025-09-16 14:30",
    recipient: "พรทิพย์ สวยงาม",
    accountNo: "9876543210",
    bank: "KBank",
    amount: 1200,
    note: "ค่าขนม",
    status: "failed",
  },
];

export default function TransactionHistory() {
  const [transactions] = useState(mockTransactions);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200 py-8">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl">
        <h2 className="text-2xl font-bold mb-6 text-purple-700 text-center">ประวัติธุรกรรม</h2>
        {transactions.length === 0 ? (
          <div className="text-gray-500 text-center">ยังไม่มีประวัติธุรกรรม</div>
        ) : (
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-purple-100">
                <th className="p-2">วันที่</th>
                <th className="p-2">ชื่อผู้รับ</th>
                <th className="p-2">เลขบัญชี</th>
                <th className="p-2">ธนาคาร</th>
                <th className="p-2">จำนวนเงิน</th>
                <th className="p-2">หมายเหตุ</th>
                <th className="p-2">สถานะ</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((tx) => (
                <tr key={tx.id} className="border-b last:border-0">
                  <td className="p-2 whitespace-nowrap">{tx.date}</td>
                  <td className="p-2 whitespace-nowrap">{tx.recipient}</td>
                  <td className="p-2 whitespace-nowrap">{tx.accountNo}</td>
                  <td className="p-2 whitespace-nowrap">{tx.bank}</td>
                  <td className="p-2 whitespace-nowrap text-right">{tx.amount.toLocaleString()} ฿</td>
                  <td className="p-2 whitespace-nowrap">{tx.note}</td>
                  <td className={`p-2 font-semibold ${tx.status === "success" ? "text-green-600" : "text-red-600"}`}>
                    {tx.status === "success" ? "สำเร็จ" : "ไม่สำเร็จ"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
