import { ArrowRight, Wrench, Package, Users, Building2, ShieldCheck, Shield, Truck, Clock3, BadgeCheck, } from "lucide-react";
import Footer from "../components/Footer";
import FlorianBus from "../assets/florian-bus.jpg";
import VewibAccueil from "../assets/vewib-accueil.jpg";
import Stock from "../assets/stock.jpg";
import Logistique from "../assets/logistique.jpg";
import PublicNavbar from "../components/PublicNavbar";

export default function PublicHome() {
    return (
        <div className="min-h-screen font-sans" style={{ backgroundColor: "#f4f5f6" }}>
            <PublicNavbar />

            <section className="pt-16 md:pt-24" style={{ backgroundColor: "#f4f5f6" }}>
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="pt-8 pb-10">
                            <h1
                                className="text-5xl md:text-7xl leading-[1.1] mb-8"
                                style={{
                                    fontFamily: "'Georgia', serif",
                                    color: "#15415a",
                                    fontWeight: 700,
                                }}
                            >
                                Ihr Lieferant für
                                <br />
                                klassische VW-Teile
                            </h1>

                            <p
                                className="text-lg md:text-xl leading-relaxed max-w-2xl mb-10"
                                style={{ color: "#666666", fontFamily: "'Georgia', serif" }}
                            >
                                VEWIB beliefert Werkstätten, Restaurationsbetriebe und Wiederverkäufer
                                mit hochwertigen Ersatzteilen für Käfer, Bulli, Transporter und
                                Karmann Ghia – seit über 30 Jahren.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <button
                                    className="inline-flex items-center justify-center gap-3 text-white text-base font-semibold px-8 py-5 rounded-2xl transition-opacity hover:opacity-90"
                                    style={{ backgroundColor: "#15415a", minWidth: "260px" }}
                                >
                                    Geschäftskonto eröffnen
                                    <ArrowRight size={18} />
                                </button>

                                <button
                                    className="inline-flex items-center justify-center text-base font-semibold px-8 py-5 rounded-2xl border transition-colors hover:bg-white"
                                    style={{
                                        borderColor: "#15415a",
                                        color: "#15415a",
                                        minWidth: "210px",
                                        backgroundColor: "transparent",
                                    }}
                                >
                                    Anmelden
                                </button>
                            </div>
                        </div>

                        <div className="relative">
                            <div
                                className="w-full rounded-[2rem] flex flex-col items-center justify-center"
                            >
                                <img src={FlorianBus} alt="VW Bus" className="mt-6 w-full h-[400px] rounded-lg object-cover" />
                            </div>

                            <div
                                className="absolute -bottom-8 left-0 md:left-[-2rem] rounded-[1.5rem] px-8 py-8 shadow-lg"
                                style={{ backgroundColor: "#15415a", minWidth: "205px" }}
                            >
                                <div
                                    className="text-white leading-none mb-2"
                                    style={{
                                        fontFamily: "'Georgia', serif",
                                        fontSize: "3.5rem",
                                        fontWeight: 700,
                                    }}
                                >
                                    30+
                                </div>
                                <p
                                    className="text-white/90 text-lg leading-snug"
                                    style={{ fontFamily: "'Georgia', serif" }}
                                >
                                    Jahre Erfahrung
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-20" style={{ backgroundColor: "#15415a" }}>
                    <div className="max-w-7xl mx-auto px-6 py-8">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            <div className="flex items-center gap-4 text-white">
                                <Building2 size={24} className="shrink-0" />
                                <span
                                    className="text-xl"
                                    style={{ fontFamily: "'Georgia', serif" }}
                                >
                                    Autowerkstätten
                                </span>
                            </div>

                            <div className="flex items-center gap-4 text-white">
                                <Wrench size={24} className="shrink-0" />
                                <span
                                    className="text-xl"
                                    style={{ fontFamily: "'Georgia', serif" }}
                                >
                                    Restaurationsbetriebe
                                </span>
                            </div>

                            <div className="flex items-center gap-4 text-white">
                                <Package size={24} className="shrink-0" />
                                <span
                                    className="text-xl"
                                    style={{ fontFamily: "'Georgia', serif" }}
                                >
                                    Wiederverkäufer
                                </span>
                            </div>

                            <div className="flex items-center gap-4 text-white">
                                <Users size={24} className="shrink-0" />
                                <span
                                    className="text-xl"
                                    style={{ fontFamily: "'Georgia', serif" }}
                                >
                                    Vertriebspartner
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-24 md:py-32" style={{ backgroundColor: "#f4f5f6" }}>
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div
                                className="w-full rounded-[2rem] flex flex-col items-center justify-center"
                            >
                                <img src={VewibAccueil} alt="VW Bus" className="mt-6 w-full h-[400px] rounded-lg object-cover" />
                            </div>
                        </div>

                        <div className="max-w-2xl">
                            <p
                                className="uppercase tracking-[0.18em] text-sm md:text-base mb-6"
                                style={{
                                    color: "#15415a",
                                    fontFamily: "'Georgia', serif",
                                }}
                            >
                                Unsere Geschichte
                            </p>

                            <h2
                                className="text-4xl md:text-6xl leading-tight mb-8"
                                style={{
                                    fontFamily: "'Georgia', serif",
                                    color: "#15415a",
                                    fontWeight: 700,
                                }}
                            >
                                Der Mythos des Käfers
                            </h2>

                            <p
                                className="text-lg md:text-xl leading-relaxed mb-8"
                                style={{ color: "#666666", fontFamily: "'Georgia', serif" }}
                            >
                                Der Käfer entstand nach den Entwürfen von Ferdinand Porsche und wurde
                                weltweit zu einer echten Ikone. Mit mehr als 21 Millionen produzierten
                                Fahrzeugen ist er eines der bedeutendsten Automobile seiner Zeit.
                            </p>

                            <p
                                className="text-lg md:text-xl leading-relaxed mb-10"
                                style={{ color: "#666666", fontFamily: "'Georgia', serif" }}
                            >
                                VEWIB, eine Marke der Gutsche GmbH, unterstützt Fachbetriebe seit mehr
                                als drei Jahrzehnten dabei, diese Legende mit hochwertigen Ersatzteilen
                                zu erhalten.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-6 sm:gap-10">
                                <div className="flex items-center gap-4">
                                    <div
                                        className="w-16 h-16 rounded-full flex items-center justify-center"
                                        style={{ backgroundColor: "#e3e6e8" }}
                                    >
                                        <ShieldCheck size={28} color="#15415a" />
                                    </div>

                                    <div>
                                        <p
                                            className="text-3xl font-bold leading-none mb-1"
                                            style={{
                                                color: "#15415a",
                                                fontFamily: "'Georgia', serif",
                                            }}
                                        >
                                            10.000+
                                        </p>
                                        <p
                                            className="text-lg"
                                            style={{ color: "#666666", fontFamily: "'Georgia', serif" }}
                                        >
                                            Referenzen
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div
                                        className="w-16 h-16 rounded-full flex items-center justify-center"
                                        style={{ backgroundColor: "#e3e6e8" }}
                                    >
                                        <Users size={28} color="#15415a" />
                                    </div>

                                    <div>
                                        <p
                                            className="text-3xl font-bold leading-none mb-1"
                                            style={{
                                                color: "#15415a",
                                                fontFamily: "'Georgia', serif",
                                            }}
                                        >
                                            50+
                                        </p>
                                        <p
                                            className="text-lg"
                                            style={{ color: "#666666", fontFamily: "'Georgia', serif" }}
                                        >
                                            Wiederverkäufer
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-24 md:py-32" style={{ backgroundColor: "#f4f5f6" }}>
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="max-w-2xl">
                            <p
                                className="uppercase tracking-[0.18em] text-sm md:text-base mb-6"
                                style={{
                                    color: "#15415a",
                                    fontFamily: "'Georgia', serif",
                                }}
                            >
                                Unsere Expertise
                            </p>

                            <h2
                                className="text-4xl md:text-6xl leading-tight mb-8"
                                style={{
                                    fontFamily: "'Georgia', serif",
                                    color: "#15415a",
                                    fontWeight: 700,
                                }}
                            >
                                Ein einzigartiges Know-how
                            </h2>

                            <p
                                className="text-lg md:text-xl leading-relaxed mb-10"
                                style={{ color: "#666666", fontFamily: "'Georgia', serif" }}
                            >
                                Florian Kalff und das VEWIB-Team verfügen über mehr als 30 Jahre
                                Erfahrung im Bereich klassischer VW-Ersatzteile. Diese Expertise
                                ermöglicht es uns, jedes Teil unseres Katalogs sorgfältig auszuwählen.
                            </p>

                            <div className="space-y-6">
                                {[
                                    "Sorgfältige Auswahl unserer Lieferanten",
                                    "Qualitätskontrolle für jede Referenz",
                                    "Kompetente technische Beratung inklusive",
                                    "2 Jahre Garantie auf alle Teile",
                                ].map((item) => (
                                    <div key={item} className="flex items-center gap-4">
                                        <div
                                            className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                                            style={{ backgroundColor: "#f4f5f6" }}
                                        >
                                            <BadgeCheck size={22} color="#15415a" />
                                        </div>
                                        <p
                                            className="text-lg md:text-xl"
                                            style={{ color: "#666666", fontFamily: "'Georgia', serif" }}
                                        >
                                            {item}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative">
                            <div
                                className="w-full rounded-[2rem] flex flex-col items-center justify-center"
                            >
                                <img src={Stock} alt="VW Bus" className="mt-6 w-full h-[400px] rounded-lg object-cover" />
                            </div>

                            <div
                                className="absolute -bottom-8 right-0 rounded-[1.5rem] px-8 py-7 shadow-lg"
                                style={{
                                    backgroundColor: "#ffffff",
                                    minWidth: "290px",
                                    boxShadow: "0 10px 30px rgba(0,0,0,0.10)",
                                }}
                            >
                                <div className="flex items-center gap-4">
                                    <Shield size={34} color="#15415a" />
                                    <div>
                                        <p
                                            className="text-2xl font-bold leading-none mb-2"
                                            style={{
                                                color: "#15415a",
                                                fontFamily: "'Georgia', serif",
                                            }}
                                        >
                                            2 Jahre Garantie
                                        </p>
                                        <p
                                            className="text-lg"
                                            style={{ color: "#666666", fontFamily: "'Georgia', serif" }}
                                        >
                                            auf alle Teile
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-24 md:py-32" style={{ backgroundColor: "#f4f5f6" }}>
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div
                                className="w-full rounded-[2rem] flex flex-col items-center justify-center"
                            >
                                <img src={Logistique} alt="VW Bus" className="mt-6 w-full h-[400px] rounded-lg object-cover" />
                            </div>
                        </div>

                        <div className="max-w-2xl">
                            <p
                                className="uppercase tracking-[0.18em] text-sm md:text-base mb-6"
                                style={{
                                    color: "#15415a",
                                    fontFamily: "'Georgia', serif",
                                }}
                            >
                                Distribution
                            </p>

                            <h2
                                className="text-4xl md:text-6xl leading-tight mb-8"
                                style={{
                                    fontFamily: "'Georgia', serif",
                                    color: "#15415a",
                                    fontWeight: 700,
                                }}
                            >
                                Schnelle Lieferung in Europa und weltweit
                            </h2>

                            <p
                                className="text-lg md:text-xl leading-relaxed mb-10"
                                style={{ color: "#666666", fontFamily: "'Georgia', serif" }}
                            >
                                Von unserem Lager in der Region Bonn aus versenden wir Ihre Bestellungen
                                schnell und zuverlässig in ganz Europa und weltweit. Unsere Logistik ist
                                darauf ausgelegt, Lieferzeiten zu minimieren und Ihre Projekte effizient
                                zu unterstützen.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div
                                    className="rounded-[1.75rem] p-8"
                                    style={{ backgroundColor: "#f1f2f3" }}
                                >
                                    <Clock3 size={34} color="#15415a" className="mb-6" />
                                    <p
                                        className="text-3xl font-bold leading-none mb-3"
                                        style={{
                                            color: "#15415a",
                                            fontFamily: "'Georgia', serif",
                                        }}
                                    >
                                        24-48h
                                    </p>
                                    <p
                                        className="text-lg"
                                        style={{ color: "#666666", fontFamily: "'Georgia', serif" }}
                                    >
                                        Schneller Versand
                                    </p>
                                </div>

                                <div
                                    className="rounded-[1.75rem] p-8"
                                    style={{ backgroundColor: "#f1f2f3" }}
                                >
                                    <Truck size={34} color="#15415a" className="mb-6" />
                                    <p
                                        className="text-3xl font-bold leading-none mb-3"
                                        style={{
                                            color: "#15415a",
                                            fontFamily: "'Georgia', serif",
                                        }}
                                    >
                                        Europa + Weltweit
                                    </p>
                                    <p
                                        className="text-lg"
                                        style={{ color: "#666666", fontFamily: "'Georgia', serif" }}
                                    >
                                        Internationale Lieferung
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-24 md:py-32" style={{ backgroundColor: "#f4f5f6" }}>
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                        <div className="max-w-2xl">
                            <p
                                className="uppercase tracking-[0.18em] text-sm md:text-base mb-6"
                                style={{
                                    color: "#15415a",
                                    fontFamily: "'Georgia', serif",
                                }}
                            >
                                So funktioniert es
                            </p>

                            <h2
                                className="text-4xl md:text-6xl leading-tight mb-10"
                                style={{
                                    fontFamily: "'Georgia', serif",
                                    color: "#15415a",
                                    fontWeight: 700,
                                }}
                            >
                                VEWIB-Partner werden
                            </h2>

                            <div className="space-y-10">
                                {[
                                    {
                                        number: "01",
                                        title: "Geschäftskonto erstellen",
                                        desc: "Füllen Sie das Formular mit Ihren Unternehmensdaten aus, zum Beispiel mit Steuernummer, USt-IdNr. oder gleichwertigen Angaben.",
                                    },
                                    {
                                        number: "02",
                                        title: "Prüfung innerhalb von 24-48 Stunden",
                                        desc: "Unser Team überprüft Ihre Angaben und aktiviert Ihren professionellen Zugang.",
                                    },
                                    {
                                        number: "03",
                                        title: "Online bestellen",
                                        desc: "Greifen Sie auf den vollständigen Katalog, Ihre Händlerkonditionen und die Online-Bestellung rund um die Uhr zu.",
                                    },
                                ].map((step) => (
                                    <div key={step.number} className="flex gap-6">
                                        <div
                                            className="text-6xl md:text-7xl leading-none shrink-0"
                                            style={{
                                                color: "#cfd5db",
                                                fontFamily: "'Georgia', serif",
                                                fontWeight: 700,
                                                minWidth: "72px",
                                            }}
                                        >
                                            {step.number}
                                        </div>

                                        <div className="pt-1">
                                            <h3
                                                className="text-2xl mb-3"
                                                style={{
                                                    color: "#15415a",
                                                    fontFamily: "'Georgia', serif",
                                                    fontWeight: 700,
                                                }}
                                            >
                                                {step.title}
                                            </h3>
                                            <p
                                                className="text-lg leading-relaxed"
                                                style={{ color: "#666666", fontFamily: "'Georgia', serif" }}
                                            >
                                                {step.desc}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div
                            className="rounded-[2rem] p-10 md:p-12"
                            style={{ backgroundColor: "#f1f2f3" }}
                        >
                            <h3
                                className="text-3xl mb-8"
                                style={{
                                    color: "#15415a",
                                    fontFamily: "'Georgia', serif",
                                    fontWeight: 700,
                                }}
                            >
                                Zugangsvoraussetzungen
                            </h3>

                            <div className="space-y-6 mb-10">
                                {[
                                    "Registriertes Unternehmen (Werkstatt, Restaurationsbetrieb, Handel)",
                                    "USt-IdNr. oder eine gleichwertige europäische Unternehmensnummer",
                                    "Tätigkeit im Bereich Automobil oder Restaurierung",
                                    "Umsatzsteuer-Identifikationsnummer für Unternehmen innerhalb der EU",
                                ].map((item) => (
                                    <div key={item} className="flex items-start gap-4">
                                        <div
                                            className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-1"
                                        >
                                            <BadgeCheck size={16} color="#15415a"/>
                                        </div>

                                        <p
                                            className="text-lg leading-relaxed"
                                            style={{ color: "#666666", fontFamily: "'Georgia', serif" }}
                                        >
                                            {item}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            <div
                                className="rounded-[1.5rem] px-6 py-5"
                                style={{ backgroundColor: "#e9ebee" }}
                            >
                                <p
                                    className="text-lg leading-relaxed"
                                    style={{ color: "#666666", fontFamily: "'Georgia', serif" }}
                                >
                                    <span style={{ color: "#15415a", fontWeight: 700 }}>Hinweis:</span>{" "}
                                    VEWIB verkauft nicht an Privatkunden.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}