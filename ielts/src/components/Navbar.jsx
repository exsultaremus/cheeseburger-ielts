function Navbar() {
  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="text-2xl font-bold text-blue-600">
          IELTS Library
        </div>

        <ul className="flex gap-8 text-gray-700 font-medium">
          <li className="hover:text-blue-600 cursor-pointer">Reading</li>
          <li className="hover:text-blue-600 cursor-pointer">Listening</li>
          <li className="hover:text-blue-600 cursor-pointer">Writing</li>
          <li className="hover:text-blue-600 cursor-pointer">Speaking</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;