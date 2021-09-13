const NavLinks = () => (
  <nav>
    <ul className="text-center space-y-2">
      {links.map((link, index) => (
        <li
          className="uppercase font-semibold text-xl text-gray-200 hover:text-white cursor-pointer"
          key={index}
        >
          <a href={"#" + link}>{link}</a>
        </li>
      ))}
      <p></p>
    </ul>
  </nav>
);

const links = [
  "about",
  "experience",
  "education",
  "skills",
  "interests",
  "awards",
];

export default NavLinks;
