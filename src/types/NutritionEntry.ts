export interface NutritionEntry {
  id: string;
  meal: 'Завтрак' | 'Обед' | 'Ужин' | 'Перекус';
  calories: number;     
  protein: number;      
  fats: number;         
  carbs: number;        
}
