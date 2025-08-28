import CallToAction from "@/components/CallToAction";
import Faq from "@/components/Faq";
import Feature from "@/components/Feature";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";

const LandingPage = () => {
  return (
    <div>
      <Hero />
      <Feature />
      <Stats />
      <CallToAction />

      <Faq />
    </div>
  );
};

export default LandingPage;
