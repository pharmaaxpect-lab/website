import React from 'react';
import { KEY_NUMBERS } from '../../constants';
import AnimatedCounter from '../shared/AnimatedCounter';

const StatsBar: React.FC = () => {
  return (
    <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x-0 md:divide-x divide-gray-200">
        {KEY_NUMBERS.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="flex flex-col items-center">
              <Icon className="w-8 h-8 text-blue-500 mb-3" />
              <span className="text-4xl md:text-5xl font-extrabold text-slate-900 block mb-1">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </span>
              <span className="text-sm font-medium text-slate-500 uppercase tracking-wider">
                {stat.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StatsBar;
