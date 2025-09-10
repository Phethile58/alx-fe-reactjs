function Footer() {
    return (
      <footer className="bg-gray-900 text-white text-center py-4 mt-8"> 
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <p className="mb-4 md:mb-0">&copy; 2024 My Company. All rights reserved.</p>
       <ul className="flex space-x-6">
          <li>
            <Link to="/" className="hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:underline">
              About
            </Link>
          </li>
          <li>
            <Link to="/dashboard" className="hover:underline">
              Dashboard
            </Link>
          </li>
        </ul>
      </div> 
        </footer>
    );
  }
  
  export default Footer;
  