"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap } from "lucide-react";

export function SplashScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 2800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#030712]"
        >
          {/* Outer glow blob */}
          <motion.div
            initial={{ opacity: 0, scale: 0.4 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="absolute w-[420px] h-[420px] rounded-full bg-emerald-500/20 blur-[80px]"
          />

          {/* Inner tight glow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.3 }}
            animate={{ opacity: [0, 0.6, 0.4] }}
            transition={{ duration: 1.4, ease: "easeOut", delay: 0.3, times: [0, 0.5, 1] }}
            className="absolute w-[180px] h-[180px] rounded-full bg-emerald-400/40 blur-[40px]"
          />

          {/* Logo container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.6, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
            className="relative flex flex-col items-center gap-5"
          >
            {/* Icon */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "backOut", delay: 0.4 }}
              className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-emerald-400 to-emerald-700 flex items-center justify-center shadow-[0_0_40px_8px_rgba(16,185,129,0.5)]"
            >
              <Zap className="w-10 h-10 text-white" strokeWidth={2.5} />
            </motion.div>

            {/* Wordmark */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.65 }}
              className="flex flex-col items-center gap-1"
            >
              <span className="font-syne font-bold text-3xl text-white tracking-tight">
                VibeCode Academy
              </span>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.95 }}
                className="text-emerald-400 text-sm font-medium tracking-widest uppercase"
              >
                Learn · Build · Ship
              </motion.span>
            </motion.div>
          </motion.div>

          {/* Bottom pulse bar */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 1.8, ease: "easeInOut", delay: 0.9 }}
            style={{ originX: 0 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 w-32 h-[2px] rounded-full bg-gradient-to-r from-transparent via-emerald-400 to-transparent"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
