import { ArrowRight, Truck, ShieldCheck, Headphones, Wrench, Car, Sofa, Sparkles, ShoppingCart } from "lucide-react";
import Navbar from "../components/Navbar";
import VewibAccueil from "../assets/vewib-accueil.jpg";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen font-sans">
      <Navbar />

      <section className="relative w-full min-h-[600px] flex flex-col justify-between overflow-hidden">

        <div className="absolute inset-0 bg-gray-300 flex items-center justify-center">
          <img src={VewibAccueil} alt="Vewib Auto Parts" className="w-full h-auto object-cover" />
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-transparent" />

        <div className="relative z-10 flex-1 flex flex-col justify-center px-10 md:px-20 py-20 max-w-2xl">
          <h1
            className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            Ersatzteile für klassische Volkswagen
          </h1>
          <p className="text-base md:text-lg text-gray-200 mb-10 leading-relaxed max-w-lg">
            Über 30 Jahre Expertise für Ihren Käfer, Bulli, Transporter oder Karmann Ghia. Premium-Qualität garantiert.
          </p>
          <div className="flex flex-wrap gap-4">
            <button
              className="flex items-center gap-2 text-white text-sm font-semibold px-6 py-3 rounded transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#15415a" }}
            >
              Teile entdecken <ArrowRight size={16} />
            </button>
            <button
              className="border text-white text-sm font-semibold px-6 py-3 rounded transition-colors hover:bg-white/10"
              style={{ borderColor: "rgba(255,255,255,0.7)" }}
            >
              Käfer-Teile
            </button>
          </div>
        </div>

        <div className="relative z-10 backdrop-blur-sm" style={{ backgroundColor: "rgba(21, 65, 90, 0.92)" }}>
          <div className="max-w-7xl mx-auto px-8 py-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center gap-4 text-white">
              <Truck size={28} className="shrink-0" style={{ color: "#a8c8d8" }} />
              <div>
                <p className="font-semibold text-sm">Schnelle Lieferung</p>
                <p className="text-xs" style={{ color: "#a8c8d8" }}>Versand in 24–48h in ganz Europa</p>
              </div>
            </div>
            <div
              className="flex items-center gap-4 text-white md:border-x md:px-8"
              style={{ borderColor: "rgba(255,255,255,0.15)" }}
            >
              <ShieldCheck size={28} className="shrink-0" style={{ color: "#a8c8d8" }} />
              <div>
                <p className="font-semibold text-sm">Qualitätsgarantie</p>
                <p className="text-xs" style={{ color: "#a8c8d8" }}>Zertifizierte Teile mit 2 Jahren Garantie</p>
              </div>
            </div>
            <div className="flex items-center gap-4 text-white">
              <Headphones size={28} className="shrink-0" style={{ color: "#a8c8d8" }} />
              <div>
                <p className="font-semibold text-sm">Expertenberatung</p>
                <p className="text-xs" style={{ color: "#a8c8d8" }}>Technische Beratung durch unsere Spezialisten</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-40 pb-40 px-6" style={{ backgroundColor: "#f4f5f6" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              Unsere Kategorien
            </h2>
            <p className="text-base max-w-xl mx-auto" style={{ color: "#666666" }}>
              Finden Sie einfach die Teile, die Sie für Ihr Restaurierungs- oder Wartungsprojekt benötigen
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
                className="bg-white rounded-2xl p-8 flex flex-col items-center text-center cursor-pointer transition-shadow hover:shadow-md"
                style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.08)" }}
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
                  style={{ backgroundColor: "#f0f1f2" }}
                >
                  <Icon size={26} style={{ color: "#333333" }} />
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#666666" }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2
                className="text-4xl md:text-5xl font-bold text-gray-900 mb-2"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                Beliebte Produkte
              </h2>
              <p className="text-sm" style={{ color: "#666666" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
            </div>
            <button
              className="hidden md:flex items-center gap-2 border text-sm font-medium px-5 py-2.5 rounded-full transition-colors hover:bg-gray-50 shrink-0"
              style={{ borderColor: "#cccccc", color: "#333333" }}
            >
              Gesamten Katalog ansehen <ArrowRight size={14} />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { category: "MOTOR", price: "289.99 €" },
              { category: "MOTOR", price: "189.50 €" },
              { category: "INNENRAUM", price: "245.00 €" },
              { category: "ZUBEHÖR", price: "129.00 €" },
            ].map(({ category, price }, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl overflow-hidden flex flex-col"
                style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.08)", border: "1px solid #eeeeee" }}
              >
                <div className="relative">
                  <div
                    className="w-full h-56 flex items-center justify-center"
                    style={{ backgroundColor: "#f4f5f6" }}
                  >
                    <span className="text-xs" style={{ color: "#aaaaaa" }}>Image produit</span>
                  </div>
                  <span
                    className="absolute top-3 right-3 text-white text-xs font-semibold px-3 py-1 rounded"
                    style={{ backgroundColor: "#15415a" }}
                  >
                    Beliebt
                  </span>
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <p className="text-xs font-semibold tracking-widest mb-1" style={{ color: "#666666" }}>
                    {category}
                  </p>
                  <h3 className="text-base font-bold text-gray-900 mb-1">
                    Lorem ipsum dolor
                  </h3>
                  <p className="text-sm mb-4" style={{ color: "#666666" }}>
                    Lorem ipsum • Consectetur
                  </p>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-lg font-bold text-gray-900">{price}</span>
                    <button
                      className="flex items-center gap-2 text-white text-sm font-semibold px-4 py-2 rounded transition-opacity hover:opacity-90"
                      style={{ backgroundColor: "#15415a" }}
                    >
                      <ShoppingCart size={14} />
                      Hinzufügen
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-28 px-6" style={{ backgroundColor: "#f4f5f6" }}>
        <div className="max-w-7xl mx-auto text-center">
          <h2
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            Nach Fahrzeug suchen
          </h2>
          <p className="text-base mb-14" style={{ color: "#666666" }}>
            Wählen Sie Ihr Modell aus, um direkt auf kompatible Teile zuzugreifen
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Käfer",
              "Bulli",
              "Transporter",
              "Karmann Ghia",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl flex items-center justify-center h-40 cursor-pointer transition-transform hover:scale-[1.02]"
                style={{ backgroundColor: "#15415a" }}
              >
                <span className="text-white text-lg font-semibold">
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