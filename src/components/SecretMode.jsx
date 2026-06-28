import { useEffect, useState } from "react";

export default function SecretMode() {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.ctrlKey && e.shiftKey && e.key === "D") {
        setActive(true);
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => window.removeEventListener("keydown", handleKeyPress);
  }, []);

  if (!active) return null;

  return (
    <div className="fixed inset-0 bg-black text-white flex items-center justify-center z-50">
      <div className="text-center">
        <h1 className="font-bold text-6xl mb-6">DEVELOPER MODE</h1>

        <p className="font-mono">Achievement Unlocked 🏆</p>
      </div>
    </div>
  );
}
