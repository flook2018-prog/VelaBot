import React, { useState } from "react";import React, { useState } from "react";import React, { useState } from "react";import React, { useState } from "react";import React, { useState } from "react";

import { FaHistory, FaArrowLeft, FaCheckCircle, FaTimesCircle, FaClock } from "react-icons/fa";

import { FaHistory, FaArrowLeft, FaCheckCircle, FaTimesCircle, FaClock, FaSearch, FaFilter, FaDownload } from "react-icons/fa";

const mockTransactions = [

  {import { FaHistory, FaArrowLeft, FaCheckCircle, FaTimesCircle, FaClock, FaSearch, FaFilter, FaDownload } from "react-icons/fa";

    id: 1,

    date: "2025-09-17 10:00",const mockTransactions = [

    recipient: "สมชาย ใจดี",

    accountNo: "1234567890",  {import { FaHistory, FaArrowLeft, FaCheckCircle, FaTimesCircle, FaClock, FaSearch, FaFilter, FaDownload } from "react-icons/fa";import { FaHistory, FaArrowLeft, FaCheckCircle, FaTimesCircle, FaClock, FaSearch, FaFilter, FaDownload } from "react-icons/fa";

    bank: "SCB",

    amount: 5000,    id: 1,

    note: "ค่าเช่าบ้าน",

    status: "success"    date: "2025-09-17 10:00",// Mock data for demonstration

  },

  {    recipient: "สมชาย ใจดี",

    id: 2,

    date: "2025-09-16 14:30",    accountNo: "1234567890",const mockTransactions = [

    recipient: "พรทิพย์ สวยงาม",

    accountNo: "9876543210",    bank: "SCB",

    bank: "KBank",

    amount: 1200,    amount: 5000,  {

    note: "ค่าขนม",

    status: "failed"    note: "ค่าเช่าบ้าน",

  }

];    status: "success",    id: 1,// Mock data for demonstration// Mock data for demonstration



export default function TransactionHistory({ onBack }) {    transactionId: "TXN1726565200000"

  const [transactions] = useState(mockTransactions);

  },    date: "2025-09-17 10:00",

  const getStatusIcon = (status) => {

    switch (status) {  {

      case "success":

        return <FaCheckCircle className="text-green-600" />;    id: 2,    recipient: "สมชาย ใจดี",const mockTransactions = [const mockTransactions = [

      case "failed":

        return <FaTimesCircle className="text-red-600" />;    date: "2025-09-16 14:30",

      case "pending":

        return <FaClock className="text-yellow-600" />;    recipient: "พรทิพย์ สวยงาม",    accountNo: "1234567890",

      default:

        return null;    accountNo: "9876543210",

    }

  };    bank: "KBank",    bank: "SCB",  {  {



  return (    amount: 1200,

    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">

      <div className="bg-white shadow-sm border-b border-gray-100">    note: "ค่าขนม",    amount: 5000,

        <div className="max-w-6xl mx-auto px-4 py-4">

          <div className="flex items-center space-x-3">    status: "failed",

            <button

              onClick={onBack}    transactionId: "TXN1726478600000"    note: "ค่าเช่าบ้าน",    id: 1,    id: 1,

              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"

            >  },

              <FaArrowLeft className="text-gray-600" />

            </button>  {    status: "success",

            <FaHistory className="text-2xl text-blue-600" />

            <h1 className="text-2xl font-bold text-gray-800">ประวัติธุรกรรม</h1>    id: 3,

          </div>

        </div>    date: "2025-09-15 09:15",    transactionId: "TXN1726565200000"    date: "2025-09-17 10:00",    date: "2025-09-17 10:00",

      </div>

    recipient: "วิชญ์ ชาญฉลาด",

      <div className="max-w-6xl mx-auto px-4 py-8">

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">    accountNo: "5555666677",  },

          <div className="divide-y divide-gray-100">

            {transactions.map((tx) => (    bank: "BBL",

              <div key={tx.id} className="p-6 hover:bg-gray-50 transition-colors">

                <div className="flex items-center justify-between">    amount: 2500,  {    recipient: "สมชาย ใจดี",    recipient: "สมชาย ใจดี",

                  <div className="flex items-center space-x-4">

                    <div className="w-12 h-12 rounded-full flex items-center justify-center bg-gray-100">    note: "ค่าอาหาร",

                      {getStatusIcon(tx.status)}

                    </div>    status: "pending",    id: 2,

                    <div>

                      <h3 className="font-semibold text-gray-800 text-lg">{tx.recipient}</h3>    transactionId: "TXN1726392900000"

                      <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1">

                        <span className="font-mono">{tx.accountNo}</span>  },    date: "2025-09-16 14:30",    accountNo: "1234567890",    accountNo: "1234567890",

                        <span className="px-2 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-600">

                          {tx.bank}  {

                        </span>

                      </div>    id: 4,    recipient: "พรทิพย์ สวยงาม",

                    </div>

                  </div>    date: "2025-09-14 16:45",

                  <div className="text-right">

                    <div className="text-2xl font-bold text-gray-800">    recipient: "สุนิสา มีสุข",    accountNo: "9876543210",    bank: "SCB",    bank: "SCB",

                      {tx.amount.toLocaleString()} ฿

                    </div>    accountNo: "1111222233",

                    <div className="text-sm text-gray-500 mt-1">{tx.date}</div>

                  </div>    bank: "Krungsri",    bank: "KBank",

                </div>

                {tx.note && (    amount: 7800,

                  <div className="mt-3 text-sm text-gray-600 bg-gray-50 px-3 py-2 rounded-lg">

                    {tx.note}    note: "ค่าซ่อมรถ",    amount: 1200,    amount: 5000,    amount: 5000,

                  </div>

                )}    status: "success",

              </div>

            ))}    transactionId: "TXN1726320300000"    note: "ค่าขนม",

          </div>

        </div>  }

      </div>

    </div>];    status: "failed",    note: "ค่าเช่าบ้าน",    note: "ค่าเช่าบ้าน",

  );

}

const bankColors = {    transactionId: "TXN1726478600000"

  "SCB": "text-purple-600 bg-purple-50",

  "KBank": "text-green-600 bg-green-50",  },    status: "success",    status: "success",

  "BBL": "text-blue-600 bg-blue-50",

  "Krungsri": "text-yellow-600 bg-yellow-50",  {

  "TTB": "text-indigo-600 bg-indigo-50"

};    id: 3,    transactionId: "TXN1726565200000"    transactionId: "TXN1726565200000"



export default function TransactionHistory({ onBack }) {    date: "2025-09-15 09:15",

  const [transactions] = useState(mockTransactions);

  const [searchTerm, setSearchTerm] = useState("");    recipient: "วิชญ์ ชาญฉลาด",  },  },

  const [statusFilter, setStatusFilter] = useState("all");

  const [selectedTransaction, setSelectedTransaction] = useState(null);    accountNo: "5555666677",



  const filteredTransactions = transactions.filter(tx => {    bank: "BBL",  {  {

    const matchesSearch = tx.recipient.toLowerCase().includes(searchTerm.toLowerCase()) ||

                         tx.accountNo.includes(searchTerm) ||    amount: 2500,

                         tx.note.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus = statusFilter === "all" || tx.status === statusFilter;    note: "ค่าอาหาร",    id: 2,    id: 2,

    return matchesSearch && matchesStatus;

  });    status: "pending",



  const getStatusIcon = (status) => {    transactionId: "TXN1726392900000"    date: "2025-09-16 14:30",    date: "2025-09-16 14:30",

    switch (status) {

      case "success":  },

        return <FaCheckCircle className="text-green-600" />;

      case "failed":  {    recipient: "พรทิพย์ สวยงาม",    recipient: "พรทิพย์ สวยงาม",

        return <FaTimesCircle className="text-red-600" />;

      case "pending":    id: 4,

        return <FaClock className="text-yellow-600" />;

      default:    date: "2025-09-14 16:45",    accountNo: "9876543210",    accountNo: "9876543210",

        return null;

    }    recipient: "สุนิสา มีสุข",

  };

    accountNo: "1111222233",    bank: "KBank",    bank: "KBank",

  const getStatusText = (status) => {

    switch (status) {    bank: "Krungsri",

      case "success":

        return "สำเร็จ";    amount: 7800,    amount: 1200,    amount: 1200,

      case "failed":

        return "ไม่สำเร็จ";    note: "ค่าซ่อมรถ",

      case "pending":

        return "รอดำเนินการ";    status: "success",    note: "ค่าขนม",    note: "ค่าขนม",

      default:

        return "";    transactionId: "TXN1726320300000"

    }

  };  }    status: "failed",    status: "failed",



  const getStatusColor = (status) => {];

    switch (status) {

      case "success":    transactionId: "TXN1726478600000"    transactionId: "TXN1726478600000"

        return "bg-green-50 text-green-700 border-green-200";

      case "failed":const bankColors = {

        return "bg-red-50 text-red-700 border-red-200";

      case "pending":  "SCB": "text-purple-600 bg-purple-50",  },  },

        return "bg-yellow-50 text-yellow-700 border-yellow-200";

      default:  "KBank": "text-green-600 bg-green-50",

        return "bg-gray-50 text-gray-700 border-gray-200";

    }  "BBL": "text-blue-600 bg-blue-50",  {  {

  };

  "Krungsri": "text-yellow-600 bg-yellow-50",

  if (selectedTransaction) {

    return (  "TTB": "text-indigo-600 bg-indigo-50"    id: 3,    id: 3,

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">

        <div className="bg-white shadow-sm border-b border-gray-100">};

          <div className="max-w-4xl mx-auto px-4 py-4">

            <div className="flex items-center space-x-3">    date: "2025-09-15 09:15",    date: "2025-09-15 09:15",

              <button

                onClick={() => setSelectedTransaction(null)}export default function TransactionHistory({ onBack }) {

                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"

              >  const [transactions] = useState(mockTransactions);    recipient: "วิชญ์ ชาญฉลาด",    recipient: "วิชญ์ ชาญฉลาด",

                <FaArrowLeft className="text-gray-600" />

              </button>  const [searchTerm, setSearchTerm] = useState("");

              <FaHistory className="text-2xl text-blue-600" />

              <h1 className="text-2xl font-bold text-gray-800">รายละเอียดธุรกรรม</h1>  const [statusFilter, setStatusFilter] = useState("all");    accountNo: "5555666677",    accountNo: "5555666677",

            </div>

          </div>  const [selectedTransaction, setSelectedTransaction] = useState(null);

        </div>

    bank: "BBL",    bank: "BBL",

        <div className="max-w-2xl mx-auto px-4 py-8">

          <div className="bg-white rounded-3xl shadow-2xl p-8">  const filteredTransactions = transactions.filter(tx => {

            <div className="text-center mb-8">

              <div className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 ${getStatusColor(selectedTransaction.status)}`}>    const matchesSearch = tx.recipient.toLowerCase().includes(searchTerm.toLowerCase()) ||    amount: 2500,    amount: 2500,

                <div className="text-3xl">

                  {getStatusIcon(selectedTransaction.status)}                         tx.accountNo.includes(searchTerm) ||

                </div>

              </div>                         tx.note.toLowerCase().includes(searchTerm.toLowerCase());    note: "ค่าอาหาร",    note: "ค่าอาหาร",

              <h2 className="text-2xl font-bold text-gray-800 mb-2">

                {getStatusText(selectedTransaction.status)}    const matchesStatus = statusFilter === "all" || tx.status === statusFilter;

              </h2>

              <p className="text-gray-600">รหัสธุรกรรม: {selectedTransaction.transactionId}</p>    return matchesSearch && matchesStatus;    status: "pending",    status: "pending",

            </div>

  });

            <div className="space-y-4">

              <div className="bg-gray-50 rounded-xl p-4">    transactionId: "TXN1726392900000"    transactionId: "TXN1726392900000"

                <div className="flex justify-between items-center">

                  <span className="text-gray-600">ผู้รับเงิน:</span>  const getStatusIcon = (status) => {

                  <span className="font-semibold text-gray-800">{selectedTransaction.recipient}</span>

                </div>    switch (status) {  },  },

              </div>

              <div className="bg-gray-50 rounded-xl p-4">      case "success":

                <div className="flex justify-between items-center">

                  <span className="text-gray-600">เลขบัญชี:</span>        return <FaCheckCircle className="text-green-600" />;  {  {

                  <span className="font-mono font-semibold text-gray-800">{selectedTransaction.accountNo}</span>

                </div>      case "failed":

              </div>

              <div className="bg-gray-50 rounded-xl p-4">        return <FaTimesCircle className="text-red-600" />;    id: 4,    id: 4,

                <div className="flex justify-between items-center">

                  <span className="text-gray-600">ธนาคาร:</span>      case "pending":

                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${bankColors[selectedTransaction.bank] || 'text-gray-600 bg-gray-50'}`}>

                    {selectedTransaction.bank}        return <FaClock className="text-yellow-600" />;    date: "2025-09-14 16:45",    date: "2025-09-14 16:45",

                  </span>

                </div>      default:

              </div>

              <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">        return null;    recipient: "สุนิสา มีสุข",    recipient: "สุนิสา มีสุข",

                <div className="flex justify-between items-center">

                  <span className="text-blue-700 font-semibold">จำนวนเงิน:</span>    }

                  <span className="text-2xl font-bold text-blue-800">{selectedTransaction.amount.toLocaleString()} บาท</span>

                </div>  };    accountNo: "1111222233",    accountNo: "1111222233",

              </div>

              <div className="bg-gray-50 rounded-xl p-4">

                <div className="flex justify-between items-start">

                  <span className="text-gray-600">หมายเหตุ:</span>  const getStatusText = (status) => {    bank: "Krungsri",    bank: "Krungsri",

                  <span className="font-semibold text-gray-800 text-right">{selectedTransaction.note}</span>

                </div>    switch (status) {

              </div>

              <div className="bg-gray-50 rounded-xl p-4">      case "success":    amount: 7800,    amount: 7800,

                <div className="flex justify-between items-center">

                  <span className="text-gray-600">วันที่/เวลา:</span>        return "สำเร็จ";

                  <span className="font-semibold text-gray-800">{selectedTransaction.date}</span>

                </div>      case "failed":    note: "ค่าซ่อมรถ",    note: "ค่าซ่อมรถ",

              </div>

            </div>        return "ไม่สำเร็จ";



            <div className="mt-8 space-y-3">      case "pending":    status: "success",    status: "success",

              <button

                onClick={() => setSelectedTransaction(null)}        return "รอดำเนินการ";

                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"

              >      default:    transactionId: "TXN1726320300000"    transactionId: "TXN1726320300000"

                กลับไปหน้าประวัติ

              </button>        return "";

              <button className="w-full bg-gray-100 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-200 transition-colors flex items-center justify-center">

                <FaDownload className="mr-2" />    }  }  }

                ดาวน์โหลดใบเสร็จ

              </button>  };

            </div>

          </div>];];

        </div>

      </div>  const getStatusColor = (status) => {

    );

  }    switch (status) {



  return (      case "success":

    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">

      <div className="bg-white shadow-sm border-b border-gray-100">        return "bg-green-50 text-green-700 border-green-200";const bankColors = {const bankColors = {

        <div className="max-w-6xl mx-auto px-4 py-4">

          <div className="flex items-center space-x-3">      case "failed":

            <button

              onClick={onBack}        return "bg-red-50 text-red-700 border-red-200";  "SCB": "text-purple-600 bg-purple-50",  "SCB": "text-purple-600 bg-purple-50",

              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"

            >      case "pending":

              <FaArrowLeft className="text-gray-600" />

            </button>        return "bg-yellow-50 text-yellow-700 border-yellow-200";  "KBank": "text-green-600 bg-green-50",  "KBank": "text-green-600 bg-green-50",

            <FaHistory className="text-2xl text-blue-600" />

            <h1 className="text-2xl font-bold text-gray-800">ประวัติธุรกรรม</h1>      default:

          </div>

        </div>        return "bg-gray-50 text-gray-700 border-gray-200";  "BBL": "text-blue-600 bg-blue-50",  "BBL": "text-blue-600 bg-blue-50",

      </div>

    }

      <div className="max-w-6xl mx-auto px-4 py-8">

        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">  };  "Krungsri": "text-yellow-600 bg-yellow-50",  "Krungsri": "text-yellow-600 bg-yellow-50",

          <div className="flex flex-col md:flex-row gap-4">

            <div className="flex-1">

              <div className="relative">

                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />  if (selectedTransaction) {  "TTB": "text-indigo-600 bg-indigo-50"  "TTB": "text-indigo-600 bg-indigo-50"

                <input

                  type="text"    return (

                  placeholder="ค้นหาตามชื่อผู้รับ, เลขบัญชี, หรือหมายเหตุ..."

                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-gray-50 focus:bg-white"      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">};};

                  value={searchTerm}

                  onChange={(e) => setSearchTerm(e.target.value)}        {/* Header */}

                />

              </div>        <div className="bg-white shadow-sm border-b border-gray-100">

            </div>

            <div className="md:w-48">          <div className="max-w-4xl mx-auto px-4 py-4">

              <div className="relative">

                <FaFilter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />            <div className="flex items-center space-x-3">export default function TransactionHistory({ onBack }) {export default function TransactionHistory({ onBack }) {

                <select

                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-gray-50 focus:bg-white appearance-none"              <button

                  value={statusFilter}

                  onChange={(e) => setStatusFilter(e.target.value)}                onClick={() => setSelectedTransaction(null)}  const [transactions] = useState(mockTransactions);  const [transactions] = useState(mockTransactions);

                >

                  <option value="all">ทุกสถานะ</option>                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"

                  <option value="success">สำเร็จ</option>

                  <option value="failed">ไม่สำเร็จ</option>              >  const [searchTerm, setSearchTerm] = useState("");  const [searchTerm, setSearchTerm] = useState("");

                  <option value="pending">รอดำเนินการ</option>

                </select>                <FaArrowLeft className="text-gray-600" />

              </div>

            </div>              </button>  const [statusFilter, setStatusFilter] = useState("all");  const [statusFilter, setStatusFilter] = useState("all");

          </div>

        </div>              <FaHistory className="text-2xl text-blue-600" />



        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">              <h1 className="text-2xl font-bold text-gray-800">รายละเอียดธุรกรรม</h1>  const [selectedTransaction, setSelectedTransaction] = useState(null);  const [selectedTransaction, setSelectedTransaction] = useState(null);

          {filteredTransactions.length === 0 ? (

            <div className="text-center py-16">            </div>

              <FaHistory className="text-6xl text-gray-300 mx-auto mb-4" />

              <h3 className="text-xl font-semibold text-gray-600 mb-2">ไม่พบประวัติธุรกรรม</h3>          </div>

              <p className="text-gray-500">ลองเปลี่ยนคำค้นหาหรือตัวกรองสถานะ</p>

            </div>        </div>

          ) : (

            <div className="divide-y divide-gray-100">  const filteredTransactions = transactions.filter(tx => {  const filteredTransactions = transactions.filter(tx => {

              {filteredTransactions.map((tx) => (

                <div        <div className="max-w-2xl mx-auto px-4 py-8">

                  key={tx.id}

                  onClick={() => setSelectedTransaction(tx)}          <div className="bg-white rounded-3xl shadow-2xl p-8">    const matchesSearch = tx.recipient.toLowerCase().includes(searchTerm.toLowerCase()) ||    const matchesSearch = tx.recipient.toLowerCase().includes(searchTerm.toLowerCase()) ||

                  className="p-6 hover:bg-gray-50 cursor-pointer transition-colors"

                >            <div className="text-center mb-8">

                  <div className="flex items-center justify-between">

                    <div className="flex items-center space-x-4">              <div className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 ${getStatusColor(selectedTransaction.status)}`}>                         tx.accountNo.includes(searchTerm) ||                         tx.accountNo.includes(searchTerm) ||

                      <div className={`w-12 h-12 rounded-full flex items-center justify-center ${getStatusColor(tx.status)}`}>

                        {getStatusIcon(tx.status)}                <div className="text-3xl">

                      </div>

                      <div>                  {getStatusIcon(selectedTransaction.status)}                         tx.note.toLowerCase().includes(searchTerm.toLowerCase());                         tx.note.toLowerCase().includes(searchTerm.toLowerCase());

                        <h3 className="font-semibold text-gray-800 text-lg">{tx.recipient}</h3>

                        <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1">                </div>

                          <span className="font-mono">{tx.accountNo}</span>

                          <span className={`px-2 py-1 rounded-full text-xs font-semibold ${bankColors[tx.bank] || 'text-gray-600 bg-gray-50'}`}>              </div>    const matchesStatus = statusFilter === "all" || tx.status === statusFilter;    const matchesStatus = statusFilter === "all" || tx.status === statusFilter;

                            {tx.bank}

                          </span>              <h2 className="text-2xl font-bold text-gray-800 mb-2">

                        </div>

                      </div>                {getStatusText(selectedTransaction.status)}    return matchesSearch && matchesStatus;    return matchesSearch && matchesStatus;

                    </div>

                    <div className="text-right">              </h2>

                      <div className="text-2xl font-bold text-gray-800">

                        {tx.amount.toLocaleString()} ฿              <p className="text-gray-600">รหัสธุรกรรม: {selectedTransaction.transactionId}</p>  });  });

                      </div>

                      <div className="text-sm text-gray-500 mt-1">{tx.date}</div>            </div>

                    </div>

                  </div>

                  {tx.note && (

                    <div className="mt-3 text-sm text-gray-600 bg-gray-50 px-3 py-2 rounded-lg">            <div className="space-y-4">

                      {tx.note}

                    </div>              <div className="bg-gray-50 rounded-xl p-4">  const getStatusIcon = (status) => {  const getStatusIcon = (status) => {

                  )}

                </div>                <div className="flex justify-between items-center">

              ))}

            </div>                  <span className="text-gray-600">ผู้รับเงิน:</span>    switch (status) {    switch (status) {

          )}

        </div>                  <span className="font-semibold text-gray-800">{selectedTransaction.recipient}</span>

      </div>

    </div>                </div>      case "success":      case "success":

  );

}              </div>

              <div className="bg-gray-50 rounded-xl p-4">        return <FaCheckCircle className="text-green-600" />;        return <FaCheckCircle className="text-green-600" />;

                <div className="flex justify-between items-center">

                  <span className="text-gray-600">เลขบัญชี:</span>      case "failed":      case "failed":

                  <span className="font-mono font-semibold text-gray-800">{selectedTransaction.accountNo}</span>

                </div>        return <FaTimesCircle className="text-red-600" />;        return <FaTimesCircle className="text-red-600" />;

              </div>

              <div className="bg-gray-50 rounded-xl p-4">      case "pending":      case "pending":

                <div className="flex justify-between items-center">

                  <span className="text-gray-600">ธนาคาร:</span>        return <FaClock className="text-yellow-600" />;        return <FaClock className="text-yellow-600" />;

                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${bankColors[selectedTransaction.bank] || 'text-gray-600 bg-gray-50'}`}>

                    {selectedTransaction.bank}      default:      default:

                  </span>

                </div>        return null;        return null;

              </div>

              <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">    }    }

                <div className="flex justify-between items-center">

                  <span className="text-blue-700 font-semibold">จำนวนเงิน:</span>  };  };

                  <span className="text-2xl font-bold text-blue-800">{selectedTransaction.amount.toLocaleString()} บาท</span>

                </div>

              </div>

              <div className="bg-gray-50 rounded-xl p-4">  const getStatusText = (status) => {  const getStatusText = (status) => {

                <div className="flex justify-between items-start">

                  <span className="text-gray-600">หมายเหตุ:</span>    switch (status) {    switch (status) {

                  <span className="font-semibold text-gray-800 text-right">{selectedTransaction.note}</span>

                </div>      case "success":      case "success":

              </div>

              <div className="bg-gray-50 rounded-xl p-4">        return "สำเร็จ";        return "สำเร็จ";

                <div className="flex justify-between items-center">

                  <span className="text-gray-600">วันที่/เวลา:</span>      case "failed":      case "failed":

                  <span className="font-semibold text-gray-800">{selectedTransaction.date}</span>

                </div>        return "ไม่สำเร็จ";        return "ไม่สำเร็จ";

              </div>

            </div>      case "pending":      case "pending":



            <div className="mt-8 space-y-3">        return "รอดำเนินการ";        return "รอดำเนินการ";

              <button

                onClick={() => setSelectedTransaction(null)}      default:      default:

                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"

              >        return "";        return "";

                กลับไปหน้าประวัติ

              </button>    }    }

              <button className="w-full bg-gray-100 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-200 transition-colors flex items-center justify-center">

                <FaDownload className="mr-2" />  };  };

                ดาวน์โหลดใบเสร็จ

              </button>

            </div>

          </div>  const getStatusColor = (status) => {  const getStatusColor = (status) => {

        </div>

      </div>    switch (status) {    switch (status) {

    );

  }      case "success":      case "success":



  return (        return "bg-green-50 text-green-700 border-green-200";        return "bg-green-50 text-green-700 border-green-200";

    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">

      {/* Header */}      case "failed":      case "failed":

      <div className="bg-white shadow-sm border-b border-gray-100">

        <div className="max-w-6xl mx-auto px-4 py-4">        return "bg-red-50 text-red-700 border-red-200";        return "bg-red-50 text-red-700 border-red-200";

          <div className="flex items-center space-x-3">

            <button      case "pending":      case "pending":

              onClick={onBack}

              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"        return "bg-yellow-50 text-yellow-700 border-yellow-200";        return "bg-yellow-50 text-yellow-700 border-yellow-200";

            >

              <FaArrowLeft className="text-gray-600" />      default:      default:

            </button>

            <FaHistory className="text-2xl text-blue-600" />        return "bg-gray-50 text-gray-700 border-gray-200";        return "bg-gray-50 text-gray-700 border-gray-200";

            <h1 className="text-2xl font-bold text-gray-800">ประวัติธุรกรรม</h1>

          </div>    }    }

        </div>

      </div>  };  };



      <div className="max-w-6xl mx-auto px-4 py-8">

        {/* Search and Filter */}

        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">  if (selectedTransaction) {  if (selectedTransaction) {

          <div className="flex flex-col md:flex-row gap-4">

            <div className="flex-1">    return (    return (

              <div className="relative">

                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">

                <input

                  type="text"        {/* Header */}        {/* Header */}

                  placeholder="ค้นหาตามชื่อผู้รับ, เลขบัญชี, หรือหมายเหตุ..."

                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-gray-50 focus:bg-white"        <div className="bg-white shadow-sm border-b border-gray-100">        <div className="bg-white shadow-sm border-b border-gray-100">

                  value={searchTerm}

                  onChange={(e) => setSearchTerm(e.target.value)}          <div className="max-w-4xl mx-auto px-4 py-4">          <div className="max-w-4xl mx-auto px-4 py-4">

                />

              </div>            <div className="flex items-center space-x-3">            <div className="flex items-center space-x-3">

            </div>

            <div className="md:w-48">              <button              <button

              <div className="relative">

                <FaFilter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />                onClick={() => setSelectedTransaction(null)}                onClick={() => setSelectedTransaction(null)}

                <select

                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-gray-50 focus:bg-white appearance-none"                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"

                  value={statusFilter}

                  onChange={(e) => setStatusFilter(e.target.value)}              >              >

                >

                  <option value="all">ทุกสถานะ</option>                <FaArrowLeft className="text-gray-600" />                <FaArrowLeft className="text-gray-600" />

                  <option value="success">สำเร็จ</option>

                  <option value="failed">ไม่สำเร็จ</option>              </button>              </button>

                  <option value="pending">รอดำเนินการ</option>

                </select>              <FaHistory className="text-2xl text-blue-600" />              <FaHistory className="text-2xl text-blue-600" />

              </div>

            </div>              <h1 className="text-2xl font-bold text-gray-800">รายละเอียดธุรกรรม</h1>              <h1 className="text-2xl font-bold text-gray-800">รายละเอียดธุรกรรม</h1>

          </div>

        </div>            </div>            </div>



        {/* Transaction List */}          </div>          </div>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">

          {filteredTransactions.length === 0 ? (        </div>        </div>

            <div className="text-center py-16">

              <FaHistory className="text-6xl text-gray-300 mx-auto mb-4" />

              <h3 className="text-xl font-semibold text-gray-600 mb-2">ไม่พบประวัติธุรกรรม</h3>

              <p className="text-gray-500">ลองเปลี่ยนคำค้นหาหรือตัวกรองสถานะ</p>        <div className="max-w-2xl mx-auto px-4 py-8">        <div className="max-w-2xl mx-auto px-4 py-8">

            </div>

          ) : (          <div className="bg-white rounded-3xl shadow-2xl p-8">          <div className="bg-white rounded-3xl shadow-2xl p-8">

            <div className="divide-y divide-gray-100">

              {filteredTransactions.map((tx) => (            <div className="text-center mb-8">            <div className="text-center mb-8">

                <div

                  key={tx.id}              <div className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 ${getStatusColor(selectedTransaction.status)}`}>              <div className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 ${getStatusColor(selectedTransaction.status)}`}>

                  onClick={() => setSelectedTransaction(tx)}

                  className="p-6 hover:bg-gray-50 cursor-pointer transition-colors"                <div className="text-3xl">                <div className="text-3xl">

                >

                  <div className="flex items-center justify-between">                  {getStatusIcon(selectedTransaction.status)}                  {getStatusIcon(selectedTransaction.status)}

                    <div className="flex items-center space-x-4">

                      <div className={`w-12 h-12 rounded-full flex items-center justify-center ${getStatusColor(tx.status)}`}>                </div>                </div>

                        {getStatusIcon(tx.status)}

                      </div>              </div>              </div>

                      <div>

                        <h3 className="font-semibold text-gray-800 text-lg">{tx.recipient}</h3>              <h2 className="text-2xl font-bold text-gray-800 mb-2">              <h2 className="text-2xl font-bold text-gray-800 mb-2">

                        <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1">

                          <span className="font-mono">{tx.accountNo}</span>                {getStatusText(selectedTransaction.status)}                {getStatusText(selectedTransaction.status)}

                          <span className={`px-2 py-1 rounded-full text-xs font-semibold ${bankColors[tx.bank] || 'text-gray-600 bg-gray-50'}`}>

                            {tx.bank}              </h2>              </h2>

                          </span>

                        </div>              <p className="text-gray-600">รหัสธุรกรรม: {selectedTransaction.transactionId}</p>              <p className="text-gray-600">รหัสธุรกรรม: {selectedTransaction.transactionId}</p>

                      </div>

                    </div>            </div>            </div>

                    <div className="text-right">

                      <div className="text-2xl font-bold text-gray-800">

                        {tx.amount.toLocaleString()} ฿

                      </div>            <div className="space-y-4">            <div className="space-y-4">

                      <div className="text-sm text-gray-500 mt-1">{tx.date}</div>

                    </div>              <div className="bg-gray-50 rounded-xl p-4">              <div className="bg-gray-50 rounded-xl p-4">

                  </div>

                  {tx.note && (                <div className="flex justify-between items-center">                <div className="flex justify-between items-center">

                    <div className="mt-3 text-sm text-gray-600 bg-gray-50 px-3 py-2 rounded-lg">

                      {tx.note}                  <span className="text-gray-600">ผู้รับเงิน:</span>                  <span className="text-gray-600">ผู้รับเงิน:</span>

                    </div>

                  )}                  <span className="font-semibold text-gray-800">{selectedTransaction.recipient}</span>                  <span className="font-semibold text-gray-800">{selectedTransaction.recipient}</span>

                </div>

              ))}                </div>                </div>

            </div>

          )}              </div>              </div>

        </div>

      </div>              <div className="bg-gray-50 rounded-xl p-4">              <div className="bg-gray-50 rounded-xl p-4">

    </div>

  );                <div className="flex justify-between items-center">                <div className="flex justify-between items-center">

}
                  <span className="text-gray-600">เลขบัญชี:</span>                  <span className="text-gray-600">เลขบัญชี:</span>

                  <span className="font-mono font-semibold text-gray-800">{selectedTransaction.accountNo}</span>                  <span className="font-mono font-semibold text-gray-800">{selectedTransaction.accountNo}</span>

                </div>                </div>

              </div>              </div>

              <div className="bg-gray-50 rounded-xl p-4">              <div className="bg-gray-50 rounded-xl p-4">

                <div className="flex justify-between items-center">                <div className="flex justify-between items-center">

                  <span className="text-gray-600">ธนาคาร:</span>                  <span className="text-gray-600">ธนาคาร:</span>

                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${bankColors[selectedTransaction.bank] || 'text-gray-600 bg-gray-50'}`}>                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${bankColors[selectedTransaction.bank] || 'text-gray-600 bg-gray-50'}`}>

                    {selectedTransaction.bank}                    {selectedTransaction.bank}

                  </span>                  </span>

                </div>                </div>

              </div>              </div>

              <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">              <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">

                <div className="flex justify-between items-center">                <div className="flex justify-between items-center">

                  <span className="text-blue-700 font-semibold">จำนวนเงิน:</span>                  <span className="text-blue-700 font-semibold">จำนวนเงิน:</span>

                  <span className="text-2xl font-bold text-blue-800">{selectedTransaction.amount.toLocaleString()} บาท</span>                  <span className="text-2xl font-bold text-blue-800">{selectedTransaction.amount.toLocaleString()} บาท</span>

                </div>                </div>

              </div>              </div>

              <div className="bg-gray-50 rounded-xl p-4">              <div className="bg-gray-50 rounded-xl p-4">

                <div className="flex justify-between items-start">                <div className="flex justify-between items-start">

                  <span className="text-gray-600">หมายเหตุ:</span>                  <span className="text-gray-600">หมายเหตุ:</span>

                  <span className="font-semibold text-gray-800 text-right">{selectedTransaction.note}</span>                  <span className="font-semibold text-gray-800 text-right">{selectedTransaction.note}</span>

                </div>                </div>

              </div>              </div>

              <div className="bg-gray-50 rounded-xl p-4">              <div className="bg-gray-50 rounded-xl p-4">

                <div className="flex justify-between items-center">                <div className="flex justify-between items-center">

                  <span className="text-gray-600">วันที่/เวลา:</span>                  <span className="text-gray-600">วันที่/เวลา:</span>

                  <span className="font-semibold text-gray-800">{selectedTransaction.date}</span>                  <span className="font-semibold text-gray-800">{selectedTransaction.date}</span>

                </div>                </div>

              </div>              </div>

            </div>            </div>



            <div className="mt-8 space-y-3">            <div className="mt-8 space-y-3">

              <button              <button

                onClick={() => setSelectedTransaction(null)}                onClick={() => setSelectedTransaction(null)}

                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"

              >              >

                กลับไปหน้าประวัติ                กลับไปหน้าประวัติ

              </button>              </button>

              <button className="w-full bg-gray-100 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-200 transition-colors flex items-center justify-center">              <button className="w-full bg-gray-100 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-200 transition-colors flex items-center justify-center">

                <FaDownload className="mr-2" />                <FaDownload className="mr-2" />

                ดาวน์โหลดใบเสร็จ                ดาวน์โหลดใบเสร็จ

              </button>              </button>

            </div>            </div>

          </div>          </div>

        </div>        </div>

      </div>      </div>

    );    );

  }  }



  return (  return (

    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">

      {/* Header */}      {/* Header */}

      <div className="bg-white shadow-sm border-b border-gray-100">      <div className="bg-white shadow-sm border-b border-gray-100">

        <div className="max-w-6xl mx-auto px-4 py-4">        <div className="max-w-6xl mx-auto px-4 py-4">

          <div className="flex items-center space-x-3">          <div className="flex items-center space-x-3">

            <button            <button

              onClick={onBack}              onClick={onBack}

              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"

            >            >

              <FaArrowLeft className="text-gray-600" />              <FaArrowLeft className="text-gray-600" />

            </button>            </button>

            <FaHistory className="text-2xl text-blue-600" />            <FaHistory className="text-2xl text-blue-600" />

            <h1 className="text-2xl font-bold text-gray-800">ประวัติธุรกรรม</h1>            <h1 className="text-2xl font-bold text-gray-800">ประวัติธุรกรรม</h1>

          </div>          </div>

        </div>        </div>

      </div>      </div>



      <div className="max-w-6xl mx-auto px-4 py-8">      <div className="max-w-6xl mx-auto px-4 py-8">

        {/* Search and Filter */}        {/* Search and Filter */}

        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">

          <div className="flex flex-col md:flex-row gap-4">          <div className="flex flex-col md:flex-row gap-4">

            <div className="flex-1">            <div className="flex-1">

              <div className="relative">              <div className="relative">

                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />

                <input                <input

                  type="text"                  type="text"

                  placeholder="ค้นหาตามชื่อผู้รับ, เลขบัญชี, หรือหมายเหตุ..."                  placeholder="ค้นหาตามชื่อผู้รับ, เลขบัญชี, หรือหมายเหตุ..."

                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-gray-50 focus:bg-white"                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-gray-50 focus:bg-white"

                  value={searchTerm}                  value={searchTerm}

                  onChange={(e) => setSearchTerm(e.target.value)}                  onChange={(e) => setSearchTerm(e.target.value)}

                />                />

              </div>              </div>

            </div>            </div>

            <div className="md:w-48">            <div className="md:w-48">

              <div className="relative">              <div className="relative">

                <FaFilter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />                <FaFilter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />

                <select                <select

                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-gray-50 focus:bg-white appearance-none"                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-gray-50 focus:bg-white appearance-none"

                  value={statusFilter}                  value={statusFilter}

                  onChange={(e) => setStatusFilter(e.target.value)}                  onChange={(e) => setStatusFilter(e.target.value)}

                >                >

                  <option value="all">ทุกสถานะ</option>                  <option value="all">ทุกสถานะ</option>

                  <option value="success">สำเร็จ</option>                  <option value="success">สำเร็จ</option>

                  <option value="failed">ไม่สำเร็จ</option>                  <option value="failed">ไม่สำเร็จ</option>

                  <option value="pending">รอดำเนินการ</option>                  <option value="pending">รอดำเนินการ</option>

                </select>                </select>

              </div>              </div>

            </div>            </div>

          </div>          </div>

        </div>        </div>



        {/* Transaction List */}        {/* Transaction List */}

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">

          {filteredTransactions.length === 0 ? (          {filteredTransactions.length === 0 ? (

            <div className="text-center py-16">            <div className="text-center py-16">

              <FaHistory className="text-6xl text-gray-300 mx-auto mb-4" />              <FaHistory className="text-6xl text-gray-300 mx-auto mb-4" />

              <h3 className="text-xl font-semibold text-gray-600 mb-2">ไม่พบประวัติธุรกรรม</h3>              <h3 className="text-xl font-semibold text-gray-600 mb-2">ไม่พบประวัติธุรกรรม</h3>

              <p className="text-gray-500">ลองเปลี่ยนคำค้นหาหรือตัวกรองสถานะ</p>              <p className="text-gray-500">ลองเปลี่ยนคำค้นหาหรือตัวกรองสถานะ</p>

            </div>            </div>

          ) : (          ) : (

            <div className="divide-y divide-gray-100">            <div className="divide-y divide-gray-100">

              {filteredTransactions.map((tx) => (              {filteredTransactions.map((tx) => (

                <div                <div

                  key={tx.id}                  key={tx.id}

                  onClick={() => setSelectedTransaction(tx)}                  onClick={() => setSelectedTransaction(tx)}

                  className="p-6 hover:bg-gray-50 cursor-pointer transition-colors"                  className="p-6 hover:bg-gray-50 cursor-pointer transition-colors"

                >                >

                  <div className="flex items-center justify-between">                  <div className="flex items-center justify-between">

                    <div className="flex items-center space-x-4">                    <div className="flex items-center space-x-4">

                      <div className={`w-12 h-12 rounded-full flex items-center justify-center ${getStatusColor(tx.status)}`}>                      <div className={`w-12 h-12 rounded-full flex items-center justify-center ${getStatusColor(tx.status)}`}>

                        {getStatusIcon(tx.status)}                        {getStatusIcon(tx.status)}

                      </div>                      </div>

                      <div>                      <div>

                        <h3 className="font-semibold text-gray-800 text-lg">{tx.recipient}</h3>                        <h3 className="font-semibold text-gray-800 text-lg">{tx.recipient}</h3>

                        <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1">                        <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1">

                          <span className="font-mono">{tx.accountNo}</span>                          <span className="font-mono">{tx.accountNo}</span>

                          <span className={`px-2 py-1 rounded-full text-xs font-semibold ${bankColors[tx.bank] || 'text-gray-600 bg-gray-50'}`}>                          <span className={`px-2 py-1 rounded-full text-xs font-semibold ${bankColors[tx.bank] || 'text-gray-600 bg-gray-50'}`}>

                            {tx.bank}                            {tx.bank}

                          </span>                          </span>

                        </div>                        </div>

                      </div>                      </div>

                    </div>                    </div>

                    <div className="text-right">                    <div className="text-right">

                      <div className="text-2xl font-bold text-gray-800">                      <div className="text-2xl font-bold text-gray-800">

                        {tx.amount.toLocaleString()} ฿                        {tx.amount.toLocaleString()} ฿

                      </div>                      </div>

                      <div className="text-sm text-gray-500 mt-1">{tx.date}</div>                      <div className="text-sm text-gray-500 mt-1">{tx.date}</div>

                    </div>                    </div>

                  </div>                  </div>

                  {tx.note && (                  {tx.note && (

                    <div className="mt-3 text-sm text-gray-600 bg-gray-50 px-3 py-2 rounded-lg">                    <div className="mt-3 text-sm text-gray-600 bg-gray-50 px-3 py-2 rounded-lg">

                      {tx.note}                      {tx.note}

                    </div>                    </div>

                  )}                  )}

                </div>                </div>

              ))}              ))}

            </div>            </div>

          )}          )}

        </div>        </div>

      </div>      </div>

    </div>    </div>

  );  );

}}
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
