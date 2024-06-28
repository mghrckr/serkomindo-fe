import React from "react";
import {
  Navbar as MTNavbar,
  Collapse,
  Button,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import {
  RectangleStackIcon,
  UserCircleIcon,
  CommandLineIcon,
  Squares2X2Icon,
  XMarkIcon,
  Bars3Icon,
  DocumentIcon,
  TagIcon,
} from "@heroicons/react/24/solid";
import { Link, useNavigate } from "react-router-dom"

function NavItem({ children, href }) {
  const navigate = useNavigate();

  const handleClick = (event) => {
    event.preventDefault();
    if (href.startsWith("http")) {
      window.open(href, "_blank");
    } else {
      navigate(href);
    }
  };

  return (
    <li>
      <Typography
        as="a"
        href={href || "#"}
        onClick={handleClick}
        target={href && href.startsWith("http") ? "_blank" : "_self"}
        variant="paragraph"
        className="flex items-center gap-2 font-medium"
        style={{ cursor: "pointer" }} // Ensure cursor indicates clickable
      >
        {children}
      </Typography>
    </li>
  );
}

const NAV_MENU = [
  {
    name: "About Us",
    icon: UserCircleIcon,
    href: "/aboutus",
  },
  {
    name: "Event Pelatihan",
    icon: RectangleStackIcon,
    href: "/eventPelatihan",
  },
  {
    name: "Services",
    icon: CommandLineIcon,
    href: "/services",
  },
  {
    name: "Portofolio",
    icon: DocumentIcon,
    href: "/portofolio",
  },
  {
    name: "Team",
    icon: TagIcon,
    href: "/team",
  },
];

export function Navbar({ flag, aboutFlag }) {
  console.log(aboutFlag);
  const [open, setOpen] = React.useState(false);
  const [isScrolling, setIsScrolling] = React.useState(false);

  const handleOpen = () => setOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  React.useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 0) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <MTNavbar
      shadow={false}
      fullWidth
      blurred={false}
      color={isScrolling ? "white" : "transparent"}
      className="fixed top-0 z-50 border-0"
    >
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="cursor-pointer">
          <img
            width={100}
            height={100}
            src={`/images/logoSerkom.png`}
            className="w-20"
          />
        </Link>
        <ul
          className={`ml-10 hidden items-center gap-6 lg:flex ${isScrolling || flag !== 'home'  ? "text-gray-900" : "text-white"
            }`}
        >
          {NAV_MENU.map(({ name, icon: Icon, href }) => (
            <NavItem key={name} href={href}>
              <Icon className="h-5 w-5" />
              <span>{name}</span>
            </NavItem>
          ))}
        </ul>
        <div className="hidden items-center gap-4 lg:flex">
          <a href="https://www.material-tailwind.com/blocks" target="_blank">
            <button type="button" class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Login</button>
          </a>
        </div>
        <IconButton
          variant="text"
          color={isScrolling ? "gray" : "white"}
          onClick={handleOpen}
          className="ml-auto inline-block lg:hidden"
        >
          {open ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6" />
          )}
        </IconButton>
      </div>
      <Collapse open={open}>
        <div className="container mx-auto mt-4 rounded-lg bg-white px-6 py-5">
          <ul className="flex flex-col gap-4 text-gray-900">
            {NAV_MENU.map(({ name, icon: Icon, href }) => (
              <NavItem key={name} href={href}>
                <Icon className="h-5 w-5" />
                {name}
              </NavItem>
            ))}
          </ul>
          <div className="mt-6 flex items-center gap-4">
            <Button variant="text">Log in</Button>
            <a href="https://www.material-tailwind.com/blocks" target="_blank">
              <Button color="gray">blocks</Button>
            </a>
          </div>
        </div>
      </Collapse>
    </MTNavbar>
  );
}

export default Navbar;




