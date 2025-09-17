
import React, { useState } from "react";
import { FaMoneyBillTransfer, FaUser, FaUniversity, FaCheckCircle, FaExclamationTriangle, FaArrowLeft, FaShieldAlt } from "react-icons/fa";

const banks = [
  { value: "SCB", label: "ไทยพาณิชย์ (SCB)", color: "text-purple-600" },
  { value: "KBank", label: "กสิกรไทย (KBank)", color: "text-green-600" },
  { value: "BBL", label: "กรุงเทพ (BBL)", color: "text-blue-600" },
  { value: "Krungsri", label: "กรุงศรี (Krungsri)", color: "text-yellow-600" },
  { value: "TTB", label: "ทหารไทยธนชาต (TTB)", color: "text-indigo-600" },
  { value: "Other", label: "อื่น ๆ", color: "text-gray-600" },
];

export default function TransferForm({ user, onBack }) {
  const [recipientName, setRecipientName] = useState("");
  const [accountNo, setAccountNo] = useState("");
  const [bank, setBank] = useState("SCB");
  const [amount, setAmount] = useState("");
  const [note, setNote] = useState("");
  const [status, setStatus] = useState(null);
  const [error, setError] = useState("");
  const [step, setStep] = useState(1); // 1: form, 2: confirm, 3: result
  const [loading, setLoading] = useState(false);

  const selectedBank = banks.find(b => b.value === bank);

  // Stepper UI
  const Stepper = () => (
    <div className="flex items-center justify-center mb-8">
      {[1,2,3].map((s, i) => (
        <React.Fragment key={s}>
          <div className={`w-8 h-8 flex items-center justify-center rounded-full font-bold text-lg border-2 ${step === s ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-blue-600 border-blue-200'} transition-all`}>
            {s}
          </div>
          {i < 2 && <div className={`w-10 h-1 ${step > s ? 'bg-blue-600' : 'bg-blue-100'} mx-1 rounded transition-all`}></div>}
        </React.Fragment>
      ))}
    </div>
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!recipientName || !accountNo || !amount) {
      setError("กรุณากรอกข้อมูลให้ครบถ้วน");
      return;
    }
    if (parseFloat(amount) <= 0) {
      setError("จำนวนเงินต้องมากกว่า 0");
      return;
    }
    setError("");
    setStep(2);
  };

  const confirmTransfer = () => {
    setStep(3);
    setLoading(true);
    setTimeout(() => {
      setStatus({ success: true, message: "โอนเงินสำเร็จ", transactionId: "TXN" + Date.now() });
      setLoading(false);
    }, 1800);
  };

  const resetForm = () => {
    setStep(1);
    setRecipientName("");
    setAccountNo("");
    setAmount("");
    setNote("");
    setStatus(null);
    setError("");
    setLoading(false);
  };

  // Step 3: Result
  if (step === 3) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-200 flex items-center justify-center px-4">
        <div className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-md text-center">
          <Stepper />
          {loading ? (
            <>
              <div className="animate-spin w-14 h-14 border-4 border-blue-600 border-t-transparent rounded-full mx-auto mb-6"></div>
              <p className="text-blue-700 text-lg">กำลังดำเนินการโอนเงิน...</p>
            </>
          ) : status && status.success ? (
            <>
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaCheckCircle className="text-4xl text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-green-600 mb-4">โอนเงินสำเร็จ!</h2>
              <div className="bg-gray-50 rounded-xl p-4 mb-6">
                <p className="text-sm text-gray-600 mb-1">รหัสธุรกรรม</p>
                <p className="font-mono text-lg font-bold text-gray-800">{status.transactionId}</p>
              </div>
              <p className="text-gray-600 mb-6">โอนเงินจำนวน {parseFloat(amount).toLocaleString()} บาท ไปยัง {recipientName} เรียบร้อยแล้ว</p>
              <button
                onClick={resetForm}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                โอนเงินอีกครั้ง
              </button>
            </>
          ) : status && !status.success ? (
            <>
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaExclamationTriangle className="text-4xl text-red-600" />
              </div>
              <h2 className="text-2xl font-bold text-red-600 mb-4">โอนเงินไม่สำเร็จ</h2>
              <p className="text-gray-600 mb-6">{status.message}</p>
              <button
                onClick={resetForm}
                className="w-full bg-gradient-to-r from-gray-600 to-gray-700 text-white py-3 rounded-xl font-semibold"
              >
                ลองอีกครั้ง
              </button>
            </>
          ) : null}
        </div>
      </div>
    );
  }

  // Step 2: Confirm
  if (step === 2) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-200 flex items-center justify-center px-4">
        <div className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-lg">
          <Stepper />
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaCheckCircle className="text-2xl text-blue-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">ยืนยันการโอนเงิน</h2>
          </div>

          <div className="space-y-4 mb-8">
            <div className="bg-gray-50 rounded-xl p-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">ผู้รับ:</span>
                <span className="font-semibold text-gray-800">{recipientName}</span>
              </div>
            </div>
            <div className="bg-gray-50 rounded-xl p-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">เลขบัญชี:</span>
                <span className="font-mono font-semibold text-gray-800">{accountNo}</span>
              </div>
            </div>
            <div className="bg-gray-50 rounded-xl p-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">ธนาคาร:</span>
                <span className={`font-semibold ${selectedBank?.color}`}>{selectedBank?.label}</span>
              </div>
            </div>
            <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
              <div className="flex justify-between items-center">
                <span className="text-blue-700 font-semibold">จำนวนเงิน:</span>
                <span className="text-2xl font-bold text-blue-800">{parseFloat(amount).toLocaleString()} บาท</span>
              </div>
            </div>
            {note && (
              <div className="bg-gray-50 rounded-xl p-4">
                <div className="flex justify-between items-start">
                  <span className="text-gray-600">หมายเหตุ:</span>
                  <span className="font-semibold text-gray-800 text-right">{note}</span>
                </div>
              </div>
            )}
          </div>

          <div className="flex space-x-4">
            <button
              onClick={() => setStep(1)}
              className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-200 transition-colors"
            >
              <FaArrowLeft className="inline mr-2" />
              ย้อนกลับ
            </button>
            <button
              onClick={confirmTransfer}
              className="flex-1 bg-gradient-to-r from-green-600 to-green-700 text-white py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
              disabled={loading}
            >
              ยืนยันโอนเงิน
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Step 1: Form
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-200">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-blue-100">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center space-x-3">
            <button
              onClick={onBack}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <FaArrowLeft className="text-gray-600" />
            </button>
            <FaMoneyBillTransfer className="text-2xl text-blue-600" />
            <h1 className="text-2xl font-bold text-blue-700">โอนเงิน</h1>
          </div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-10">
        <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-2xl p-10">
          <Stepper />
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaMoneyBillTransfer className="text-2xl text-blue-600" />
            </div>
            <h2 className="text-2xl font-bold text-blue-700 mb-2">โอนเงินอย่างปลอดภัย</h2>
            <p className="text-blue-600">กรอกข้อมูลผู้รับเงินและจำนวนที่ต้องการโอน</p>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-blue-700 font-semibold mb-2">
                <FaUser className="inline mr-2 text-blue-400" />
                ชื่อผู้รับ
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-blue-100 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-blue-50 focus:bg-white"
                value={recipientName}
                onChange={(e) => setRecipientName(e.target.value)}
                placeholder="กรอกชื่อผู้รับเงิน"
                disabled={loading}
              />
            </div>

            <div>
              <label className="block text-blue-700 font-semibold mb-2">
                <FaUniversity className="inline mr-2 text-blue-400" />
                ธนาคาร
              </label>
              <select
                className="w-full px-4 py-3 border border-blue-100 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-blue-50 focus:bg-white"
                value={bank}
                onChange={(e) => setBank(e.target.value)}
                disabled={loading}
              >
                {banks.map((bankOption) => (
                  <option key={bankOption.value} value={bankOption.value}>
                    {bankOption.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-blue-700 font-semibold mb-2">เลขบัญชีผู้รับ</label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-blue-100 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-blue-50 focus:bg-white font-mono"
                value={accountNo}
                onChange={(e) => setAccountNo(e.target.value)}
                placeholder="0000000000"
                maxLength="15"
                disabled={loading}
              />
            </div>

            <div>
              <label className="block text-blue-700 font-semibold mb-2">จำนวนเงิน (บาท)</label>
              <input
                type="number"
                className="w-full px-4 py-3 border border-blue-100 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-blue-50 focus:bg-white text-lg font-semibold"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="0.00"
                min="1"
                step="0.01"
                disabled={loading}
              />
            </div>

            <div>
              <label className="block text-blue-700 font-semibold mb-2">หมายเหตุ (ไม่บังคับ)</label>
              <textarea
                className="w-full px-4 py-3 border border-blue-100 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-blue-50 focus:bg-white resize-none"
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="ระบุหมายเหตุ (ถ้ามี)"
                rows="3"
                disabled={loading}
              />
            </div>
          </div>

          {error && (
            <div className="mt-6 bg-red-50 border border-red-200 rounded-xl p-4 flex items-center">
              <FaExclamationTriangle className="text-red-500 mr-3" />
              <span className="text-red-700">{error}</span>
            </div>
          )}

          <div className="mt-8">
            <button
              type="submit"
              className={`w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all ${loading ? 'opacity-60 cursor-not-allowed' : ''}`}
              disabled={loading}
            >
              ดำเนินการต่อ
            </button>
          </div>

          <div className="mt-6 bg-blue-50 border border-blue-200 rounded-xl p-4 flex items-start">
            <FaShieldAlt className="text-blue-600 mr-3 mt-1 flex-shrink-0" />
            <div className="text-sm text-blue-800">
              <p className="font-semibold mb-1">ข้อมูลความปลอดภัย</p>
              <p>ข้อมูลของคุณได้รับการเข้ารหัสและปกป้องด้วยมาตรฐานระดับธนาคาร</p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
              value={bank}

