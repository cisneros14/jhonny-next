import Link from "next/link";
import { Instagram, Video } from "lucide-react";
import { FaWhatsapp, FaTiktok } from "react-icons/fa";
import { FaThreads } from "react-icons/fa6";

const footerLinks = [
  { title: "Inicio", href: "/" },
  { title: "Conócenos", href: "/conocenos" },
  { title: "Galería", href: "/galeria" },
  { title: "Posters", href: "/posters" },
  { title: "Contáctanos", href: "/contactanos" },
  { title: "Blog", href: "/blog" },
  { title: "Noticias", href: "/noticias" },
];

export function Footer() {
  return (
    <footer className="w-full py-12 border-t border-white/5">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:mb-10 mb-6">
          {/* WhatsApp Button */}
          <Link
            href="https://wa.me/your-number"
            target="_blank"
            className="flex items-center gap-2 bg-[#00B100] hover:bg-[#008F00] text-white p-2 px-8 w-full md:w-auto rounded-md font-medium transition-colors"
          >
            <FaWhatsapp className="h-5 w-5 fill-current" />
            Hablemos
          </Link>

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            {footerLinks.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="text-white hover:text-brand-green transition-colors text-sm font-medium border-b border-transparent hover:border-brand-green pb-1"
              >
                {link.title}
              </Link>
            ))}
          </nav>

          {/* Social Icons */}
          <div className="flex items-center gap-6">
            <Link
              href="#"
              className="text-white/70 hover:text-white transition-colors"
            >
              <Instagram className="h-6 w-6" />
            </Link>
            <Link
              href="#"
              className="text-white/70 hover:text-white transition-colors"
            >
              <FaTiktok className="h-6 w-6" />
            </Link>
            <Link
              href="#"
              className="text-white/70 hover:text-white transition-colors"
            >
              <FaThreads className="h-6 w-6" />
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-white/40 text-xs border-t border-white/5 pt-8">
          © GEOALIENZ all rights reserved
        </div>
      </div>
    </footer>
  );
}
