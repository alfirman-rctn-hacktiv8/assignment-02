const NavLinks = () => (
  <nav>
    <ul className="text-center space-y-2">
      {links.map((link, index) => (
        <li
          className="uppercase font-semibold text-xl text-gray-200 hover:text-white cursor-pointer"
          key={index}
        >
          {link}
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
  "interest",
  "awards",
];

export default NavLinks;
