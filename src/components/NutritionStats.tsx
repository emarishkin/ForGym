import React from 'react';
import type { NutritionEntry } from '../types/NutritionEntry';
import '../styles/NutritionStats.css'


interface Props {
  entries: NutritionEntry[];
  totalCalories: number;
  totalBurnedCalories: number;
}

const NutritionStats: React.FC<Props> = ({ entries, totalCalories, totalBurnedCalories }) => {
  const totalProtein = entries.reduce((acc, curr) => acc + curr.protein, 0);
  const totalFats = entries.reduce((acc, curr) => acc + curr.fats, 0);
  const totalCarbs = entries.reduce((acc, curr) => acc + curr.carbs, 0);

  const balance = totalCalories - totalBurnedCalories;

  return (
    <div className="nutrition-stats">
      <h3>Общий баланс</h3>
      <p>Калории: {totalCalories}</p>
      <p>Сожжено: {totalBurnedCalories}</p>
      <p>Баланс: {balance > 0 ? 'Положительный' : 'Отрицательный'}</p>
      <p>Белки: {totalProtein} г</p>
      <p>Жиры: {totalFats} г</p>
      <p>Углеводы: {totalCarbs} г</p>
    </div>
  );
};

export default NutritionStats;
