export interface WorkoutEntry {
  id: string;
  user: 'Егор' | 'Сергей' | 'Роман' | 'Слава' | 'Игорь' | 'Руслан';
  date: string; 
  exercise: 'Жим лежа' | 'Присед' | 'Подтягивания с весом' | 'Становая тяга' | 'Румынская тяга';
  weight: number;
  reps: number;
}