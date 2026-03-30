import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FAQS } from '../constants';
import { ChevronDown, ChevronUp, HelpCircle, ArrowRight } from 'lucide-react';
import PageHero from '../components/layout/PageHero';

const FAQPage: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', ...Array.from(new Set(FAQS.map(f => f.category || 'General')))];
  const filteredFaqs = activeCategory === 'All' ? FAQS : FAQS.filter(f => f.category === activeCategory);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <PageHero
        title="Frequently Asked Questions"
        subtitle="Find answers to common questions about Axpect Pharma and our ethical pharmaceutical operations."
      />

      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          {/* Category Filters */}
          <div className="flex flex-wrap gap-2 mb-10 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => { setActiveCategory(cat); setOpenIndex(0); }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-4">
            {filteredFaqs.map((faq, index) => (
              <div 
                key={index}
                className={`bg-white rounded-xl overflow-hidden transition-all duration-300 ${openIndex === index ? 'shadow-lg ring-1 ring-blue-100' : 'shadow-sm border border-gray-100'}`}
              >
                <button
                  className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className={`font-semibold text-lg ${openIndex === index ? 'text-blue-600' : 'text-slate-800'}`}>
                    {faq.question}
                  </span>
                  {openIndex === index ? (
                    <ChevronUp className="text-blue-500 w-5 h-5 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="text-gray-400 w-5 h-5 flex-shrink-0" />
                  )}
                </button>
                
                <div 
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-48 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <p className="text-slate-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Still have questions */}
          <div className="mt-16 text-center bg-slate-50 rounded-2xl p-10 border border-gray-100">
            <HelpCircle className="w-10 h-10 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-slate-900 mb-2">Still Have Questions?</h3>
            <p className="text-slate-600 mb-6">Can't find what you're looking for? Our team is happy to help.</p>
            <Link to="/contact" className="inline-flex items-center px-6 py-3 bg-blue-900 text-white font-medium rounded-full hover:bg-blue-800 transition-all shadow-lg">
              Contact Us <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQPage;
