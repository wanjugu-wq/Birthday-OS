import { useEffect, useState } from "react";

export default function SecretMode() {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const konamiCode = [
      "ArrowUp",
      "ArrowUp",
      "ArrowDown",
      "ArrowDown",
      "ArrowLeft",
      "ArrowRight",
      "ArrowLeft",
      "ArrowRight",
      "b",
      "a",
    ];

    let currentIndex = 0;

    const handleKeyPress = (e) => {
      // Close with Escape
      if (e.key === "Escape") {
        setActive(false);
        return;
      }

      // Check Konami sequence
      if (e.key.toLowerCase() === konamiCode[currentIndex].toLowerCase()) {
        currentIndex++;

        if (currentIndex === konamiCode.length) {
          setActive(true);
          currentIndex = 0;
        }
      } else {
        currentIndex = 0;
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  if (!active) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black text-white flex items-center justify-center px-6">
      <div className="text-center max-w-2xl">
        <p className="uppercase tracking-[0.4em] text-sm mb-6 opacity-60">
          Hidden Feature Unlocked
        </p>

        <h1 className="font-bold text-5xl md:text-7xl leading-none tracking-[-0.07em] mb-8">
          DEVELOPER MODE
          <br />
          ENABLED
        </h1>

        <div className="font-mono text-left inline-block text-lg space-y-3 border border-white/10 p-6">
          <p>{">"} New skill unlocked:</p>
          <p className="opacity-80">"Debugging under pressure"</p>

          <div className="h-px bg-white/10 my-4"></div>

          <p>{">"} Achievement unlocked:</p>
          <p className="opacity-80">Future Software Engineer</p>
        </div>

        <p className="mt-10 text-sm opacity-50 font-mono">Press ESC to exit</p>
      </div>
    </div>
  );
}
