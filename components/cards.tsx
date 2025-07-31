'use client'

import {
  HomeModernIcon,     // Casa moderna
  LightBulbIcon,       // Creatividad / Iluminación
  Cog6ToothIcon,       // Personalización / Configuración
  PaintBrushIcon,      // Diseño / Decoración
} from '@heroicons/react/24/outline'
const features = [
  {
    title: 'Mobiliario arquitectónico para el hogar',
    description: 'Diseño responsivo que se adapta perfectamente a cualquier dispositivo.',
    icon: HomeModernIcon,
  },
  {
    title: 'Diseño interior y obra civil',
    description: 'Carga rápida y experiencia fluida sin sacrificar funcionalidad.',
    icon: LightBulbIcon,
  },
  {
    title: 'Mobiliario comercial y corporativo',
    description: 'Protección robusta con las mejores prácticas de seguridad web.',
    icon: Cog6ToothIcon,
  },
  {
    title: 'Cocinas Integrales',
    description: 'Integraciones sencillas con APIs modernas para escalar fácilmente.',
    icon: PaintBrushIcon,
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
              className="group rounded-xl bg-white p-6 shadow-sm transition hover:shadow-lg hover:ring-1 hover:ring-yellow-700"
            >
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-indigo-50 text-yellow-500 group-hover:bg-indigo-100">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
