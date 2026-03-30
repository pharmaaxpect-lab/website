import React from 'react';
import { CERTIFICATIONS } from '../constants';
import PageHero from '../components/layout/PageHero';
import CertificateCard from '../components/shared/CertificateCard';
import { Award, Shield } from 'lucide-react';

const CertificationsPage: React.FC = () => {
  const certifications = CERTIFICATIONS.filter(c => c.type === 'certification');
  const pledges = CERTIFICATIONS.filter(c => c.type === 'pledge');

  return (
    <>
      <PageHero
        title="Certifications & Pledges"
        subtitle="Our commitment to quality, integrity, and ethical practices is validated by recognized certifications and government pledges."
      />

      {/* Certifications */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block p-3 bg-blue-100 rounded-full mb-4">
              <Award className="w-6 h-6 text-blue-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Primary Certifications</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Official certifications that validate our commitment to quality and operational excellence.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {certifications.map((cert) => (
              <CertificateCard key={cert.id} cert={cert} />
            ))}
          </div>
        </div>
      </section>

      {/* Government Pledges */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block p-3 bg-green-100 rounded-full mb-4">
              <Shield className="w-6 h-6 text-green-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Government Pledges</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Axpect Pharma actively participates in government initiatives, taking pledges that reflect our values and social responsibility.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {pledges.map((cert) => (
              <CertificateCard key={cert.id} cert={cert} />
            ))}
          </div>
        </div>
      </section>

      {/* Trust Summary */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Trusted & Verified</h2>
          <p className="text-blue-100 mb-8">
            With ISO certification, government recognition, and active participation in national initiatives, Axpect Pharma stands as a trusted name in ethical pharmaceutical promotion.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {CERTIFICATIONS.map((cert) => (
              <span key={cert.id} className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm font-medium">
                {cert.title}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CertificationsPage;
