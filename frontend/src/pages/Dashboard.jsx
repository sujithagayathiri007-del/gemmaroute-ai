import { motion } from "framer-motion";
import { MapPin, ShieldCheck, Languages } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#05070A] text-white p-8">

      <div className="mb-10">
        <h1 className="text-5xl font-black text-cyan-400">
          GEMMAROUTE HUB
        </h1>

        <p className="text-gray-500 mt-2">
          AI Powered Last-Meter Navigation System
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">

        <motion.div
          whileHover={{ scale: 1.03 }}
          className="bg-white/5 border border-cyan-400/20 rounded-2xl p-6"
        >
          <MapPin className="text-cyan-400 mb-4" size={35} />

          <h2 className="text-xl font-bold mb-3">
            AI Address Simplifier
          </h2>

          <input
            placeholder="Paste messy address..."
            className="w-full p-3 rounded-lg bg-black/30 border border-white/10"
          />

          <button className="mt-4 w-full bg-cyan-400 text-black font-bold py-3 rounded-xl">
            Simplify Address
          </button>

          <div className="mt-5 text-sm text-gray-400">
            Example:
            <br />
            Near temple → left turn → yellow gate house
          </div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.03 }}
          className="bg-white/5 border border-purple-400/20 rounded-2xl p-6"
        >
          <ShieldCheck className="text-purple-400 mb-4" size={35} />

          <h2 className="text-xl font-bold mb-4">
            Delivery Confidence
          </h2>

          <div className="text-6xl font-black text-center text-cyan-400">
            94%
          </div>

          <p className="text-center text-gray-400 mt-4">
            GPS + Landmark + Visual Match
          </p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.03 }}
          className="bg-white/5 border border-pink-400/20 rounded-2xl p-6"
        >
          <Languages className="text-pink-400 mb-4" size={35} />

          <h2 className="text-xl font-bold mb-4">
            Multilingual Voice AI
          </h2>

          <div className="space-y-2">
            <div className="bg-black/30 p-3 rounded-lg">
              Tamil Navigation
            </div>

            <div className="bg-black/30 p-3 rounded-lg">
              Hindi Navigation
            </div>

            <div className="bg-black/30 p-3 rounded-lg">
              Telugu Navigation
            </div>
          </div>

          <p className="text-gray-500 mt-5 text-sm">
            AI voice guidance for delivery agents
          </p>
        </motion.div>

      </div>
    </div>
  );
}