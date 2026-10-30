import { useState } from "react";

function Register() {
  const [formData, setFormData] = useState({
    fullname: "",
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-8">
      <div className="w-full max-w-sm">
        <div className="border border-gray-300 bg-white px-8 py-8">
          <h1 className="mb-3 text-center text-4xl font-semibold italic">
            Instagram
          </h1>

          <p className="mb-6 text-center text-sm font-semibold text-gray-500">
            Sign up to see photos and videos from your friends.
          </p>

          <form onSubmit={handleSubmit} className="space-y-3">
            <input
              type="text"
              name="fullname"
              placeholder="Full Name"
              value={formData.fullname}
              onChange={handleChange}
              className="w-full rounded-sm border border-gray-300 bg-gray-50 px-3 py-3 text-sm outline-none focus:border-gray-500"
              required
            />

            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              className="w-full rounded-sm border border-gray-300 bg-gray-50 px-3 py-3 text-sm outline-none focus:border-gray-500"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded-sm border border-gray-300 bg-gray-50 px-3 py-3 text-sm outline-none focus:border-gray-500"
              required
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full rounded-sm border border-gray-300 bg-gray-50 px-3 py-3 text-sm outline-none focus:border-gray-500"
              required
            />

            <button
              type="submit"
              className="w-full rounded-lg bg-blue-500 py-2.5 font-semibold text-white hover:bg-blue-600"
            >
              Sign up
            </button>
          </form>

          <p className="mt-5 text-center text-xs text-gray-500">
            By signing up, you agree to our Terms and Privacy Policy.
          </p>
        </div>

        <div className="mt-3 border border-gray-300 bg-white p-5 text-center text-sm">
          Have an account?{" "}
          <span className="cursor-pointer font-semibold text-blue-500">
            Log in
          </span>
        </div>
      </div>
    </div>
  );
}

export default Register;