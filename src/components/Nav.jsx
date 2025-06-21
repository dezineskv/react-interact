import { Link } from "react-router-dom";
import {
  Navbar,
  Typography,
  IconButton,
  Button,
  Input,
} from "@material-tailwind/react";
import { MdHomeFilled, MdQueueMusic } from "react-icons/md";
import { LuBoomBox, LuFileMusic } from "react-icons/lu";

function Nav() {
  return (
    <Navbar
      variant="gradient"
      color="blue-gray"
      className="mx-auto max-w-screen-lg from-blue-gray-900 to-blue-gray-800 px-4 py-3 mb-10"
    >
      <div className="flex flex-wrap items-center justify-between gap-y-4 text-white">
        <Typography
          as="a"
          href="#"
          variant="h1"
          className="mr-4 ml-2 cursor-pointer py-1.5 "
        >
          <Link to="/home">
            <MdHomeFilled style={{ color: "red", fontSize: "2.25rem" }} />
          </Link>
        </Typography>
        <div className="ml-auto flex gap-1 md:mr-4">
          <Link to="/music-notes">
            <LuFileMusic style={{ color: "red", fontSize: "2.25rem" }} />
          </Link>
          <Link to="/">
            <MdQueueMusic style={{ color: "red", fontSize: "2.5rem" }} />
          </Link>
          <Link to="/home">
            <LuBoomBox style={{ color: "red", fontSize: "2.25rem" }} />
          </Link>
        </div>
        <div className="relative flex w-full gap-2 md:w-max"></div>
      </div>
    </Navbar>
  );
}

export default Nav;
