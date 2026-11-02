import {
  About,
  Approach,
  CallToAction,
  FounderMessage,
  Hero,
  News,
  Partners,
  Projects,
  Services,
  Stats,
  Testimonials,
  WhyChooseUs,
} from "@/components/home/sections";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <Partners />
      <FounderMessage />
      <Projects />
      <Stats />
      <Approach />
      <Testimonials />
      <News />
      <CallToAction />
    </>
  );
}
