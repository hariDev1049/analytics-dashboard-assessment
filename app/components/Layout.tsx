import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        {' '}
        {/* Sidebar and main content area */}
        <Sidebar />
        <main className="flex-1 flex flex-col bg-gray-100 p-8">
          <div className="flex-grow overflow-y-scroll">
            {' '}
            {/* Only the table area is scrollable */}
            {children} {/* The table component will be rendered here */}
          </div>
        </main>
      </div>
      <Footer /> {/* Footer is always visible at the bottom */}
    </div>
  );
}
