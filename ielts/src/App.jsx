import "./App.css";

import tests from "./data/tests";

function App() {
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
          <div className="bg-white p-10 rounded-2xl shadow-xl">
            <h1 className="text-4xl font-bold text-blue-600">
              test tailwind!
            </h1>
            <p className="mt-4 text-gray-600">
              This is a simple example of a React application using Tailwind CSS.
            </p>
            <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
              clickclick
            </button>
          </div>
        </div>
    );
}

export default App;