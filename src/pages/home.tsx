import { ArrowRight, Truck, ShieldCheck, Headphones, Wrench, Car, Sofa, Sparkles, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import VewibAccueil from "../assets/vewib-accueil.jpg";
import Footer from "../components/Footer";
import { products } from "../data/product";

export default function Home() {
  const featuredProducts = products.filter((product) => product.featured).slice(0, 4);
  const displayedProducts = featuredProducts.length > 0 ? featuredProducts : products.slice(0, 4);

  return (
    <div className="min-h-screen font-sans">
      <Navbar />

      <section className="relative w-full min-h-[560px] md:min-h-[600px] flex flex-col justify-between overflow-hidden">
        <div className="absolute inset-0 bg-gray-300 flex items-center justify-center">
          <img
            src={VewibAccueil}
            alt="Vewib Auto Parts"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-transparent" />

        <div className="relative z-10 flex-1 flex flex-col justify-center px-5 sm:px-8 md:px-20 py-16 sm:py-20 max-w-2xl">
          <h1
            className="text-3xl sm:text-4xl md:text-6xl font-bold text-white leading-tight mb-5 sm:mb-6"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            Ersatzteile für klassische Volkswagen
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-200 mb-8 sm:mb-10 leading-relaxed max-w-lg">
            Über 30 Jahre Expertise für Ihren Käfer, Bulli, Transporter oder Karmann Ghia. Premium-Qualität garantiert.
          </p>
          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4 w-full sm:w-auto">
            <Link
              to="/catalog"
              className="w-full sm:w-auto flex items-center justify-center gap-2 text-white text-sm font-semibold px-6 py-3 rounded transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#15415a" }}
            >
              Teile entdecken <ArrowRight size={16} />
            </Link>
            <Link
              to="/catalog"
              className="w-full sm:w-auto border text-white text-sm font-semibold px-6 py-3 rounded transition-colors hover:bg-white/10 text-center"
              style={{ borderColor: "rgba(255,255,255,0.7)" }}
            >
              Käfer-Teile
            </Link>
          </div>
        </div>

        <div
          className="relative z-10 backdrop-blur-sm"
          style={{ backgroundColor: "rgba(21, 65, 90, 0.92)" }}
        >
          <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-8 py-5 sm:py-6 grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            <div className="flex items-start sm:items-center gap-4 text-white">
              <Truck size={28} className="shrink-0 mt-0.5 sm:mt-0" style={{ color: "#a8c8d8" }} />
              <div>
                <p className="font-semibold text-sm">Schnelle Lieferung</p>
                <p className="text-xs leading-relaxed" style={{ color: "#a8c8d8" }}>
                  Versand in 24–48h in ganz Europa
                </p>
              </div>
            </div>

            <div
              className="flex items-start sm:items-center gap-4 text-white md:border-x md:px-8 py-1 md:py-0"
              style={{ borderColor: "rgba(255,255,255,0.15)" }}
            >
              <ShieldCheck size={28} className="shrink-0 mt-0.5 sm:mt-0" style={{ color: "#a8c8d8" }} />
              <div>
                <p className="font-semibold text-sm">Qualitätsgarantie</p>
                <p className="text-xs leading-relaxed" style={{ color: "#a8c8d8" }}>
                  Zertifizierte Teile mit 2 Jahren Garantie
                </p>
              </div>
            </div>

            <div className="flex items-start sm:items-center gap-4 text-white">
              <Headphones size={28} className="shrink-0 mt-0.5 sm:mt-0" style={{ color: "#a8c8d8" }} />
              <div>
                <p className="font-semibold text-sm">Expertenberatung</p>
                <p className="text-xs leading-relaxed" style={{ color: "#a8c8d8" }}>
                  Technische Beratung durch unsere Spezialisten
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24 md:py-32 lg:py-40 px-5 sm:px-6" style={{ backgroundColor: "#f4f5f6" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 sm:mb-12">
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              Unsere Kategorien
            </h2>
            <p className="text-sm sm:text-base max-w-xl mx-auto leading-relaxed" style={{ color: "#666666" }}>
              Finden Sie einfach die Teile, die Sie für Ihr Restaurierungs- oder Wartungsprojekt benötigen
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {[
              {
                icon: Wrench,
                title: "Motor",
                desc: "Vergaser, Kupplungen, Dichtungen und mehr",
              },
              {
                icon: Car,
                title: "Karosserie",
                desc: "Kotflügel, Stoßstangen, Hauben und Blechteile",
              },
              {
                icon: Sofa,
                title: "Innenraum",
                desc: "Lenkräder, Sitze, Verkleidungen und Teppiche",
              },
              {
                icon: Sparkles,
                title: "Zubehör",
                desc: "Scheinwerfer, Spiegel und Ausstattung",
              },
            ].map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="bg-white rounded-2xl p-6 sm:p-8 flex flex-col items-center text-center cursor-pointer transition-shadow hover:shadow-md"
                style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.08)" }}
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-5 sm:mb-6"
                  style={{ backgroundColor: "#f0f1f2" }}
                >
                  <Icon size={26} style={{ color: "#333333" }} />
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#666666" }}>
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24 md:py-28 lg:py-32 px-5 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 md:gap-6 mb-10 sm:mb-12">
            <div>
              <h2
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-2"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                Beliebte Produkte
              </h2>
              <p className="text-sm leading-relaxed" style={{ color: "#666666" }}>
                Entdecken Sie unsere aktuell beliebtesten Ersatzteile für klassische Volkswagen
              </p>
            </div>

            <Link
              to="/catalog"
              className="hidden md:flex items-center gap-2 border text-sm font-medium px-5 py-2.5 rounded-full transition-colors hover:bg-gray-50 shrink-0"
              style={{ borderColor: "#cccccc", color: "#333333" }}
            >
              Gesamten Katalog ansehen <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {displayedProducts.map((product) => (
              <Link
                key={product.id}
                to={`/product/${product.id}`}
                className="bg-white rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.08)", border: "1px solid #eeeeee" }}
              >
                <div className="relative">
                  <div
                    className="w-full h-52 sm:h-56 flex items-center justify-center overflow-hidden"
                    style={{ backgroundColor: "#f4f5f6" }}
                  >
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {product.featured && (
                    <span
                      className="absolute top-3 right-3 text-white text-xs font-semibold px-3 py-1 rounded"
                      style={{ backgroundColor: "#15415a" }}
                    >
                      Beliebt
                    </span>
                  )}
                </div>

                <div className="p-4 sm:p-5 flex flex-col flex-1">
                  <p
                    className="text-xs font-semibold tracking-widest mb-1 uppercase"
                    style={{ color: "#666666" }}
                  >
                    {product.category}
                  </p>

                  <h3 className="text-base font-bold text-gray-900 mb-1 leading-snug">
                    {product.title}
                  </h3>

                  <p className="text-sm mb-2 leading-relaxed" style={{ color: "#666666" }}>
                    {product.subtitle}
                  </p>

                  <p className="text-sm mb-4 leading-relaxed" style={{ color: "#888888" }}>
                    {product.vehicle.join(" • ")}
                  </p>

                  <div className="flex items-center justify-between gap-3 mt-auto">
                    <span className="text-lg font-bold text-gray-900">{product.price}</span>
                    <span
                      className="flex items-center gap-2 text-white text-sm font-semibold px-4 py-2 rounded whitespace-nowrap"
                      style={{ backgroundColor: "#15415a" }}
                    >
                      <ShoppingCart size={14} />
                      Hinzufügen
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-8 md:hidden">
            <Link
              to="/catalog"
              className="w-full flex items-center justify-center gap-2 border text-sm font-medium px-5 py-3 rounded-full transition-colors hover:bg-gray-50"
              style={{ borderColor: "#cccccc", color: "#333333" }}
            >
              Gesamten Katalog ansehen <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24 md:py-28 px-5 sm:px-6" style={{ backgroundColor: "#f4f5f6" }}>
        <div className="max-w-7xl mx-auto text-center">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            Nach Fahrzeug suchen
          </h2>
          <p className="text-sm sm:text-base mb-10 sm:mb-14 leading-relaxed" style={{ color: "#666666" }}>
            Wählen Sie Ihr Modell aus, um direkt auf kompatible Teile zuzugreifen
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {["Käfer", "Bulli", "Transporter", "Karmann Ghia"].map((item) => (
              <div
                key={item}
                className="rounded-2xl flex items-center justify-center h-28 sm:h-36 md:h-40 cursor-pointer transition-transform hover:scale-[1.02] px-4"
                style={{ backgroundColor: "#15415a" }}
              >
                <span className="text-white text-base sm:text-lg font-semibold text-center">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}