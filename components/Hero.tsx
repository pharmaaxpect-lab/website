import axpectHero from '../asset-library/hero/axpect-hero.jpg';
import React from 'react';
import { ArrowRight, CheckCircle, Users, Briefcase } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-to-br from-blue-50 to-white">
      {/* Background Decorative Blobs */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-0 left-0 -ml-20 -mt-20 w-96 h-96 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="text-left">
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-blue-200 bg-blue-50 text-blue-700 text-sm font-semibold mb-6">
              <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
              Ethical Pharma Company
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
              Leading <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-500">Ethical Pharma</span> Company in India
            </h1>
            
            <p className="text-lg text-slate-600 mb-4 max-w-lg">
              Delivering quality healthcare solutions through ethical promotion and strong doctor engagement.
            </p>

            <p className="text-base text-slate-500 mb-8 max-w-lg">
              Axpect Pharma is a fast-growing Ethical Pharma company focused on building strong relationships with healthcare professionals. Our dedicated team of Medical Representatives (MRs) ensures effective product promotion through scientific and ethical practices, leading to better patient outcomes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a href="#careers" className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-blue-900 hover:bg-blue-800 transition-all shadow-lg hover:shadow-xl">
                <Briefcase className="mr-2 h-5 w-5" />
                Join Our Team
              </a>
              <a href="#contact" className="inline-flex items-center justify-center px-8 py-3 border border-gray-300 text-base font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50 transition-all">
                <Users className="mr-2 h-5 w-5" />
                Contact Our Sales Team
              </a>
            </div>

            <div className="grid grid-cols-2 gap-4">
               <div className="flex items-center text-sm font-medium text-slate-700">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  Strong MR Network
               </div>
               <div className="flex items-center text-sm font-medium text-slate-700">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  Doctor-Focused Marketing
               </div>
               <div className="flex items-center text-sm font-medium text-slate-700">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  High-Quality & Certified Products
               </div>
               <div className="flex items-center text-sm font-medium text-slate-700">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  Pan India Ethical Operations
               </div>
            </div>
          </div>

          {/* Hero Image Area */}
          <div className="relative">
             <div className="relative rounded-2xl shadow-2xl overflow-hidden bg-white p-2 border-4 border-white transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <img src={axpectHero} alt="Axpect Pharma - Ethical Healthcare" className="w-full h-full object-cover rounded-xl" />
             </div>
             {/* Floating Badge */}
             <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-gray-100 hidden md:block">
                <div className="flex items-center gap-3">
                   <div className="bg-green-100 p-2 rounded-full">
                      <CheckCircle className="text-green-600 w-6 h-6" />
                   </div>
                   <div>
                      <p className="text-xs text-gray-500 uppercase font-bold">Commitment</p>
                      <p className="text-lg font-bold text-gray-900">Patient Care First</p>
                   </div>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;