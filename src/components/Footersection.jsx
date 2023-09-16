import { FaFacebook,  FaTwitter, FaYoutube } from "react-icons/fa";
import {FaInstagram} from "react-icons/fa6"
import { Link } from "react-router-dom";

const Footersection = () => {
  return (
    <footer className="flex flex-col items-center justify-center gap-7 pb-9 font-bold text-lg">
      <div className="flex items-center gap-12">
        <Link>
          <FaFacebook />
        </Link>
        <Link>
          <FaInstagram />
        </Link>
        <Link>
          <FaTwitter />
        </Link>
        <Link>
          <FaYoutube />
        </Link>
      </div>

      <div className="flex items-center flex-col md:flex-row gap-2 md:gap-12 text-sm ">
        <a>Conditions of Use</a>
        <a>Privacy & Policy</a>
        <a>Press Room</a>
      </div>

      <div className="text-gray-500 text-sm sm:text-base">
        <p>&copy; 2023 MovieBox by Leila Sinore</p>
      </div>
    </footer>
  );
};

export default Footersection;
