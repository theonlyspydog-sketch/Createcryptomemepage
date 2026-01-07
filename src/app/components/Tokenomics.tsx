import { motion } from "motion/react";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";

const data = [
  { name: "Community", value: 50, color: "#22c55e" },
  { name: "Liquidity Pool", value: 30, color: "#a855f7" },
  { name: "Marketing", value: 15, color: "#06b6d4" },
  { name: "Team", value: 5, color: "#eab308" },
];

const stats = [
  { label: "Total Supply", value: "1,000,000,000", emoji: "💰" },
  { label: "Tax", value: "0%", emoji: "🎉" },
  { label: "Liquidity Locked", value: "100%", emoji: "🔐" },
  { label: "Contract", value: "Renounced", emoji: "✅" },
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
            <ResponsiveContainer width="100%" height={400}>
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={150}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, value }) => `${name} ${value}%`}
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Legend />
              </PieChart>
            </ResponsiveContainer>
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
