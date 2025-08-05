'use client'

import {
  HomeModernIcon,     // Cocinas integrales
  RectangleStackIcon, // Closets y vestidores (estanterías apiladas)
  TvIcon,             // Centros de entretenimiento
  SparklesIcon,       // Muebles para baños (limpieza/brillo)
} from '@heroicons/react/24/outline'
import {
  Cog6ToothIcon, // CogIcon,
  LightBulbIcon, // LightBulbIcon,
} from '@heroicons/react/24/solid'
import { PaintBrushIcon } from '@heroicons/react/24/outline'


const features = [
  {
    title: 'Cocinas integrales personalizadas',
    description: 'Diseñamos cocinas funcionales, modernas y adaptadas a tu espacio. Elige los colores, materiales y distribución ideal para ti.',
    highlights: ['Acabados premium', 'Optimización del espacio', 'Entrega puntual'],
    icon: HomeModernIcon,
  },
  {
    title: 'Closets y vestieres a medida',
    description: 'Soluciones inteligentes para organizar tu ropa y accesorios con estilo. Aprovechamos cada rincón, sin perder elegancia ni comodidad.',
    highlights: ['Módulos personalizables', 'Acabados modernos o clásicos ', 'Puertas abatibles o corredizas'],
    icon: RectangleStackIcon,
  },
  {
    title: 'Centros de entretenimiento',
    description: 'Diseños pensados para que tu sala se vea increíble y todo esté en su lugar.Espacios para TV, consolas, decoración y almacenamiento.',
    highlights: [' Fabricación sobre plano', 'Tonos tipo madera ', 'Ajuste perfecto al área disponible'],
    icon: TvIcon,
  },
  {
    title: 'Muebles para baños y lavaderos',
    description: 'Muebles resistentes a la humedad, prácticos y con excelente estética. Perfectos para mantener el orden en espacios pequeños.',
    highlights: [' Materiales resistentes', 'Diseño limpio y funcional ', 'Fácil mantenimiento'],
    icon: SparklesIcon,
  },
]

export default function FeaturesGrid() {
  return (
    <section className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <h2 className="text-base font-semibold text-yellow-500">Linea Hogar</h2>
        <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Nuestros frentes de trabajo
        </p>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group rounded-xl bg-white p-6 shadow-sm transition hover:shadow-lg hover:ring-1 hover:ring-yellow-700 h-full flex flex-col"
            >
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-yellow-50 text-yellow-600 group-hover:bg-yellow-100 transition-colors">
                <feature.icon className="h-8 w-8" />
              </div>

              <div className="flex-1 flex flex-col text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 leading-tight">{feature.title}</h3>
                <p className="text-sm text-gray-600 mb-4 flex-1">{feature.description}</p>

                {/* Highlights especiales para el primer item */}
                {feature.highlights && (
                  <div className="mt-auto pt-4 border-t border-gray-100">
                    <div className="space-y-2">
                      {feature.highlights.map((highlight, highlightIndex) => (
                        <div key={highlightIndex} className="flex items-center justify-center text-xs text-gray-600">
                          <span className="text-yellow-500 mr-2 font-semibold">✓</span>
                          <span className="font-medium">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}