function InputSection({
  selectedTask,
  inputText,
  setInputText,
  error,
  isLoading,
  handleGenerate,
  handleClear,
}) {
  // Placeholder texts for each task
  const getPlaceholder = () => {
    const placeholders = {
      generate: 'Describe what you want to generate... (e.g., "Write a blog post about AI")',
      rewrite: 'Paste the text you want to rewrite...',
      summarize: 'Paste the text you want to summarize...',
      ideas: 'Describe a topic for which you need ideas... (e.g., "Content ideas for a fitness blog")',
    };
    return placeholders[selectedTask] || 'Enter your text here...';
  };

  return (
    <div>
      <div className="mb-4">
        <label className="block text-sm font-semibold text-slate-700 mb-2">
          Your Input
        </label>
        <textarea
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder={getPlaceholder()}
          rows="4"
          className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 focus:outline-none transition resize-y text-slate-700 placeholder:text-slate-400"
        />
      </div>

      {/* Error Message */}
      {error && (
        <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm">
          ⚠️ {error}
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-3 mb-6">
        <button
          onClick={handleGenerate}
          disabled={isLoading}
          className="px-6 py-2.5 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium rounded-xl shadow-md hover:shadow-lg transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed flex items-center gap-2"
        >
          {isLoading ? (
            <>
              <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Generating...
            </>
          ) : (
            '🚀 Generate'
          )}
        </button>

        <button
          onClick={handleClear}
          className="px-6 py-2.5 bg-slate-200 hover:bg-slate-300 text-slate-700 font-medium rounded-xl transition-all duration-200"
        >
          Clear
        </button>
      </div>
    </div>
  );
}

export default InputSection;