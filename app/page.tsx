import Navbar from "../components/Navbar";
import Menubar from "../components/Menubar";

export default function Home() {
  return (
    <section className="w-full h-screen relative flex flex-col">
      <div className="lg:flex flex-col w-full h-16 md:h-20 bg-white fixed top-0 left-0 z-50">
        <Navbar />
      </div>

      <div className="flex flex-col h-screen justify-between sm:justify-start w-full lg:w-full bg-white">
        <Menubar />
      </div>
    </section>
  );
}
