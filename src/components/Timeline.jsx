import { motion } from "framer-motion";

const events = [
  {
    version: "v1.0",
    text: "Human successfully deployed.",
  },
  {
    version: "v5.0",
    text: "Discovered the internet.",
  },
  {
    version: "v8.0",
    text: "Began asking dangerous questions.",
  },
  {
    version: "v10.0",
    text: "Started building cool things.",
  },
  {
    version: "v12.0",
    text: "Legendary release shipped.",
  },
];

export default function Timeline() {
  return (
    <section className="px-6 md:px-20 py-24">
      <motion.section
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="px-6 md:px-20 py-24"
      >
        <h2 className="font-bold text-5xl mb-12">Release Notes</h2>

        <div className="space-y-12">
          {events.map((event) => (
            <div key={event.version} className="border-l-2 border-black dark:border-gray-300 pl-8">
              <p className="font-mono text-sm mb-2">{event.version}</p>

              <p className="text-2xl">{event.text}</p>
            </div>
          ))}
        </div>
      </motion.section>
    </section>
  );
}
