function TestCard({ title, type, difficulty, image }) {
    return (
        
        <div className="
            group
            bg-white
            rounded-2xl
            shadow-md
            p-6

            transition-all
            duration-300
            ease-out

            hover:-translate-y-2
            hover:shadow-xl
            ">

                <img
                src={image}
                alt={title}
                className="w-full h-48 object-cover rounded-xl"
                />

                <div className="text-5xl mb-5">
                    📘
                </div>
x
                <h2 className="text-xl 
                font-bold 
                mb-2 
                transition-colors 
                duration-300 
                group-hover:text-red-600 
                cursor-pointer">
                    {title}
                </h2>

                <p className="text-gray-500">
                    {type}
                </p>

                <span className="inline-block mt-4 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                    {difficulty}
                </span>

                <button className="mt-6 w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700">
                    Start Test →
                </button>

    </div>
    );
}

export default TestCard;