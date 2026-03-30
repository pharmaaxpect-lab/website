import React from 'react';
import { FEATURES, KEY_NUMBERS } from '../constants';

const Features: React.FC = () => {
  return (
    <section id="services" className="relative py-20 bg-blue-900 text-white overflow-hidden">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
             <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-800 rounded-full blur-[100px] opacity-50"></div>
             <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-green-900 rounded-full blur-[100px] opacity-50"></div>
        </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Our Services */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-green-400 font-bold tracking-wide uppercase text-sm mb-2">Our Services</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white">
              What We Do at Axpect Pharma
            </h3>
            <p className="text-blue-200 mt-4 max-w-2xl mx-auto">
              We deliver comprehensive pharmaceutical services through ethical practices, ensuring quality healthcare reaches every corner of India.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {FEATURES.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-2xl hover:bg-white/20 transition-all duration-300">
                  <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-4 text-white shadow-lg">
                    <Icon size={24} />
                  </div>
                  <h4 className="text-xl font-bold mb-2">{feature.title}</h4>
                  <p className="text-blue-100 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Stats Section (Key Numbers) */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl">
           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x-0 md:divide-x divide-gray-200">
              {KEY_NUMBERS.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="flex flex-col items-center">
                    <Icon className="w-8 h-8 text-blue-500 mb-3" />
                    <span className="text-4xl md:text-5xl font-extrabold text-slate-900 block mb-1">
                      {stat.value}
                    </span>
                    <span className="text-sm font-medium text-slate-500 uppercase tracking-wider">
                      {stat.label}
                    </span>
                  </div>
                );
              })}
           </div>
        </div>

      </div>
    </section>
  );
};

export default Features;