import React from 'react';
import WorkoutForm from './WorkoutForm';
import WorkoutList from './WorkoutList';
import '../styles/PageContent.css'
import type { WorkoutEntry } from '../types/workout';

interface Props {
  page: 'form' | 'list' | 'stats';
  entries: WorkoutEntry[];
  onAdd: (entry: WorkoutEntry) => void;
  onClear: () => void;
}

const PageContent: React.FC<Props> = ({ page, entries, onAdd, onClear }) => {
  if (page === 'form') {
    return <WorkoutForm onAdd={onAdd} />;
  }

  if (page === 'list') {
    return (
      <>
        <WorkoutList entries={entries} />
        {entries.length > 0 && (
          <button className="clear-btn" onClick={onClear}>
            Очистить все записи
          </button>
        )}
      </>
    );
  }

  if (page === 'stats') {
    return <div className="stats-placeholder">📊 Здесь будет статистика!</div>;
  }

  return null;
};

export default PageContent;
