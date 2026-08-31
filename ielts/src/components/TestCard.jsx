import { Link } from 'react-router-dom';

const TestCard = ({ test }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 overflow-hidden flex flex-col">
      {/* Ảnh bìa */}
      <div className="aspect-[4/3] bg-amber-100 p-4 flex items-center justify-center relative">
         {/* Giả lập ảnh từ data, ví dụ: duck mascot */}
        <img 
          src={test.thumbnailUrl || '/assets/images/default-test-cover.png'} 
          alt={test.title} 
          className="h-full object-contain rounded-lg"
        />
        {/* Label Premium/Free nếu có */}
        {test.isPremium && (
          <span className="absolute top-2 right-2 bg-yellow-400 text-yellow-900 text-xs font-bold px-2 py-1 rounded">
            PREMIUM
          </span>
        )}
      </div>

      {/* Thông tin đề thi */}
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="font-bold text-gray-800 text-lg mb-1">{test.title}</h3>
        <p className="text-gray-500 text-sm mb-4">{test.attempts} attempts</p>
        
        {/* Nút làm bài sẽ mở modal chọn Mode (được gọi ở TestGrid) */}
        <button 
           className="mt-auto w-full py-2 border border-gray-300 rounded-full flex items-center justify-center gap-2 hover:bg-red-50 hover:border-red-500 hover:text-red-500 transition-colors text-gray-700 font-medium"
           onClick={() => test.onStartTest(test.id)}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          Làm bài
        </button>
      </div>
    </div>
  );
};

export default TestCard;