import { useState } from 'react';
import Navbar from './components/Navbar';
import TaskSelector from './components/TaskSelector';
import InputSection from './components/InputSection';
import OutputSection from './components/OutputSection';

function App() {
  // State management
  const [selectedTask, setSelectedTask] = useState('generate');
  const [inputText, setInputText] = useState('');
  const [aiResponse, setAiResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  // Handle Generate - Calls Backend
  const handleGenerate = async () => {
    if (!inputText.trim()) {
      setError('Please enter some text first.');
      return;
    }
    setError('');
    setIsLoading(true);
    setAiResponse('');

    try {
      const response = await fetch(
        'https://generative-ai-content-assistant.onrender.com/api/generate',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            task: selectedTask,
            inputText: inputText,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong');
      }

      setAiResponse(data.data);
    } catch (err) {
      setError(err.message || 'Failed to connect to the AI service.');
    } finally {
      setIsLoading(false);
    }
  };

  // Copy response
  const handleCopy = () => {
    if (aiResponse) {
      navigator.clipboard.writeText(aiResponse);
      alert('Copied to clipboard!');
    }
  };

  // Clear all fields
  const handleClear = () => {
    setInputText('');
    setAiResponse('');
    setError('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Navbar />

      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
        <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 border border-slate-200/60">
          <TaskSelector
            selectedTask={selectedTask}
            setSelectedTask={setSelectedTask}
            setAiResponse={setAiResponse}
            setError={setError}
          />

          <InputSection
            selectedTask={selectedTask}
            inputText={inputText}
            setInputText={setInputText}
            error={error}
            isLoading={isLoading}
            handleGenerate={handleGenerate}
            handleClear={handleClear}
          />

          <OutputSection
            aiResponse={aiResponse}
            isLoading={isLoading}
            handleCopy={handleCopy}
          />
        </div>

        <p className="text-center text-slate-400 text-xs mt-6">
          Powered by Google Gemini AI • Your data is processed securely
        </p>
      </main>
    </div>
  );
}

export default App;