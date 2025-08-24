
import Logo from "../img/Logo.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="flex justify-between items-center">
      <div>
        <img src={Logo} alt="" width={160} />
      </div>

      <div className="flex space-x-5 justify-center items-center">
        <Link className="font-light text-xl" to={"/?cat=ART"}>
          ART
        </Link>
        <Link className="font-light text-xl" to={"/?cat=sceince"}>
          Sceince
        </Link>
        <Link className="font-light text-xl" to={"/?cat=technology"}>
          Technology
        </Link>
        <Link className="font-light text-xl" to={"/?cat=cineme"}>
          Cinema
        </Link>
        <Link className="font-light text-xl" to={"/?cat=food"}>
          Food
        </Link>
        <span className="font-semibold text-lg">Shucayb</span>
        <span className="cursor-pointer text-lg">Logout</span>
        <span className="bg-cyan-400 h-10 w-12 flex justify-center items-center rounded-2xl border-0 hover:bg-white hover:border-1">
          <Link to={"/write"} className="  rounded-4xl text-lg font-[300]">
            Write
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Navbar;
