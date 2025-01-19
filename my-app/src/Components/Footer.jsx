import { useState } from "react";

// Footer Component
const Footer = () => {
  // State for toggling dropdowns
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <footer className="bg-blue-800 text-white py-8 px-6">
      <div className="md:hidden">
        {/* Mobile View */}
        {["SHOP", "SUPPORT", "QUESTIONS", "WHOLESALE"].map((section, index) => (
          <div key={index} className="mb-4">
            <button
              className="w-full flex justify-between items-center py-2 font-bold text-lg"
              onClick={() => toggleSection(section)}
            >
              {section}
              <span className="text-xl">
                {openSection === section ? "−" : "+"}
              </span>
            </button>
            {openSection === section && (
              <div className="pl-4 mt-2">
                {section === "SHOP" && (
                  <ul className="space-y-2">
                    <li><a href="#" className="hover:underline">Variety Packs</a></li>
                    <li><a href="#" className="hover:underline">Our Flavors</a></li>
                    <li><a href="#" className="hover:underline">Subscribe & Save</a></li>
                  </ul>
                )}
                {section === "SUPPORT" && (
                  <ul className="space-y-2">
                    <li><a href="#" className="hover:underline">Find Us</a></li>
                    <li><a href="#" className="hover:underline">Shipping & Return Policy</a></li>
                    <li><a href="#" className="hover:underline">Privacy Policy</a></li>
                    <li><a href="#" className="hover:underline">Terms of Service</a></li>
                    <li><a href="#" className="hover:underline">Accessibility Options</a></li>
                    <li><a href="#" className="hover:underline">Accessibility Statement</a></li>
                  </ul>
                )}
                {section === "QUESTIONS" && (
                  <p>
                    <a href="mailto:hello@drinkwildwonder.com" className="hover:underline">
                      hello@drinkwildwonder.com
                    </a>
                  </p>
                )}
                {section === "WHOLESALE" && (
                  <p>
                    <a href="mailto:sales@drinkwildwonder.com" className="hover:underline">
                      sales@drinkwildwonder.com
                    </a>
                  </p>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="hidden md:grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Desktop View */}
        {/* Shop Section */}
        <div>
          <h4 className="font-bold text-lg mb-4">SHOP</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Variety Packs</a></li>
            <li><a href="#" className="hover:underline">Our Flavors</a></li>
            <li><a href="#" className="hover:underline">Subscribe & Save</a></li>
          </ul>
        </div>

        {/* Support Section */}
        <div>
          <h4 className="font-bold text-lg mb-4">SUPPORT</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Find Us</a></li>
            <li><a href="#" className="hover:underline">Shipping & Return Policy</a></li>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Terms of Service</a></li>
            <li><a href="#" className="hover:underline">Accessibility Options</a></li>
            <li><a href="#" className="hover:underline">Accessibility Statement</a></li>
          </ul>
        </div>

        {/* Questions Section */}
        <div>
          <h4 className="font-bold text-lg mb-4">QUESTIONS</h4>
          <p><a href="mailto:hello@drinkwildwonder.com" className="hover:underline">hello@drinkwildwonder.com</a></p>
        </div>

        {/* Wholesale Section */}
        <div>
          <h4 className="font-bold text-lg mb-4">WHOLESALE</h4>
          <p><a href="mailto:sales@drinkwildwonder.com" className="hover:underline">sales@drinkwildwonder.com</a></p>
        </div>
      </div>

      {/* Logo and Socials */}
      <div className="mt-8 flex justify-between items-center">
        <div className="text-xl font-bold">wildwonder®</div>
        <div className="flex space-x-4">
          <a href="#" className="hover:underline"><i className="fab fa-instagram"></i></a>
          <a href="#" className="hover:underline"><i className="fab fa-tiktok"></i></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
