import { useState } from 'react';

export default function NewTask({ onAdd }) {
  const [task, setTask] = useState('');

  function handleChange(e) {
    setTask(e.target.value);
  }

  function handleSubmit(e) {
    if (task.trim() === '') return;
    e.preventDefault();
    onAdd(task);
    setTask('');
  }

  return (
    <div className="flex items-center gap-4">
      <input type="text" className="w-64 px-2 py-2 rounded-sm bg-stone-200" onChange={handleChange} />
      <button className="text-stone-700 hover:text-stone-950" onClick={handleSubmit}>
        Add Task
      </button>
    </div>
  );
}
