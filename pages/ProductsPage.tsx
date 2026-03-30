import React from 'react';
import { Download, Pill, Shield, Baby, HeartPulse, Apple } from 'lucide-react';
import { PRODUCTS, CATALOGUE_PAGES } from '../constants';
import PageHero from '../components/layout/PageHero';
import CatalogueViewer from '../components/shared/CatalogueViewer';

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

const ProductsPage: React.FC = () => {
  return (
    <>
      <PageHero
        title="Our Products"
        subtitle="High-quality pharmaceutical products across multiple therapeutic segments, manufactured in certified facilities."
      />

      {/* Intro */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-lg text-slate-600 leading-relaxed">
            We offer a wide range of high-quality pharmaceutical products across multiple therapeutic segments. All our products are manufactured in certified facilities and meet strict quality standards. Our products are promoted through ethical marketing practices and are trusted by doctors for their safety and effectiveness.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-blue-600 font-bold tracking-wide uppercase text-sm mb-2">Therapeutic Segments</h2>
            <h3 className="text-3xl font-bold text-slate-900">Product Categories</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {PRODUCTS.map((product) => {
              const Icon = categoryIcons[product.category] || Pill;
              const colors = categoryColors[product.category] || categoryColors['Therapeutic'];
              return (
                <div key={product.id} className={`${colors.bg} ${colors.border} border rounded-2xl p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group`}>
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

      {/* Catalogue Viewer */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-blue-600 font-bold tracking-wide uppercase text-sm mb-2">Full Catalogue</h2>
            <h3 className="text-3xl font-bold text-slate-900 mb-4">Browse Our Product Catalogue</h3>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Explore our complete range of pharmaceutical products. Use the navigation to browse through all 50 pages.
            </p>
          </div>

          <CatalogueViewer pages={CATALOGUE_PAGES} />

          <div className="text-center mt-8">
            <a
              href="/asset-library/catalogue/axpect-pharma-catalogue.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-3 bg-blue-900 text-white font-bold rounded-full hover:bg-blue-800 transition-all shadow-lg"
            >
              <Download className="mr-2 w-5 h-5" />
              Download Full Catalogue (PDF)
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductsPage;
