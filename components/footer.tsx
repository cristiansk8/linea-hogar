// app/components/Footer.tsx
export default function Footer() {
    return (
        <footer className="bg-[#0c0c0c] text-gray-400 py-10">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">

                {/* Brand */}
                <div>
                    <h2 className="text-2xl font-semibold text-yellow-500">Linea Hogar</h2>
                    <p className="mt-2 text-sm text-gray-500">
                        Diseño de interiores modernos, funcionales y personalizados.
                    </p>
                </div>

                {/* Navegación */}
                <div>
                    <h3 className="text-yellow-500 mb-2 text-sm font-semibold uppercase">Navegación</h3>
                    <ul className="space-y-1 text-sm">
                        <li><a href="#" className="hover:text-yellow-500">Inicio</a></li>
                        <li><a href="#" className="hover:text-yellow-500">Proyectos</a></li>
                        <li><a href="#" className="hover:text-yellow-500">Servicios</a></li>
                        <li><a href="#" className="hover:text-yellow-500">Contacto</a></li>
                    </ul>
                </div>

                {/* Contacto */}
                <div>
                    <h3 className="text-yellow-500 mb-2 text-sm font-semibold uppercase">Contáctanos</h3>
                    <ul className="space-y-1 text-sm">
                        <li>Email: contacto@lineahogar.com</li>
                        <li>Tel: +57 300 123 4567</li>
                        <li>Bogotá, Colombia</li>
                    </ul>
                </div>
            </div>

            <div className="border-t border-gray-800 mt-10 pt-6 text-center text-sm text-gray-600">
                © {new Date().getFullYear()} Linea Hogar. Todos los derechos reservados. Desarrollado por{" "}
                <a
                    href="https://deepfc.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-yellow-500 hover:underline"
                >
                    deepfc.com
                </a>
            </div>
        </footer>
    );
}
