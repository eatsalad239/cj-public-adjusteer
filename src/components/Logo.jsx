import React from 'react';

const Logo = ({ dark = false }) => {
  const textColor = dark ? 'text-white' : 'text-cj-red';
  
  return (
    <div className="flex flex-col items-start">
      <div className={`font-serif font-bold ${textColor}`}>
        <span className="text-2xl">CJ</span>
        <span className="text-3xl ml-2">CLAIM</span>
      </div>
      <div className={`w-full h-0.5 ${dark ? 'bg-white' : 'bg-cj-red'} -mt-1`}></div>
      <div className={`font-sans text-sm tracking-widest ${textColor} mt-0.5`}>
        SERVICES
      </div>
    </div>
  );
};

export default Logo;