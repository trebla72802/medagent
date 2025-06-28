import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-teal-500 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">
                MEDAGENT<span className="text-teal-600">byTREBLA</span>
              </h1>
              <p className="text-xs text-gray-500">Medical AI Assistant</p>
            </div>
          </div>

          {/* Made with bolt.new */}
          <div className="hidden md:block">
            <span className="text-sm text-gray-500">made with bolt.new</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-blue-600 font-medium hover:text-blue-700 transition-colors">
              Home
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
              Evaluation
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
              Info
            </a>
          </nav>

          {/* CTA Button */}
          <button className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-6 py-2 rounded-lg font-medium hover:from-blue-700 hover:to-teal-700 transition-all duration-200 shadow-md hover:shadow-lg">
            Start Evaluation
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;