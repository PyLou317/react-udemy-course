import { useState, useRef } from 'react';
import Input from '../components/Input';
import Modal from '../components/Modal';

export default function CreateProjectPage({ onAdd, onCancel }) {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();
  const modal = useRef();

  function handleInputChange(e) {
    const { name, value } = e.target;
    setProject((prevProject) => ({
      ...prevProject,
      [name]: value,
    }));
  }

  function handleSubmit() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    if (!enteredTitle.trim() || !enteredDescription.trim() || !enteredDueDate.trim()) {
      modal.current.open();
      return;
    }

    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  }

  return (
    <>
      <Modal ref={modal}>
        <h2 className="my-4 text-stone-800 font-bold text-xl">Invalid Input</h2>
        <p className="text-stone-600 mb-4">Please enter a valid title, description, and due date.</p>
      </Modal>
      <div className="flex flex-col w-[35rem] mt-16">
        <menu className="flex flex-row gap-4 justify-end items-center my-4">
          <button className="text-stone-800 hover:text-stone-950" onClick={onCancel}>
            Cancel
          </button>
          <button className="bg-stone-800 text-stone-50 hover:bg-stone-950 py-2 px-6 rounded-md" onClick={handleSubmit}>
            Save
          </button>
        </menu>
        <div>
          <Input type="text" label="Title" ref={title} placeholder="Project Title" />
          <Input label="Description" textarea ref={description} id="description" placeholder="Description" />
          <Input type="date" label="Due Date" ref={dueDate} placeholder="Due Date" />
        </div>
      </div>
    </>
  );
}
