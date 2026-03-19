import { useState } from 'react';

interface CardProps {
  name: string;
  role: string;
}

export function TeamCard({ name, role }: CardProps) {
  // State to track votes
  const [votes, setVotes] = useState(0);

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 max-w-xs text-center border border-gray-100">
      {/* Display props */}
      <h2 className="text-xl font-bold text-slate-800">{name}</h2>
      <p className="text-slate-500 mb-4">{role}</p>

      {/* Button to increment votes */}
      <button
        onClick={() => setVotes((prev) => prev + 1)}
        className="w-full bg-blue-50 text-blue-600 font-bold py-2 rounded-xl hover:bg-blue-100 transition-colors flex justify-center gap-2"
      >
        <span>Vote</span>
        <span>❤️ {votes}</span>
      </button>
    </div>
  );
}