import { specs } from "../data/content";
import { motion } from "framer-motion";

export default function Specs() {
  return (
    <section className="px-6 md:px-20 py-24">
      <motion.section
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="px-6 md:px-20 py-24"
      >
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
          Specifications
        </h2>

        <div className="border-t border-black dark:border-gray-300">
          {specs.map((spec) => (
            <div
              key={spec.label}
              className="flex justify-between py-6 border-b border-black dark:border-gray-300 transition-all duration-300 hover:px-4"
            >
              <span>{spec.label}</span>
              <span>{spec.value}</span>
            </div>
          ))}
        </div>
      </motion.section>
    </section>
  );
}
