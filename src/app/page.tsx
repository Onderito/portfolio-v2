import Image from "next/image";
import Navbar from "./components/navbar";
import Profile from "./section/profile";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Navbar />
      <Profile />
    </div>
  );
}
