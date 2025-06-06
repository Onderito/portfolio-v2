import Image from "next/image";
import Navbar from "./components/navbar";
import Profile from "./section/profile";
import Stack from "./section/stack";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Navbar />
      <Profile />
      <Stack />
    </div>
  );
}
