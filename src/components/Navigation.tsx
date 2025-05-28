import React from 'react';
import '../styles/Navigation.css'

interface Props {
  currentPage: string;
  onChange: (page: 'form' | 'list' | 'stats' | 'nutrition') => void;
}

const Navigation: React.FC<Props> = ({ currentPage, onChange }) => {
  return (
    <div className="menu">
      <button onClick={() => onChange('form')} className={currentPage === 'form' ? 'active' : ''}>➕ Тренировка</button>
      <button onClick={() => onChange('nutrition')} className={currentPage === 'nutrition' ? 'active' : ''}>🍽️ Питание</button>
      <button onClick={() => onChange('list')} className={currentPage === 'list' ? 'active' : ''}>📄 Записи</button>
      <button onClick={() => onChange('stats')} className={currentPage === 'stats' ? 'active' : ''}>📈 Статистика</button>
    </div>
  );
};

export default Navigation;
