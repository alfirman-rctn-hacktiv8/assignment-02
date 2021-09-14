const Hamburger = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-10 w-10"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 6h16M4 12h16M4 18h16"
      />
    </svg>
  );
};

const X = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-10 w-10"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
};

const MenuIcon = ({ setOpenSideBar, openSideBar }) => (
  <div
    onClick={(e) => {
      e.stopPropagation();
      setOpenSideBar(!openSideBar);
    }}
    className="fixed left-4 top-4 z-20 lg:hidden"
  >
    <i
      className={`${
        !openSideBar
          ? "rotate-0 translate-y-0 opacity-100 delay-100"
          : "rotate-90 opacity-20 invisible"
      } transform duration-100 absolute`}
    >
      <Hamburger />
    </i>
    <i
      className={`${
        openSideBar
          ? "rotate-0 translate-y-0 opacity-100 delay-100"
          : "-rotate-90 opacity-20 invisible"
      } transform duration-100 absolute`}
    >
      <X />
    </i>
  </div>
);

export default MenuIcon;
