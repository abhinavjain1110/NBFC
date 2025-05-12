import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="shadow-sm sticky top-0 z-50" style={{backgroundColor:"#fefae0"}}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <span className="font-bold text-2xl" style={{color:"#023047"}}>FinTrust</span>
              <span className="ml-1 text-sm font-medium"style={{color:"#023047"}}>Capital</span>
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <Link to="/" className="font-medium  hover:text-nbfc-light transition-colors"style={{color:"#023047"}}>Home</Link>
              <Link to="/about" className="font-medium  hover:text-nbfc-light transition-colors"style={{color:"#023047"}}>About Us</Link>
              <Link to="/services" className="font-medium  hover:text-nbfc-light transition-colors"style={{color:"#023047"}}>Services</Link>
              <Link to="/contact" className="font-medium  hover:text-nbfc-light transition-colors"style={{color:"#023047"}}>Contact</Link>
              <Link to="/faq" className="font-medium  hover:text-nbfc-light transition-colors"style={{color:"#023047"}}>FAQ</Link>
            </div>
          </div>

          <div className="hidden md:block">
            <button className='px-3 py-3 font-semibold border rounded-lg hover:bg-white' style={{color:"#023047",borderColor:"#023047"}}>Apply Now</button>
          </div>

          {/* Mobile */}
          <div className="md:hidden">
            <button
              type="button"
              className="rounded-md p-2 inline-flex items-center justify-center text-black  focus:outline-none"
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-2">
          <div className="container mx-auto px-4 space-y-2 pb-3 pt-2">
            <Link 
              to="/" 
              className="block px-3 py-2 rounded-md text-base font-medium text-nbfc-dark hover:bg-nbfc-light hover:text-white"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="block px-3 py-2 rounded-md text-base font-medium text-nbfc-dark hover:bg-nbfc-light hover:text-white"
              onClick={toggleMenu}
            >
              About Us
            </Link>
            <Link 
              to="/services" 
              className="block px-3 py-2 rounded-md text-base font-medium text-nbfc-dark hover:bg-nbfc-light hover:text-white"
              onClick={toggleMenu}
            >
              Services
            </Link>
            <Link 
              to="/contact" 
              className="block px-3 py-2 rounded-md text-base font-medium text-nbfc-dark hover:bg-nbfc-light hover:text-white"
              onClick={toggleMenu}
            >
              Contact
            </Link>
            <Link 
              to="/faq" 
              className="block px-3 py-2 rounded-md text-base font-medium text-nbfc-dark hover:bg-nbfc-light hover:text-white"
              onClick={toggleMenu}
            >
              FAQ
            </Link>
            <div className="pt-2">
              <button className="w-full hover:bg-white transition">Apply Now</button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
