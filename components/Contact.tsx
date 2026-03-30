import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { COMPANY_DETAILS } from '../constants';
import ImagePlaceholder from './ImagePlaceholder';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-blue-600 font-bold tracking-wide uppercase text-sm mb-2">Get In Touch</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900">
            Contact Axpect Pharma
          </h3>
          <p className="text-slate-600 mt-4">
            Have questions or want to connect with our team? We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100">
          
          {/* Form Side */}
          <div className="p-8 md:p-12">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                  <input type="text" id="name" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" placeholder="John Doe" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
                  <input type="tel" id="phone" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" placeholder="+91 98765 43210" />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                <input type="email" id="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" placeholder="you@example.com" />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-1">Inquiry Type</label>
                <select id="subject" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all">
                  <option>Connect with Sales Team</option>
                  <option>Job Application</option>
                  <option>Partnership Inquiry</option>
                  <option>General Inquiry</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" placeholder="Tell us how we can help..."></textarea>
              </div>

              <button type="button" className="w-full bg-blue-600 text-white font-bold py-4 rounded-lg hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200">
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info & Map Side */}
          <div className="bg-slate-50 p-8 md:p-12 border-t lg:border-t-0 lg:border-l border-gray-100 flex flex-col justify-between">
            
            <div className="space-y-8 mb-8">
               <div className="flex items-start space-x-4">
                  <div className="bg-white p-3 rounded-lg shadow-sm">
                    <MapPin className="text-blue-600 w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Address</h4>
                    <p className="text-slate-600 mt-1">{COMPANY_DETAILS.address}</p>
                  </div>
               </div>

               <div className="flex items-start space-x-4">
                  <div className="bg-white p-3 rounded-lg shadow-sm">
                    <Phone className="text-blue-600 w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Phone</h4>
                    <p className="text-slate-600 mt-1">{COMPANY_DETAILS.phone}</p>
                  </div>
               </div>

               <div className="flex items-start space-x-4">
                  <div className="bg-white p-3 rounded-lg shadow-sm">
                    <Mail className="text-blue-600 w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Email</h4>
                    <p className="text-slate-600 mt-1">{COMPANY_DETAILS.email}</p>
                  </div>
               </div>
            </div>

            {/* Get in Touch Summary */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <h4 className="font-bold text-slate-900 mb-3">Get In Touch For:</h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>Connect with our sales team</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>Apply for job opportunities</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></span>Partner with us in healthcare excellence</li>
              </ul>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;