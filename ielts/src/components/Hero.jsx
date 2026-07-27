function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-24">
      <div className="max-w-5xl mx-auto px-6 text-center">

        <h1 className="text-5xl font-bold mb-6">
          IELTS Exam Library
        </h1>

        <p className="text-xl text-blue-100 mb-10">
          Practice Reading, Listening, Writing and Speaking tests
          in one place.
        </p>

        <input
          type="text"
          placeholder="Search IELTS tests..."
          className="
            w-full
            max-w-2xl
            px-6
            py-4
            rounded-xl
            text-gray-800
            text-lg
            shadow-xl
            outline-none
            focus:ring-4
            focus:ring-blue-300
          "
        />

      </div>
    </section>
  );
}

export default Hero;