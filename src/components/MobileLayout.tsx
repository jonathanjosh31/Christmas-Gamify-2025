import Link from "next/link";

export default function MobileLayout() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <h1 className="text-2xl font-bold text-gray-900">Mobile First App</h1>
        </div>
      </header>

      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Welcome to your mobile-first app!
            </h2>
            <p className="text-gray-600">
              This layout is designed mobile-first and scales beautifully to
              larger screens.
            </p>
          </div>
        </div>
        <nav className="bg-white shadow-sm p-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-xl font-bold">
              My App
            </Link>
            <div className="flex space-x-4">
              <Link href="/about" className="text-gray-600 hover:text-gray-900">
                About
              </Link>
              <Link href="/timer" className="text-gray-600 hover:text-gray-900">
                Timer
              </Link>
            </div>
          </div>
        </nav>
      </main>
    </div>
  );
}
