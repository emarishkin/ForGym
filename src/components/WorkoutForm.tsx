import { useState, type ChangeEvent, type FC, type FormEvent } from "react";
import type { WorkoutEntry } from "../types/workout";


interface WorkoutFormProps{
onAdd: (entry: WorkoutEntry) => void;
}

export const WorkoutForm:FC<WorkoutFormProps> = ({onAdd}) => {

const [form,setForm] = useState({
    user: 'Егор',
    date: '',
    exercise: '',
    weight: '',
    reps: '',
})

const handleChange = (e:ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>{
  setForm({...form, [e.target.name]: e.target.value})
}

const handleSubmit = (e:FormEvent) =>{
 e.preventDefault()
 const newEntry:WorkoutEntry = {
    id: Date.now().toString(),
    user:form.user as 'Егор' | 'Сергей',
    date:form.date,
    exercise:form.exercise,
    weight:Number(form.weight),
    reps:Number(form.reps)
 }
onAdd(newEntry);
setForm({ ...form, exercise: '', weight: '', reps: '' });
}

    return(
       <form onSubmit={handleSubmit}>
            <select name="user" value={form.user} onChange={handleChange}>
                <option value="Егор">Егор</option>
                <option value="Сергей">Сергей</option>
            </select>
                <input name="date" type="date" value={form.date} onChange={handleChange} required />
                <input name="exercise" placeholder="Упражнение" value={form.exercise} onChange={handleChange} required />
                <input name="weight" type="number" placeholder="Вес (кг)" value={form.weight} onChange={handleChange} required />
                <input name="reps" type="number" placeholder="Повторения" value={form.reps} onChange={handleChange} required />
                <button type="submit">Добавить +</button>
       </form>
    )
}