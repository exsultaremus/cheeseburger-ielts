import { Link } from "react-router-dom";

function Hero() {
  return (
    <section
      id="hero"
      className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 text-white"
    >
      <div className="max-w-7xl mx-auto px-6 py-28">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left */}

          <div>

            <p className="uppercase tracking-widest text-blue-200 font-semibold mb-3">
              Welcome to CheeseIELTS
            </p>

            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Learn IELTS
              <br />
              Smarter,
              <span className="text-yellow-300"> Not Harder.</span>
            </h1>

            <p className="text-lg text-blue-100 mb-10 leading-8">
              Luyện đề IELTS miễn phí với kho đề khổng lồ, AI Tutor,
              đáp án chi tiết và hệ thống Practice/Test Mode.
            </p>

            <div className="flex flex-wrap gap-5">

              <Link
                to="/reading"
                className="bg-white text-blue-700 px-7 py-4 rounded-xl font-semibold hover:bg-gray-100 transition"
              >
                Start Learning
              </Link>

              <a
                href="#library"
                className="border border-white px-7 py-4 rounded-xl hover:bg-white hover:text-blue-700 transition"
              >
                Explore Library
              </a>

            </div>

          </div>

          {/* Right */}

          <div className="relative">

            <div className="bg-white rounded-3xl shadow-2xl p-8 text-gray-800">

              <h3 className="text-2xl font-bold mb-6">
                IELTS Dashboard
              </h3>

              <div className="space-y-5">

                <div className="flex justify-between">
                  <span>Reading</span>
                  <span className="font-bold text-green-600">
                    420 Tests
                  </span>
                </div>

                <div className="flex justify-between">
                  <span>Listening</span>
                  <span className="font-bold text-green-600">
                    360 Tests
                  </span>
                </div>

                <div className="flex justify-between">
                  <span>Writing</span>
                  <span className="font-bold text-green-600">
                    AI Feedback
                  </span>
                </div>

                <div className="flex justify-between">
                  <span>Speaking</span>
                  <span className="font-bold text-green-600">
                    AI Practice
                  </span>
                </div>

              </div>

            </div>

            <div className="absolute -bottom-5 -left-5 bg-yellow-400 text-gray-900 px-5 py-3 rounded-xl shadow-lg">
              ⭐ 100% Free
            </div>

            <div className="absolute -top-5 -right-5 bg-green-500 px-5 py-3 rounded-xl shadow-lg">
              AI Tutor
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;