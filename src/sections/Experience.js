const Experience = () => (
  <section id="experience" className="h-screen flex flex-col justify-center">
    <h1 className="uppercase text-5xl font-bold text-gray-800 mb-10">
      experience
    </h1>
    <ul className="space-y-6">
      {datas.map((data, index) => (
        <li key={index} className="flex">
          <div className="w-2/3">
            <h2 className="uppercase text-xl font-bold text-gray-800">
              {data.status}
            </h2>
            <h3 className="text-lg uppercase font-semibold text-gray-400 mt-1">
              {data.agency}
            </h3>
            <p className="text-gray-400 mt-3">{data.description}</p>
          </div>
          <p className="text-red-400 text-lg text-right w-1/3 font-semibold">
            {data.time}
          </p>
        </li>
      ))}
    </ul>
  </section>
);

const datas = [
  {
    status: "Github campus expert",
    agency: "github",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
    time: "August 2018 - Present",
  },
  {
    status: "Github campus expert",
    agency: "github",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
    time: "August 2018 - Present",
  },
  {
    status: "Github campus expert",
    agency: "github",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
    time: "August 2018 - Present",
  },
];

export default Experience;
