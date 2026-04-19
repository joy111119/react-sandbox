import { useDroppable } from '@dnd-kit/core';

export default function FridgeDoor({ children }: { children: React.ReactNode }) {
  const { setNodeRef, isOver } = useDroppable({
    id: 'fridge',
  });

  return (
    <div
      ref={setNodeRef}
      className={`w-full h-full border-4 border-dashed rounded-xl relative p-4 ${
        isOver
          ? 'border-blue-400 bg-blue-100'
          : 'border-gray-400 bg-white'
      }`}
    >
      {children}
    </div>
  );
}