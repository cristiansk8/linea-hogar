import ScheduleAppointment from "@/components/appointment";
import FeaturesGrid from "@/components/cards";
import Footer from "@/components/footer";
import Header from "@/components/header"; // Importa el componente Header
import WorkWithUs from "@/components/hero-banner"; // Importa el componente Header
import ProjectCards from "@/components/projectCards";


export default function Home() {
  return (
    <>
      {/* Incluye el componente Header */}
      <Header />
      <WorkWithUs/>
      <FeaturesGrid/>
      <ProjectCards />
      <ScheduleAppointment/>
      <Footer />

    </>
  );
}