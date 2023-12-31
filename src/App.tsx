import About from "./components/About";
import Courses from "./components/Courses";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import { Route } from "wouter";
import CoursesPage from "./pages/CoursesPage";
import FacilitiesPage from "./pages/FacilitiesPage";
import GalleryPage from "./pages/GalleryPage";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div>
      <Nav />
      <Route path="/">
        <Home />
      </Route>
      <Route path="/courses">
        <CoursesPage />
      </Route>
      <Route path="/facilities">
        <FacilitiesPage />
      </Route>
      <Route path="/gallery">
        <GalleryPage />
      </Route>
      <Footer />
    </div>
  );
}

export function Home() {
  return (
    <main className="main px-5">
      <Hero />
      <Courses />
      <About />
    </main>
  );
}
