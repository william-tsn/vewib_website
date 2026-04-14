import { Link } from "react-router-dom";

export default function FooterPublic() {
  return (
    <div
      className="w-full mx-auto px-6 py-8 border-t border-white/15"
      style={{ backgroundColor: "#15415a" }} 
    >
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
  );
}