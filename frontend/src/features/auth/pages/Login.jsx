
import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

function Login() {
  const { user, loading, handleLogin } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await handleLogin(email, password);
    navigate("/");
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#fff1f7] via-[#f8f4ff] to-[#eaf0ff] px-4 py-10">

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(35px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }

        .login-card {
          animation: fadeUp 0.8s ease-out both;
        }

        .floating {
          animation: float 6s ease-in-out infinite;
        }

        .instagram-gradient {
          background: linear-gradient(45deg, #feda75, #fa7e1e, #d62976, #962fbf, #4f5bd5);
          background-size: 300% 300%;
          animation: gradientMove 5s ease infinite;
        }

        @keyframes gradientMove {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .input-field {
          transition: all 0.3s ease;
        }

        .input-field:focus {
          transform: translateY(-2px);
          box-shadow: 0 5px 18px rgba(214, 41, 118, 0.12);
        }

        .login-button {
          transition: all 0.3s ease;
        }

        .login-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 25px rgba(214, 41, 118, 0.3);
        }

        .login-button:active {
          transform: scale(0.97);
        }
      `}</style>

      {/* Background Animation */}
      <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-pink-300/40 blur-[100px]" />

      <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-purple-300/40 blur-[100px]" />

      <div className="floating absolute top-20 right-[15%] hidden text-5xl text-pink-400/30 md:block">
        ♡
      </div>

      <div className="floating absolute bottom-20 left-[15%] hidden text-6xl text-purple-400/30 md:block">
        ✧
      </div>

      {/* Login Card */}
      <div className="login-card relative z-10 w-full max-w-[420px]">

        <div className="rounded-3xl border border-white/80 bg-white/85 px-7 py-10 shadow-[0_25px_80px_rgba(120,70,150,0.15)] backdrop-blur-xl sm:px-10">

          <h1 className="mb-3 text-center text-4xl font-bold tracking-tight text-gray-900">
            Instagram
          </h1>

          <p className="mb-8 text-center text-sm text-gray-500">
            Welcome back! Login to continue sharing moments.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">

            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input-field w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm outline-none placeholder:text-gray-400 focus:border-pink-400 focus:bg-white"
              required
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input-field w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm outline-none placeholder:text-gray-400 focus:border-pink-400 focus:bg-white"
              required
            />

            <button
              type="submit"
              disabled={loading}
              className="login-button instagram-gradient w-full rounded-xl py-3.5 font-bold text-white shadow-md disabled:opacity-60"
            >
              {loading ? "Logging in..." : "Log in"}
            </button>

          </form>

          <div className="my-7 flex items-center gap-4">
            <div className="h-px flex-1 bg-gray-200"></div>
            <span className="text-xs font-semibold text-gray-400">OR</span>
            <div className="h-px flex-1 bg-gray-200"></div>
          </div>

          <p className="cursor-pointer text-center text-sm font-semibold text-[#385185] transition hover:text-pink-600">
            Forgot password?
          </p>

        </div>

        <div className="mt-5 rounded-2xl border border-white/80 bg-white/85 p-5 text-center text-sm text-gray-600 shadow-lg backdrop-blur-xl">
          Don't have an account?{" "}

          <span className="cursor-pointer font-bold text-[#d62976] transition hover:text-purple-600">
            Sign up
          </span>
        </div>

      </div>
    </div>
  );
}

export default Login;
