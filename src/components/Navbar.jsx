export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-screen">
      <div className="mx-4 mt-4 rounded-full border border-black/10 dark:border-white/10 bg-white/50 dark:bg-black/50 backdrop-blur-md transition-colors duration-500">
        <div className="px-6 md:px-8 py-4 flex justify-between items-center">
          <p className="font-bold text-2xl">v12</p>

          <p className="uppercase tracking-[0.3em] text-xs">Birthday Release</p>
        </div>
      </div>
    </header>
  );
}
