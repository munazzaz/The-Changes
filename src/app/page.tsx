import Courses from "@/components/Courses";
import Hero from "@/components/Hero";
import Faq from "@/components/Faq";
import CTAsection from "@/components/CTAsection";
import Video from "@/components/Video";
import Testimonials from "@/components/Testimonials";
import Partners from "@/components/Partners";
import About from "@/components/About";
import WhyLearnGenerativeAI from "@/components/WhyLearnGenAI";
import Projects from "@/components/Projects";
import Programs from "@/components/Programs";


export default function Home() {
  return (
    <>
      <Hero />
      <Video />
      <WhyLearnGenerativeAI />
      <Courses />
      <Faq />
    <section className="bg-gradient-to-r bg-white text-black">
    <Programs />
    </section>
      <About />
      <Projects />
      <Partners />
      <Testimonials />
      <CTAsection />
    </>
  );
}
