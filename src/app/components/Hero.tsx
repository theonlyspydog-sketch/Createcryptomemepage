import { motion } from "motion/react";
import { Twitter, Send, TrendingUp } from "lucide-react";
import { Button } from "./ui/button";

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
      {/* Animated background circles */}
      <motion.div
        className="absolute top-20 left-10 w-64 h-64 bg-green-500/20 rounded-full blur-3xl"
        animate={{
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"
        animate={{
          y: [0, -40, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative z-10 text-center max-w-5xl">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 15,
          }}
          className="mb-8"
        >
          <div className="text-9xl mb-4">🐸</div>
        </motion.div>

        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-7xl md:text-9xl mb-6 tracking-tight"
        >
          <span className="bg-gradient-to-r from-green-400 via-emerald-300 to-green-500 bg-clip-text text-transparent">
            $MEME
          </span>
        </motion.h1>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-2xl md:text-3xl text-green-300 mb-12 max-w-3xl mx-auto"
        >
          The most legendary meme coin in the crypto universe 🚀
          <br />
          <span className="text-purple-300">To the moon and beyond!</span>
        </motion.p>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap gap-4 justify-center items-center mb-12"
        >
          <Button
            size="lg"
            className="bg-green-500 hover:bg-green-600 text-black text-xl px-8 py-6 rounded-full"
          >
            <TrendingUp className="mr-2" />
            Buy $MEME
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-purple-500 text-purple-300 hover:bg-purple-500/20 text-xl px-8 py-6 rounded-full"
          >
            View Chart
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex gap-6 justify-center"
        >
          <motion.a
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            href="#"
            className="bg-blue-500 p-4 rounded-full hover:bg-blue-600 transition"
          >
            <Twitter className="w-6 h-6 text-white" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1, rotate: -5 }}
            whileTap={{ scale: 0.95 }}
            href="#"
            className="bg-blue-400 p-4 rounded-full hover:bg-blue-500 transition"
          >
            <Send className="w-6 h-6 text-white" />
          </motion.a>
        </motion.div>

        {/* Floating emojis */}
        <motion.div
          className="absolute top-1/4 left-1/4 text-6xl"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          💎
        </motion.div>
        <motion.div
          className="absolute top-1/3 right-1/4 text-5xl"
          animate={{
            y: [0, 20, 0],
            rotate: [0, -10, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          🚀
        </motion.div>
      </div>
    </div>
  );
}
