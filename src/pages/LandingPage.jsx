import CallToAction from "@/components/CallToAction";
import Faq from "@/components/Faq";
import Feature from "@/components/Feature";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";

const LandingPage = () => {
  return (
    <div className="w-full min-h-screen ">
      <Hero />
      <Feature />
      <Stats />
      <Testimonials />
      <Faq />
      <CallToAction />
    </div>
  );
};

export default LandingPage;
