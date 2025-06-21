import Image from "next/image";
import Navbar from "./components/navbar";
import Profile from "./section/profile";
import Stack from "./section/stack";
import AboutMe from "./section/aboutMe";
import MyExperiences from "./section/myExperiences";
import MyProjects from "./section/myProjects";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div>
      {/* Contenu principal avec padding-bottom pour la navbar */}
      <main className="pb-24 min-h-screen">
        <Profile />
        <Stack />
        <AboutMe />
        <MyExperiences />
        <MyProjects />
        <Footer />
      </main>

      {/* Navbar fixe en bas */}
      <Navbar />
    </div>
  );
}
