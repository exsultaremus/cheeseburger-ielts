<<<<<<< HEAD
import { Link } from "react-router-dom";


function Navbar(){

return (

<nav className="
sticky top-0 
z-50 
bg-white 
border-b 
shadow-sm
">


<div className="
max-w-7xl 
mx-auto 
px-6 
h-16 
flex 
items-center 
justify-between
">


{/* Logo */}

<Link 
to="/"
className="flex items-center gap-3"
>


<img

src="/logo.png"

alt="CheeseIELTS"

className="w-11 h-11"

/>


<div>

<h1 className="
text-xl 
font-bold 
text-blue-600
">

CheeseIELTS

</h1>


<p className="
text-xs 
text-gray-500
">

Learn IELTS Smarter

</p>


</div>


</Link>




{/* Menu */}

<ul className="
hidden 
lg:flex 
gap-7 
font-medium 
text-gray-700
">


<li>
<Link to="/library">
Kho đề
</Link>
</li>


<li>
<Link to="/mock-test">
Mock Test
</Link>
</li>


<li>
<Link to="/arena">
Arena ⚔️
</Link>
</li>


<li>
<Link to="/ai-checker">
AI Checker
</Link>
</li>


<li>
<Link to="/vocabulary">
Vocabulary
</Link>
</li>


</ul>




{/* Right */}

<div className="flex gap-3">


<Link
to="/dashboard"
className="hover:text-blue-600"
>

Dashboard

</Link>



<button className="
border
border-blue-600
text-blue-600
px-4
py-2
rounded-lg
">

Login

</button>



</div>



</div>


</nav>

)

}


export default Navbar;
=======
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [showFullTestDropdown, setShowFullTestDropdown] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
           <img src="/logo.jpg" alt="Logo" className="h-10" />
        </Link>

        <nav className="hidden md:flex items-center gap-6 font-semibold text-gray-700">
          <Link to="/" className="hover:text-red-500 text-red-500">Home</Link>
          <Link to="/practice-test" className="hover:text-red-500">Practice Test</Link>
          
          {/* Full Test Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setShowFullTestDropdown(true)}
            onMouseLeave={() => setShowFullTestDropdown(false)}
          >
            <button className="flex items-center gap-1 hover:text-red-500">
              Full Test <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>
            
            {showFullTestDropdown && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-100 shadow-lg rounded-md overflow-hidden">
                <Link to="/full-test/forecast" className="block px-4 py-2 hover:bg-gray-50 text-sm">Forecast</Link>
                <Link to="/full-test/vol" className="block px-4 py-2 hover:bg-gray-50 text-sm">VOL (Real Exam)</Link>
                <Link to="/full-test/cambridge" className="block px-4 py-2 hover:bg-gray-50 text-sm">Cambridge</Link>
              </div>
            )}
          </div>
        </nav>

        <button className="bg-red-500 text-white px-6 py-2 rounded-full font-medium hover:bg-red-600 transition">
          Đăng ký / Đăng nhập
        </button>
      </div>
    </header>
  );
};
>>>>>>> 7ece047 (new)
