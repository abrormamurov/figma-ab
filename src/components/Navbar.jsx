import { BsCart3, BsMoonFill, BsSunFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { FaBarsStaggered } from "react-icons/fa6";
import NavbarLinks from "./NavbarLinks";
import { RiInstagramLine } from "react-icons/ri";
import { TiSocialFacebookCircular } from "react-icons/ti";

function Navbar() {
  return (
    <div className="bg-base-200">
      <div className="navbar align-element">
        <div className="navbar-start">
          <NavLink to="/" className="hidden lg:flex  text-3xl items-center">
            <img src="/public/Frame.svg" alt="" />
          </NavLink>

          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <FaBarsStaggered className="h-6 w-6" />
            </label>
            <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52">
              <NavbarLinks />
            </ul>
          </div>
        </div>
        <div className="navbar-center ">
          <ul className="menu hidden lg:menu-horizontal ">
            <NavbarLinks />
            <div className="flex items-center">
              {" "}
              <RiInstagramLine className="w-6 h-6  mt-1 gap-4" />
              <TiSocialFacebookCircular className="w-7 h-7  mt-1" />
            </div>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="form-control ml-4">
            <input
              type="text"
              placeholder="Search"
              className="input rounded-3xl			 input-bordered w-24 md:w-auto"
            />
          </div>
          <NavLink to="/cart" className="btn btn-ghost btn-circle btn-md ml-4">
            <div className="indicator">
              <img src="/public/Outline.svg" alt="" />
              <img src="/public/icon_cart_simple.svg" alt="" />
              <span className="badge badge-sm badge-primery indicator-item">
                8
              </span>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
