import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { FEATURES } from '../constants';
import PageHero from '../components/layout/PageHero';
import StatsBar from '../components/sections/StatsBar';

const ServicesPage: React.FC = () => {
  return (
    <>
      <PageHero
        title="Our Services"
        subtitle="Comprehensive ethical pharmaceutical services ensuring quality healthcare reaches every corner of India."
      />

      {/* Service Details */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {FEATURES.map((feature, index) => {
            const Icon = feature.icon;
            const isReversed = index % 2 !== 0;
            return (
              <div key={index} className={`flex flex-col ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center mb-24 last:mb-0`}>
                {/* Content */}
                <div className="w-full md:w-1/2">
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-medium mb-4">
                    <Icon className="w-4 h-4 mr-1.5" />
                    Service {String(index + 1).padStart(2, '0')}
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900 mb-4">{feature.title}</h3>
                  <p className="text-slate-600 leading-relaxed mb-6 text-lg">{feature.description}</p>
                  {feature.bullets && (
                    <ul className="space-y-3">
                      {feature.bullets.map((bullet, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-700 font-medium">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                {/* Visual */}
                <div className="w-full md:w-1/2">
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-12 flex items-center justify-center min-h-[300px]">
                    <div className="bg-white rounded-2xl p-8 shadow-lg">
                      <Icon className="w-20 h-20 text-blue-600 mx-auto" />
                      <p className="text-center mt-4 font-bold text-slate-700">{feature.title}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* How Ethical Pharma Works */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-blue-600 font-bold tracking-wide uppercase text-sm mb-2">Our Process</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900">How Ethical Pharma Works</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Product Development', desc: 'High-quality formulations manufactured in certified facilities.' },
              { step: '02', title: 'MR Training', desc: 'Comprehensive training on product knowledge and ethical promotion.' },
              { step: '03', title: 'Doctor Engagement', desc: 'Scientific detailing and regular engagement with healthcare professionals.' },
              { step: '04', title: 'Patient Care', desc: 'Better prescriptions lead to improved patient outcomes and trust.' },
            ].map((item) => (
              <div key={item.step} className="text-center group">
                <div className="w-16 h-16 bg-blue-900 text-white rounded-2xl flex items-center justify-center text-xl font-bold mx-auto mb-4 group-hover:bg-green-500 transition-colors">
                  {item.step}
                </div>
                <h4 className="font-bold text-slate-900 mb-2">{item.title}</h4>
                <p className="text-sm text-slate-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-blue-900 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-800 rounded-full blur-[100px] opacity-50"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-green-900 rounded-full blur-[100px] opacity-50"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <StatsBar />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Interested in Our Services?</h2>
          <p className="text-slate-600 mb-8">Get in touch with our team to learn more about how Axpect Pharma can support your healthcare needs.</p>
          <Link to="/contact" className="inline-flex items-center px-8 py-3 bg-blue-900 text-white font-bold rounded-full hover:bg-blue-800 transition-all shadow-lg">
            Contact Us <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;
