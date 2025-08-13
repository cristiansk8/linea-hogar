'use client';

import { useState } from 'react';
import Link from 'next/link';

const socialLinks = [
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/decoradising',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    )
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/lineahogarmodulario/',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    )
  },
  {
    name: 'TikTok',
    url: 'https://www.tiktok.com/@lineahogardesigns',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
      </svg>
    )
  }
];

export default function SocialMedia() {
  const [isExpanded, setIsExpanded] = useState(true); // Cambiado a true para mostrar por defecto

  return (
    <div className="fixed left-4 top-1/2 transform -translate-y-1/2 z-40">
      <div className="flex flex-col items-center space-y-2">
        {/* Social Links - Ahora aparecen primero */}
        <div className={`flex flex-col space-y-2 transition-all duration-500 ease-in-out ${
          isExpanded 
            ? 'opacity-100 transform translate-y-0' 
            : 'opacity-0 transform -translate-y-4 pointer-events-none'
        }`}>
          {socialLinks.map((social, index) => (
            <Link
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black/90 backdrop-blur-sm text-[#f0b100] p-3 rounded-full shadow-lg hover:bg-black hover:text-[#fdc700] transition-all duration-300 hover:scale-110 group"
              style={{
                transitionDelay: isExpanded ? `${index * 100}ms` : '0ms'
              }}
            >
              <div className="group-hover:scale-110 transition-transform duration-300">
                {social.icon}
              </div>
            </Link>
          ))}
        </div>

        {/* Toggle Button - Ahora aparece abajo */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="bg-black/90 backdrop-blur-sm text-[#f0b100] p-3 rounded-full shadow-lg hover:bg-black transition-all duration-300 hover:scale-110"
          title={isExpanded ? 'Ocultar redes sociales' : 'Mostrar redes sociales'}
        >
          <svg 
            className={`w-6 h-6 transition-transform duration-300 ${isExpanded ? 'rotate-0' : 'rotate-180'}`} 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </button>
      </div>
    </div>
  );
}