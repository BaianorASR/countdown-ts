import React from 'react';

export function Header() {
  return (
    <div className="flex justify-between p-5 min-w-full shadow-md bg-slate-800">
      <h1>Nobody Here is Gringo</h1>
      <div>
        <audio
          src="https://www.youtube.com/watch?v=SVZgJlfKuUg"
          controls
          autoPlay
        ></audio>
      </div>
      <input type="text" />
    </div>
  );
}
