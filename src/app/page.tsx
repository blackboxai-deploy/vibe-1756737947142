export default function HomePage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="text-center space-y-6 p-8">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">
          Hello World!
        </h1>
        <p className="text-xl text-gray-600 max-w-md mx-auto">
          Welcome to your simple Hello World page built with Next.js and Tailwind CSS.
        </p>
        <div className="pt-4">
          <div className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition-colors">
            🎉 You're all set!
          </div>
        </div>
      </div>
    </main>
  );
}