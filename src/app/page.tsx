import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col selection:bg-purple-500/30">
      <Nav />
      <Hero />
      <Footer />
    </main>
  );
}
