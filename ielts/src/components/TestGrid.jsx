import { useState } from 'react';
import TestCard from './TestCard';

const TestGrid = ({ tests }) => {
  const [selectedTestId, setSelectedTestId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleStartTestClick = (id) => {
    setSelectedTestId(id);
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {tests.map(test => (
          <TestCard 
             key={test.id} 
             test={{...test, onStartTest: handleStartTestClick}} 
          />
        ))}
      </div>

      {/* Modal chọn chế độ thi */}
      {/* {isModalOpen && (
        <TestModeModal 
           testId={selectedTestId} 
           onClose={() => setIsModalOpen(false)} 
        />
      )} */}
    </>
  );
};

export default TestGrid;