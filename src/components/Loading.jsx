function Loading() {
  return (
    <div className="flex items-center justify-center py-8">
      <div className="flex space-x-2">
        <div className="w-3 h-3 bg-purple-400 rounded-full animate-bounce"></div>
        <div className="w-3 h-3 bg-purple-500 rounded-full animate-bounce delay-100"></div>
        <div className="w-3 h-3 bg-purple-600 rounded-full animate-bounce delay-200"></div>
      </div>
    </div>
  );
}

export default Loading;