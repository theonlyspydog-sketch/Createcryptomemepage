import { motion } from "motion/react";
import { Zap, Users, Lock, TrendingUp } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Blazing fast transactions on the blockchain",
    emoji: "⚡",
  },
  {
    icon: Users,
    title: "Community Driven",
    description: "Powered by the strongest community in crypto",
    emoji: "🤝",
  },
  {
    icon: Lock,
    title: "Secure & Safe",
    description: "Liquidity locked and contract renounced",
    emoji: "🔒",
  },
  {
    icon: TrendingUp,
    title: "Moon Mission",
    description: "Designed for maximum gains and memes",
    emoji: "🌙",
  },
];

export function About() {
  return (
    <div className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl mb-6 bg-gradient-to-r from-green-400 to-purple-400 bg-clip-text text-transparent">
            Why $MEME?
          </h2>
          <p className="text-xl text-purple-200 max-w-2xl mx-auto">
            The ultimate meme coin combining dank memes with serious gains
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05, rotate: 2 }}
              className="bg-gradient-to-br from-green-900/40 to-purple-900/40 backdrop-blur-sm border-2 border-green-500/30 rounded-3xl p-8 text-center"
            >
              <div className="text-6xl mb-4">{feature.emoji}</div>
              <feature.icon className="w-12 h-12 mx-auto mb-4 text-green-400" />
              <h3 className="text-2xl mb-3 text-green-300">{feature.title}</h3>
              <p className="text-purple-200">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
