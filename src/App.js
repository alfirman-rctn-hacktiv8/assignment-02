import Avatar from "./components/Avatar";
import NavLinks from "./components/NavLinks";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Education from "./sections/Education";
import Skills from "./sections/Skills";
import Interests from "./sections/Interests";
import Awards from "./sections/Awards";

function App() {
  return (
    <>
      <div className="min-h-screen min-w-screen bg-white justify-end hidden lg:flex">
        <aside className="h-screen w-1/4 bg-yellow-300 fixed flex flex-col items-center justify-center space-y-6 left-0 top-0">
          <Avatar />
          <NavLinks />
        </aside>
        <main className="w-3/4 px-10">
          <About />
          <Experience />
          <Education />
          <Skills />
          <Interests />
          <Awards />
        </main>
      </div>
      <p className="text-red-400 font-semibold text-2xl block lg:hidden">
        sorry this page not responsive :(
      </p>
    </>
  );
}

export default App;
