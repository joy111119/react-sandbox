import { create } from 'zustand';
import type { Magnet } from '../types';

interface MagnetStore {
  magnets: Magnet[];
  moveMagnet: (id: string, x: number, y: number) => void;
  loadExpansion: () => void;
}

export const useMagnetStore = create<MagnetStore>((set) => ({
  magnets: [
    { id: '1', word: 'summer', status: 'bank', x: 0, y: 0 },
    { id: '2', word: 'night', status: 'bank', x: 0, y: 0 },
    { id: '3', word: 'is', status: 'bank', x: 0, y: 0 },
    { id: '4', word: 'hot', status: 'bank', x: 0, y: 0 },
    { id: '5', word: 'and', status: 'bank', x: 0, y: 0 },
    { id: '6', word: 'code', status: 'bank', x: 0, y: 0 },
    { id: '7', word: 'bug', status: 'bank', x: 0, y: 0 },
  ],

  moveMagnet: (id, x, y) =>
    set((state) => ({
      magnets: state.magnets.map((m) =>
        m.id === id ? { ...m, status: 'fridge', x, y } : m
      ),
    })),

  loadExpansion: () =>
    set((state) => ({
      magnets: [
        ...state.magnets,
        { id: Date.now().toString(), word: 'beautiful', status: 'bank', x: 0, y: 0 },
        { id: Date.now().toString() + '2', word: 'day', status: 'bank', x: 0, y: 0 },
      ],
    })),
}));