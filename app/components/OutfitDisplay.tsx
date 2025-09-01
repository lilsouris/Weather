import React from 'react';

interface OutfitDisplayProps {
  className?: string;
}

export default function OutfitDisplay({ className = '' }: OutfitDisplayProps) {
  return (
    <div className={`relative bg-gradient-to-br from-gray-50 to-gray-100 ${className}`}>
      {/* SVG representation of the outfit */}
      <svg
        viewBox="0 0 300 300"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background */}
        <rect width="300" height="300" fill="url(#bgGradient)" />
        
        {/* Gradients */}
        <defs>
          <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f8f9fa" />
            <stop offset="100%" stopColor="#e9ecef" />
          </linearGradient>
          <linearGradient id="sweaterGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f5f1eb" />
            <stop offset="100%" stopColor="#e8dcc6" />
          </linearGradient>
          <linearGradient id="jeansGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4a90e2" />
            <stop offset="100%" stopColor="#357abd" />
          </linearGradient>
        </defs>
        
        {/* Beige Sweater */}
        <ellipse cx="150" cy="80" rx="70" ry="45" fill="url(#sweaterGradient)" />
        <rect x="80" y="50" width="140" height="90" rx="20" fill="url(#sweaterGradient)" />
        
        {/* Sleeves */}
        <ellipse cx="60" cy="85" rx="25" ry="40" fill="url(#sweaterGradient)" />
        <ellipse cx="240" cy="85" rx="25" ry="40" fill="url(#sweaterGradient)" />
        
        {/* Blue Jeans */}
        <rect x="95" y="135" width="110" height="120" rx="15" fill="url(#jeansGradient)" />
        
        {/* Jean details */}
        <line x1="100" y1="145" x2="100" y2="245" stroke="#2c5f87" strokeWidth="2" />
        <line x1="200" y1="145" x2="200" y2="245" stroke="#2c5f87" strokeWidth="2" />
        <circle cx="105" cy="160" r="3" fill="#2c5f87" />
        <circle cx="195" cy="160" r="3" fill="#2c5f87" />
        
        {/* White Sneakers */}
        <ellipse cx="120" cy="270" rx="35" ry="15" fill="#ffffff" stroke="#e0e0e0" strokeWidth="2" />
        <ellipse cx="180" cy="270" rx="35" ry="15" fill="#ffffff" stroke="#e0e0e0" strokeWidth="2" />
        
        {/* Shoe details */}
        <path d="M90 270 Q120 265 150 270" stroke="#e0e0e0" strokeWidth="2" fill="none" />
        <path d="M150 270 Q180 265 210 270" stroke="#e0e0e0" strokeWidth="2" fill="none" />
        <circle cx="115" cy="265" r="2" fill="#e0e0e0" />
        <circle cx="125" cy="265" r="2" fill="#e0e0e0" />
        <circle cx="175" cy="265" r="2" fill="#e0e0e0" />
        <circle cx="185" cy="265" r="2" fill="#e0e0e0" />
      </svg>
    </div>
  );
}
