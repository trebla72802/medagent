import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Brand & Description */}
          <div className="space-y-6">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-teal-500 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold">
                  MEDAGENT<span className="text-teal-400">byTREBLA</span>
                </h3>
                <p className="text-sm text-gray-400">Powered by bolt.new</p>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-300 leading-relaxed max-w-md">
              AI health assistant that guides you through intelligent
              symptom evaluations, providing empathetic support and
              responsible medical guidance.
            </p>

            {/* Made with passion */}
            <div className="flex items-center space-x-2 text-gray-400">
              <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
              </svg>
              <span className="text-sm">Made with passion for digital health</span>
            </div>
          </div>

          {/* Right Column - Navigation */}
          <div className="lg:flex lg:justify-end">
            <div>
              <h4 className="text-lg font-semibold mb-6">Navigation</h4>
              <nav className="space-y-4">
                <a href="#" className="block text-gray-300 hover:text-white transition-colors">
                  Home
                </a>
                <a href="#" className="block text-gray-300 hover:text-white transition-colors">
                  Evaluation
                </a>
                <a href="#" className="block text-gray-300 hover:text-white transition-colors">
                  Info
                </a>
              </nav>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
          {/* Copyright */}
          <p className="text-gray-400 text-sm">
            © 2025 MedAgent. All rights reserved.
          </p>

          {/* Important Notice */}
          <div className="flex items-center space-x-2 text-yellow-400">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            <span className="text-sm font-medium">
              IMPORTANT: MedAgent does not replace professional medical advice.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;