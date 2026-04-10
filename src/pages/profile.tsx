import { Link, useNavigate } from "react-router-dom";
import { User, Mail, Building2, LogOut } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Profile() {
  const navigate = useNavigate();

  function handleLogout() {
    navigate("/");
  }

  return (
    <div className="min-h-screen font-sans" style={{ backgroundColor: "#f4f5f6" }}>
      <Navbar />

      <section className="px-4 sm:px-6 py-12 sm:py-16 md:py-20">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 sm:mb-10">
            <p
              className="text-xs sm:text-sm uppercase tracking-[0.18em] mb-3 sm:mb-4"
              style={{ color: "#15415a" }}
            >
              Mein Konto
            </p>
            <h1
              className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight"
              style={{ fontFamily: "'Georgia', serif", color: "#111111" }}
            >
              Mein Profil
            </h1>
          </div>

          <div
            className="bg-white rounded-2xl p-5 sm:p-8 md:p-10"
            style={{
              boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
              border: "1px solid #eeeeee",
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-10">
              <div
                className="rounded-2xl p-5 sm:p-6"
                style={{ backgroundColor: "#f8f9fa", border: "1px solid #eeeeee" }}
              >
                <div className="flex items-start sm:items-center gap-3 mb-3">
                  <User size={20} className="shrink-0 mt-0.5 sm:mt-0" style={{ color: "#15415a" }} />
                  <p className="font-semibold text-gray-900">Ansprechpartner</p>
                </div>
                <p className="text-sm sm:text-base break-words leading-relaxed" style={{ color: "#666666" }}>
                  Max Mustermann
                </p>
              </div>

              <div
                className="rounded-2xl p-5 sm:p-6"
                style={{ backgroundColor: "#f8f9fa", border: "1px solid #eeeeee" }}
              >
                <div className="flex items-start sm:items-center gap-3 mb-3">
                  <Mail size={20} className="shrink-0 mt-0.5 sm:mt-0" style={{ color: "#15415a" }} />
                  <p className="font-semibold text-gray-900">E-Mail</p>
                </div>
                <p className="text-sm sm:text-base break-words leading-relaxed" style={{ color: "#666666" }}>
                  contact@vewib-demo.de
                </p>
              </div>

              <div
                className="rounded-2xl p-5 sm:p-6"
                style={{ backgroundColor: "#f8f9fa", border: "1px solid #eeeeee" }}
              >
                <div className="flex items-start sm:items-center gap-3 mb-3">
                  <Building2 size={20} className="shrink-0 mt-0.5 sm:mt-0" style={{ color: "#15415a" }} />
                  <p className="font-semibold text-gray-900">Unternehmen</p>
                </div>
                <p className="text-sm sm:text-base break-words leading-relaxed" style={{ color: "#666666" }}>
                  VEWIB Partner Garage
                </p>
              </div>

              <div
                className="rounded-2xl p-5 sm:p-6"
                style={{ backgroundColor: "#f8f9fa", border: "1px solid #eeeeee" }}
              >
                <div className="flex items-start sm:items-center gap-3 mb-3">
                  <Building2 size={20} className="shrink-0 mt-0.5 sm:mt-0" style={{ color: "#15415a" }} />
                  <p className="font-semibold text-gray-900">Kundennummer</p>
                </div>
                <p className="text-sm sm:text-base break-words leading-relaxed" style={{ color: "#666666" }}>
                  VW-2026-001
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
              <Link
                to="/catalog"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-xl text-sm font-semibold text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: "#15415a" }}
              >
                Zum Katalog
              </Link>

              <button
                type="button"
                onClick={handleLogout}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold border transition-colors hover:bg-gray-50"
                style={{ borderColor: "#d9d9d9", color: "#333333" }}
              >
                <LogOut size={16} />
                Abmelden
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}