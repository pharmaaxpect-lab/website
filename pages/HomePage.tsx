import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Briefcase, Users, Shield, Award } from 'lucide-react';
import { FEATURES, PRODUCTS, CERTIFICATIONS } from '../constants';
import StatsBar from '../components/sections/StatsBar';
import axpectHeroBlue from '../asset-library/hero/axpect-hero-blue.jpg';

const HomePage: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-to-br from-blue-50 to-white">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 left-0 -ml-20 w-96 h-96 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
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
                Axpect Pharma is a fast-growing Ethical Pharma company focused on building strong relationships with healthcare professionals. Our dedicated team of Medical Representatives ensures effective product promotion through scientific and ethical practices.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <Link to="/careers" className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-blue-900 hover:bg-blue-800 transition-all shadow-lg hover:shadow-xl">
                  <Briefcase className="mr-2 h-5 w-5" />
                  Join Our Team
                </Link>
                <Link to="/contact" className="inline-flex items-center justify-center px-8 py-3 border border-gray-300 text-base font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50 transition-all">
                  <Users className="mr-2 h-5 w-5" />
                  Contact Our Sales Team
                </Link>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {['Strong MR Network', 'Doctor-Focused Marketing', 'High-Quality & Certified Products', 'Pan India Ethical Operations'].map((item) => (
                  <div key={item} className="flex items-center text-sm font-medium text-slate-700">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl shadow-2xl overflow-hidden bg-white p-2 border-4 border-white transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <img src={axpectHeroBlue} alt="Axpect Pharma - Ethical Healthcare" className="w-full h-full object-cover rounded-xl" />
              </div>
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

      {/* Stats Section */}
      <section className="py-16 bg-blue-900 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-800 rounded-full blur-[100px] opacity-50"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-green-900 rounded-full blur-[100px] opacity-50"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <StatsBar />
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-blue-600 font-bold tracking-wide uppercase text-sm mb-2">Our Services</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900">What We Do</h3>
            <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
              Delivering comprehensive pharmaceutical services through ethical practices across India.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {FEATURES.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-slate-50 border border-gray-100 p-6 rounded-2xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                    <Icon size={24} className="text-blue-600 group-hover:text-white transition-colors" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
          <div className="text-center mt-10">
            <Link to="/services" className="inline-flex items-center px-6 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-full hover:bg-blue-600 hover:text-white transition-all">
              Explore All Services <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-blue-600 font-bold tracking-wide uppercase text-sm mb-2">Our Products</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900">Therapeutic Categories</h3>
            <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
              High-quality pharmaceutical products across multiple therapeutic segments, trusted by doctors nationwide.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {PRODUCTS.map((product) => (
              <Link to="/products" key={product.id} className="bg-white border border-gray-100 rounded-2xl p-6 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-14 h-14 bg-blue-50 rounded-xl mx-auto mb-4 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                  <Shield className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <h4 className="font-bold text-slate-800 text-sm">{product.name}</h4>
                <p className="text-xs text-slate-400 mt-1">{product.category}</p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/products" className="inline-flex items-center px-6 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-full hover:bg-blue-600 hover:text-white transition-all">
              View Full Catalogue <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Certifications Ticker */}
      <section className="py-12 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-sm font-bold text-slate-400 uppercase tracking-widest">Trusted & Certified</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-8 items-center">
            {CERTIFICATIONS.slice(0, 4).map((cert) => (
              <Link to="/certifications" key={cert.id} className="grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300">
                <img src={cert.image} alt={cert.title} className="h-20 object-contain" />
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/certifications" className="text-blue-600 font-medium text-sm hover:underline">
              View All Certifications & Pledges →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-800 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-72 h-72 bg-green-500/10 rounded-full blur-[80px]"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400/10 rounded-full blur-[100px]"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <Award className="w-12 h-12 text-green-400 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Make a Difference in Healthcare?
          </h2>
          <p className="text-blue-100 mb-8 text-lg max-w-2xl mx-auto">
            Join our team of dedicated professionals committed to ethical pharmaceutical practices and better patient outcomes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/careers" className="inline-flex items-center justify-center px-8 py-3 bg-white text-blue-900 font-bold rounded-full hover:bg-green-400 hover:text-white transition-all shadow-lg">
              <Briefcase className="mr-2 h-5 w-5" />
              Join Our Team
            </Link>
            <Link to="/contact" className="inline-flex items-center justify-center px-8 py-3 border-2 border-white/30 text-white font-medium rounded-full hover:bg-white/10 transition-all">
              Contact Sales Team <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
