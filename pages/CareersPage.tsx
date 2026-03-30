import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, CheckCircle, ArrowRight, DollarSign, TrendingUp, GraduationCap, Heart, MapPin } from 'lucide-react';
import { CAREER_POSITIONS } from '../constants';
import PageHero from '../components/layout/PageHero';

const whyJoinUs = [
  { icon: DollarSign, text: "Competitive salary and incentives" },
  { icon: TrendingUp, text: "Career growth opportunities" },
  { icon: GraduationCap, text: "Professional training programs" },
  { icon: Heart, text: "Supportive work environment" },
];

const CareersPage: React.FC = () => {
  return (
    <>
      <PageHero
        title="Join Our Team"
        subtitle="Be a part of our ethical healthcare mission. We're always looking for passionate professionals to grow with us."
      />

      {/* Open Positions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-blue-600 font-bold tracking-wide uppercase text-sm mb-2">Opportunities</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900">Open Positions</h3>
            <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
              Apply now and be a part of our ethical healthcare mission.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {CAREER_POSITIONS.map((position, index) => (
              <div key={index} className="bg-slate-50 border border-gray-100 rounded-2xl p-8 hover:shadow-lg hover:border-blue-200 transition-all duration-300 group flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full font-medium">
                    {position.type}
                  </span>
                </div>
                <h4 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-3">{position.title}</h4>
                <p className="text-sm text-slate-500 mb-4 flex-grow">{position.description}</p>
                {position.location && (
                  <div className="flex items-center text-sm text-slate-400 mb-4">
                    <MapPin className="w-4 h-4 mr-1" />
                    {position.location}
                  </div>
                )}
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-6 py-2.5 bg-blue-900 text-white font-medium rounded-full hover:bg-blue-800 transition-all text-sm"
                >
                  Apply Now <ArrowRight className="ml-1.5 w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-blue-600 font-bold tracking-wide uppercase text-sm mb-2">Benefits</h2>
              <h3 className="text-3xl font-bold text-slate-900 mb-8">Why Join Axpect Pharma?</h3>
              <div className="space-y-6">
                {whyJoinUs.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="flex items-center gap-4 bg-white p-4 rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
                      <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <span className="text-slate-700 font-medium text-lg">{item.text}</span>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl p-10 text-white">
              <h3 className="text-2xl font-bold mb-4">Our Culture</h3>
              <p className="text-blue-100 mb-6 leading-relaxed">
                At Axpect Pharma, we foster an environment of continuous learning, ethical practices, and professional growth. Our team members are the backbone of our success, and we invest in their development at every step.
              </p>
              <ul className="space-y-3">
                {['Team-oriented collaborative environment', 'Regular training and upskilling', 'Recognition and rewards for excellence', 'Work-life balance'].map((item) => (
                  <li key={item} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    <span className="text-blue-50">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Apply CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto text-center px-4">
          <Briefcase className="w-12 h-12 text-blue-600 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Ready to Start Your Journey?</h2>
          <p className="text-slate-600 mb-8">Send us your details and we'll get in touch about available opportunities that match your profile.</p>
          <Link to="/contact" className="inline-flex items-center px-8 py-3 bg-blue-900 text-white font-bold rounded-full hover:bg-blue-800 transition-all shadow-lg">
            Apply Now <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
};

export default CareersPage;
