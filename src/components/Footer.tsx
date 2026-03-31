import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-gray-300 py-12 mt-4">
      <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
        {/* About */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">
            Rolpa Polytechnic Institute
          </h3>
          <p className="text-gray-400">
            Learn, grow, and achieve excellence with us. Join our programs and
            start your journey today.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#hero" className="hover:text-blue-500 transition-colors">
                Home
              </a>
            </li>
            <li>
              <a
                href="#apply"
                className="hover:text-blue-500 transition-colors"
              >
                Apply
              </a>
            </li>
            <li>
              <a
                href="#courses"
                className="hover:text-blue-500 transition-colors"
              >
                Courses
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-blue-500 transition-colors"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">Follow Us</h3>
          <div className="flex space-x-4 mt-2">
            <a
              href="https://www.facebook.com/rolpapolytechnic"
              target="_blank"
              className="p-3 bg-blue-600 rounded-full hover:bg-blue-500 transition-colors"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="p-3 bg-blue-400 rounded-full hover:bg-blue-300 transition-colors"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="p-3 bg-blue-700 rounded-full hover:bg-blue-600 transition-colors"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="#"
              className="p-3 bg-pink-500 rounded-full hover:bg-pink-400 transition-colors"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Rolpa Polytechnic Institute. All
        rights reserved.
      </div>
    </footer>
  );
}
