import { useState } from "react";

const commands = {
  help: `
Available commands:

whoami     Learn about the system
birthday   Celebrate 
future     View projected career path
sudo       Try elevated privileges
ship       Deploy latest build
joke       Developer humour
xp         View experience points
404        Simulate an error
hello      Say hello
status     System status
hack       Attempt world domination
version    Show current version
time       Show current time
clear      Clear terminal
`,

  whoami: "Future Senior Software Engineer/ Researcher ",

  birthday: "🎉 Happy Birthday!\n\nVersion 12.0 deployed successfully.",

  future: "Loading future...\n\n Senior Engineer @ Awesome Company.",

  sudo: "Permission denied.\n\nNice try 😏",

  ship: " Deploying to production...\n\n✅ Deployment successful.",

  joke: "Why do programmers prefer dark mode?\n\nBecause light attracts bugs.",

  xp: "XP LEVEL: 12\n\nSkills unlocked:\n• Curiosity\n• Debugging\n• Creativity",

  404: "404: Command not found.\n\nOh wait... you found it.",

  hello: "Hello, Allan!",

  status: " ONLINE\n\nCurrently building cool stuff.",

  hack: "Accessing NASA servers...\n\n█████░░░░░ 52%\n\nJust kidding 😂",

  version: "Version 12.0 (Stable Release)",

  time: () => `Current system time:\n${new Date().toLocaleTimeString()}`,
};

export default function Terminal() {
  const [history, setHistory] = useState([
    "Welcome to BirthdayOS v12.0",
    "Type 'help' to view available commands.",
  ]);

  const [input, setInput] = useState("");
  const [isDark, setIsDark] = useState(false);

  const runCommand = (e) => {
    if (e.key !== "Enter") return;

    const cmd = input.trim().toLowerCase();

    if (!cmd) return;

    // Clear terminal
    if (cmd === "clear") {
      setHistory(["Welcome to BirthdayOS v12.0", "Terminal cleared."]);
      setInput("");
      return;
    }

    // Secret dark mode command
    if (cmd === "darkmode") {
      document.documentElement.classList.add("dark");

      setHistory((prev) => [
        ...prev,
        "> darkmode",
        "Dark mode activated.\n You found the secret code! Super impressive, mate!\n",
      ]);

      setInput("");
      setIsDark(true);
      return;
    }

    if (cmd === "lightmode") {
      document.documentElement.classList.remove("dark");

      setHistory((prev) => [...prev, "> lightmode", "Light mode activated."]);

      setInput("");
      setIsDark(false);
      return;
    }

    let output;

    if (commands[cmd]) {
      output =
        typeof commands[cmd] === "function" ? commands[cmd]() : commands[cmd];
    } else {
      output = `Command not found: ${cmd}\n\nType 'help' to see available commands.`;
    }

    setHistory((prev) => [...prev, `> ${cmd}`, output]);

    setInput("");
  };

  return (
    <section className="px-6 md:px-20 py-24">
      <h2 className="text-5xl font-bold tracking-tight mb-12">
        Developer Console
      </h2>

      <div
        className="rounded-3xl p-8 transition-all duration-500"
        style={{
          backgroundColor: "var(--text)",
          color: "var(--bg)",
          border: isDark ? "1px solid rgba(260,260,260,0.5)" :"1px solid rgba(0,0,0,0.08)",
          boxShadow: isDark ? "0 30px 80px rgba(0,0,0,0.45)" :"0 20px 60px rgba(0,0,0,0.12)",
        }}
      >
        <div className="flex gap-2 mb-6">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>

        <div className="font-mono min-h-75 space-y-3">
          {history.map((line, index) => (
            <p key={index} className="whitespace-pre-wrap">
              {line}
            </p>
          ))}

          <div className="flex items-center gap-2">
            <span>{">"}</span>

            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={runCommand}
              className="bg-transparent outline-none w-full"
              style={{
                caretColor: "var(--bg)",
              }}
              autoComplete="off"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
