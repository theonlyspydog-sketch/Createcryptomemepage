import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const memes = [
  {
    url: "https://images.unsplash.com/photo-1697564264503-2c9b10a83c5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXBlJTIwZnJvZyUyMG1lbWV8ZW58MXx8fHwxNzY3Nzc2NTgzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    caption: "Pepe the King",
  },
  {
    url: "https://images.unsplash.com/photo-1627570120184-7aec90f5613a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcnlwdG9jdXJyZW5jeSUyMGJpdGNvaW58ZW58MXx8fHwxNzY3NjgyOTgxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    caption: "Crypto Vibes",
  },
  {
    url: "https://images.unsplash.com/photo-1642630438621-c9f19a224c16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2dlJTIwbWVtZXxlbnwxfHx8fDE3Njc3NzY1ODR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    caption: "Diamond Hands",
  },
];

const extraMemes = [
  { emoji: "🚀", caption: "To the Moon!" },
  { emoji: "💎", caption: "HODL Strong" },
  { emoji: "🔥", caption: "Burning Hot" },
];

export function MemeGallery() {
  return (
    <div className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl mb-6 bg-gradient-to-r from-green-400 to-purple-400 bg-clip-text text-transparent">
            Meme Gallery
          </h2>
          <p className="text-xl text-purple-200">
            The finest memes in all of crypto 🎨
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {memes.map((meme, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, rotate: 2 }}
              className="relative group overflow-hidden rounded-3xl border-4 border-green-500/40 hover:border-purple-500/60 transition-all"
            >
              <ImageWithFallback
                src={meme.url}
                alt={meme.caption}
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                <h3 className="text-2xl text-green-300">{meme.caption}</h3>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {extraMemes.map((meme, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="bg-gradient-to-br from-purple-900/50 to-green-900/50 border-2 border-purple-500/30 rounded-3xl p-12 text-center"
            >
              <div className="text-8xl mb-4">{meme.emoji}</div>
              <h3 className="text-2xl text-purple-200">{meme.caption}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
