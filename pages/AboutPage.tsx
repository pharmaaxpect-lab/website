import React from 'react';
import { Link } from 'react-router-dom';
import { Target, Eye, Heart, Award, CheckCircle } from 'lucide-react';
import PageHero from '../components/layout/PageHero';
import heroPharma from '../asset-library/hero/hero-pharma.jpg';
import galleryBanner from '../asset-library/gallery/page-1.jpg';
import galleryProduct1 from '../asset-library/gallery/page-3.jpg';
import galleryProduct2 from '../asset-library/gallery/page-4.jpg';
import startupCert from '../asset-library/certifications/startup-recognition.jpeg';

const AboutPage: React.FC = () => {
  return (
    <>
      <PageHero
        title="About Axpect Pharma"
        subtitle="Committed to excellence in the Ethical Pharma sector through scientific communication, trust, and long-term relationships."
        backgroundImage={heroPharma}
      />

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-blue-600 font-bold tracking-wide uppercase text-sm mb-2">Our Story</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Building Trust in Ethical Healthcare
              </h3>
              <p className="text-slate-600 mb-6 leading-relaxed text-lg">
                Axpect Pharma is committed to excellence in the Ethical Pharma sector. We specialize in promoting pharmaceutical products through a highly trained field force that works closely with doctors, hospitals, and healthcare providers.
              </p>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Our approach is centered on <strong>scientific communication, trust, and long-term relationships</strong> with medical professionals. We believe in delivering not just medicines, but value-driven healthcare solutions that improve patient outcomes across India.
              </p>
              <div className="flex flex-wrap gap-3">
                {['ISO 9001:2015 Certified', 'DPIIT Recognized Startup', 'Pan India Operations'].map((badge) => (
                  <span key={badge} className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-medium border border-blue-100">
                    <CheckCircle className="w-4 h-4 mr-1.5" />
                    {badge}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative">
              <img src={galleryBanner} alt="Axpect Pharma" className="rounded-2xl shadow-xl w-full" />
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-4 border border-gray-100 hidden md:block">
                <div className="flex items-center gap-3">
                  <Award className="text-blue-600 w-8 h-8" />
                  <div>
                    <p className="text-xs text-gray-500 uppercase font-bold">Recognized by</p>
                    <p className="text-sm font-bold text-gray-900">Govt. of India</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-blue-600 font-bold tracking-wide uppercase text-sm mb-2">Our Purpose</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900">Vision & Mission</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-shadow">
              <Eye className="w-10 h-10 text-blue-600 mb-4" />
              <h4 className="text-xl font-bold text-slate-900 mb-4">Our Vision</h4>
              <p className="text-slate-600 leading-relaxed">
                To become a trusted Ethical Pharma company known for quality, integrity, and strong doctor relationships across India.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-shadow">
              <Target className="w-10 h-10 text-green-600 mb-4" />
              <h4 className="text-xl font-bold text-slate-900 mb-4">Our Mission</h4>
              <ul className="space-y-3 text-slate-600">
                {[
                  'Promote medicines ethically through qualified professionals',
                  'Enhance patient care through effective therapies',
                  'Build long-term trust with healthcare providers',
                ].map((item) => (
                  <li key={item} className="flex items-start">
                    <Heart className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* DPIIT Recognition */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-slate-50 rounded-2xl p-8 flex items-center justify-center">
              <img src={startupCert} alt="DPIIT Startup Recognition" className="max-h-96 object-contain rounded-xl" />
            </div>
            <div>
              <span className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-4">Government Recognized</span>
              <h3 className="text-3xl font-bold text-slate-900 mb-4">DPIIT Recognized Startup</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Axpect Pharma Private Limited is officially recognized as a startup by the Department for Promotion of Industry and Internal Trade (DPIIT), Government of India. This recognition validates our innovative approach to ethical pharmaceutical promotion and our commitment to advancing healthcare in India.
              </p>
              <Link to="/certifications" className="inline-flex items-center text-blue-600 font-medium hover:underline">
                View All Certifications →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-blue-600 font-bold tracking-wide uppercase text-sm mb-2">Gallery</h2>
            <h3 className="text-3xl font-bold text-slate-900">Our Products in Action</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <img src={galleryProduct1} alt="Axo-Protein Chocolate" className="rounded-2xl shadow-lg w-full hover:shadow-xl transition-shadow" />
            <img src={galleryProduct2} alt="Axo-Protein Vanilla" className="rounded-2xl shadow-lg w-full hover:shadow-xl transition-shadow" />
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
