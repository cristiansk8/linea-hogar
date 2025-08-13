import React from 'react';
import { CheckCircle } from 'lucide-react';
import Link from 'next/link';

const QuienesSomosSection = () => {
  const servicios = [
    'Asesoría en diseño',
    'Fabricación a medida',
    'Instalación profesional'
  ];

  return (
    <section id="about" className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            ¿Quiénes somos?
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contenido de texto */}
          <div className="space-y-6">
            <div className="text-lg text-gray-600 leading-relaxed">
              <p className="font-semibold text-gray-800 text-xl mb-4">
                Más de 20 años transformando hogares con calidad y detalle.
              </p>
              <p>
                En <span className="font-semibold text-amber-600 italic">Línea Hogar</span> somos
                un equipo experto en diseño y fabricación de mobiliario personalizado. Nos enfocamos
                en crear espacios funcionales, modernos y adaptados a tu estilo de vida.
              </p>
            </div>

            {/* Lista de servicios */}
            <div className="space-y-4">
              {servicios.map((servicio, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-amber-500 flex-shrink-0" />
                  <span className="text-gray-700 font-medium text-lg">
                    {servicio}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-6">
              <Link
                href="#projects"
                className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                Conoce nuestros proyectos
              </Link>
            </div>
          </div>

          {/* Imagen o contenido visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl p-8 shadow-xl">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="text-center">
                  <div className="text-4xl font-bold text-amber-600 mb-2">+20</div>
                  <div className="text-gray-600 font-medium">Años de experiencia</div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="bg-white rounded-lg p-4 shadow-md text-center">
                  <div className="text-2xl font-bold text-gray-800">500+</div>
                  <div className="text-sm text-gray-600">Proyectos completados</div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-md text-center">
                  <div className="text-2xl font-bold text-gray-800">100%</div>
                  <div className="text-sm text-gray-600">Personalizado</div>
                </div>
              </div>

              {/* Elementos decorativos */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-amber-400 rounded-full opacity-60"></div>
              <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-amber-300 rounded-full opacity-40"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuienesSomosSection;