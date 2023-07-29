import React from 'react';
import Reminder from '../models/Reminder';

interface ReminderListProps {
  items: Reminder[];
  onRemoveReminder: (id: number) => void;
}

function ReminderList({ items, onRemoveReminder }: ReminderListProps) {
  return (
    <div>
      <ul className='outline outline-offset-2 outline-blue-500 relative  '>
        {items.map((item) => (
          <li
            className='border-zinc-500 outline outline-gray-500 p-2 text-left '
            key={item.id}>
            {item.title}
            <button
              onClick={() => onRemoveReminder(item.id)}
              className=' bg-red-200 outline outline-amber-900 border py-1 px-4 rounded-lg absolute  text-red-800 mx-auto right-5 '>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ReminderList;
