import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


function HomePage(){

return (

<>

<Navbar/>


<section className="
text-center
py-20
bg-blue-50
">


<h1 className="
text-5xl
font-bold
text-blue-600
">

Master IELTS Smarter

</h1>


<p className="
mt-5
text-gray-600
text-lg
">

Free IELTS practice.
Real explanations.
No AI slop.

</p>


<input

placeholder="Search Cambridge IELTS..."

className="
mt-8
w-96
max-w-[90%]
p-4
rounded-lg
border
"

/>


</section>



<section className="
grid
md:grid-cols-3
gap-6
max-w-6xl
mx-auto
py-16
">


<Card
title="IELTS Library"
text="Reading & Listening answers with evidence"
/>


<Card
title="IELTS Arena"
text="Compete with friends"
/>


<Card
title="AI Checker"
text="Improve Writing and Speaking"
/>


</section>


<Footer/>


</>

)

}


function Card({title,text}){

return (

<div className="
p-6
rounded-xl
shadow
bg-white
">


<h2 className="text-xl font-bold">

{title}

</h2>


<p className="mt-3 text-gray-600">

{text}

</p>


</div>

)

}


export default HomePage;