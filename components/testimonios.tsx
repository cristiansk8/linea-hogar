'use client'

import { useState, useEffect } from 'react'
import { StarIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'
import { ChatBubbleLeftEllipsisIcon } from '@heroicons/react/24/outline'

const testimonials = [
  {
    id: 1,
    name: "Camila Torres",
    location: "Bogotá",
    rating: 5,
    text: "Me encantó el trabajo de Línea Hogar. Cumplieron con todo lo prometido y la cocina quedó espectacular. Súper recomendados.",
    project: "Cocina Integral"
  },
  {
    id: 2,
    name: "Ricardo Mendoza",
    location: "Medellín",
    rating: 5,
    text: "Excelente servicio desde el diseño hasta la instalación. Mi closet walk-in quedó mejor de lo que imaginé. Muy profesionales en todo el proceso.",
    project: "Closet a Medida"
  },
  {
    id: 3,
    name: "María Elena Vásquez",
    location: "Cali",
    rating: 5,
    text: "La atención al detalle es impresionante. El centro de entretenimiento se adapta perfectamente a mi sala y la calidad es excepcional.",
    project: "Centro de Entretenimiento"
  },
  {
    id: 4,
    name: "Andrés Felipe Cruz",
    location: "Cartagena",
    rating: 5,
    text: "Transformaron completamente mi baño con un mueble hermoso y funcional. Resistente a la humedad y con un diseño muy moderno.",
    project: "Mueble de Baño"
  },
  {
    id: 5,
    name: "Luisa Fernanda Rojas",
    location: "Bucaramanga",
    rating: 5,
    text: "Quedé fascinada con mi nueva cocina. El equipo es muy creativo y logró aprovechar cada centímetro del espacio disponible.",
    project: "Cocina Personalizada"
  },
  {
    id: 6,
    name: "Carlos Alberto Jiménez",
    location: "Pereira",
    rating: 5,
    text: "Puntuales, organizados y con acabados de primera calidad. Mi oficina en casa quedó perfecta con el mobiliario que diseñaron.",
    project: "Mobiliario Corporativo"
  },
  {
    id: 7,
    name: "Diana Patricia López",
    location: "Barranquilla",
    rating: 5,
    text: "La experiencia fue excelente de principio a fin. Nos asesoraron en cada paso y el resultado superó nuestras expectativas.",
    project: "Proyecto Integral"
  },
  {
    id: 8,
    name: "Jorge Eduardo Herrera",
    location: "Manizales",
    rating: 5,
    text: "Muy satisfecho con el closet que me hicieron. Aprovecharon muy bien el espacio y los acabados son de muy buena calidad.",
    project: "Vestidor"
  }
]

export default function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [testimonialsToShow, setTestimonialsToShow] = useState(3)

  // Responsive testimonials calculation
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setTestimonialsToShow(1)
      } else if (window.innerWidth < 1024) {
        setTestimonialsToShow(2)
      } else {
        setTestimonialsToShow(3)
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => 
      prev >= testimonials.length - testimonialsToShow ? 0 : prev + 1
    )
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => 
      prev <= 0 ? testimonials.length - testimonialsToShow : prev - 1
    )
  }

  // Auto-play functionality
  useEffect(() => {
    const timer = setInterval(nextTestimonial, 6000)
    return () => clearInterval(timer)
  }, [currentTestimonial, testimonialsToShow])

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index: number) => (
      <StarIcon
        key={index}
        className={`h-5 w-5 ${
          index < rating ? 'text-yellow-400' : 'text-gray-300'
        }`}
      />
    ))
  }

  return (
    <section className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold text-yellow-500">Testimonios</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Lo que dicen nuestros clientes
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            La satisfacción de nuestros clientes es nuestra mejor carta de presentación
          </p>
        </div>

        {/* Testimonials Slider */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-all duration-200 hover:scale-110"
            aria-label="Testimonio anterior"
          >
            <ChevronLeftIcon className="h-5 w-5 text-gray-700" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-all duration-200 hover:scale-110"
            aria-label="Siguiente testimonio"
          >
            <ChevronRightIcon className="h-5 w-5 text-gray-700" />
          </button>

          {/* Testimonials Cards */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentTestimonial * (100 / testimonialsToShow)}%)`
              }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className={`flex-shrink-0 px-4 ${
                    testimonialsToShow === 1 ? 'w-full' : 
                    testimonialsToShow === 2 ? 'w-1/2' : 'w-1/3'
                  }`}
                >
                  <div className="bg-white rounded-2xl shadow-lg p-8 h-full flex flex-col justify-between hover:shadow-xl transition-shadow duration-300">
                    {/* Quote Icon */}
                    <div className="flex justify-center mb-6">
                      <div className="bg-yellow-100 rounded-full p-3">
                        <ChatBubbleLeftEllipsisIcon className="h-6 w-6 text-yellow-600" />
                      </div>
                    </div>

                    {/* Stars */}
                    <div className="flex justify-center mb-6">
                      {renderStars(testimonial.rating)}
                    </div>

                    {/* Testimonial Text */}
                    <blockquote className="text-gray-700 text-center italic text-lg leading-relaxed mb-8 flex-1">
                      "{testimonial.text}"
                    </blockquote>

                    {/* Project Type */}
                    <div className="text-center mb-4">
                      <span className="inline-block px-3 py-1 bg-yellow-100 text-yellow-800 text-sm font-medium rounded-full">
                        {testimonial.project}
                      </span>
                    </div>

                    {/* Author Info */}
                    <div className="text-center">
                      <div className="font-semibold text-gray-900 text-lg">
                        {testimonial.name}
                      </div>
                      <div className="text-gray-500 text-sm">
                        {testimonial.location}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center mt-10 space-x-2">
            {Array.from({ length: Math.ceil(testimonials.length / testimonialsToShow) }).map((_, index: number) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  currentTestimonial === index
                    ? 'bg-yellow-500 scale-125'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Ir al testimonio ${index + 1}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}