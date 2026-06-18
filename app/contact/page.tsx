"use client";

import Navbar from "@/components/landing/LandingPage";
import Footer from "@/components/landing/Footer";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#030B1F] text-white">

      <Navbar />

      {/* HERO SECTION */}

      <section className="max-w-7xl mx-auto px-6 pt-16 pb-20">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}

          <div>

            <div className="inline-flex px-4 py-2 rounded-full border border-cyan-500/20 text-cyan-400 text-sm mb-6">
              Contact LotteryAI
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">

              Let's Start A

              <br />

              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-500 bg-clip-text text-transparent">

                Conversation.

              </span>

            </h1>

            <p className="text-slate-400 text-lg mt-6 max-w-lg leading-8">

              Have questions about predictions,
              analytics, support or partnerships?

              We're here to help.

            </p>

            <div className="flex gap-4 mt-8">

              <button className="px-6 py-3 rounded-xl bg-cyan-500 text-black font-semibold hover:bg-cyan-400 transition">
                Contact Support
              </button>

              <button className="px-6 py-3 rounded-xl border border-slate-700 hover:border-cyan-500 transition">
                View FAQ
              </button>

            </div>

          </div>

          {/* RIGHT */}

          <div className="flex justify-center">

            <div className="relative">

              {/* Glow */}

              <div className="absolute inset-0 bg-cyan-500/10 blur-[120px] rounded-full"></div>

              {/* Outer Ring */}

              <div className="absolute -inset-10 border border-cyan-500/10 rounded-full"></div>

              <div className="absolute -inset-4 border border-violet-500/10 rounded-full"></div>

              {/* Center */}

              <div className="relative w-80 h-80 flex items-center justify-center">

                <div className="absolute w-56 h-56 rounded-full bg-gradient-to-br from-cyan-500/10 to-violet-500/10 border border-cyan-500/20"></div>

                <div className="relative text-center z-10">

                  <div className="text-8xl mb-4">
                    📩
                  </div>

                  <h3 className="text-2xl font-bold">
                    Contact Center
                  </h3>

                  <p className="text-slate-400 mt-2">
                    Support • Business • Feedback
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>
      {/* CONTACT SECTION */}

<section className="max-w-7xl mx-auto px-6 pb-24">

  <div className="grid lg:grid-cols-2 gap-8">

    {/* LEFT - FORM */}

    <div className="bg-[#0F172A] border border-slate-800 rounded-3xl p-8">

      <h2 className="text-3xl font-bold mb-3">
        Send us a message
      </h2>

      <p className="text-slate-400 mb-8">
        Fill out the form below and we'll get back to you.
      </p>

      <div className="space-y-5">

        <input
          type="text"
          placeholder="Full Name"
          className="w-full h-14 px-5 rounded-xl bg-[#081126] border border-slate-700 focus:border-cyan-500 outline-none"
        />

        <input
          type="email"
          placeholder="Email Address"
          className="w-full h-14 px-5 rounded-xl bg-[#081126] border border-slate-700 focus:border-cyan-500 outline-none"
        />

        <select
          className="w-full h-14 px-5 rounded-xl bg-[#081126] border border-slate-700 focus:border-cyan-500 outline-none"
        >
          <option>General Inquiry</option>
          <option>Technical Support</option>
          <option>Business Partnership</option>
          <option>Bug Report</option>
        </select>

        <input
          type="text"
          placeholder="Subject"
          className="w-full h-14 px-5 rounded-xl bg-[#081126] border border-slate-700 focus:border-cyan-500 outline-none"
        />

        <textarea
          rows={6}
          placeholder="Write your message..."
          className="w-full p-5 rounded-xl bg-[#081126] border border-slate-700 focus:border-cyan-500 outline-none"
        />

        <button
          className="
          w-full
          py-4
          rounded-xl
          bg-gradient-to-r
          from-cyan-500
          to-violet-500
          font-semibold
          hover:scale-[1.02]
          transition
          "
        >
          Send Message
        </button>

      </div>

    </div>

    {/* RIGHT - CONTACT INFO */}

    <div className="space-y-6">

      <div className="bg-[#0F172A] border border-slate-800 rounded-3xl p-6">

        <div className="flex gap-4 items-start">

          <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-2xl">
            📧
          </div>

          <div>

            <h3 className="font-bold text-xl">
              Email Support
            </h3>

            <p className="text-slate-400 mt-2">
              support@lotteryai.com
            </p>

          </div>

        </div>

      </div>

      <div className="bg-[#0F172A] border border-slate-800 rounded-3xl p-6">

        <div className="flex gap-4 items-start">

          <div className="w-14 h-14 rounded-2xl bg-violet-500/10 flex items-center justify-center text-2xl">
            📞
          </div>

          <div>

            <h3 className="font-bold text-xl">
              Phone
            </h3>

            <p className="text-slate-400 mt-2">
              +91 98765 43210
            </p>

          </div>

        </div>

      </div>

      <div className="bg-[#0F172A] border border-slate-800 rounded-3xl p-6">

        <div className="flex gap-4 items-start">

          <div className="w-14 h-14 rounded-2xl bg-pink-500/10 flex items-center justify-center text-2xl">
            💬
          </div>

          <div>

            <h3 className="font-bold text-xl">
              Live Chat
            </h3>

            <p className="text-slate-400 mt-2">
              Available 24/7 for all users.
            </p>

          </div>

        </div>

      </div>

      <div className="bg-[#0F172A] border border-slate-800 rounded-3xl p-6">

        <div className="flex gap-4 items-start">

          <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-2xl">
            📍
          </div>

          <div>

            <h3 className="font-bold text-xl">
              Office
            </h3>

            <p className="text-slate-400 mt-2">
              Lucknow, Uttar Pradesh, India
            </p>

          </div>

        </div>

      </div>

    </div>

  </div>

</section>
{/* MAP SECTION */}

<section className="max-w-7xl mx-auto px-6 pb-24">

  <div className="grid lg:grid-cols-2 gap-8">

    {/* LEFT */}

    <div className="bg-[#0F172A] border border-slate-800 rounded-3xl p-8">

      <div className="inline-flex px-4 py-2 rounded-full bg-cyan-500/10 text-cyan-400 text-sm mb-6">
        Visit Our Office
      </div>

      <h2 className="text-4xl font-bold mb-6">
        Let's Meet In Person
      </h2>

      <p className="text-slate-400 leading-8 mb-8">

        Our team is always available for discussions,
        partnerships, support requests and business inquiries.

      </p>

      <div className="space-y-6">

        <div className="flex gap-4">

          <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center">
            📍
          </div>

          <div>

            <h4 className="font-semibold">
              Address
            </h4>

            <p className="text-slate-400">
              Lucknow, Uttar Pradesh, India
            </p>

          </div>

        </div>

        <div className="flex gap-4">

          <div className="w-12 h-12 rounded-xl bg-violet-500/10 flex items-center justify-center">
            🕒
          </div>

          <div>

            <h4 className="font-semibold">
              Working Hours
            </h4>

            <p className="text-slate-400">
              Monday - Saturday
            </p>

            <p className="text-slate-400">
              9:00 AM - 6:00 PM
            </p>

          </div>

        </div>

      </div>

    </div>

    {/* RIGHT */}

    <div className="bg-[#0F172A] border border-slate-800 rounded-3xl overflow-hidden">

      <iframe
        src="https://maps.google.com/maps?q=lucknow&t=&z=13&ie=UTF8&iwloc=&output=embed"
        width="100%"
        height="100%"
        className="min-h-[420px]"
        loading="lazy"
      />

    </div>

  </div>

</section>

      <Footer />

    </div>
  );
}