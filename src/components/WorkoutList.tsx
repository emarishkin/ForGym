import React from 'react';
import type { WorkoutEntry } from '../types/workout';
import '../styles/List.css'


interface Props {
  entries: WorkoutEntry[];
}

const WorkoutList: React.FC<Props> = ({ entries }) => {
  if (entries.length === 0) return <p className="empty">Пока нет записей...</p>;

  return (
    <div className="list">
      {entries.map((entry) => (
        <div key={entry.id} className='entry'>
          <strong>{entry.user}</strong> — {entry.date} — {entry.exercise}: {entry.weight} кг × {entry.reps} раз
        </div>
      ))}
    </div>
  );
};

export default WorkoutList;
