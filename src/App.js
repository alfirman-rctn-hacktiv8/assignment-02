import { GithubIcon, LinkedinIcon } from "./components/ButtonIcon";

function App() {
  return (
    <main className="min-h-screen min-w-screen bg-white flex justify-end">
      <div className="h-screen w-1/4 bg-yellow-300 fixed flex flex-col items-center justify-center space-y-6 left-0 top-0">
        <div
          className="h-48 w-48 rounded-full bg-white"
          style={{ border: "7px solid rgba(253, 230, 138,0.99)" }}
        ></div>
        <div className="text-center space-y-2">
          {links.map((link, index) => (
            <p
              className="uppercase font-semibold text-xl text-gray-200 hover:text-white cursor-pointer"
              key={index}
            >
              {link}
            </p>
          ))}
          <p></p>
        </div>
      </div>
      <div className="w-3/4 px-10">
        <section className="h-screen flex flex-col justify-center space-y-8">
          <div className="space-y-2">
            <h1 className="text-6xl font-bold uppercase text-gray-800">
              Alfirman <span className="text-yellow-300">Ejha Pahlepi</span>
            </h1>
            <h4 className="text-2xl font-semibold text-gray-400">
              +62 896 7375 7429{" "}
              <span className="text-yellow-300 ml-3">
                alfirman.180170083@mhs.unimal.ac.id
              </span>
            </h4>
          </div>
          <div>
            <p className="text-gray-400">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
          <div className="space-x-3 flex">
            <LinkedinIcon />
            <GithubIcon />
          </div>
        </section>
        <section className="h-screen">2</section>
        <section className="h-screen">3</section>
        <section className="h-screen">4</section>
      </div>
    </main>
  );
}

const links = [
  "about",
  "experience",
  "education",
  "skills",
  "interest",
  "awards",
];

export default App;
