import React, { useState } from 'react';
import Modal from './components/Modal';

export default function App() {
  const [showInfo, setShowInfo] = useState(false);
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">My Modal Demo</h2>

      <button 
        onClick={() => setShowInfo(true)}
        className="bg-blue-600 text-white px-4 py-2 rounded mr-4"
      >
        Show Details
      </button>

      <button 
        onClick={() => setShowMore(true)}
        className="bg-green-600 text-white px-4 py-2 rounded"
      >
        Show More
      </button>

      <Modal isOpen={showInfo} onClose={() => setShowInfo(false)}>
        <p>This is content injected inside the modal!</p>
      </Modal>

      <Modal isOpen={showMore} onClose={() => setShowMore(false)}>
        <p>Some other information here!</p>
      </Modal>
    </div>
  );
}