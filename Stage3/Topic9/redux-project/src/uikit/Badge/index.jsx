import React from 'react';

const colors = {
  red: 'bg-red-200 text-red-700',
  green: 'bg-green-200 text-green-700',
  blue: 'bg-blue-200 text-blue-700',
  yellow: 'bg-yellow-200 text-yellow-700',
  purple: 'bg-purple-200 text-purple-700',
  gray: 'bg-gray-200 text-gray-700',
  indigo: 'bg-indigo-200 text-indigo-700',
  pink: 'bg-pink-200 text-pink-700',
  orange: 'bg-orange-200 text-orange-700',
  teal: 'bg-teal-200 text-teal-700',
  cyan: 'bg-cyan-200 text-cyan-700',
  lime: 'bg-lime-200 text-lime-700',
  amber: 'bg-amber-200 text-amber-700',
  emerald: 'bg-emerald-200 text-emerald-700',
  violet: 'bg-violet-200 text-violet-700',
  rose: 'bg-rose-200 text-rose-700',
  fuchsia: 'bg-fuchsia-200 text-fuchsia-700',
  slate: 'bg-slate-200 text-slate-700',
};

const sizeClasses = {
  sm: 'text-sm',
  md: 'text-md',
  lg: 'text-lg',
};

function Badge({ color = 'blue', content = 'badge', size = 'md' }) {
  return (
    <div
      className={`inline px-2 py-1 text-prim rounded-md ${colors[color]} ${sizeClasses[size]} bg-accent`}
    >
      {content}
    </div>
  );
}

export default Badge;
