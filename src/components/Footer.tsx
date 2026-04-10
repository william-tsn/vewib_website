import { Link } from "react-router-dom";
import Vewiblogo from "../assets/vewib.webp";
import { MapPin, Phone, Mail } from "lucide-react";
import {
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#15415a" }} className="text-white">
      <div className="text-center px-6 py-20 border-b border-white/10">
        <h2
          className="text-3xl md:text-4xl font-bold mb-4"
          style={{ fontFamily: "'Georgia', serif" }}
        >
          Brauchen Sie Hilfe bei der Suche nach einem Ersatzteil?
        </h2>
        <p className="max-w-2xl mx-auto text-sm mb-8 text-white/80">
          Unser Expertenteam steht Ihnen zur Verfügung, um Sie zu beraten und Ihnen zu helfen,
          die passenden Teile für Ihr Fahrzeug zu finden.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <a
            href="tel:+496436275200"
            className="bg-white text-gray-900 text-sm font-semibold px-6 py-3 rounded hover:opacity-90"
          >
            Anrufen
          </a>
          <a
            href="mailto:info@vewib.de"
            className="border border-white/70 text-white text-sm font-semibold px-6 py-3 rounded hover:bg-white/10"
          >
            E-Mail senden
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <div className="w-32 h-20 flex items-center justify-start mb-4">
            <img
              src={Vewiblogo}
              alt="VEWIB Logo"
              className="w-full h-full object-contain"
            />
          </div>

          <p className="text-sm text-white/80 mb-6 leading-relaxed">
            Spezialist für Ersatzteile für klassische Volkswagen seit über 30 Jahren.
            Qualität, Expertise und Leidenschaft im Dienste Ihres Fahrzeugs.
          </p>

          <div className="flex gap-4">
            <a
              href="https://www.instagram.com/vewib_germany/"
              target="_blank"
              rel="noreferrer"
              className="hover:opacity-80"
            >
              <FaInstagram size={18} />
            </a>
            <a
              href="https://www.youtube.com/@VEWIB"
              target="_blank"
              rel="noreferrer"
              className="hover:opacity-80"
            >
              <FaYoutube size={18} />
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Navigation</h3>
          <ul className="space-y-2 text-sm text-white/80">
            <li><Link to="/catalog" className="hover:text-white">Katalog</Link></li>
            <li><Link to="/catalog" className="hover:text-white">Motor</Link></li>
            <li><Link to="/catalog" className="hover:text-white">Karosserie</Link></li>
            <li><Link to="/catalog" className="hover:text-white">Innenraum</Link></li>
            <li><Link to="/catalog" className="hover:text-white">Zubehör</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Fahrzeuge</h3>
          <ul className="space-y-2 text-sm text-white/80">
            <li><Link to="/catalog" className="hover:text-white">Käfer</Link></li>
            <li><Link to="/catalog" className="hover:text-white">Bulli / Bus</Link></li>
            <li><Link to="/catalog" className="hover:text-white">Transporter</Link></li>
            <li><Link to="/catalog" className="hover:text-white">Karmann Ghia</Link></li>
            <li><Link to="/catalog" className="hover:text-white">Golf Klassiker</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Kontakt</h3>
          <ul className="space-y-4 text-sm text-white/80">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="mt-1 shrink-0" />
              <span>
                Gewerbegebiet Süd
                <br />
                65599 Dornburg, Deutschland
              </span>
            </li>

            <li className="flex items-center gap-3">
              <Phone size={18} />
              <a href="tel:+496436275200" className="hover:text-white">
                +49 (0) 6436 / 27 52 00
              </a>
            </li>

            <li className="flex items-center gap-3">
              <Mail size={18} />
              <a href="mailto:info@vewib.de" className="hover:text-white">
                info@vewib.de
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8 border-t border-white/15">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/70">
          <p className="text-center md:text-left">
            © 2026 vewib. Alle Rechte vorbehalten.
          </p>

          <div className="flex items-center gap-6 md:gap-8">
            <Link to="/" className="hover:text-white transition">
              Impressum
            </Link>
            <Link to="/" className="hover:text-white transition">
              Allgemeine Geschäftsbedingungen
            </Link>
            <Link to="/" className="hover:text-white transition">
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}