
const Footer = () => {
    return (
      <footer className="bg-blue-100/30">
        <div className="container mx-auto py-8 px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <h3 className="text-lg font-semibold mb-4">About Us</h3>
              <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm hover:text-white">Home</a></li>
                <li><a href="#" className="text-sm hover:text-white">About</a></li>
                <li><a href="#" className="text-sm hover:text-white">Services</a></li>
                <li><a href="#" className="text-sm hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <p className="text-sm">123 Main Street<br />City, State 12345<br />Email: info@example.com</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-2">
                <a href="#" className="text-sm hover:text-white">Links</a>
                <a href="#" className="text-sm hover:text-white">Links</a>
                <a href="#" className="text-sm hover:text-white">Links</a>
              </div>
            </div>
          </div>
          <hr className="border-gray-700 my-6" />
          <p className="text-center text-sm">&copy; 2024 Tutor Finder. All rights reserved.</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  