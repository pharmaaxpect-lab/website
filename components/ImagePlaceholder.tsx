import React from 'react';
import { Image as ImageIcon } from 'lucide-react';

interface ImagePlaceholderProps {
  label: string;
  height?: string;
  className?: string;
}

const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({ label, height = "h-64", className = "" }) => {
  return (
    <div className={`w-full ${height} bg-slate-200 border-2 border-dashed border-slate-400 flex flex-col items-center justify-center text-slate-500 p-4 rounded-lg transition-colors hover:bg-slate-300 hover:border-slate-500 ${className}`}>
      <ImageIcon size={48} className="mb-2 opacity-50" />
      <span className="font-semibold text-center uppercase tracking-wide text-sm">
        Upload Image: {label}
      </span>
    </div>
  );
};

export default ImagePlaceholder;