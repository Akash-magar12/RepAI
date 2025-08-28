import { Facebook, Twitter, Instagram, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t py-8  mt-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold">RepAI</h2>
          <p className="text-sm text-gray-500">
            Smarter Workouts, Better Results.
          </p>
        </div>

        {/* Links */}
        <div className="flex gap-6 text-sm text-gray-600">
          <a href="/about" className="hover:text-black">
            About
          </a>
          <a href="/features" className="hover:text-black">
            Features
          </a>
          <a href="/pricing" className="hover:text-black">
            Pricing
          </a>
          <a href="/contact" className="hover:text-black">
            Contact
          </a>
        </div>

        {/* Socials */}
        <div className="flex gap-4">
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <Facebook className="h-5 w-5 text-gray-600 hover:text-black" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <Twitter className="h-5 w-5 text-gray-600 hover:text-black" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <Instagram className="h-5 w-5 text-gray-600 hover:text-black" />
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer">
            <Github className="h-5 w-5 text-gray-600 hover:text-black" />
          </a>
        </div>
      </div>

      {/* Bottom Note */}
      <div className="text-center text-xs text-gray-500 mt-6">
        © {new Date().getFullYear()} RepAI. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
