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