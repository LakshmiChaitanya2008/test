import About from "./components/About";
import Courses from "./components/Courses";
import Hero from "./components/Hero";
import Nav from "./components/Nav";

export default function App() {
  return (
    <main className="main px-5">
      <Nav />
      <Hero />
      <Courses />
      <About />
    </main>
  );
}
