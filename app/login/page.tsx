"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function LoginPage() {
  const [loading, setLoading] = useState(false);

const handleLogin = async () => {
  try {
    setLoading(true);

    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await res.json();

    if (data.success) {

      localStorage.setItem(
        "token",
        data.token
      );

      localStorage.setItem(
        "user",
        JSON.stringify(data.user)
      );

      toast.success(
        `Welcome Back ${data.user.name} 🚀`
      );

      router.push("/admin/dashboard");

    } else {

      toast.error(data.message);

    }

  } catch (error) {

    toast.error(
      "Something went wrong"
    );

  } finally {

    setLoading(false);

  }
};
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4">

      <div className="w-full max-w-md bg-[#111827] border border-slate-800 rounded-3xl p-8 shadow-2xl">

        <div className="text-center mb-8">

          <h1 className="text-4xl font-bold text-cyan-400">
            LotteryAI
          </h1>

          <p className="text-slate-400 mt-2">
            Sign in to your account
          </p>

        </div>

        <div className="space-y-5">

          <div>
            <label className="text-slate-300 text-sm block mb-2">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
               name="fake-email"
               autoComplete="off"
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
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white outline-none focus:border-cyan-500"
            />
          </div>

          <button
  onClick={handleLogin}
  disabled={loading}
  className="w-full py-3 rounded-xl bg-cyan-500 text-black font-bold hover:bg-cyan-400 transition disabled:opacity-50"
>
  {loading ? "Signing In..." : "Login"}
</button>

        </div>

        <div className="mt-6 text-center">

          <p className="text-slate-400 text-sm">
            Don't have an account?
          </p>

          <button
            onClick={() => router.push("/register")}
            className="mt-2 text-cyan-400 hover:text-cyan-300"
          >
            Create Account
          </button>

        </div>

      </div>

    </div>
  );
}