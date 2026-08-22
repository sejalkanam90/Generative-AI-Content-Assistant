import Loading from './Loading';

function OutputSection({ aiResponse, isLoading, handleCopy }) {
  if (!aiResponse && !isLoading) {
    return null; // Don't show anything if no data
  }

  return (
    <div className="mt-6 p-5 bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl border border-purple-200/50">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-semibold text-slate-700 flex items-center gap-2">
          <span>🤖</span> AI Response
        </h3>
        {aiResponse && (
          <button
            onClick={handleCopy}
            className="px-3 py-1.5 bg-white hover:bg-slate-50 text-slate-600 text-sm font-medium rounded-lg border border-slate-200 shadow-sm transition-all duration-200"
          >
            📋 Copy
          </button>
        )}
      </div>

      {isLoading ? (
        <Loading />
      ) : (
        <p className="text-slate-700 whitespace-pre-wrap leading-relaxed">
          {aiResponse}
        </p>
      )}
    </div>
  );
}

export default OutputSection;