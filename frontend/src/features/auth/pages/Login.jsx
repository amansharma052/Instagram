import { useState } from "react";
import { useAuth } from "../hooks/useAuth";

function Login() {
  const {user,loading,handleLogin}=useAuth( )
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await handleLogin(username ,password)

    
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-sm">
        <div className="border border-gray-300 bg-white px-8 py-10">
          <h1 className="mb-8 text-center text-4xl font-semibold italic">
            Instagram
          </h1>

          <form onSubmit={handleSubmit} className="space-y-3">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-sm border border-gray-300 bg-gray-50 px-3 py-3 text-sm outline-none focus:border-gray-500"
              required
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-sm border border-gray-300 bg-gray-50 px-3 py-3 text-sm outline-none focus:border-gray-500"
              required
            />

            <button
              type="submit"
              className="w-full rounded-lg bg-blue-500 py-2.5 font-semibold text-white hover:bg-blue-600"
            >
              Log in
            </button>
          </form>

          <div className="my-6 flex items-center gap-4">
            <div className="h-px flex-1 bg-gray-300"></div>
            <span className="text-xs font-semibold text-gray-500">OR</span>
            <div className="h-px flex-1 bg-gray-300"></div>
          </div>

          <p className="text-center text-sm text-blue-900">
            Forgot password?
          </p>
        </div>

        <div className="mt-3 border border-gray-300 bg-white p-5 text-center text-sm">
          Don't have an account?{" "}
          <span className="cursor-pointer font-semibold text-blue-500">
            Sign up
          </span>
        </div>
      </div>
    </div>
  );
}

export default Login;