"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
const [role, setRole] = useState("user");
const [adminCode, setAdminCode] = useState("");

export default function RegisterPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleRegister = async () => {
  const res = await fetch("/api/auth/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      email,
      password,
        role,
  adminCode,
    }),
  });

  const data = await res.json();

  if (data.success) {
    toast.success("🎉 Account Created Successfully!");
    router.push("/login");
  } else {
    alert(data.message);
  }
};

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4">

      <div className="w-full max-w-md bg-[#111827] border border-slate-800 rounded-3xl p-8 shadow-2xl">

        <div className="text-center mb-8">

          <h1 className="text-4xl font-bold text-cyan-400">
            LotteryAI
          </h1>

          <p className="text-slate-400 mt-2">
            Create your account
          </p>

        </div>

        <div className="space-y-5">

          <div>
            <label className="text-slate-300 text-sm block mb-2">
              Name
            </label>

            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white outline-none focus:border-cyan-500"
            />
          </div>

          <div>
            <label className="text-slate-300 text-sm block mb-2">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white outline-none focus:border-cyan-500"
            />
          </div>

          <div>
            <label className="text-slate-300 text-sm block mb-2">
              Password
            </label>

            <input
              type="password"
              placeholder="Create password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white outline-none focus:border-cyan-500"
            />
          </div>
          <div>
  <label className="text-slate-300 text-sm block mb-2">
    Role
  </label>

  <select
    value={role}
    onChange={(e) => setRole(e.target.value)}
    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white"
  >
    <option value="user">User</option>
    <option value="admin">Admin</option>
  </select>
</div>

{role === "admin" && (
  <div>
    <label className="text-slate-300 text-sm block mb-2">
      Admin Access Code
    </label>

    <input
      type="password"
      placeholder="Enter admin code"
      value={adminCode}
      onChange={(e) => setAdminCode(e.target.value)}
      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white outline-none focus:border-cyan-500"
    />
  </div>
)}

          <button
  onClick={handleRegister}
  className="w-full py-3 rounded-xl bg-cyan-500 text-black font-bold hover:bg-cyan-400 transition"
>
  Create Account
</button>

        </div>

        <div className="mt-6 text-center">

          <p className="text-slate-400 text-sm">
            Already have an account?
          </p>

          <button
            onClick={() => router.push("/login")}
            className="mt-2 text-cyan-400 hover:text-cyan-300"
          >
            Login
          </button>

        </div>

      </div>

    </div>
  );
}