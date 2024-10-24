export default function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-gray-900 text-white">
      <ul className="mt-6">
        <li className="py-2 px-4 hover:bg-gray-700">
          <a href="#">Dashboard</a>
        </li>
        <li className="py-2 px-4 hover:bg-gray-700">
          <a href="#">EV Data</a>
        </li>
        <li className="py-2 px-4 hover:bg-gray-700">
          <a href="#">Reports</a>
        </li>
        <li className="py-2 px-4 hover:bg-gray-700">
          <a href="#">Settings</a>
        </li>
      </ul>
    </aside>
  );
}
