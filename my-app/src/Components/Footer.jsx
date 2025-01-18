

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-blue-800 text-white py-8 px-6">
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <div>
          <h4 className="font-bold mb-2">Shop</h4>
          <ul>
            <li><a href="#" className="hover:underline">Variety Packs</a></li>
            <li><a href="#" className="hover:underline">Staff Favorites</a></li>
            <li><a href="#" className="hover:underline">Subscribe & Save</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-2">Questions</h4>
          <ul>
            <li><a href="#" className="hover:underline">Find Us</a></li>
            <li><a href="#" className="hover:underline">Shipping & Return Policy</a></li>
            <li><a href="#" className="hover:underline">Terms of Service</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-2">Stay in Touch</h4>
          <p className="text-sm">Sign up for gut health tips, exclusive offers, and new products.</p>
          <form className="mt-2 flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 rounded-l-lg border-none focus:outline-none"
            />
            <button
              type="submit"
              className="bg-pink-500 px-4 py-2 rounded-r-lg font-bold hover:bg-pink-600"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

// Static Sections


