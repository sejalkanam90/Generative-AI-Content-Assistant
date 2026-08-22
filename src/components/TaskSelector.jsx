const tasks = [
  { id: 'generate', label: '✨ Generate Content' },
  { id: 'rewrite', label: '✏️ Rewrite Text' },
  { id: 'summarize', label: '📝 Summarize Text' },
  { id: 'ideas', label: '💡 Generate Ideas' },
];

function TaskSelector({ selectedTask, setSelectedTask, setAiResponse, setError }) {
  const handleTaskChange = (taskId) => {
    setSelectedTask(taskId);
    setAiResponse('');  // Clear old response when switching tasks
    setError('');
  };

  return (
    <div className="mb-6">
      <label className="block text-sm font-semibold text-slate-700 mb-2">
        Select Task
      </label>
      <div className="flex flex-wrap gap-2">
        {tasks.map((task) => (
          <button
            key={task.id}
            onClick={() => handleTaskChange(task.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              selectedTask === task.id
                ? 'bg-purple-600 text-white shadow-md shadow-purple-200'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            {task.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default TaskSelector;