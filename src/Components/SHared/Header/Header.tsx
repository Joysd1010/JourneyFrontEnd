import { MdOutlineHome, MdDashboard } from "react-icons/md";
import { FaScrewdriverWrench, FaUser, FaUserClock } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";
import Login from "../../Login/Login/Login";


type Header ={
  
}


const Header = () => {
const user=null;


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
        <div className="flex gap-3 md:gap-8">
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
            <FaScrewdriverWrench size={25} /> Register as worker
          </NavLink>
          <NavLink
            to={"/dash"}
            className={({ isActive }) =>
              isActive
                ? " text-blue-700 font-extrabold text-base md:text-2xl  duration-300 gap-2 flex items-center"
                : "text-blue-500 font-normal text-base md:text-xl px-5 flex items-center gap-2 duration-300"
            }
          >
            <MdDashboard size={25} /> DashBoard
          </NavLink>
        </div>
        {/* ------------------accounts details--------------------- */}
        <div>

        <div className={`${user?"block":"hidden"}`}>
              <div >
              <div className="avatar">
                <div className="w-12 md:w-14 md:ml-10  rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              {
                user?<img src={user?.photoURL}/>: <FaUser/>
                
              }
               

                </div>
              </div>
            </div>
            </div>
          <NavLink to={"login"}>
          {!user ? (
              <div>
                <Link to={"/login"}>
                  <button className="btn btn-info hover:bg-blue-500 hover:text-white text-yellow-50 md:ml-10">
                    {" "}
                    Sign in
                  </button>
                </Link>
              </div>
            ) : (
              <button onClick={console.log('out')} className="btn btn-info hover:bg-blue-500 hover:text-white text-yellow-50 md:ml-10">
                {" "}
                Sign Out
              </button>
            )}
          </NavLink>
        </div>
      </div>

      {/* <div className="  flex ">
      
      <div className="hidden md:block h-2 w-2 bg-black"></div>
      <div className="hidden md:block h-2 w-2 bg-yellow-300"></div>
      <div className="hidden md:block h-2 w-2 bg-black"></div>
      <div className="hidden md:block h-2 w-2 bg-yellow-300"></div>
      <div className="hidden md:block h-2 w-2 bg-black"></div>
      <div className="hidden md:block h-2 w-2 bg-yellow-300"></div>
      <div className="hidden md:block h-2 w-2 bg-black"></div>
      <div className="hidden md:block h-2 w-2 bg-yellow-300"></div>
      <div className="hidden md:block h-2 w-2 bg-black"></div>
      <div className="hidden md:block h-2 w-2 bg-yellow-300"></div>
      <div className="hidden md:block h-2 w-2 bg-black"></div>
      <div className="hidden md:block h-2 w-2 bg-yellow-300"></div>
      <div className="hidden md:block h-2 w-2 bg-black"></div>
      <div className="hidden md:block h-2 w-2 bg-yellow-300"></div>
      <div className="hidden md:block h-2 w-2 bg-black"></div>
      <div className="hidden md:block h-2 w-2 bg-yellow-300"></div>
      <div className="hidden md:block h-2 w-2 bg-black"></div>
      <div className="hidden md:block h-2 w-2 bg-yellow-300"></div>
      <div className="hidden md:block h-2 w-2 bg-black"></div>
      <div className="hidden md:block h-2 w-2 bg-yellow-300"></div>
      <div className="hidden md:block h-2 w-2 bg-black"></div>
      <div className="hidden md:block h-2 w-2 bg-yellow-300"></div>
      <div className="hidden md:block h-2 w-2 bg-black"></div>
      <div className="hidden md:block h-2 w-2 bg-yellow-300"></div>
      <div className="hidden md:block h-2 w-2 bg-black"></div>
      <div className="hidden md:block h-2 w-2 bg-yellow-300"></div>
      <div className="hidden md:block h-2 w-2 bg-black"></div>
      <div className="hidden md:block h-2 w-2 bg-yellow-300"></div>
      <div className="hidden md:block h-2 w-2 bg-black"></div>
      <div className="hidden md:block h-2 w-2 bg-yellow-300"></div>
      <div className="hidden md:block h-2 w-2 bg-black"></div>
      <div className="hidden md:block h-2 w-2 bg-yellow-300"></div>
      <div className="hidden md:block h-2 w-2 bg-black"></div>
      <div className="hidden md:block h-2 w-2 bg-yellow-300"></div>
      <div className="hidden md:block h-2 w-2 bg-black"></div>
      <div className="hidden md:block h-2 w-2 bg-yellow-300"></div>
      <div className="hidden md:block h-2 w-2 bg-black"></div>
      <div className="hidden md:block h-2 w-2 bg-yellow-300"></div>
      <div className="hidden md:block h-2 w-2 bg-black"></div>
      <div className="hidden md:block h-2 w-2 bg-yellow-300"></div>
      <div className="hidden md:block h-2 w-2 bg-black"></div>
      <div className="hidden md:block h-2 w-2 bg-yellow-300"></div>
      <div className="hidden md:block h-2 w-2 bg-black"></div>
      <div className="hidden md:block h-2 w-2 bg-yellow-300"></div>
      <div className="hidden md:block h-2 w-2 bg-black"></div>
      <div className="hidden md:block h-2 w-2 bg-yellow-300"></div>
      <div className="hidden md:block h-2 w-2 bg-black"></div>
      <div className="hidden md:block h-2 w-2 bg-yellow-300"></div>
      <div className="hidden md:block h-2 w-2 bg-black"></div>
      <div className="hidden md:block h-2 w-2 bg-yellow-300"></div>
      <div className="hidden md:block h-2 w-2 bg-black"></div>
      <div className="hidden md:block h-2 w-2 bg-yellow-300"></div>
      <div className="hidden md:block h-2 w-2 bg-black"></div>
      <div className="hidden md:block h-2 w-2 bg-yellow-300"></div>
      <div className="hidden md:block h-2 w-2 bg-black"></div>
      <div className="hidden md:block h-2 w-2 bg-yellow-300"></div>
      <div className="hidden md:block h-2 w-2 bg-black"></div>
      <div className="hidden md:block h-2 w-2 bg-yellow-300"></div>
      <div className="hidden md:block h-2 w-2 bg-black"></div>
      <div className="hidden md:block h-2 w-2 bg-yellow-300"></div>
      <div className="hidden md:block h-2 w-2 bg-black"></div>
      <div className="hidden md:block h-2 w-2 bg-yellow-300"></div>
      <div className="hidden md:block h-2 w-2 bg-black"></div>
      <div className="hidden md:block h-2 w-2 bg-yellow-300"></div>
      <div className="hidden md:block h-2 w-2 bg-black"></div>
      <div className="hidden md:block h-2 w-2 bg-yellow-300"></div>
      <div className="hidden md:block h-2 w-2 bg-black"></div>
      <div className="hidden md:block h-2 w-2 bg-yellow-300"></div>
      <div className="hidden md:block h-2 w-2 bg-black"></div>
      <div className="hidden md:block h-2 w-2 bg-yellow-300"></div>
      <div className="hidden md:block h-2 w-2 bg-black"></div>
      <div className="hidden md:block h-2 w-2 bg-yellow-300"></div>
      <div className="hidden md:block h-2 w-2 bg-black"></div>
      <div className="hidden md:block h-2 w-2 bg-yellow-300"></div>
      <div className="hidden md:block h-2 w-2 bg-black"></div>
      <div className="hidden md:block h-2 w-2 bg-yellow-300"></div>
      <div className="hidden md:block h-2 w-2 bg-black"></div>
      <div className="hidden md:block h-2 w-2 bg-yellow-300"></div>
      <div className="hidden md:block h-2 w-2 bg-black"></div>
      <div className="hidden md:block h-2 w-2 bg-yellow-300"></div>
      <div className="hidden md:block h-2 w-2 bg-black"></div>
      <div className="hidden md:block h-2 w-2 bg-yellow-300"></div>
      <div className="hidden md:block h-2 w-2 bg-black"></div>
      <div className="hidden md:block h-2 w-2 bg-yellow-300"></div>
      <div className="hidden md:block h-2 w-2 bg-black"></div>
      <div className="hidden md:block h-2 w-2 bg-yellow-300"></div>
      <div className="hidden md:block h-2 w-2 bg-black"></div>
      <div className="hidden md:block h-2 w-2 bg-yellow-300"></div>
      <div className="hidden md:block h-2 w-2 bg-black"></div>
      <div className="hidden md:block h-2 w-2 bg-yellow-300"></div>
      <div className="hidden md:block h-2 w-2 bg-black"></div>
      <div className="hidden md:block h-2 w-2 bg-yellow-300"></div>
      <div className="hidden md:block h-2 w-2 bg-black"></div>
      <div className="hidden md:block h-2 w-2 bg-yellow-300"></div>
      <div className="hidden md:block h-2 w-2 bg-black"></div>
      <div className="hidden md:block h-2 w-2 bg-yellow-300"></div>
      <div className="hidden md:block h-2 w-2 bg-black"></div>
      <div className="hidden md:block h-2 w-2 bg-yellow-300"></div>
      <div className="hidden md:block h-2 w-2 bg-black"></div>
      <div className="hidden md:block h-2 w-2 bg-yellow-300"></div>
      <div className="hidden md:block h-2 w-2 bg-black"></div>
      <div className="hidden md:block h-2 w-2 bg-yellow-300"></div>
      <div className="hidden md:block h-2 w-2 bg-black"></div>
      <div className="hidden md:block h-2 w-2 bg-yellow-300"></div>
      <div className="hidden md:block h-2 w-2 bg-black"></div>
      <div className="hidden md:block h-2 w-2 bg-yellow-300"></div>
      <div className="hidden md:block h-2 w-2 bg-black"></div>
      <div className="hidden md:block h-2 w-2 bg-yellow-300"></div>
      <div className="hidden md:block h-2 w-2 bg-black"></div>
      <div className="hidden md:block h-2 w-2 bg-yellow-300"></div>
      <div className="hidden md:block h-2 w-2 bg-black"></div>
      <div className="hidden md:block h-2 w-2 bg-yellow-300"></div>
      <div className="hidden md:block h-2 w-2 bg-black"></div>
      <div className="hidden md:block h-2 w-2 bg-yellow-300"></div>
      <div className="hidden md:block h-2 w-2 bg-black"></div>
      <div className="hidden md:block h-2 w-2 bg-yellow-300"></div>
      <div className="hidden md:block h-2 w-2 bg-black"></div>
      <div className="hidden md:block h-2 w-2 bg-yellow-300"></div>
      <div className="hidden md:block h-2 w-2 bg-black"></div>
      <div className="hidden md:block h-2 w-2 bg-yellow-300"></div>
      <div className="hidden md:block h-2 w-2 bg-black"></div>
      <div className="hidden md:block h-2 w-2 bg-yellow-300"></div>
      <div className="hidden md:block h-2 w-2 bg-black"></div>
      <div className="hidden md:block h-2 w-2 bg-yellow-300"></div>
      <div className="hidden md:block h-2 w-2 bg-black"></div>
      <div className="hidden md:block h-2 w-2 bg-yellow-300"></div>
      <div className="hidden md:block h-2 w-2 bg-black"></div>
      <div className="hidden md:block h-2 w-2 bg-yellow-300"></div>
      <div className="hidden md:block h-2 w-2 bg-black"></div>
      <div className="hidden md:block h-2 w-2 bg-yellow-300"></div>
      <div className="hidden md:block h-2 w-2 bg-black"></div>
      <div className="hidden md:block h-2 w-2 bg-yellow-300"></div>
      <div className="hidden md:block h-2 w-2 bg-black"></div>
      <div className="hidden md:block h-2 w-2 bg-yellow-300"></div>
      <div className="hidden md:block h-2 w-2 bg-black"></div>
      <div className="hidden md:block h-2 w-2 bg-yellow-300"></div>
      <div className="hidden md:block h-2 w-2 bg-black"></div>
      <div className="hidden md:block h-2 w-2 bg-yellow-300"></div>
      <div className="hidden md:block h-2 w-2 bg-black"></div>
      <div className="hidden md:block h-2 w-2 bg-yellow-300"></div>
      <div className="hidden md:block h-2 w-2 bg-black"></div>
      <div className="hidden md:block h-2 w-2 bg-yellow-300"></div>
      <div className="hidden md:block h-2 w-2 bg-black"></div>
      <div className="hidden md:block h-2 w-2 bg-yellow-300"></div>
      <div className="hidden md:block h-2 w-2 bg-black"></div>
      <div className="hidden md:block h-2 w-2 bg-yellow-300"></div>
      <div className="hidden md:block h-2 w-2 bg-black"></div>
      <div className="hidden md:block h-2 w-2 bg-yellow-300"></div>
      <div className="hidden md:block h-2 w-2 bg-black"></div>
      <div className="hidden md:block h-2 w-2 bg-yellow-300"></div>
      <div className="hidden md:block h-2 w-2 bg-black"></div>
      <div className="hidden md:block h-2 w-2 bg-yellow-300"></div>
      <div className="hidden md:block h-2 w-2 bg-black"></div>
      <div className="hidden md:block h-2 w-2 bg-yellow-300"></div>
      <div className="hidden md:block h-2 w-2 bg-black"></div>
      <div className="hidden md:block h-2 w-2 bg-yellow-300"></div>
      <div className="hidden md:block h-2 w-2 bg-black"></div>
      <div className="hidden md:block h-2 w-2 bg-yellow-300"></div>
      <div className="hidden md:block h-2 w-2 bg-black"></div>
      <div className="hidden md:block h-2 w-2 bg-yellow-300"></div>
      <div className="hidden md:block h-2 w-2 bg-black"></div>
      <div className="hidden md:block h-2 w-2 bg-yellow-300"></div>
      <div className="hidden md:block h-2 w-2 bg-black"></div>
      <div className="hidden md:block h-2 w-2 bg-yellow-300"></div>
      <div className="hidden md:block h-2 w-2 bg-black"></div>
      <div className="hidden md:block h-2 w-2 bg-yellow-300"></div>
      <div className="hidden md:block h-2 w-2 bg-black"></div>
      <div className="hidden md:block h-2 w-2 bg-yellow-300"></div>
      <div className="hidden md:block h-2 w-2 bg-black"></div>
      <div className="hidden md:block h-2 w-2 bg-yellow-300"></div>
      <div className="hidden md:block h-2 w-2 bg-black"></div>
        
      </div>
      <div className="  flex ">
      <div className="hidden md:block h-2 w-2 bg-yellow-300"></div>
      <div className="hidden md:block h-2 w-2 bg-black"></div>
      <div className="hidden md:block h-2 w-2 bg-yellow-300"></div>
      <div className="hidden md:block h-2 w-2 bg-black"></div>
      <div className="hidden md:block h-2 w-2 bg-yellow-300"></div>
      <div className="hidden md:block h-2 w-2 bg-black"></div>
      <div className="hidden md:block h-2 w-2 bg-yellow-300"></div>
      <div className="hidden md:block h-2 w-2 bg-black"></div>
      <div className="hidden md:block h-2 w-2 bg-yellow-300"></div>
      <div className="hidden md:block h-2 w-2 bg-black"></div>
      <div className="hidden md:block h-2 w-2 bg-yellow-300"></div>
      <div className="hidden md:block h-2 w-2 bg-black"></div>
      <div className="hidden md:block h-2 w-2 bg-yellow-300"></div>
      <div className="hidden md:block h-2 w-2 bg-black"></div>
      <div className="hidden md:block h-2 w-2 bg-yellow-300"></div>
      <div className="hidden md:block h-2 w-2 bg-black"></div>
      <div className="hidden md:block h-2 w-2 bg-yellow-300"></div>
      <div className="hidden md:block h-2 w-2 bg-black"></div>
      <div className="hidden md:block h-2 w-2 bg-yellow-300"></div>
      <div className="hidden md:block h-2 w-2 bg-black"></div>
      <div className="hidden md:block h-2 w-2 bg-yellow-300"></div>
      <div className="hidden md:block h-2 w-2 bg-black"></div>
      <div className="hidden md:block h-2 w-2 bg-yellow-300"></div>
      <div className="hidden md:block h-2 w-2 bg-black"></div>
      <div className="hidden md:block h-2 w-2 bg-yellow-300"></div>
      <div className="hidden md:block h-2 w-2 bg-black"></div>
      <div className="hidden md:block h-2 w-2 bg-yellow-300"></div>
      <div className="hidden md:block h-2 w-2 bg-black"></div>
      <div className="hidden md:block h-2 w-2 bg-yellow-300"></div>
      <div className="hidden md:block h-2 w-2 bg-black"></div>
      <div className="hidden md:block h-2 w-2 bg-yellow-300"></div>
      <div className="hidden md:block h-2 w-2 bg-black"></div>
      <div className="hidden md:block h-2 w-2 bg-yellow-300"></div>
      <div className="hidden md:block h-2 w-2 bg-black"></div>
      <div className="hidden md:block h-2 w-2 bg-yellow-300"></div>
      <div className="hidden md:block h-2 w-2 bg-black"></div>
      <div className="hidden md:block h-2 w-2 bg-yellow-300"></div>
      <div className="hidden md:block h-2 w-2 bg-black"></div>
      <div className="hidden md:block h-2 w-2 bg-yellow-300"></div>
      <div className="hidden md:block h-2 w-2 bg-black"></div>
      <div className="hidden md:block h-2 w-2 bg-yellow-300"></div>
      <div className="hidden md:block h-2 w-2 bg-black"></div>
      <div className="hidden md:block h-2 w-2 bg-yellow-300"></div>
      <div className="hidden md:block h-2 w-2 bg-black"></div>
      <div className="hidden md:block h-2 w-2 bg-yellow-300"></div>
      <div className="hidden md:block h-2 w-2 bg-black"></div>
      <div className="hidden md:block h-2 w-2 bg-yellow-300"></div>
      <div className="hidden md:block h-2 w-2 bg-black"></div>
      <div className="hidden md:block h-2 w-2 bg-yellow-300"></div>
      <div className="hidden md:block h-2 w-2 bg-black"></div>
      <div className="hidden md:block h-2 w-2 bg-yellow-300"></div>
      <div className="hidden md:block h-2 w-2 bg-black"></div>
      <div className="hidden md:block h-2 w-2 bg-yellow-300"></div>
      <div className="hidden md:block h-2 w-2 bg-black"></div>
      <div className="hidden md:block h-2 w-2 bg-yellow-300"></div>
      <div className="hidden md:block h-2 w-2 bg-black"></div>
      <div className="hidden md:block h-2 w-2 bg-yellow-300"></div>
      <div className="hidden md:block h-2 w-2 bg-black"></div>
      <div className="hidden md:block h-2 w-2 bg-yellow-300"></div>
      <div className="hidden md:block h-2 w-2 bg-black"></div>
      <div className="hidden md:block h-2 w-2 bg-yellow-300"></div>
      <div className="hidden md:block h-2 w-2 bg-black"></div>
      <div className="hidden md:block h-2 w-2 bg-yellow-300"></div>
      <div className="hidden md:block h-2 w-2 bg-black"></div>
      <div className="hidden md:block h-2 w-2 bg-yellow-300"></div>
      <div className="hidden md:block h-2 w-2 bg-black"></div>
      <div className="hidden md:block h-2 w-2 bg-yellow-300"></div>
      <div className="hidden md:block h-2 w-2 bg-black"></div>
      <div className="hidden md:block h-2 w-2 bg-yellow-300"></div>
      <div className="hidden md:block h-2 w-2 bg-black"></div>
      <div className="hidden md:block h-2 w-2 bg-yellow-300"></div>
      <div className="hidden md:block h-2 w-2 bg-black"></div>
      <div className="hidden md:block h-2 w-2 bg-yellow-300"></div>
      <div className="hidden md:block h-2 w-2 bg-black"></div>
      <div className="hidden md:block h-2 w-2 bg-yellow-300"></div>
      <div className="hidden md:block h-2 w-2 bg-black"></div>
      <div className="hidden md:block h-2 w-2 bg-yellow-300"></div>
      <div className="hidden md:block h-2 w-2 bg-black"></div>
      <div className="hidden md:block h-2 w-2 bg-yellow-300"></div>
      <div className="hidden md:block h-2 w-2 bg-black"></div>
      <div className="hidden md:block h-2 w-2 bg-yellow-300"></div>
      <div className="hidden md:block h-2 w-2 bg-black"></div>
      <div className="hidden md:block h-2 w-2 bg-yellow-300"></div>
      <div className="hidden md:block h-2 w-2 bg-black"></div>
      <div className="hidden md:block h-2 w-2 bg-yellow-300"></div>
      <div className="hidden md:block h-2 w-2 bg-black"></div>
      <div className="hidden md:block h-2 w-2 bg-yellow-300"></div>
      <div className="hidden md:block h-2 w-2 bg-black"></div>
      <div className="hidden md:block h-2 w-2 bg-yellow-300"></div>
      <div className="hidden md:block h-2 w-2 bg-black"></div>
      <div className="hidden md:block h-2 w-2 bg-yellow-300"></div>
      <div className="hidden md:block h-2 w-2 bg-black"></div>
      <div className="hidden md:block h-2 w-2 bg-yellow-300"></div>
      <div className="hidden md:block h-2 w-2 bg-black"></div>
      <div className="hidden md:block h-2 w-2 bg-yellow-300"></div>
      <div className="hidden md:block h-2 w-2 bg-black"></div>
      <div className="hidden md:block h-2 w-2 bg-yellow-300"></div>
      <div className="hidden md:block h-2 w-2 bg-black"></div>
      <div className="hidden md:block h-2 w-2 bg-yellow-300"></div>
      <div className="hidden md:block h-2 w-2 bg-black"></div>
      <div className="hidden md:block h-2 w-2 bg-yellow-300"></div>
      <div className="hidden md:block h-2 w-2 bg-black"></div>
      <div className="hidden md:block h-2 w-2 bg-yellow-300"></div>
      <div className="hidden md:block h-2 w-2 bg-black"></div>
      <div className="hidden md:block h-2 w-2 bg-yellow-300"></div>
      <div className="hidden md:block h-2 w-2 bg-black"></div>
      <div className="hidden md:block h-2 w-2 bg-yellow-300"></div>
      <div className="hidden md:block h-2 w-2 bg-black"></div>
      <div className="hidden md:block h-2 w-2 bg-yellow-300"></div>
      <div className="hidden md:block h-2 w-2 bg-black"></div>
      <div className="hidden md:block h-2 w-2 bg-yellow-300"></div>
      <div className="hidden md:block h-2 w-2 bg-black"></div>
      <div className="hidden md:block h-2 w-2 bg-yellow-300"></div>
      <div className="hidden md:block h-2 w-2 bg-black"></div>
      <div className="hidden md:block h-2 w-2 bg-yellow-300"></div>
      <div className="hidden md:block h-2 w-2 bg-black"></div>
      <div className="hidden md:block h-2 w-2 bg-yellow-300"></div>
      <div className="hidden md:block h-2 w-2 bg-black"></div>
      <div className="hidden md:block h-2 w-2 bg-yellow-300"></div>
      <div className="hidden md:block h-2 w-2 bg-black"></div>
      <div className="hidden md:block h-2 w-2 bg-yellow-300"></div>
      <div className="hidden md:block h-2 w-2 bg-black"></div>
      <div className="hidden md:block h-2 w-2 bg-yellow-300"></div>
      <div className="hidden md:block h-2 w-2 bg-black"></div>
      <div className="hidden md:block h-2 w-2 bg-yellow-300"></div>
      <div className="hidden md:block h-2 w-2 bg-black"></div>
      <div className="hidden md:block h-2 w-2 bg-yellow-300"></div>
      <div className="hidden md:block h-2 w-2 bg-black"></div>
      <div className="hidden md:block h-2 w-2 bg-yellow-300"></div>
      <div className="hidden md:block h-2 w-2 bg-black"></div>
      <div className="hidden md:block h-2 w-2 bg-yellow-300"></div>
      <div className="hidden md:block h-2 w-2 bg-black"></div>
      <div className="hidden md:block h-2 w-2 bg-yellow-300"></div>
      <div className="hidden md:block h-2 w-2 bg-black"></div>
      <div className="hidden md:block h-2 w-2 bg-yellow-300"></div>
      <div className="hidden md:block h-2 w-2 bg-black"></div>
      <div className="hidden md:block h-2 w-2 bg-yellow-300"></div>
      <div className="hidden md:block h-2 w-2 bg-black"></div>
      <div className="hidden md:block h-2 w-2 bg-yellow-300"></div>
      <div className="hidden md:block h-2 w-2 bg-black"></div>
      <div className="hidden md:block h-2 w-2 bg-yellow-300"></div>
      <div className="hidden md:block h-2 w-2 bg-black"></div>
      <div className="hidden md:block h-2 w-2 bg-yellow-300"></div>
      <div className="hidden md:block h-2 w-2 bg-black"></div>
      <div className="hidden md:block h-2 w-2 bg-yellow-300"></div>
      <div className="hidden md:block h-2 w-2 bg-black"></div>
      <div className="hidden md:block h-2 w-2 bg-yellow-300"></div>
      <div className="hidden md:block h-2 w-2 bg-black"></div>
      <div className="hidden md:block h-2 w-2 bg-yellow-300"></div>
      <div className="hidden md:block h-2 w-2 bg-black"></div>
      <div className="hidden md:block h-2 w-2 bg-yellow-300"></div>
      <div className="hidden md:block h-2 w-2 bg-black"></div>
      <div className="hidden md:block h-2 w-2 bg-yellow-300"></div>
      <div className="hidden md:block h-2 w-2 bg-black"></div>
      <div className="hidden md:block h-2 w-2 bg-yellow-300"></div>
      <div className="hidden md:block h-2 w-2 bg-black"></div>
      <div className="hidden md:block h-2 w-2 bg-yellow-300"></div>
      <div className="hidden md:block h-2 w-2 bg-black"></div>
      <div className="hidden md:block h-2 w-2 bg-yellow-300"></div>
      <div className="hidden md:block h-2 w-2 bg-black"></div>
      <div className="hidden md:block h-2 w-2 bg-yellow-300"></div>
      <div className="hidden md:block h-2 w-2 bg-black"></div>
      <div className="hidden md:block h-2 w-2 bg-yellow-300"></div>
      <div className="hidden md:block h-2 w-2 bg-black"></div>
      <div className="hidden md:block h-2 w-2 bg-yellow-300"></div>
      <div className="hidden md:block h-2 w-2 bg-black"></div>
      <div className="hidden md:block h-2 w-2 bg-yellow-300"></div>
      <div className="hidden md:block h-2 w-2 bg-black"></div>
      <div className="hidden md:block h-2 w-2 bg-yellow-300"></div>
      <div className="hidden md:block h-2 w-2 bg-black"></div>
      <div className="hidden md:block h-2 w-2 bg-yellow-300"></div>
      <div className="hidden md:block h-2 w-2 bg-black"></div>
        
      </div>
      <div className="md:hidden flex">         
        <div className="h-2 w-2 bg-yellow-300"></div>
        <div className="h-2 w-2 bg-black"></div>
        <div className="h-2 w-2 bg-yellow-300"></div>
        <div className="h-2 w-2 bg-black"></div>
        <div className="h-2 w-2 bg-yellow-300"></div>
        <div className="h-2 w-2 bg-black"></div>
        <div className="h-2 w-2 bg-yellow-300"></div>
        <div className="h-2 w-2 bg-black"></div>
        <div className="h-2 w-2 bg-yellow-300"></div>
        <div className="h-2 w-2 bg-black"></div>
        <div className="h-2 w-2 bg-yellow-300"></div>
        <div className="h-2 w-2 bg-black"></div>
        <div className="h-2 w-2 bg-yellow-300"></div>
        <div className="h-2 w-2 bg-black"></div>
        <div className="h-2 w-2 bg-yellow-300"></div>
        <div className="h-2 w-2 bg-black"></div>
        <div className="h-2 w-2 bg-yellow-300"></div>
        <div className="h-2 w-2 bg-black"></div>
        <div className="h-2 w-2 bg-yellow-300"></div>
        <div className="h-2 w-2 bg-black"></div>
        <div className="h-2 w-2 bg-yellow-300"></div>
        <div className="h-2 w-2 bg-black"></div>
        <div className="h-2 w-2 bg-yellow-300"></div>
        <div className="h-2 w-2 bg-black"></div>
        <div className="h-2 w-2 bg-yellow-300"></div>
        <div className="h-2 w-2 bg-black"></div>
        <div className="h-2 w-2 bg-yellow-300"></div>
        <div className="h-2 w-2 bg-black"></div>
        <div className="h-2 w-2 bg-yellow-300"></div>
        <div className="h-2 w-2 bg-black"></div>
        <div className="h-2 w-2 bg-yellow-300"></div>
        <div className="h-2 w-2 bg-black"></div>
        <div className="h-2 w-2 bg-yellow-300"></div>
        <div className="h-2 w-2 bg-black"></div>
        <div className="h-2 w-2 bg-yellow-300"></div>
        <div className="h-2 w-2 bg-black"></div>
        <div className="h-2 w-2 bg-yellow-300"></div>
        <div className="h-2 w-2 bg-black"></div>
        <div className="h-2 w-2 bg-yellow-300"></div>
        <div className="h-2 w-2 bg-black"></div>
        <div className="h-2 w-2 bg-yellow-300"></div>
        <div className="h-2 w-2 bg-black"></div>
        <div className="h-2 w-2 bg-yellow-300"></div>
        <div className="h-2 w-2 bg-black"></div>
        <div className="h-2 w-2 bg-yellow-300"></div>
        <div className="h-2 w-2 bg-black"></div>
        <div className="h-2 w-2 bg-yellow-300"></div>
        <div className="h-2 w-2 bg-black"></div>
        <div className="h-2 w-2 bg-yellow-300"></div>
        <div className="h-2 w-2 bg-black"></div>
        <div className="h-2 w-2 bg-yellow-300"></div>
        
      </div> */}
    </div>
  );
};

export default Header;
