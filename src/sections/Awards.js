import MedalIcon from "../components/MedalIcon";

const Awards = () => (
  <section
    id="awards"
    className="h-screen flex flex-col justify-center space-y-10"
  >
    <h1 className="uppercase text-5xl font-bold text-gray-800">
      awards & certifications
    </h1>
    <ul className="space-y-1 px-10">
      {awards.map((award, index) => (
        <li key={index} className="flex items-center space-x-2">
          <MedalIcon />
          <span className=" font-semibold text-gray-400">{award}</span>
        </li>
      ))}
    </ul>
  </section>
);

const awards = [
  "Hack 36 3rd prize winner",
  "Mentor OpenCode'19",
  "Started North Indonesia First Student Design and Developer Conference",
];

export default Awards;
