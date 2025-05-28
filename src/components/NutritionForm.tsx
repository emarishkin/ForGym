import { useState, type ChangeEvent, type FC, type FormEvent } from "react";
import type { NutritionEntry } from "../types/NutritionEntry";
import '../styles/NutritionForm.css'

interface NutritionFormProps{
onAdd:(entry:NutritionEntry)=>void
}

export const NutritionForm:FC<NutritionFormProps> = ({onAdd}) =>{

const [form,setForm] = useState({
    meal:'Завтрак',
    calories: '',
    protein: '',
    fats: '',
    carbs: '',
})

const handleChange = (e:ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>{
    setForm({...form,[e.target.name]:e.target.value})
}

const handleSubmit = (e:FormEvent) => {
    e.preventDefault()
    const newEntry:NutritionEntry = {
        id:Date.now().toString(),
        meal:form.meal as 'Завтрак' | 'Обед' | 'Ужин' | 'Перекус',
        calories: Number(form.calories),
        protein: Number(form.protein),
        fats: Number(form.fats),
        carbs: Number(form.carbs),
    }
    onAdd(newEntry)
    setForm({ ...form, calories: '', protein: '', fats: '', carbs: '' })
}

    return(
    <form className="nutrition-form" onSubmit={handleSubmit}>
      <select name="meal" value={form.meal} onChange={handleChange}>
        <option value="Завтрак">Завтрак</option>
        <option value="Обед">Обед</option>
        <option value="Ужин">Ужин</option>
        <option value="Перекус">Перекус</option>
      </select>
      <input name="calories" type="number" placeholder="Калории" value={form.calories} onChange={handleChange} required />
      <input name="protein" type="number" placeholder="Белки (г)" value={form.protein} onChange={handleChange} required />
      <input name="fats" type="number" placeholder="Жиры (г)" value={form.fats} onChange={handleChange} required />
      <input name="carbs" type="number" placeholder="Углеводы (г)" value={form.carbs} onChange={handleChange} required />
      <button type="submit">Добавить приём пищи</button>
    </form>
    )
}