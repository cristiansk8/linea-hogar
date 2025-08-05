import QuienesSomosSection from "@/components/about";
import ScheduleAppointment from "@/components/appointment";
import FeaturesGrid from "@/components/servicios";
import Footer from "@/components/footer";
import Header from "@/components/header"; // Importa el componente Header
import WorkWithUs from "@/components/hero-banner"; // Importa el componente Header
import ProjectGallerySlider from "@/components/cards";
import ProjectCards from "@/components/projectCards";
import TestimonialsSection from "@/components/testimonios";


export default function Home() {
  return (
    <>
      {/* Incluye el componente Header */}
      <Header /> 
      <WorkWithUs/>
      <QuienesSomosSection/>
      <FeaturesGrid/>
      <ProjectGallerySlider />
      <ProjectCards />
      <ScheduleAppointment/>
      <TestimonialsSection />
      <Footer />

    </>
  );
}