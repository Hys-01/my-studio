import Hero from "./components/Hero"; 
// @ means root, FAILS. probablyt because we need to define it in package
// just use relative ./ removes the headache
import Projects from "./components/Projects";
export default function Home() {
  return (
    <main className="bg-black min-h-screen text-white">
      <Hero />
      <Projects />
      {}
    </main>
  );
}