import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const MainLayout = () => {
  const location = useLocation();
  // Kiểm tra xem URL hiện tại có phải là giao diện đang làm test không
  const isTestMode = location.pathname.includes('/take-test'); 

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Chỉ render Navbar và Footer nếu không phải là Test Mode */}
      {!isTestMode && <Navbar />}
      
      <main className="flex-grow">
        <Outlet /> {/* Các page (Home, Practice, Full Test) sẽ render vào đây */}
      </main>

      {!isTestMode && <Footer />}
    </div>
  );
};

export default MainLayout;