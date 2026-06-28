hero.jsx;
import { motion, useScroll, useTransform } from "framer-motion";
import { hero } from "../data/content";

export default function Hero() {
  const { scrollY } = useScroll();

  // Hero content animations
  const scale = useTransform(scrollY, [0, 600], [1, 1.15]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);
  const rotateX = useTransform(scrollY, [0, 600], [0, 8]);
  const textY = useTransform(scrollY, [0, 500], [0, -100]);

  // Side "12" animation
  const numberY = useTransform(scrollY, [0, 600], [0, -150]);
  const numberRotate = useTransform(scrollY, [0, 600], [0, 10]);

  return (
    <section className="relative min-h-screen flex items-center px-6 md:px-20 overflow-hidden pt-24">
      {/* Giant side number */}
      <motion.p
        style={{
          y: numberY,
          rotate: numberRotate,
        }}
        className="
  absolute
  right-2 md:right-12
  top-1/2
  -translate-y-1/2
  text-[8rem]
  sm:text-[12rem]
  md:text-[20rem]
  lg:text-[28rem]
  font-bold
  opacity-[0.06]
  select-none
  pointer-events-none
"
      >
        12
      </motion.p>

      {/* Main hero content */}
      <motion.div
        className="relative z-10 max-w-4xl"
        style={{
          scale,
          opacity,
          rotateX,
          y: textY,
          transformPerspective: 1000,
        }}
      >
        <p className="uppercase tracking-[0.4em] text-sm mb-4">
          Version {hero.version}
        </p>

        <h1 className="font-bold text-[5rem] md:text-[12rem] leading-[0.9] tracking-[-0.07em]">
          {hero.name}
        </h1>

        <h2 className="text-2xl mt-4">{hero.subtitle}</h2>

        <p
          className="mt-8 max-w-xl text-lg transition-colors duration-500"
          style={{ color: "var(--muted)" }}
        >
          {hero.description}
        </p>

        <div
          className="mt-2 inline-flex items-center gap-3 px-5 py-3 backdrop-blur-sm transition-colors duration-500"
          style={{
            border: "1px solid rgba(128,128,128,0.2)",
            backgroundColor: "rgba(255,255,255,0.08)",
          }}
        >
          <div className="font-mono text-sm">
            <p>&gt; status</p>
            <p className="opacity-70">ONLINE ● BUILDING COOL STUFF</p>
          </div>
        </div>

        <div className="mt-20">
          <p className="uppercase tracking-[0.4em] text-sm">Scroll ↓</p>
        </div>
      </motion.div>
    </section>
  );
}
