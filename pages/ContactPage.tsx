import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { COMPANY_DETAILS } from '../constants';
import PageHero from '../components/layout/PageHero';

const ContactPage: React.FC = () => {
  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="Have questions or want to connect with our team? We'd love to hear from you."
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Form */}
            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Send Us a Message</h2>
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
                  <textarea id="message" rows={5} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" placeholder="Tell us how we can help..."></textarea>
                </div>

                <button type="button" className="w-full bg-blue-600 text-white font-bold py-4 rounded-lg hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200">
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              {/* Info Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-slate-50 rounded-2xl p-6 border border-gray-100">
                  <div className="bg-white p-3 rounded-lg shadow-sm w-fit mb-4">
                    <MapPin className="text-blue-600 w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-slate-900 mb-1">Address</h4>
                  <p className="text-sm text-slate-600">{COMPANY_DETAILS.address}</p>
                </div>
                <div className="bg-slate-50 rounded-2xl p-6 border border-gray-100">
                  <div className="bg-white p-3 rounded-lg shadow-sm w-fit mb-4">
                    <Phone className="text-blue-600 w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-slate-900 mb-1">Phone</h4>
                  <p className="text-sm text-slate-600">{COMPANY_DETAILS.phone}</p>
                </div>
                <div className="bg-slate-50 rounded-2xl p-6 border border-gray-100">
                  <div className="bg-white p-3 rounded-lg shadow-sm w-fit mb-4">
                    <Mail className="text-blue-600 w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-slate-900 mb-1">Email</h4>
                  <p className="text-sm text-slate-600">{COMPANY_DETAILS.email}</p>
                </div>
                <div className="bg-slate-50 rounded-2xl p-6 border border-gray-100">
                  <div className="bg-white p-3 rounded-lg shadow-sm w-fit mb-4">
                    <Clock className="text-blue-600 w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-slate-900 mb-1">Business Hours</h4>
                  <p className="text-sm text-slate-600">Mon - Sat: 9:00 AM - 6:00 PM</p>
                </div>
              </div>

              {/* Get in Touch Summary */}
              <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                <h4 className="font-bold text-slate-900 mb-4">Get In Touch For:</h4>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-center"><span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>Connect with our sales team</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>Apply for job opportunities</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>Partner with us in healthcare excellence</li>
                </ul>
              </div>

              {/* Map */}
              <div className="rounded-2xl overflow-hidden shadow-md border border-gray-200 bg-slate-100 h-64 flex items-center justify-center">
                <div className="text-center text-slate-400">
                  <MapPin className="w-10 h-10 mx-auto mb-2 opacity-50" />
                  <p className="text-sm font-medium">Google Maps Integration</p>
                  <p className="text-xs">Map will be embedded here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
