export default function Header() {
  return (
    <header className="bg-gray-800 text-white py-4 px-6">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">Electric Vehicle Dashboard</h1>
        <nav>
          <a href="#" className="px-4">
            Home
          </a>
          <a href="#" className="px-4">
            About
          </a>
          <a href="#" className="px-4">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
