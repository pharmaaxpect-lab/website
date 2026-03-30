import React from 'react';
import { Link } from 'react-router-dom';
import { COMPANY_DETAILS, NAV_LINKS } from '../../constants';
import { Facebook, Twitter, Instagram, Linkedin, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex flex-col">
                <span className="text-2xl font-bold text-white">Axpect</span>
                <span className="text-lg font-medium text-green-400">Pharma</span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              {COMPANY_DETAILS.footerLine}
            </p>
            <div className="flex space-x-4">
               <a href="#" className="text-slate-400 hover:text-white transition-colors"><Facebook size={20} /></a>
               <a href="#" className="text-slate-400 hover:text-white transition-colors"><Twitter size={20} /></a>
               <a href="#" className="text-slate-400 hover:text-white transition-colors"><Instagram size={20} /></a>
               <a href="#" className="text-slate-400 hover:text-white transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-slate-400">
              {NAV_LINKS.map(link => (
                <li key={link.label}>
                  <Link to={link.href} className="hover:text-green-400 transition-colors">{link.label}</Link>
                </li>
              ))}
              <li>
                <Link to="/faq" className="hover:text-green-400 transition-colors">FAQ</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6">Our Services</h4>
            <ul className="space-y-3 text-slate-400">
              <li><Link to="/services" className="hover:text-green-400 transition-colors">Ethical Pharma Marketing</Link></li>
              <li><Link to="/services" className="hover:text-green-400 transition-colors">Doctor Engagement</Link></li>
              <li><Link to="/services" className="hover:text-green-400 transition-colors">Field Force Management</Link></li>
              <li><Link to="/services" className="hover:text-green-400 transition-colors">Brand Promotion</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-slate-400">
              <li className="flex items-start">
                 <span className="block">{COMPANY_DETAILS.address}</span>
              </li>
              <li>{COMPANY_DETAILS.phone}</li>
              <li>{COMPANY_DETAILS.email}</li>
            </ul>
          </div>

        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-500 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} {COMPANY_DETAILS.name}. All rights reserved.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="mt-4 md:mt-0 bg-slate-800 hover:bg-green-500 hover:text-white text-slate-400 p-3 rounded-full transition-all"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
