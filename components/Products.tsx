import React from 'react';
import { PRODUCTS } from '../constants';
import { Pill, Shield, Baby, HeartPulse, Apple } from 'lucide-react';

const categoryIcons: Record<string, React.FC<{className?: string}>> = {
  'Therapeutic': Pill,
  'Anti-Infective': Shield,
  'Pediatric': Baby,
  'Chronic Care': HeartPulse,
  'Nutrition': Apple,
};

const categoryColors: Record<string, { bg: string; border: string; iconBg: string; text: string }> = {
  'Therapeutic': { bg: 'bg-blue-50', border: 'border-blue-100', iconBg: 'bg-blue-100', text: 'text-blue-600' },
  'Anti-Infective': { bg: 'bg-red-50', border: 'border-red-100', iconBg: 'bg-red-100', text: 'text-red-600' },
  'Pediatric': { bg: 'bg-purple-50', border: 'border-purple-100', iconBg: 'bg-purple-100', text: 'text-purple-600' },
  'Chronic Care': { bg: 'bg-rose-50', border: 'border-rose-100', iconBg: 'bg-rose-100', text: 'text-rose-600' },
  'Nutrition': { bg: 'bg-green-50', border: 'border-green-100', iconBg: 'bg-green-100', text: 'text-green-600' },
};

const Products: React.FC = () => {
  return (
    <section id="products" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-blue-600 font-bold tracking-wide uppercase text-sm mb-2">Our Products</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900">
            High-Quality Pharmaceutical Products
          </h3>
          <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
            We offer a wide range of high-quality pharmaceutical products across multiple therapeutic segments. All our products are manufactured in certified facilities and meet strict quality standards.
          </p>
          <p className="text-slate-500 mt-2 max-w-2xl mx-auto text-sm">
            Our products are promoted through ethical marketing practices and are trusted by doctors for their safety and effectiveness.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS.map((product) => {
            const Icon = categoryIcons[product.category] || Pill;
            const colors = categoryColors[product.category] || categoryColors['Therapeutic'];
            return (
              <div 
                key={product.id} 
                className={`${colors.bg} ${colors.border} border rounded-2xl p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group`}
              >
                <div className={`w-14 h-14 ${colors.iconBg} rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                  <Icon className={`w-7 h-7 ${colors.text}`} />
                </div>
                <span className={`inline-block px-3 py-1 ${colors.iconBg} ${colors.text} text-xs rounded-full mb-3 font-medium`}>
                  {product.category}
                </span>
                <h4 className="text-xl font-bold text-slate-800 mb-2">{product.name}</h4>
                <p className="text-sm text-slate-500 leading-relaxed">{product.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Products;