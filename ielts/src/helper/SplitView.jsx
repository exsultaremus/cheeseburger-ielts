import React, { useState, useRef, useEffect } from 'react';

const SplitView = ({ children }) => {
  const [leftWidth, setLeftWidth] = useState(50); // Khởi tạo 50%
  const containerRef = useRef(null);
  const isDragging = useRef(false);

  const handleMouseDown = () => {
    isDragging.current = true;
    document.body.style.cursor = 'col-resize';
    document.body.style.userSelect = 'none'; // Chống bôi đen text khi kéo
  };

  const handleMouseUp = () => {
    isDragging.current = false;
    document.body.style.cursor = 'default';
    document.body.style.userSelect = 'auto';
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current || !containerRef.current) return;
    
    const containerRect = containerRef.current.getBoundingClientRect();
    // Tính toán % width dựa trên vị trí chuột
    const newLeftWidth = ((e.clientX - containerRect.left) / containerRect.width) * 100;
    
    // Giới hạn độ rộng tối thiểu (ví dụ: 20% - 80%)
    if (newLeftWidth > 20 && newLeftWidth < 80) {
      setLeftWidth(newLeftWidth);
    }
  };

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <div ref={containerRef} className="flex w-full h-full relative">
      {/* Cột trái */}
      <div style={{ width: `${leftWidth}%` }} className="h-full">
        {children[0]}
      </div>

      {/* Thanh kéo (Resizer) */}
      <div 
        onMouseDown={handleMouseDown}
        className="w-4 h-full bg-gray-200 hover:bg-gray-300 cursor-col-resize flex items-center justify-center flex-shrink-0 z-10"
      >
        <div className="flex flex-col gap-1">
          <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
          <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
          <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
        </div>
      </div>

      {/* Cột phải */}
      <div style={{ width: `${100 - leftWidth}%` }} className="h-full">
        {children[1]}
      </div>
    </div>
  );
};

export default SplitView;