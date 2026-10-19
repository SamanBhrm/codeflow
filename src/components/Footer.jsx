export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-white/10 py-8">
      <div className="max-w-7xl mx-auto px-6 text-center">
        
        <h2 className="text-2xl font-bold text-white">
          CodeFlow
        </h2>

        <p className="mt-2 text-sm text-gray-400">
          Build faster. Code better.
        </p>

        <div className="mt-5 flex justify-center gap-6">
          <a href="#" className="text-gray-400 hover:text-blue-400">
            Features
          </a>

          <a href="#" className="text-gray-400 hover:text-blue-400">
            Pricing
          </a>

          <a href="#" className="text-gray-400 hover:text-blue-400">
            Contact
          </a>
        </div>

        <p className="mt-6 text-xs text-gray-500">
          © 2026 CodeFlow. All rights reserved.
        </p>

      </div>
    </footer>
  );
}