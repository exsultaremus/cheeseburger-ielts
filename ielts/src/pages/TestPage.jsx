<<<<<<< HEAD
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


function TestPage(){

return(

<>

<Navbar/>


<h1 className="text-center text-3xl p-20">

IELTS Test Interface

</h1>


<Footer/>

</>

)

}
=======
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import SplitView from '../helper/SplitView';
import PassageContent from '../components/PassageContent';
import QuestionPanel from '../components/QuestionPanel';
import TestHeader from '../components/TestHeader';

const TestPage = () => {
  const { testId } = useParams();
  const navigate = useNavigate();
  // State quản lý bài làm của user: { questionId: 'user_answer' }
  const [userAnswers, setUserAnswers] = useState({}); 
  const [currentPassageIndex, setCurrentPassageIndex] = useState(0);

  // Giả lập load data
  const testInfo = { title: "Cambridge 18 Test 1" }; // Load từ data/tests.js dựa theo testId
  
  const handleTimeUp = () => {
    handleSubmitTest();
  };

  const handleSubmitTest = () => {
    // Chuyển hướng sang trang kết quả và truyền userAnswers đi
    // navigate(`/test-results/${testId}`, { state: { answers: userAnswers } });
    console.log("Nộp bài!", userAnswers);
  };

  return (
    <div className="h-screen flex flex-col bg-gray-100 overflow-hidden">
      {/* Header riêng của phòng thi */}
      <TestHeader 
         title={testInfo.title}
         passageNumber={currentPassageIndex + 1}
         onTimeUp={handleTimeUp}
         onSubmit={handleSubmitTest}
      />

      {/* Vùng chia đôi màn hình */}
      <div className="flex-grow flex overflow-hidden">
        <SplitView>
           {/* Bên Trái: Nội dung bài đọc */}
           <div className="h-full overflow-y-auto bg-white p-8">
              <PassageContent 
                passageData={/* data của passage hiện tại */} 
              />
           </div>

           {/* Bên Phải: Bảng câu hỏi */}
           <div className="h-full overflow-y-auto bg-gray-50 p-6">
              <QuestionPanel 
                 questionsData={/* câu hỏi của passage hiện tại */}
                 userAnswers={userAnswers}
                 onAnswerChange={(qId, value) => setUserAnswers(prev => ({...prev, [qId]: value}))}
              />
           </div>
        </SplitView>
      </div>

      {/* Footer điều hướng passage (Passage 1 | Passage 2 | Passage 3) */}
      <div className="bg-white border-t border-gray-200 p-2 flex justify-center gap-4">
          <button 
             onClick={() => setCurrentPassageIndex(0)}
             className={`px-4 py-2 font-semibold ${currentPassageIndex === 0 ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
          >
            Passage 1
          </button>
          {/* Tương tự cho Passage 2, 3 */}
      </div>
    </div>
  );
};
>>>>>>> 7ece047 (new)


export default TestPage;