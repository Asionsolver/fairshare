import CTA from "@/components/home/cta";
import Feature from "@/components/home/feature";
import Hero from "@/components/home/hero";
import HowItWorks from "@/components/home/how-it-work";
import Testimonials from "@/components/home/testimonials";


export default function Home() {
  return (
    <div className="flex flex-col pt-16">
      <Hero />
      <Feature />
      <HowItWorks />
      <Testimonials />
      <CTA />
    </div>
  );
}
