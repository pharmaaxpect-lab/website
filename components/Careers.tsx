import React from 'react';
import { CAREER_POSITIONS } from '../constants';
import { Briefcase, CheckCircle, ArrowRight, DollarSign, TrendingUp, GraduationCap, Heart } from 'lucide-react';

const whyJoinUs = [
  { icon: DollarSign, text: "Competitive salary and incentives", color: "text-green-600" },
  { icon: TrendingUp, text: "Career growth opportunities", color: "text-blue-600" },
  { icon: GraduationCap, text: "Professional training programs", color: "text-purple-600" },
  { icon: Heart, text: "Supportive work environment", color: "text-rose-600" },
];

const Careers: React.FC = () => {
  return (
    <section id="careers" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <div className="inline-block p-3 bg-blue-100 rounded-full mb-4">
            <Briefcase className="text-blue-600 w-6 h-6" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Join Our Team</h2>
          <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
            We are always looking for passionate and dedicated professionals to grow with us. Be a part of our ethical healthcare mission.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Open Positions */}
          <div>
            <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center">
              <Briefcase className="w-5 h-5 text-blue-600 mr-2" />
              Open Positions
            </h3>
            <div className="space-y-4">
              {CAREER_POSITIONS.map((position, index) => (
                <div 
                  key={index}
                  className="bg-slate-50 border border-gray-100 rounded-xl p-6 hover:shadow-md hover:border-blue-200 transition-all duration-300 group"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{position.title}</h4>
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full font-medium flex-shrink-0 ml-4">
                      {position.type}
                    </span>
                  </div>
                  <p className="text-sm text-slate-500 mb-4">{position.description}</p>
                  <a 
                    href="#contact" 
                    className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    Apply Now <ArrowRight className="ml-1 w-4 h-4" />
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Why Join Us */}
          <div>
            <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center">
              <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
              Why Join Us
            </h3>
            <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl p-8 text-white">
              <p className="text-blue-100 mb-8 leading-relaxed">
                At Axpect Pharma, we invest in our people. Join a team that values ethical practices, professional growth, and making a real difference in healthcare.
              </p>
              <div className="space-y-5">
                {whyJoinUs.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-green-400" />
                      </div>
                      <span className="text-white font-medium">{item.text}</span>
                    </div>
                  );
                })}
              </div>
              <a 
                href="#contact"
                className="inline-flex items-center mt-8 px-6 py-3 bg-white text-blue-900 font-bold rounded-full hover:bg-green-400 hover:text-white transition-all shadow-lg"
              >
                Apply Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Careers;
