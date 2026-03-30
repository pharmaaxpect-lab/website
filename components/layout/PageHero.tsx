import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
}

const PageHero: React.FC<PageHeroProps> = ({ title, subtitle, backgroundImage }) => {
  const location = useLocation();
  const pathSegments = location.pathname.split('/').filter(Boolean);

  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        {backgroundImage ? (
          <img src={backgroundImage} alt="" className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950"></div>
        )}
        <div className="absolute inset-0 bg-blue-900/80"></div>
      </div>

      {/* Decorative shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-500/10 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-400/10 rounded-full blur-[100px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Breadcrumb */}
        <nav className="flex items-center text-sm text-blue-200 mb-6">
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          {pathSegments.map((segment, index) => (
            <React.Fragment key={segment}>
              <span className="mx-2 opacity-50">/</span>
              {index === pathSegments.length - 1 ? (
                <span className="text-white font-medium capitalize">{segment.replace(/-/g, ' ')}</span>
              ) : (
                <Link to={`/${pathSegments.slice(0, index + 1).join('/')}`} className="hover:text-white transition-colors capitalize">
                  {segment.replace(/-/g, ' ')}
                </Link>
              )}
            </React.Fragment>
          ))}
        </nav>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl">{subtitle}</p>
        )}
      </div>
    </section>
  );
};

export default PageHero;
