import { useState } from "react";
import Logo from "./assets/images/logo.svg";
import Buttons from "./Buttons";
import MobileMenu from "./MobileMenu";

function NavSection() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="container relative mx-auto mt-10 max-w-6xl px-6 md:px-0">
      {/* logo */}
      <div className="flex items-center justify-between md:flex md:items-center md:space-x-12">
        <img src={Logo} alt="logo" />

        <MobileMenu onSetOpen={setOpen} open={open} />

        {/*desktop menu  */}
        <div className="hidden w-full items-center justify-between font-semibold text-grayishViolet md:flex">
          <div className="flex items-center space-x-8">
            <a href="#">Features</a>
            <a href="#">Pricing</a>
            <a href="#">Resources</a>
          </div>
          {/* right content  */}
          <div className="flex items-center space-x-8">
            <p className="cursor-pointer">Login</p>
            <Buttons>Sign Up</Buttons>
          </div>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="absolute top-12 w-full max-w-80 rounded-md bg-darkViolet px-3 py-12 text-xl font-semibold text-white  md:hidden">
            <flex className="flex flex-col items-center justify-center space-y-8">
              <a href="#">Features</a>
              <a href="#">Pricing</a>
              <a href="#">Resources</a>
            </flex>

            <div className="mt-5 flex flex-col items-center space-y-6 border-t">
              <p className="cursor-pointer pt-5">Login</p>
              <Buttons className="w-full"> Sign Up</Buttons>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default NavSection;
