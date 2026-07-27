function TestHeader() {
  return (
    <header className="bg-white border-b shadow-sm h-16 px-6 flex items-center justify-between">

      {/* Left */}
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-lg bg-orange-500 flex items-center justify-center text-white font-bold">
          I
        </div>

        <div>
          <h1 className="font-semibold text-lg">
            Random Reading Test 1
          </h1>

          <p className="text-gray-500 text-sm">
            59 minutes remaining
          </p>
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center gap-6 text-2xl">

        <button className="hover:text-blue-600 transition-colors">
          ⭐
        </button>

        <button className="hover:text-blue-600 transition-colors">
          📋
        </button>

        <button className="hover:text-blue-600 transition-colors">
          ☰
        </button>

      </div>

    </header>
  );
}

export default TestHeader;