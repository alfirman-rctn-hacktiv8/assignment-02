import { useState } from "react";
import Avatar from "./components/Avatar";
import NavLinks from "./components/NavLinks";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Education from "./sections/Education";
import Skills from "./sections/Skills";
import Interests from "./sections/Interests";
import Awards from "./sections/Awards";
import Footer from "./components/Footer";
import MenuIcon from "./components/MenuIcon";

function App() {
  const [openSideBar, setOpenSideBar] = useState(false);
  return (
    <div
      onClick={() => setOpenSideBar(false)}
      className="min-h-screen min-w-screen bg-white lg:justify-end flex relative"
    >
      <MenuIcon openSideBar={openSideBar} setOpenSideBar={setOpenSideBar} />
      <aside
        className={`${
          !openSideBar && "transform -translate-x-full lg:transform-none"
        } h-screen w-11/12 lg:w-1/4 bg-yellow-300 fixed flex flex-col items-center justify-center space-y-6 left-0 top-0 z-10 duration-500`}
      >
        <Avatar />
        <NavLinks />
      </aside>
      <main className="lg:w-3/4 px-5 sm:px-10 relative">
        <About />
        <Experience />
        <Education />
        <Skills />
        <Interests />
        <Awards />
        <Footer />
      </main>
    </div>
  );
}

export default App;
