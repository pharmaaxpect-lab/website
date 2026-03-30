import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ZoomIn, X } from 'lucide-react';

interface CatalogueViewerProps {
  pages: string[];
}

const CatalogueViewer: React.FC<CatalogueViewerProps> = ({ pages }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const totalPages = pages.length;

  const goToPrev = () => {
    setCurrentPage((prev) => Math.max(0, prev - 2));
  };

  const goToNext = () => {
    setCurrentPage((prev) => Math.min(totalPages - 1, prev + 2));
  };

  const goToPage = (page: number) => {
    setCurrentPage(Math.max(0, Math.min(totalPages - 1, page)));
  };

  const leftPage = pages[currentPage];
  const rightPage = currentPage + 1 < totalPages ? pages[currentPage + 1] : null;

  return (
    <>
      <div className="bg-slate-800 rounded-2xl overflow-hidden shadow-2xl">
        {/* Toolbar */}
        <div className="bg-slate-900 px-6 py-3 flex items-center justify-between">
          <span className="text-sm text-slate-400 font-medium">
            Product Catalogue
          </span>
          <div className="flex items-center gap-4">
            <span className="text-sm text-slate-400">
              Page {currentPage + 1}{rightPage ? `-${currentPage + 2}` : ''} of {totalPages}
            </span>
            <button
              onClick={() => setIsFullscreen(true)}
              className="text-slate-400 hover:text-white transition-colors p-1"
              title="View fullscreen"
            >
              <ZoomIn size={18} />
            </button>
          </div>
        </div>

        {/* Book View */}
        <div className="relative">
          <div className="flex min-h-[400px] md:min-h-[500px] lg:min-h-[600px]">
            {/* Left Page */}
            <div className="flex-1 bg-white border-r border-slate-300/50">
              <img
                src={leftPage}
                alt={`Catalogue page ${currentPage + 1}`}
                className="w-full h-full object-contain"
              />
            </div>
            {/* Right Page (desktop) */}
            {rightPage && (
              <div className="flex-1 bg-white hidden md:block">
                <img
                  src={rightPage}
                  alt={`Catalogue page ${currentPage + 2}`}
                  className="w-full h-full object-contain"
                />
              </div>
            )}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrev}
            disabled={currentPage === 0}
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg rounded-full p-2 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          >
            <ChevronLeft className="w-5 h-5 text-slate-700" />
          </button>
          <button
            onClick={goToNext}
            disabled={currentPage + 2 >= totalPages}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg rounded-full p-2 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          >
            <ChevronRight className="w-5 h-5 text-slate-700" />
          </button>
        </div>

        {/* Page Selector */}
        <div className="bg-slate-900 px-6 py-3 flex items-center justify-center gap-2 overflow-x-auto">
          {Array.from({ length: Math.ceil(totalPages / 2) }, (_, i) => i * 2).map((pageIndex) => (
            <button
              key={pageIndex}
              onClick={() => goToPage(pageIndex)}
              className={`w-8 h-8 rounded-lg text-xs font-medium transition-all flex-shrink-0 ${
                currentPage === pageIndex
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-700 text-slate-400 hover:bg-slate-600 hover:text-white'
              }`}
            >
              {pageIndex + 1}
            </button>
          ))}
        </div>
      </div>

      {/* Fullscreen Modal */}
      {isFullscreen && (
        <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center" onClick={() => setIsFullscreen(false)}>
          <button
            className="absolute top-4 right-4 text-white/70 hover:text-white p-2 z-10"
            onClick={() => setIsFullscreen(false)}
          >
            <X size={28} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); goToPrev(); }}
            disabled={currentPage === 0}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-3 disabled:opacity-20 transition-all z-10"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); goToNext(); }}
            disabled={currentPage + 2 >= totalPages}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-3 disabled:opacity-20 transition-all z-10"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
          <div className="flex max-h-[90vh] max-w-[95vw] gap-1" onClick={(e) => e.stopPropagation()}>
            <img src={leftPage} alt="" className="max-h-[90vh] object-contain" />
            {rightPage && (
              <img src={rightPage} alt="" className="max-h-[90vh] object-contain hidden md:block" />
            )}
          </div>
          <div className="absolute bottom-4 text-white/60 text-sm">
            Page {currentPage + 1}{rightPage ? `-${currentPage + 2}` : ''} of {totalPages}
          </div>
        </div>
      )}
    </>
  );
};

export default CatalogueViewer;
