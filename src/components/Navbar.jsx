function Navbar() {
  return (
    <header className="bg-white shadow-sm border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4">
        <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          Generative AI Content Assistant
        </h1>
        <p className="text-slate-500 text-sm sm:text-base mt-1">
          Generate, rewrite, summarize and brainstorm with Generative AI.
        </p>
      </div>
    </header>
  );
}

export default Navbar;