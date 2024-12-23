import { FaHome, FaInfoCircle, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-slate-800 text-white py-4">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* About Section */}
        <div>
          <h4 className="font-bold text-lg mb-4">About Us</h4>
          <p className="text-sm leading-relaxed">
          Discover high-quality products designed to make your life easier and more stylish. 
          Experience the perfect blend of functionality and flair with every purchase. 
          Shop now and find your new favorites!
          </p>
        </div>

        {/* Links Section */}
        <div>
          <h4 className="font-bold text-lg mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <FaHome /> <a href="#" className="hover:text-gray-300">Home</a>
            </li>
            <li className="flex items-center gap-2">
              <FaInfoCircle /> <a href="#" className="hover:text-gray-300">About</a>
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt /> <a href="#" className="hover:text-gray-300">Contact</a>
            </li>
            <li className="flex items-center gap-2">
              <FaInfoCircle /> <a href="#" className="hover:text-gray-300">FAQ</a>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h4 className="font-bold text-lg mb-4">Get in Touch</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <FaEnvelope /> support@Jr's SHOP.com
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt /> +1 234 567 890
            </li>
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt /> 123 Jr's | SHOP 
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-8 text-center text-sm   pt-4">
        &copy; {new Date().getFullYear()} Tumbler World. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
