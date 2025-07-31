// app/components/ProjectCards.tsx
"use client";

import Image from "next/image";

const projects = [
  {
    title: "Berbeo, Boyacá",
    description: "Casa de aproximadamente 400 MT2, donde diseñamos, fabricamos e instalamos todo el mobiliario.",
    image: "/hero-banner2.jpeg",
    link: "#"
  },
  {
    title: "Penthouse Medellín",
    description: "Diseño interior completo con mobiliario personalizado en madera y detalles metálicos dorados.",
    image: "/hero-banner.jpeg",
    link: "#"
  },
  {
    title: "Apartamento Chicó",
    description: "Estilo minimalista con acabados premium y mobiliario a medida para espacios reducidos.",
    image: "/hero-banner2.jpeg",
    link: "#"
  },
  {
    title: "Casa Campestre",
    description: "Ambientes abiertos con madera natural, ideal para zonas rurales y climas fríos.",
    image: "/hero-banner.jpeg",
    link: "#"
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
              <a href={project.link} className="inline-block text-yellow-500 hover:underline font-medium">
                Ver el proyecto
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
