import { useContext } from "react";
import Logo from "../img/Logo.png";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
const Navbar = () => {
  const { currentUser } = useContext(AuthContext);
  const { logout } = useContext(AuthContext);

  const handleLogout = async () => {
    await logout(); // calls the logout from context
  };

  return (
    <div className="flex justify-between items-center">
      <div>
        <Link to="/">
        <img src={Logo} alt="" width={160} />
        </Link>
      </div>

      <div className="flex space-x-5 justify-center items-center">
        <Link className="font-light text-xl" to={"/?cat=ART"}>
          ART
        </Link>
        <Link className="font-light text-xl" to={"/?cat=science"}>
          Sceince
        </Link>
        <Link className="font-light text-xl" to={"/?cat=technology"}>
          Technology
        </Link>
        <Link className="font-light text-xl" to={"/?cat=cinema"}>
          Cinema
        </Link>
        <Link className="font-light text-xl" to={"/?cat=food"}>
          Food
        </Link>
        <span className="font-semibold text-lg">{currentUser?.username}</span>
        {currentUser ? (
          <span className="cursor-pointer text-lg" onClick={handleLogout}>
            Logout
          </span>
        ) : (
          <Link to={"/Login"}>login</Link>
        )}
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
