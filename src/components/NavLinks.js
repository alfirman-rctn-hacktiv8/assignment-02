import { useState } from "react";

const NavLinks = () => {
  const [activeNav, setActiveNav] = useState("about");
  return (
    <nav>
      <ul className="text-center space-y-2">
        {links.map((link, index) => (
          <li
            className={`${
              activeNav === link
                ? "text-white font-bold"
                : "text-gray-200 font-semibold"
            } uppercase text-xl hover:text-white cursor-pointer`}
            key={index}
          >
            <a onClick={() => setActiveNav(link)} href={"#" + link}>
              {link}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const links = [
  "about",
  "experience",
  "education",
  "skills",
  "interests",
  "awards",
];

export default NavLinks;
