import React, { useEffect, useState } from 'react';
import '../src/styles/App.css'
import type { WorkoutEntry } from './types/workout';
import WorkoutForm from './components/WorkoutForm';
import { NutritionForm } from './components/NutritionForm';
import type { NutritionEntry } from './types/NutritionEntry';
import NutritionStats from './components/NutritionStats';
import WorkoutList from './components/WorkoutList';


const App: React.FC = () => {
  const [nutritionEntries, setNutritionEntries] = useState<NutritionEntry[]>([]);
  const [workoutEntries, setWorkoutEntries] = useState<WorkoutEntry[]>([]);
  const [page, setPage] = useState<'form' | 'list' | 'nutrition' | 'stats'>('form');

  useEffect(() => {
    const savedNutrition = localStorage.getItem('nutritionEntries');
    if (savedNutrition) {
      setNutritionEntries(JSON.parse(savedNutrition));
    }

    const savedWorkout = localStorage.getItem('workoutEntries');
    if (savedWorkout) {
      setWorkoutEntries(JSON.parse(savedWorkout));
    }
  }, []);

  const handleAddNutrition = (entry: NutritionEntry) => {
    const newEntries = [entry, ...nutritionEntries];
    setNutritionEntries(newEntries);
    localStorage.setItem('nutritionEntries', JSON.stringify(newEntries));
  };

  const handleAddWorkout = (entry: WorkoutEntry) => {
    const newEntries = [entry, ...workoutEntries];
    setWorkoutEntries(newEntries);
    localStorage.setItem('workoutEntries', JSON.stringify(newEntries));
  };

  const totalCalories = nutritionEntries.reduce((acc, curr) => acc + curr.calories, 0);
  const totalBurnedCalories = workoutEntries.reduce((acc, curr) => acc + (curr.weight * curr.reps), 0); 
  

  return (
    <div className="app">
      <h1>💪 Тренировки</h1>
      
      <button onClick={() => setPage('form')}>Добавить тренировку</button>
      <button onClick={() => setPage('nutrition')}>Питание</button>
      <button onClick={() => setPage('list')}>Записи</button>
      <button onClick={() => setPage('stats')}>Статистика</button>
      
      {page === 'form' && <WorkoutForm onAdd={handleAddWorkout} />}
      {page === 'nutrition' && <NutritionForm onAdd={handleAddNutrition} />}
      {page === 'stats' && <NutritionStats entries={nutritionEntries} totalCalories={totalCalories} totalBurnedCalories={totalBurnedCalories} />}
      {page === 'list' && <WorkoutList entries={workoutEntries} />}
    </div>
  );
};

export default App;
