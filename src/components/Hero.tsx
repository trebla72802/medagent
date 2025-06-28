import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-teal-50 py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Heading */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">
            Your digital assistant
          </span>
          <br />
          <span className="text-gray-900">to better understand</span>
          <br />
          <span className="bg-gradient-to-r from-teal-600 via-blue-600 to-blue-700 bg-clip-text text-transparent">
            how you feel
          </span>
        </h1>

        {/* Description */}
        <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed">
          MedAgent guides you through <span className="font-semibold text-gray-800">intelligent symptom evaluations</span>, providing
          empathetic support and responsible medical guidance with <span className="font-semibold text-gray-800">advanced
          conversational AI</span>.
        </p>

        {/* CTA Button */}
        <button className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-teal-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center space-x-2">
          <span>Start Free Evaluation</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>

        {/* Trust Indicators */}
        <div className="flex flex-wrap justify-center items-center gap-8 mt-16 text-gray-500">
          <div className="flex items-center space-x-2">
            <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-sm font-medium">GDPR Compliant</span>
          </div>
          
          <div className="flex items-center space-x-2">
            <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-sm font-medium">Medical Disclaimer</span>
          </div>
          
          <div className="flex items-center space-x-2">
            <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-sm font-medium">Ethical & Safe AI</span>
          </div>
        </div>

        {/* Powered by */}
        <div className="mt-8">
          <p className="text-sm text-gray-400">
            Powered by <span className="text-blue-600 font-medium">bolt.new</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;