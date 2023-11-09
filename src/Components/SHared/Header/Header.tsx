import { MdOutlineHome, MdDashboard } from "react-icons/md";
import { FaScrewdriverWrench, FaUser, FaUserClock } from "react-icons/fa6";
import { MdEngineering } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";

import useAuth from "../../Hooks/useAuth";


type Header ={
  
}


const Header = () => {
const { user, logOut } =useAuth();


  return (
    <div className=" static  bg-white shadow-lg shadow-blue-300">
      <div className="md:px-10 flex items-center justify-between  ">
        {/* -------------logo and name---------------- */}
        <div>
          <a className="flex gap-3 items-center" href="/">
            <img
              className=" w-20"
              src="https://i.postimg.cc/7hNj7jcw/New-Area.png"
            />
            <h1 className="text-4xl font-bold  text-blue-400 ">
              NE<span className="text-blue-700">W ARE</span>A{" "}
            </h1>
          </a>
        </div>
        {/* ----------navigation and routes------------------- */}
        <div className="flex gap-3 md:gap-3">
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              isActive
                ? " text-blue-700 font-extrabold text-base md:text-2xl duration-300 gap-2 flex items-center"
                : "text-blue-500 font-normal text-base md:text-xl px-5 flex items-center gap-2 duration-300"
            }
          >
            <MdOutlineHome size={30} /> Home
          </NavLink>
          <NavLink
            to={"/book"}
            className={({ isActive }) =>
              isActive
                ? " text-blue-700 font-extrabold text-base md:text-2xl duration-300 gap-2 flex items-center"
                : "text-blue-500 font-normal text-base md:text-xl px-5 flex items-center gap-2 duration-300"
            }
          >
            <FaScrewdriverWrench size={25} /> Book a service
          </NavLink>
          <NavLink
            to={"/reg"}
            className={({ isActive }) =>
              isActive
                ? " text-blue-700 font-extrabold text-base md:text-2xl duration-300 gap-2 flex items-center"
                : "text-blue-500 font-normal text-base md:text-xl px-5 flex items-center gap-2 duration-300"
            }
          >
            <MdEngineering size={25} /> Register as worker
          </NavLink>
                  </div>
        {/* ------------------accounts details--------------------- */}
        <div className=" flex gap-3 items-center">

        <div className={`${user?"block":"hidden"}`}>
              <div >
              <div className="avatar">
                <div className="w-10 md:w-14   rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              {
                user?.photoURL?<img src={user?.photoURL}/>: <FaUser/>
                
              }
               

                </div>
              </div>
            </div>
            </div>
          <NavLink to={"login"}>
          {!user ? (
              <div>
                <Link to={"/login"}>
                  <button className="btn border-2 bg-white border-white hover:border-blue-500  text-blue-500 ">
                    {" "}
                    Sign in
                  </button>
                </Link>
              </div>
            ) : (
              <button onClick={logOut} className="btn border-2 bg-white border-white hover:border-blue-500  text-blue-500 ">
                {" "}
                Sign Out
              </button>
            )}
          </NavLink>
        </div>
      </div>

    
    </div>
  );
};

export default Header;
