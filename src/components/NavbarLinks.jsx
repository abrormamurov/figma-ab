import { NavLink } from "react-router-dom";

const links = [
  { id: 1, url: "/allproducts", text: "ALL PRODUCTS" },
  { id: 2, url: "/aboutsedra", text: "ABOUT SEEDRA" },
  { id: 3, url: "/ourblock", text: "OUR BLOG" },
  { id: 4, url: "/contacts", text: "CONTACTS" },
  { id: 5, url: "/orders", text: "Orders" },
];

function NavbarLinks() {
  return (
    <>
      {links.map((link) => {
        return (
          <li key={link.id}>
            <NavLink to={link.url} className="capitalize">
              {link.text}
            </NavLink>
          </li>
        );
      })}
    </>
  );
}

export default NavbarLinks;
