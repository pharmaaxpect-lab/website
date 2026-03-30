import React, { useState } from 'react';
import { X } from 'lucide-react';
import { Certification } from '../../types';

interface CertificateCardProps {
  cert: Certification;
}

const CertificateCard: React.FC<CertificateCardProps> = ({ cert }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => setIsOpen(true)}
        className="group bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-1"
      >
        <div className="aspect-[4/3] overflow-hidden bg-slate-50 p-4 flex items-center justify-center">
          <img
            src={cert.image}
            alt={cert.title}
            className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-5">
          <span className={`inline-block px-2.5 py-0.5 text-xs rounded-full font-medium mb-2 ${
            cert.type === 'certification' ? 'bg-blue-100 text-blue-700' : 'bg-green-100 text-green-700'
          }`}>
            {cert.type === 'certification' ? 'Certification' : 'Government Pledge'}
          </span>
          <h3 className="font-bold text-slate-900 mb-1">{cert.title}</h3>
          <p className="text-sm text-slate-500">{cert.issuer}</p>
        </div>
      </div>

      {/* Lightbox */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center p-6 border-b">
              <div>
                <h3 className="text-xl font-bold text-slate-900">{cert.title}</h3>
                <p className="text-sm text-slate-500">{cert.issuer}</p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-full hover:bg-slate-100 transition-colors"
              >
                <X className="w-5 h-5 text-slate-500" />
              </button>
            </div>
            <div className="p-6 flex justify-center bg-slate-50">
              <img src={cert.image} alt={cert.title} className="max-w-full max-h-[60vh] object-contain" />
            </div>
            <div className="p-6 border-t">
              <p className="text-slate-600">{cert.description}</p>
              <p className="text-sm text-slate-400 mt-2">Date: {cert.date}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CertificateCard;
