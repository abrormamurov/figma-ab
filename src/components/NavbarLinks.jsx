import React from "react";
import { Link } from "react-router-dom";
function NavbarLinks() {
  return (
    <>
      <li>
        <Link className="" to="contacts">
          Contacts
        </Link>
      </li>
      <li>
        <Link className="" to="/ourblock">
          OurBlock
        </Link>
      </li>
      <li>
        <Link className="" to="/aboutsedra">
          AboutSedra
        </Link>
      </li>

      <li>
        <Link className="" to="/allproducts">
          AllProducts
        </Link>
      </li>
    </>
  );
}

export default NavbarLinks;
