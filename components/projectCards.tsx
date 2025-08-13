// app/components/ProjectCards.tsx
"use client";

import Image from "next/image";

const projects = [
  {
    title: "Chico norte, Bogota",
    description: "Cocina integral moderna con isla central en mármol veteado, equipada con campana extractora de acero inoxidable, grifería de diseño y electrodomésticos de alta gama. Un espacio funcional y elegante que combina iluminación LED y acabados premium para un ambiente sofisticado.",
    image: "/cocina-integral.png",
    link: "Cocinas integrales"
  },
  {
    title: "Finca olivos, La Mesa Cundinamarca",
    description: "Mueble de baño moderno con lavamanos sobre encimera en mármol veteado, grifería negra de diseño y almacenamiento integrado. Una combinación elegante y funcional para espacios contemporáneos.",
    image: "/lavamanos-lujo.jpeg",
    link: "Mobiliario de baño"
  },
  {
    title: "Modelia, Bogota",
    description: "Clóset de ensueño con diseño a medida, iluminación LED integrada y distribución inteligente para maximizar el espacio. Un equilibrio perfecto entre funcionalidad y elegancia.",
    image: "/closets-ensueño.jpeg",
    link: "Closets de Ensueño"
  },
  {
    title: "Colina Campestre, Bogota",
    description: "Centro de entretenimiento moderno con panel en mármol veteado, iluminación LED perimetral y diseño minimalista flotante. Un toque de elegancia y funcionalidad para realzar cualquier sala.",
    image: "/centro-entretenimiento.jpeg",
    link: "Centros de entretenimiento modernos"
  },
];

export default function ProjectCards() {
  return (
    <section className="bg-[#0c0c0c] py-16 px-4">
      <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {projects.map((project, i) => (
          <div key={i} className="bg-[#1a1a1a] text-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300">
            <Image
              src={project.image}
              alt={project.title}
              width={600}
              height={400}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-yellow-500 mb-2">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <p className="inline-block text-yellow-500 hover:underline font-medium">
                {project.link}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
