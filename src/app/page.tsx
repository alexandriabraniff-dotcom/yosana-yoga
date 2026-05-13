import Nav from "@/components/nav";
import Hero from "@/components/hero";
import About from "@/components/about";
import Classes from "@/components/classes";
import Pricing from "@/components/pricing";
import Testimonials from "@/components/testimonials";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="flex-1">
      <Nav />
      <Hero />
      <About />
      <Classes />
      <Pricing />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
