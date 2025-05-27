import React, { useState } from 'react';
import type { WorkoutEntry } from '../types/workout';
import '../styles/Form.css'


interface Props {
  onAdd: (entry: WorkoutEntry) => void;
}

const WorkoutForm: React.FC<Props> = ({ onAdd }) => {
  const [form, setForm] = useState({
    user: 'Егор',
    date: '',
    exercise: '',
    weight: '',
    reps: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newEntry: WorkoutEntry = {
      id: Date.now().toString(),
      user: form.user as 'Егор' | 'Сергей' | 'Роман' | 'Слава',
      date: form.date,
      exercise: form.exercise,
      weight: Number(form.weight),
      reps: Number(form.reps),
    };
    onAdd(newEntry);
    setForm({ ...form, exercise: '', weight: '', reps: '' });
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <select name="user" value={form.user} onChange={handleChange}>
        <option value="Егор">Егор</option>
        <option value="Сергей">Сергей</option>
        <option value="Роман">Роман</option>
        <option value="Слава">Слава</option>
      </select>
      <input name="date" type="date" value={form.date} onChange={handleChange} required />
      <input name="exercise" placeholder="Упражнение" value={form.exercise} onChange={handleChange} required />
      <input name="weight" type="number" placeholder="Вес" value={form.weight} onChange={handleChange} required />
      <input name="reps" type="number" placeholder="Повторы" value={form.reps} onChange={handleChange} required />
      <button type="submit">Добавить</button>
    </form>
  );
};

export default WorkoutForm;
