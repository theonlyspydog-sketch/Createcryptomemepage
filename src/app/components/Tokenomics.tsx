import { motion } from "motion/react";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";

const data = [
  { name: "Community", value: 100, color: "#22c55e" },
];

const stats = [
  { label: "Total Supply", value: "1,000,000,000", emoji: "💰" },
  { label: "Tax", value: "0%", emoji: "🎉" },
  { label: "Community", value: "100%", emoji: "🤝" },
  { label: "Liquidity", value: "100% Locked", emoji: "🔒" },
];

export function Tokenomics() {
  return (
    <div className="py-24 px-4 bg-black/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl mb-6 bg-gradient-to-r from-purple-400 to-green-400 bg-clip-text text-transparent">
            Tokenomics
          </h2>
          <p className="text-xl text-green-200">
            Fair launch, community first! 🚀
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              animate={{
                y: [0, -10, 0],
                rotate: [0, 3, 0, -3, 0],
              }}
              transition={{
                y: {
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
                rotate: {
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
              className="flex items-center justify-center"
            >
              <ResponsiveContainer width="100%" height={400}>
                <PieChart>
                  <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={120}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ cx, cy, name, value }) => (
                      <text
                        x={cx}
                        y={cy - 140}
                        textAnchor="middle"
                        dominantBaseline="middle"
                        className="fill-green-300 text-2xl font-bold"
                      >
                        {`${name} ${value}%`}
                      </text>
                    )}
                  >
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.03, x: 10 }}
                className="bg-gradient-to-r from-green-900/50 to-purple-900/50 border-2 border-green-500/30 rounded-2xl p-6 flex items-center justify-between"
              >
                <div className="flex items-center gap-4">
                  <span className="text-5xl">{stat.emoji}</span>
                  <div>
                    <h3 className="text-xl text-purple-200">{stat.label}</h3>
                    <p className="text-3xl text-green-300">{stat.value}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}