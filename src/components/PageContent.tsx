import React from 'react';
import WorkoutForm from './WorkoutForm';
import WorkoutList from './WorkoutList';

import NutritionStats from './NutritionStats';



import '../styles/PageContent.css';
import type { WorkoutEntry } from '../types/workout';
import type { NutritionEntry } from '../types/NutritionEntry';
import { NutritionForm } from './NutritionForm';

interface Props {
  page: 'form' | 'list' | 'stats' | 'nutrition';
  workoutEntries: WorkoutEntry[];
  nutritionEntries: NutritionEntry[];
  onAddWorkout: (entry: WorkoutEntry) => void;
  onAddNutrition: (entry: NutritionEntry) => void;
  onClearWorkouts: () => void;
  onClearNutrition: () => void;
}

const PageContent: React.FC<Props> = ({
  page,
  workoutEntries,
  nutritionEntries,
  onAddWorkout,
  onAddNutrition,
  onClearWorkouts,
  onClearNutrition
}) => {
  const totalCalories = nutritionEntries.reduce((acc, item) => acc + item.calories, 0);
  const totalBurned = workoutEntries.reduce((acc, item) => acc + item.weight * item.reps, 0); 

  if (page === 'form') {
    return <WorkoutForm onAdd={onAddWorkout} />;
  }

  if (page === 'nutrition') {
    return (
      <>
        <NutritionForm onAdd={onAddNutrition} />
        {nutritionEntries.length > 0 && (
          <button className="clear-btn" onClick={onClearNutrition}>
            Очистить питание
          </button>
        )}
      </>
    );
  }

  if (page === 'list') {
    return (
      <>
        <WorkoutList entries={workoutEntries} />
        {workoutEntries.length > 0 && (
          <button className="clear-btn" onClick={onClearWorkouts}>
            Очистить тренировки
          </button>
        )}
      </>
    );
  }

  if (page === 'stats') {
    return (
      <NutritionStats
        entries={nutritionEntries}
        totalCalories={totalCalories}
        totalBurnedCalories={totalBurned}
      />
    );
  }

  return null;
};

export default PageContent;
