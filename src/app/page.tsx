import {
  About,
  Approach,
  CallToAction,
  FounderMessage,
  Hero,
  News,
  Projects,
  Services,
  StatsBar,
  Testimonials,
  TrustedBy,
  WhyChooseUs,
} from "@/components/home/sections";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBar />
      <TrustedBy />
      <About />
      <Services />
      <WhyChooseUs />
      <Projects />
      <FounderMessage />
      <Approach />
      <Testimonials />
      <News />
      <CallToAction />
    </>
  );
}
