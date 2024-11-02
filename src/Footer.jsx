import Logo from "./assets/images/logo2.svg";
import Facebook from "./assets/images/icon-facebook.svg";
import Twitter from "./assets/images/icon-twitter.svg";
import Pinterest from "./assets/images/icon-pinterest.svg";
import Instagram from "./assets/images/icon-instagram.svg";

function Footer() {
  return (
    <footer id="footer" className="bg-veryDarkViolet">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center justify-between space-y-6 pb-20 pt-12 text-white md:flex-row md:items-start md:space-x-8 md:space-y-0">
          <img src={Logo} alt="logo" className="mr-0 pb-4 md:mr-28 md:pb-0" />
          {/* menus */}
          <div className="flex flex-col items-center space-y-3 md:items-start">
            <h5 className="text-xl font-semibold">Features</h5>
            <a href="#" className="text-grayishViolet hover:text-cyan">
              Links shortening
            </a>
            <a href="#" className="text-grayishViolet hover:text-cyan">
              branded Links
            </a>
            <a href="#" className="text-grayishViolet hover:text-cyan">
              Analytics
            </a>
          </div>
          <div className="flex flex-col items-center space-y-3 md:items-start">
            <h5 className="text-xl font-semibold">Resources</h5>
            <a href="#" className="text-grayishViolet hover:text-cyan">
              Blog
            </a>
            <a href="#" className="text-grayishViolet hover:text-cyan">
              Developer
            </a>
            <a href="#" className="text-grayishViolet hover:text-cyan">
              Support
            </a>
          </div>
          <div className="flex flex-col items-center space-y-3 md:items-start">
            <h5 className="text-xl font-semibold">Company</h5>
            <a href="#" className="text-grayishViolet hover:text-cyan">
              About
            </a>
            <a href="#" className="text-grayishViolet hover:text-cyan">
              Our Team
            </a>
            <a href="#" className="text-grayishViolet hover:text-cyan">
              Careers
            </a>
            <a href="#" className="text-grayishViolet hover:text-cyan">
              Contact
            </a>
          </div>
          {/* Socials */}
          <div className="flex items-center space-x-3 pt-4 md:pt-0">
            <img src={Facebook} alt="" className="ficon" />
            <img src={Twitter} alt="" className="ficon" />
            <img src={Pinterest} alt="" className="ficon" />
            <img src={Instagram} alt="" className="ficon" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
