import React, { useEffect, useState } from 'react';
import './styles/global.css';
import { WorkoutForm } from './components/WorkoutForm';
import type { WorkoutEntry } from './types/workout';
import { WorkoutList } from './components/WorkoutList';


const App: React.FC = () => {
  const [entries, setEntries] = useState<WorkoutEntry[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('workouts');
    if (saved) {
      setEntries(JSON.parse(saved));
    }
  }, []);
  
  const addEntry = (entry: WorkoutEntry) =>{
   const updated = [...entries,entry]
   setEntries(updated)
   localStorage.setItem('workouts', JSON.stringify(updated));
  }

  const handleClear = () => {
  localStorage.removeItem('workoutEntries');
  setEntries([]);
  };  

  return (
    <div className="container">
      <h1>прогресс</h1>
       <WorkoutForm onAdd={addEntry}/>
       <WorkoutList entries={entries} />
      <button onClick={handleClear} style={{ marginTop: '10px' }}>
      Очистить все записи
      </button>
    </div>
  );
};

export default App;
