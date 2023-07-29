import React, { useState } from 'react';

interface NewReminderProps {
  onAddReminder: (title: string) => void;
}

function NewReminder({ onAddReminder }: NewReminderProps): JSX.Element {
  const [title, setTitle] = useState('');
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(!title) return;
    onAddReminder(title);
    setTitle('');
  };
  return (
    <div>
      <form onSubmit={submitHandler} action='' className='my-3'>
        <label htmlFor='title'></label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className='outline rounded-2xl py-2 w-3/4'
          id='title '
          type='text'
        />
        <button
          className='bg-[#006699] py-2 px-5 mx-2 rounded-xl text-white '
          type='submit'>
          Submit
        </button>
      </form>
    </div>
  );
}

export default NewReminder;
