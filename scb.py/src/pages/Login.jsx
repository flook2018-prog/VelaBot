

import { FaUser, FaLock } from "react-icons/fa";

export default function Login({ onLogin }) {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [loggedIn, setLoggedIn] = React.useState(false);

  const VALID_USER = "admin";
  const VALID_PASS = "1234";

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    setTimeout(() => {
      if (!username || !password) {
        setError("กรุณากรอกชื่อผู้ใช้และรหัสผ่าน");
        setLoading(false);
        return;
      }
      if (username === VALID_USER && password === VALID_PASS) {
        setLoggedIn(true);
        setLoading(false);
        onLogin(username);
      } else {
        setError("ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง");
        setLoading(false);
      }
    }, 900);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-200 px-2">
      <div className="w-full max-w-4xl bg-white/90 rounded-3xl shadow-2xl flex flex-col md:flex-row overflow-hidden border border-blue-100 animate-fadeIn">
        {/* Illustration */}
        <div className="hidden md:flex flex-col justify-center items-center bg-gradient-to-br from-blue-100 to-blue-300 w-1/2 p-10">
          <img src="/cash-payment.png" alt="Logo" className="w-24 h-24 mb-6 rounded-2xl shadow-xl border-4 border-white bg-white" />
          <h2 className="text-3xl font-bold text-blue-700 mb-2 drop-shadow">VelaBot Banking</h2>
          <p className="text-blue-600 text-lg text-center">ระบบโอนเงินออนไลน์ที่ปลอดภัยและน่าเชื่อถือ</p>
        </div>
        {/* Login Form */}
        <form
          onSubmit={handleSubmit}
          className="flex-1 flex flex-col justify-center items-center p-10 md:p-16"
          autoComplete="on"
        >
          <img src="/cash-payment.png" alt="Logo" className="block md:hidden w-14 h-14 mb-4 rounded-2xl shadow-lg border-4 border-blue-50 bg-blue-50 mx-auto" />
          <h2 className="text-center text-blue-700 mb-8 text-2xl font-bold tracking-wide w-full drop-shadow">เข้าสู่ระบบ</h2>
          <div className="w-full max-w-xs mb-6">
            <label htmlFor="username" className="block mb-2 text-gray-700 font-semibold">ชื่อผู้ใช้</label>
            <div className="relative">
              <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-400" />
              <input
                type="text"
                id="username"
                name="username"
                required
                autoFocus
                placeholder="กรอกชื่อผู้ใช้..."
                className="pl-10 pr-4 py-3 w-full rounded-xl border border-blue-100 bg-blue-50 text-lg focus:border-blue-400 focus:bg-white transition shadow-sm outline-none"
                value={username}
                onChange={e => setUsername(e.target.value)}
                disabled={loading}
              />
            </div>
          </div>
          <div className="w-full max-w-xs mb-6">
            <label htmlFor="password" className="block mb-2 text-gray-700 font-semibold">รหัสผ่าน</label>
            <div className="relative">
              <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-400" />
              <input
                type="password"
                id="password"
                name="password"
                required
                placeholder="กรอกรหัสผ่าน..."
                className="pl-10 pr-4 py-3 w-full rounded-xl border border-blue-100 bg-blue-50 text-lg focus:border-blue-400 focus:bg-white transition shadow-sm outline-none"
                value={password}
                onChange={e => setPassword(e.target.value)}
                disabled={loading}
              />
            </div>
          </div>
          {error && <div className="w-full max-w-xs text-red-600 text-center mb-4 bg-red-50 rounded-lg py-2 text-base font-medium shadow">{error}</div>}
          <button
            type="submit"
            className={`w-full max-w-xs bg-gradient-to-r from-blue-600 to-blue-500 text-white py-3 rounded-xl font-bold shadow-lg transition text-lg mt-2 tracking-wide outline-none border-0 focus:ring-4 focus:ring-blue-200/60 ${loading ? 'opacity-60 cursor-not-allowed' : ''}`}
            style={{letterSpacing:'1px'}}
            disabled={loading}
          >
            {loading ? 'กำลังเข้าสู่ระบบ...' : 'เข้าสู่ระบบ'}
          </button>
          <div className="text-gray-400 text-sm text-center mt-6">สำหรับผู้ดูแลระบบเท่านั้น</div>
        </form>
      </div>
    </div>
  );
}
