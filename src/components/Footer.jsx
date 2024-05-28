import { Link } from "react-router-dom";
function Footer() {
  return (
    <div className="align-element f">
      <div className="flex gap-8">
        <Link to="allproducts">ALL PRODUCTS</Link>
        <img src="/public/Line 2.svg" alt="" />
        <Link to="aboutsedra">ABOUT SEEDRA</Link>
        <img src="/public/Line 2.svg" alt="" />
        <Link to="ourblock">OUR BLOG</Link>
        <Link to="/" className="hidden lg:flex ml-8 mr-8 text-3xl items-center">
          <img src="/public/Frame.svg" alt="" />
        </Link>
        <Link to="/">Terms&Conditions</Link>
        <img src="/public/Line 2.svg" alt="" />
        <Link to="/">Privacy Policy</Link>
      </div>
      <hr className="mt-8 mb-6" />
      <div className="flex flex-col">
        <section
          className="flex 
        gap-6 "
        >
          <img src="/public/in.svg" alt="" />
          <img className="imj" src="/public/fe.svg" alt="" />
          <Link className="mb-10" to="/">
            All rights reserved
          </Link>
        </section>
      </div>
    </div>
  );
}

export default Footer;
