"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function UserNavbar() {
  const pathname = usePathname();
  const router = useRouter();

  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-[#040B1F]/90 border-b border-slate-800">

      <div className="max-w-7xl mx-auto h-20 px-6 flex items-center justify-between">

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-cyan-500/20 border border-cyan-500 flex items-center justify-center">
            🎯
          </div>

          <h1 className="text-3xl font-bold">
            Lottery
            <span className="text-cyan-400">AI</span>
          </h1>
        </div>

        <div className="hidden lg:flex items-center gap-10">

          <Link
            href="/users/dashboard"
            className={pathname === "/users/dashboard"
              ? "text-cyan-400 font-semibold"
              : "text-slate-400 hover:text-white"}
          >
            Dashboard
          </Link>

          <Link
            href="/users/predictions"
            className={pathname === "/users/predictions"
              ? "text-cyan-400 font-semibold"
              : "text-slate-400 hover:text-white"}
          >
            My Predictions
          </Link>

          <Link
            href="/users/results"
            className={pathname === "/users/results"
              ? "text-cyan-400 font-semibold"
              : "text-slate-400 hover:text-white"}
          >
            My Results
          </Link>

          <Link
            href="/contact"
            className={pathname === "/contact"
              ? "text-cyan-400 font-semibold"
              : "text-slate-400 hover:text-white"}
          >
            Contact
          </Link>

        </div>

        <button
          onClick={() => router.push("/users/profile")}
          className="px-6 py-3 rounded-xl bg-cyan-500 text-black font-semibold"
        >
          👤 {user?.name || "User"}
        </button>

      </div>
    </nav>
  );
}