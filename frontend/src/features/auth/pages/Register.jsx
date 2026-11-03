
import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import { useAuth } from "../hooks/useAuth";

const Register = () => {
  const { loading, handleRegister } = useAuth();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await handleRegister(username, email, password);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className="relative min-h-screen overflow-hidden flex items-center justify-center bg-[#faf7ff] px-4 py-10">

      <style>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(35px) scale(0.97);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-22px); }
        }

        @keyframes glow {
          0%, 100% { opacity: 0.45; }
          50% { opacity: 0.8; }
        }

        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .register-card {
          animation: fadeUp 0.8s ease-out both;
        }

        .floating {
          animation: float 6s ease-in-out infinite;
        }

        .glow-effect {
          animation: glow 5s ease-in-out infinite;
        }

        .instagram-gradient {
          background: linear-gradient(
            45deg,
            #feda75,
            #fa7e1e,
            #d62976,
            #962fbf,
            #4f5bd5
          );
          background-size: 300% 300%;
          animation: gradientMove 5s ease infinite;
        }

        .input-field {
          transition: all 0.3s ease;
        }

        .input-field:focus {
          transform: translateY(-2px);
          box-shadow: 0 5px 18px rgba(214, 41, 118, 0.10);
        }

        .signup-button {
          transition: all 0.3s ease;
        }

        .signup-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 25px rgba(214, 41, 118, 0.3);
        }

        .signup-button:active {
          transform: scale(0.97);
        }
      `}</style>

      {/* Background Effects */}
      <div className="glow-effect absolute -top-32 -left-32 h-96 w-96 rounded-full bg-pink-300/50 blur-[100px]" />

      <div className="glow-effect absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-purple-300/50 blur-[100px]" />

      <div className="floating absolute top-20 right-[15%] hidden md:block text-5xl opacity-20">
        ♡
      </div>

      <div className="floating absolute bottom-24 left-[15%] hidden md:block text-6xl opacity-20" style={{ animationDelay: "2s" }}>
        ✧
      </div>

      {/* Main Container */}
      <div className="register-card relative z-10 w-full max-w-[420px]">

        <div className="rounded-3xl border border-white/80 bg-white/85 p-7 shadow-[0_25px_80px_rgba(120,70,150,0.15)] backdrop-blur-xl sm:p-10">

          {/* Instagram Branding */}
          <div className="mb-8 text-center">

            <div className="instagram-gradient mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-[22px] shadow-lg">
              <svg
                width="35"
                height="35"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="1.8"
              >
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="18" cy="6" r="1" fill="white" />
              </svg>
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-gray-900">
              Instagram
            </h1>

            <p className="mt-3 text-sm leading-relaxed text-gray-500">
              Sign up to see photos and videos from your friends.
            </p>

          </div>

          {/* Register Form */}
          <form onSubmit={handleSubmit} className="space-y-5">

            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Username
              </label>

              <input
                type="text"
                name="username"
                placeholder="Choose a username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="input-field w-full rounded-xl border border-gray-200 bg-gray-50/80 px-4 py-3.5 text-sm text-gray-800 outline-none placeholder:text-gray-400 focus:border-pink-400 focus:bg-white"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Email Address
              </label>

              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="input-field w-full rounded-xl border border-gray-200 bg-gray-50/80 px-4 py-3.5 text-sm text-gray-800 outline-none placeholder:text-gray-400 focus:border-pink-400 focus:bg-white"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Password
              </label>

              <input
                type="password"
                name="password"
                placeholder="Create a strong password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="input-field w-full rounded-xl border border-gray-200 bg-gray-50/80 px-4 py-3.5 text-sm text-gray-800 outline-none placeholder:text-gray-400 focus:border-pink-400 focus:bg-white"
              />
            </div>

            {/* Signup Button */}
            <button
              type="submit"
              disabled={loading}
              className="signup-button instagram-gradient mt-3 w-full rounded-xl py-3.5 font-bold text-white shadow-md disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Creating Account..." : "Sign Up"}
            </button>

          </form>

          {/* Divider */}
          <div className="my-7 flex items-center gap-4">
            <div className="h-px flex-1 bg-gray-200" />
            <span className="text-xs font-semibold text-gray-400">
              OR
            </span>
            <div className="h-px flex-1 bg-gray-200" />
          </div>

          {/* Login Link */}
          <p className="text-center text-sm text-gray-600">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-bold text-[#d62976] transition hover:text-[#962fbf] hover:underline"
            >
              Log in
            </Link>
          </p>

        </div>

        {/* Footer */}
        <p className="mt-7 text-center text-xs font-medium tracking-wide text-gray-400">
          CONNECT • SHARE • INSPIRE
        </p>

      </div>
    </main>
  );
};

export default Register;
