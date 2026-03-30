import React from 'react';
import { Target, Eye, Heart } from 'lucide-react';
import ImagePlaceholder from './ImagePlaceholder';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          
          {/* Image Side */}
          <div className="w-full md:w-1/2">
             <div className="grid grid-cols-2 gap-4">
                <ImagePlaceholder label="Doctor Engagement" height="h-64" className="rounded-tl-[3rem] rounded-br-[3rem]" />
                <ImagePlaceholder label="MR Team" height="h-64" className="rounded-tr-[3rem] rounded-bl-[3rem] mt-8" />
             </div>
          </div>

          {/* Content Side */}
          <div className="w-full md:w-1/2">
            <h2 className="text-blue-600 font-bold tracking-wide uppercase text-sm mb-2">About Axpect Pharma</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Committed to Excellence in Ethical Pharma
            </h3>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Axpect Pharma is committed to excellence in the Ethical Pharma sector. We specialize in promoting pharmaceutical products through a highly trained field force that works closely with doctors, hospitals, and healthcare providers.
            </p>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Our approach is centered on <strong>scientific communication, trust, and long-term relationships</strong> with medical professionals. We believe in delivering not just medicines, but value-driven healthcare solutions.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
               <div className="p-5 rounded-xl bg-blue-50 border border-blue-100">
                  <Eye className="w-8 h-8 text-blue-600 mb-3" />
                  <h4 className="font-semibold text-slate-900 mb-2">Our Vision</h4>
                  <p className="text-sm text-slate-500">To become a trusted Ethical Pharma company known for quality, integrity, and strong doctor relationships.</p>
               </div>
               <div className="p-5 rounded-xl bg-green-50 border border-green-100">
                  <Target className="w-8 h-8 text-green-600 mb-3" />
                  <h4 className="font-semibold text-slate-900 mb-2">Our Mission</h4>
                  <ul className="text-sm text-slate-500 space-y-1">
                    <li className="flex items-start"><Heart className="w-3 h-3 text-green-500 mr-1.5 mt-1 flex-shrink-0" /><span>Promote medicines ethically through qualified professionals</span></li>
                    <li className="flex items-start"><Heart className="w-3 h-3 text-green-500 mr-1.5 mt-1 flex-shrink-0" /><span>Enhance patient care through effective therapies</span></li>
                    <li className="flex items-start"><Heart className="w-3 h-3 text-green-500 mr-1.5 mt-1 flex-shrink-0" /><span>Build long-term trust with healthcare providers</span></li>
                  </ul>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;