import { DndContext } from '@dnd-kit/core';
import type { DragEndEvent } from '@dnd-kit/core';

import { useMagnetStore } from './store/useMagnetStore';
import WordMagnet from './components/WordMagnet';
import FridgeDoor from './components/FridgeDoor';

export default function App() {
  const magnets = useMagnetStore((s) => s.magnets);
  const moveMagnet = useMagnetStore((s) => s.moveMagnet);
  const loadExpansion = useMagnetStore((s) => s.loadExpansion);

  const handleDragEnd = (event: DragEndEvent) => {
    if (!event.over || event.over.id !== 'fridge') return;

    const activeRect = event.active.rect.current.translated;
    const fridgeRect = event.over.rect;

    if (!activeRect) return;

    const x = activeRect.left - fridgeRect.left;
    const y = activeRect.top - fridgeRect.top;

    moveMagnet(event.active.id as string, x, y);
  };

  const bank = magnets.filter((m) => m.status === 'bank');
  const fridge = magnets.filter((m) => m.status === 'fridge');

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className="p-8 min-h-screen bg-gray-100">

        {/* HEADER */}
        <div className="bg-white p-4 rounded-xl shadow mb-6 flex justify-between items-center print:hidden">
          <div>
            <h1 className="text-lg font-bold text-blue-600">Fridge poetry</h1>
            <p className="text-xs text-gray-400">
              Drag words to fridge door and locate them freely.
            </p>
          </div>

          <div className="flex gap-3">
            <button
              onClick={loadExpansion}
              className="bg-amber-400 px-4 py-2 rounded-lg font-semibold"
            >
              Load extra words 📦
            </button>

            <button
              onClick={() => window.print()}
              className="bg-black text-white px-4 py-2 rounded-lg font-semibold"
            >
              Print the poem 🖨️
            </button>
          </div>
        </div>

        {/* MAIN LAYOUT */}
        <div className="flex flex-row gap-6">

          {/* ✅ WHITE WORD BANK */}
          <div className="w-64 bg-white text-black p-4 rounded-xl shadow border border-gray-300 print:hidden">
            <h2 className="text-xs font-bold mb-3 text-gray-500">WORD BANK</h2>

            <div className="flex flex-wrap gap-2">
              {bank.map((m) => (
                <WordMagnet key={m.id} magnet={m} />
              ))}
            </div>
          </div>

          {/* FRIDGE */}
          <div className="flex-1">
            <div className="bg-white p-4 rounded-xl shadow border border-gray-300">

              {/* FIXED HEIGHT */}
              <div style={{ height: '400px' }}>
                <FridgeDoor>
                  {fridge.length === 0 ? (
                    <p className="text-gray-300 text-center mt-32">
                      Drop magnets here
                    </p>
                  ) : (
                    fridge.map((m) => (
                      <WordMagnet key={m.id} magnet={m} />
                    ))
                  )}
                </FridgeDoor>
              </div>

            </div>
          </div>

        </div>
      </div>
    </DndContext>
  );
}