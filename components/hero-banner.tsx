'use client'
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const links = [
  { name: 'Open roles', href: '#' },
  { name: 'Internship program', href: '#' },
  { name: 'Our values', href: '#' },
  { name: 'Meet our leadership', href: '#' },
];
const stats = [
  { name: 'Offices worldwide', value: '12' },
  { name: 'Full-time colleagues', value: '300+' },
  { name: 'Hours per week', value: '40' },
  { name: 'Paid time off', value: 'Unlimited' },
];

const images = [
  '/hero-banner2.jpeg',
  '/hero-banner.jpeg',
  '/hero-banner2.jpeg',
]

export default function WorkWithUs() {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Cambiar la imagen cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
      {/* Slider de imágenes de fondo */}
      <div className="absolute inset-0 -z-10 transition-opacity duration-1000">
        {images.map((src, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'
              }`}
          >
            <Image
              src={src}
              alt={`Background ${index}`}
              fill
              className="object-cover object-center"
              quality={100}
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-black/60" />
          </div>
        ))}
      </div>

      {/* Contenido estático */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl drop-shadow-lg">
            Diseñamos tu hogar a la medida
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300 drop-shadow">
            Especialistas en cocinas integrales, closets y muebles personalizados.
            🚛 Instalación en Bogotá y alrededores | 🛠️ Garantía incluida
          </p>
          <div className="mt-10">
            <button className="rounded-md bg-white px-6 py-3 text-gray-900 font-semibold shadow-md hover:bg-[#f0b100] hover:text-white transition">
              Solicita tu cotización gratuita

            </button>
          </div>
        </div>
      </div>
    </div>
  )
}