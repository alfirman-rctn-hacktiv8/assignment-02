import CheckIcon from "../components/CheckIcon";

const Skills = () => (
  <section id="skills" className="h-screen flex flex-col justify-center">
    <h1 className="uppercase text-5xl font-bold text-gray-800 mb-10">skills</h1>
    <h3 className="uppercase text-2xl font-bold text-gray-400 mb-5">
      programming languages & tools
    </h3>
    <ul className="grid grid-cols-2 gap-2">
      {datas.map((data, index) => (
        <li
          key={index}
          className="text-xl font-semibold text-gray-400 flex items-center space-x-2"
        >
          <CheckIcon />
          <span>{data}</span>
        </li>
      ))}
    </ul>
  </section>
);

const datas = [
  "HTML",
  "CSS",
  "Javascript",
  "MongoDB",
  "Express js",
  "React js",
  "Node js",
  "Next js",
];

export default Skills;
