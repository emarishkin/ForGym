import React, { useState, useEffect } from 'react';
import type { WorkoutEntry } from './types/workout';
import WorkoutForm from './components/WorkoutForm';
import WorkoutList from './components/WorkoutList';
import '../src/styles/App.css'


const App: React.FC = () => {
  const [entries, setEntries] = useState<WorkoutEntry[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('workoutEntries');
    if (saved) {
      setEntries(JSON.parse(saved));
    }
  }, []);

  const handleAddEntry = (entry: WorkoutEntry) => {
    const newEntries = [entry, ...entries];
    setEntries(newEntries);
    localStorage.setItem('workoutEntries', JSON.stringify(newEntries));
  };

  const handleClear = () => {
    localStorage.removeItem('workoutEntries');
    setEntries([]);
  };

  return (
    <div className="app">
      <h1>Прогресс</h1>
      <WorkoutForm onAdd={handleAddEntry} />
      <WorkoutList entries={entries} />
      {entries.length > 0 && (
        <button className="clear-btn" onClick={handleClear}>
          Очистить все записи
        </button>
      )}
    </div>
  );
};

export default App;
