import React from 'react';
import type { WorkoutEntry } from '../types/workout';


interface Props {
  entries: WorkoutEntry[];
}

export const WorkoutList: React.FC<Props> = ({ entries }) => {
  return (
    <div>
      {entries.map((entry) => (
        <div key={entry.id}>
          <strong>{entry.user}</strong> — {entry.date} — {entry.exercise}: {entry.weight} кг × {entry.reps}
        </div>
      ))}
    </div>
  );
};
