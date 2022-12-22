import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="container mx-auto flex flex-col h-full">
      <div className="container flex flex-col items-center justify-center h-screen space-y-6">
        <h1 className="text-6xl font-bold">budgeteer</h1>
        <p className="text-gray-500">Know your past, control your future.</p>
        <Link
          className="px-4 py-2 bg-red-500 rounded-sm text-white shadow-lg uppercase font-bold hover:bg-red-600 transition-all ease duration-{250}"
          to="/login"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
}
