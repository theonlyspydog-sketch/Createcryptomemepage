import { motion } from "motion/react";
import { Twitter, Send, Mail, Github } from "lucide-react";
import { Button } from "./ui/button";

export function Footer() {
  return (
    <footer className="py-16 px-4 border-t-2 border-green-500/20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="text-8xl mb-6">🐸</div>
          <h2 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-green-400 to-purple-400 bg-clip-text text-transparent">
            Join the Meme Revolution
          </h2>
          <p className="text-xl text-purple-200 mb-8 max-w-2xl mx-auto">
            Don't miss out on the next 1000x! Join our community today.
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-green-500 to-purple-500 hover:from-green-600 hover:to-purple-600 text-white text-xl px-12 py-6 rounded-full"
          >
            Get $MEME Now! 🚀
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center gap-6 mb-12"
        >
          <motion.a
            whileHover={{ scale: 1.2, rotate: 10 }}
            whileTap={{ scale: 0.9 }}
            href="#"
            className="bg-blue-500 p-4 rounded-full hover:bg-blue-600 transition"
          >
            <Twitter className="w-8 h-8 text-white" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2, rotate: -10 }}
            whileTap={{ scale: 0.9 }}
            href="#"
            className="bg-blue-400 p-4 rounded-full hover:bg-blue-500 transition"
          >
            <Send className="w-8 h-8 text-white" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2, rotate: 10 }}
            whileTap={{ scale: 0.9 }}
            href="#"
            className="bg-purple-500 p-4 rounded-full hover:bg-purple-600 transition"
          >
            <Mail className="w-8 h-8 text-white" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2, rotate: -10 }}
            whileTap={{ scale: 0.9 }}
            href="#"
            className="bg-gray-700 p-4 rounded-full hover:bg-gray-600 transition"
          >
            <Github className="w-8 h-8 text-white" />
          </motion.a>
        </motion.div>

        <div className="text-center text-purple-300 space-y-2">
          <p className="text-lg">
            Contract Address: <span className="text-green-400 font-mono">0x1234...5678</span>
          </p>
          <p className="text-sm opacity-70">
            © 2026 $MEME Token. All memes reserved. Not financial advice. DYOR! 🚀
          </p>
          <p className="text-xs opacity-50">
            This is a meme coin for entertainment purposes. Invest responsibly.
          </p>
        </div>

        {/* Floating animated elements */}
        <motion.div
          className="absolute bottom-20 left-10 text-6xl pointer-events-none"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 15, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          💰
        </motion.div>
        <motion.div
          className="absolute bottom-32 right-10 text-5xl pointer-events-none"
          animate={{
            y: [0, 25, 0],
            rotate: [0, -15, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          🎯
        </motion.div>
      </div>
    </footer>
  );
}
