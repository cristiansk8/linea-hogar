'use client'

import { useState, useEffect } from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'

const projects = [
  {
    id: 1,
    title: 'Cocina Moderna Minimalista',
    category: 'Cocinas',
    image: '/cocina.jpeg',
    description: 'Diseño contemporáneo con acabados en blanco y madera natural'
  },
  {
    id: 2,
    title: 'Closet Walk-in Luxury',
    category: 'Closets',
    image: '/closet.jpg',
    description: 'Vestidor amplio con iluminación LED y acabados premium'
  },
  {
    id: 3,
    title: 'Centro de Entretenimiento',
    category: 'Entretenimiento',
    image: '/tv.jpg',
    description: 'Mueble TV con almacenamiento integrado y cable management'
  },
  {
    id: 4,
    title: 'Baño Contemporáneo',
    category: 'Baños',
    image: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Vanity flotante con espejo retroiluminado'
  },
  {
    id: 5,
    title: 'Cocina Industrial Chic',
    category: 'Cocinas',
    image: '/cocina-2.jpg',
    description: 'Estilo industrial con isla central y acabados metálicos'
  },
  {
    id: 6,
    title: 'Closet Compacto',
    category: 'Closets',
    image: '/closet-2.jpg',
    description: 'Solución inteligente para espacios reducidos'
  }
]

export default function ProjectGallerySlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [slidesToShow, setSlidesToShow] = useState(3)

  // Responsive slides calculation
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSlidesToShow(1)
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(2)
      } else {
        setSlidesToShow(3)
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => 
      prev >= projects.length - slidesToShow ? 0 : prev + 1
    )
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => 
      prev <= 0 ? projects.length - slidesToShow : prev - 1
    )
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  // Auto-play functionality
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000)
    return () => clearInterval(timer)
  }, [currentSlide, slidesToShow])

  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold text-yellow-500">Nuestros Proyectos</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Galería de Realizaciones
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Nuestros proyectos hablan por nosotros
          </p>
        </div>

        {/* Slider Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-2 transition-all duration-200 hover:scale-110"
            aria-label="Proyecto anterior"
          >
            <ChevronLeftIcon className="h-6 w-6 text-gray-700" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-2 transition-all duration-200 hover:scale-110"
            aria-label="Siguiente proyecto"
          >
            <ChevronRightIcon className="h-6 w-6 text-gray-700" />
          </button>

          {/* Slides */}
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentSlide * (100 / slidesToShow)}%)`
              }}
            >
              {projects.map((project) => (
                <div
                  key={project.id}
                  className={`flex-shrink-0 px-3 ${
                    slidesToShow === 1 ? 'w-full' : 
                    slidesToShow === 2 ? 'w-1/2' : 'w-1/3'
                  }`}
                >
                  <div className="group relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                          <span className="inline-block px-3 py-1 bg-yellow-500 text-black text-xs font-semibold rounded-full mb-2">
                            {project.category}
                          </span>
                          <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                          <p className="text-sm text-gray-200">{project.description}</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Card Content */}
                    <div className="p-6">
                      <span className="inline-block px-3 py-1 bg-yellow-100 text-yellow-800 text-xs font-semibold rounded-full mb-3">
                        {project.category}
                      </span>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{project.title}</h3>
                      <p className="text-sm text-gray-600">{project.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: Math.ceil(projects.length / slidesToShow) }).map((_, index: number) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  currentSlide === index
                    ? 'bg-yellow-500 scale-125'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Ir al slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            Ver Todos los Proyectos
          </button>
        </div>
      </div>
    </section>
  )
}