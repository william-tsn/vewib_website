import { useEffect, useMemo, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
    ArrowLeft,
    Minus,
    Plus,
    ShoppingCart,
    Truck,
    Check,
    AlertCircle,
    Clock3,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useCart } from "../context/CartContext";

type StockStatus = "in_stock" | "out_of_stock" | "coming_soon";

type Product = {
    id: number;
    category: string;
    subcategory: string;
    vehicle: string[];
    title: string;
    subtitle: string;
    price: string;
    featured?: boolean;
    stockStatus: StockStatus;
    stock: number;
    sku: string;
    brand: string;
    packaging: string;
    image: string;
    shortDescription: string;
    longDescription: string;
    productUrl: string;
};

type ImageMode = "static" | "fixed" | "bottom";

const STICKY_TOP = 112;
const DESKTOP_BREAKPOINT = 1024;
const STOP_BEFORE_NEXT_SECTION = 150;

const mockProducts: Product[] = [
    {
        id: 1,
        category: "Aufbau",
        subcategory: "Kotflügel / Trittbrett",
        vehicle: ["Käfer"],
        title: "Trittbrett-Set links und rechts für VW Käfer & Cabriolet",
        subtitle: "Deutsche VEWIB-Qualität • Paar • Referenz 113821503-504",
        price: "199,00 €",
        featured: true,
        stockStatus: "in_stock",
        stock: 12,
        sku: "113821503-504",
        brand: "VEWIB",
        packaging: "Set (Paar)",
        image:
            "https://www.dream-machine.fr/media/catalog/product/cache/30/image/800x800/9df78eab33525d08d6e5fb8d27136e95/m/a/marche-pied-noir-gauche-et-droit.jpg",
        shortDescription:
            "Passgenaues Trittbrett-Set für VW Käfer und Käfer Cabriolet aus 1,1 mm Stahl mit KTL-Beschichtung und originalgetreuem PVC-Belag.",
        longDescription:
            "Diese VEWIB Trittbretter werden in Deutschland gefertigt und basieren auf einem originalen NOS-Muster aus den 1970er Jahren. Die robuste Stahlkonstruktion, die KTL-Korrosionsschutzbeschichtung und der authentische PVC-Belag sorgen für eine hochwertige Optik und lange Haltbarkeit.",
        productUrl:
            "https://www.dream-machine.fr/kit-marche-pieds-gauche-et-droit-pour-volkswagen-coccinelle-qualite-allemande.html",
    },
    {
        id: 2,
        category: "Elektrik",
        subcategory: "Unterbrecherkontakt, Zündkabel, Wischerwelle",
        vehicle: ["Käfer", "Bulli", "Karmann Ghia"],
        title: "Kompletter Zündkabelsatz für Typ-1-Motor",
        subtitle: "PVC, Kupferkern 7 mm • Referenz 111998031B",
        price: "35,00 €",
        featured: true,
        stockStatus: "out_of_stock",
        stock: 0,
        sku: "111998031B",
        brand: "VEWIB",
        packaging: "Set",
        image:
            "https://www.dream-machine.fr/media/catalog/product/cache/30/image/800x800/9df78eab33525d08d6e5fb8d27136e95/1/1/111998031b.jpg",
        shortDescription:
            "Kompletter VEWIB Zündkabelsatz für Typ-1-Motoren mit PVC-Außenmantel, Kupferkern und 23 cm Zündspulenkabel.",
        longDescription:
            "Der Satz eignet sich für klassische Volkswagen mit Typ-1-Motor und bietet eine saubere Leitfähigkeit sowie eine originalnahe Optik. Enthalten sind vier Zündkabel in den Längen 55 cm, 55 cm, 79 cm und 79 cm sowie das Spulenkabel mit 23 cm.",
        productUrl:
            "https://www.dream-machine.fr/faisceau-d-allumage-complet-de-marque-vewib-111998031.html",
    },
    {
        id: 3,
        category: "Elektrik",
        subcategory: "Unterbrecherkontakt, Zündkabel, Wischerwelle",
        vehicle: ["Bulli", "Transporter"],
        title: "Zündkabelsatz Typ 4 für VW Combi & Transporter T25/T3",
        subtitle: "Für 1,7 / 1,8 / 2,0 L Motoren • Referenz 021998031BQ",
        price: "39,90 €",
        featured: true,
        stockStatus: "coming_soon",
        stock: 3,
        sku: "021998031BQ",
        brand: "VEWIB",
        packaging: "Satz",
        image:
            "https://www.dream-machine.fr/media/catalog/product/cache/30/image/800x800/9df78eab33525d08d6e5fb8d27136e95/0/2/021998031_1.jpg",
        shortDescription:
            "Originalgetreuer Zündkabelsatz für Typ-4-Motoren in VW Combi und Transporter T25/T3 von 08/1971 bis 12/1982.",
        longDescription:
            "Dieser VEWIB Zündkabelsatz wurde für Typ-4-Motoren mit 1700 ccm, 1800 ccm und 2000 ccm entwickelt. Er bietet eine zuverlässige Zündübertragung, eine saubere Passform und eignet sich ideal für originalgetreue Restaurierungen.",
        productUrl:
            "https://www.dream-machine.fr/faisceau-de-fils-de-bougie-moteur-type-4-1700-2000cc.html",
    },
    {
        id: 4,
        category: "Vorderachse und Lenkung",
        subcategory: "Lenkgetriebe, Spurstangen, Mantelrohr",
        vehicle: ["Käfer", "Karmann Ghia"],
        title: "Dichtungssatz für Lenkgetriebe T1 10/1952–07/1960",
        subtitle: "28 mm • 2 Wellendichtringe + Deckeldichtung • Referenz 111498415A",
        price: "19,90 €",
        stockStatus: "in_stock",
        stock: 9,
        sku: "111498415A",
        brand: "VEWIB",
        packaging: "Kit",
        image:
            "https://www.dream-machine.fr/media/catalog/product/cache/30/image/641x800/9df78eab33525d08d6e5fb8d27136e95/p/h/photoroom-20241014_103249_1_.jpg",
        shortDescription:
            "Dichtungssatz für 28-mm-Lenkgetriebe mit zwei Simmerringen und einer Deckeldichtung in deutscher Fertigung.",
        longDescription:
            "Der Satz wurde für frühe Volkswagen Lenkgetriebe entwickelt und ist eine saubere Lösung für die Überholung. Er umfasst zwei Wellendichtringe und eine Deckeldichtung und eignet sich für verschiedene klassische Anwendungen.",
        productUrl:
            "https://www.dream-machine.fr/jeu-de-joints-pour-boitier-de-direction-t1-10-52-07-60-t1-standard-jusqu-a-07-65.html",
    },
    {
        id: 5,
        category: "Aufbau",
        subcategory: "Kotflügel / Trittbrett",
        vehicle: ["Käfer"],
        title: "Kotflügeldichtungen Beryllgrün für VW Käfer 1961–1964",
        subtitle: "Satz mit 4 Stück • Referenz 111821707-478",
        price: "79,00 €",
        stockStatus: "out_of_stock",
        stock: 0,
        sku: "111821707-478 / A 111821707-478",
        brand: "VEWIB",
        packaging: "Set (4 Stück)",
        image:
            "https://www.dream-machine.fr/media/catalog/product/cache/30/image/800x600/9df78eab33525d08d6e5fb8d27136e95/1/1/111821707478.jpg",
        shortDescription:
            "Vorgeschnittener Satz Kotflügeldichtungen in originalgetreuem Beryllgrün für VW Käfer Modelle von 1961 bis 1964.",
        longDescription:
            "Diese VEWIB Kotflügeldichtungen werden zwischen Kotflügel und Karosserie montiert und sorgen für eine saubere Optik sowie Schutz vor Schmutz und Feuchtigkeit. Die Farbe entspricht dem historischen Originalton Beryllgrün und passt ideal zu periodenkorrekten Restaurierungen.",
        productUrl:
            "https://www.dream-machine.fr/joints-d-ailes-vert-beryl-vw-coccinelle-1961-1964-lot-de-4.html",
    },
    {
        id: 6,
        category: "Elektrik",
        subcategory: "Relais",
        vehicle: ["Käfer", "Bulli", "Karmann Ghia"],
        title: "Elektronisches Blinkrelais 6V mit 3+1 Pins",
        subtitle: "Für klassische Fahrzeuge • Referenz 211953215D",
        price: "39,90 €",
        stockStatus: "coming_soon",
        stock: 5,
        sku: "211953215D",
        brand: "VEWIB",
        packaging: "Stück",
        image:
            "https://www.dream-machine.fr/media/catalog/product/cache/30/image/641x800/9df78eab33525d08d6e5fb8d27136e95/p/h/photoroom-20241014_113711.jpg",
        shortDescription:
            "Modernisiertes 6V Blinkrelais mit 4 Anschlüssen für einen stabilen und zuverlässigen Blinkbetrieb bei klassischen VW Fahrzeugen.",
        longDescription:
            "Dieses elektronische Blinkrelais ersetzt das ursprüngliche Relais durch moderne Komponenten und sorgt für gleichmäßiges Blinken, auch bei eingeschaltetem Licht oder niedriger Drehzahl. Ideal für Fahrzeuge mit 6-Volt-Elektrik.",
        productUrl:
            "https://www.dream-machine.fr/relais-de-clignotants-electronique-6v-3-1-broches-pour-vehicules-classiques.html",
    },
];

function getAvailabilityConfig(status: StockStatus, stock: number) {
    switch (status) {
        case "in_stock":
            return {
                label: `Auf Lager (${stock} verfügbar)`,
                shortLabel: "Auf Lager",
                textColor: "#2f9e44",
                bgColor: "#ebfbee",
                icon: Check,
            };
        case "out_of_stock":
            return {
                label: "Nicht auf Lager",
                shortLabel: "Nicht auf Lager",
                textColor: "#e03131",
                bgColor: "#fff5f5",
                icon: AlertCircle,
            };
        case "coming_soon":
            return {
                label: "Demnächst verfügbar",
                shortLabel: "Demnächst verfügbar",
                textColor: "#f08c00",
                bgColor: "#fff4e6",
                icon: Clock3,
            };
        default:
            return {
                label: "Unbekannt",
                shortLabel: "Unbekannt",
                textColor: "#666666",
                bgColor: "#f1f3f5",
                icon: AlertCircle,
            };
    }
}

function ProductCard({ product }: { product: Product }) {
    const { addToCart } = useCart();

    return (
        <Link
            to={`/product/${product.id}`}
            className="bg-white rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            style={{
                boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
                border: "1px solid #eeeeee",
            }}
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

                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            addToCart(product, 1);
                        }}
                        className="flex items-center gap-2 text-white text-sm font-semibold px-4 py-2 rounded transition-opacity hover:opacity-90 whitespace-nowrap"
                        style={{ backgroundColor: "#15415a" }}
                    >
                        <ShoppingCart size={14} />
                        Hinzufügen
                    </button>
                </div>
            </div>
        </Link>
    );
}

export default function DetailProduct() {
    const { id } = useParams();
    const [quantity, setQuantity] = useState(1);
    const { addToCart } = useCart();

    const productSectionRef = useRef<HTMLElement | null>(null);
    const imageColumnRef = useRef<HTMLDivElement | null>(null);
    const imageCardRef = useRef<HTMLDivElement | null>(null);
    const [imageMode, setImageMode] = useState<ImageMode>("static");
    const [fixedWidth, setFixedWidth] = useState<number>(0);
    const [cardHeight, setCardHeight] = useState<number>(680);
    const [bottomOffset, setBottomOffset] = useState<number>(0);

    const product = useMemo(() => {
        return mockProducts.find((item) => item.id === Number(id));
    }, [id]);

    const similarProducts = useMemo(() => {
        if (!product) return [];
        return mockProducts.filter(
            (item) => item.category === product.category && item.id !== product.id
        );
    }, [product]);

    function decreaseQty() {
        setQuantity((prev) => Math.max(1, prev - 1));
    }

    function increaseQty() {
        setQuantity((prev) => prev + 1);
    }

    useEffect(() => {
        function updateImagePosition() {
            const sectionEl = productSectionRef.current;
            const columnEl = imageColumnRef.current;
            const cardEl = imageCardRef.current;

            if (!sectionEl || !columnEl || !cardEl) return;

            const isDesktop = window.innerWidth >= DESKTOP_BREAKPOINT;
            const nextCardHeight = cardEl.offsetHeight;
            const nextColumnWidth = columnEl.offsetWidth;

            setCardHeight(nextCardHeight);
            setFixedWidth(nextColumnWidth);

            if (!isDesktop) {
                setImageMode("static");
                setBottomOffset(0);
                return;
            }

            const sectionRect = sectionEl.getBoundingClientRect();
            const sectionTop = window.scrollY + sectionRect.top;
            const sectionBottom = sectionTop + sectionEl.offsetHeight;

            const startStickAt = sectionTop - STICKY_TOP;
            const stopStickAt =
                sectionBottom - STICKY_TOP - nextCardHeight - STOP_BEFORE_NEXT_SECTION;

            if (window.scrollY < startStickAt) {
                setImageMode("static");
                setBottomOffset(0);
                return;
            }

            if (window.scrollY >= startStickAt && window.scrollY < stopStickAt) {
                setImageMode("fixed");
                setBottomOffset(0);
                return;
            }

            setImageMode("bottom");
            setBottomOffset(
                Math.max(0, sectionEl.offsetHeight - nextCardHeight - STOP_BEFORE_NEXT_SECTION)
            );
        }

        updateImagePosition();
        window.addEventListener("scroll", updateImagePosition, { passive: true });
        window.addEventListener("resize", updateImagePosition);

        return () => {
            window.removeEventListener("scroll", updateImagePosition);
            window.removeEventListener("resize", updateImagePosition);
        };
    }, [product]);

    if (!product) {
        return (
            <div className="min-h-screen font-sans" style={{ backgroundColor: "#f4f5f6" }}>
                <Navbar />

                <section className="px-4 sm:px-6 py-16 sm:py-20">
                    <div className="max-w-4xl mx-auto">
                        <div
                            className="bg-white rounded-2xl p-6 sm:p-8 md:p-10 text-center"
                            style={{
                                boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
                                border: "1px solid #eeeeee",
                            }}
                        >
                            <h1
                                className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4"
                                style={{ fontFamily: "'Georgia', serif", color: "#15415a" }}
                            >
                                Produkt nicht gefunden
                            </h1>

                            <p
                                className="mb-6 text-sm sm:text-base leading-relaxed"
                                style={{ color: "#666666" }}
                            >
                                Dieses Produkt ist nicht verfügbar oder die URL ist ungültig.
                            </p>

                            <Link
                                to="/catalog"
                                className="inline-flex items-center gap-2 text-sm font-semibold px-6 py-3 rounded text-white transition-opacity hover:opacity-90"
                                style={{ backgroundColor: "#15415a" }}
                            >
                                <ArrowLeft size={16} />
                                Zurück zum Katalog
                            </Link>
                        </div>
                    </div>
                </section>

                <Footer />
            </div>
        );
    }

    const availability = getAvailabilityConfig(product.stockStatus, product.stock);
    const StatusIcon = availability.icon;

    const imageCardStyles: React.CSSProperties =
        imageMode === "fixed"
            ? {
                position: "fixed",
                top: `${STICKY_TOP}px`,
                width: fixedWidth ? `${fixedWidth}px` : "100%",
                zIndex: 20,
            }
            : imageMode === "bottom"
                ? {
                    position: "absolute",
                    top: `${bottomOffset}px`,
                    left: 0,
                    right: 0,
                    width: "100%",
                }
                : {
                    position: "relative",
                    width: "100%",
                };

    return (
        <div className="min-h-screen font-sans" style={{ backgroundColor: "#f4f5f6" }}>
            <Navbar />

            <section
                ref={productSectionRef}
                className="px-4 sm:px-6 py-8 sm:py-10 md:py-14 relative"
            >
                <div className="max-w-7xl mx-auto">
                    <Link
                        to="/catalog"
                        className="inline-flex items-center gap-3 text-sm sm:text-base mb-6 sm:mb-8 md:mb-10 transition-colors"
                        style={{ color: "#444444" }}
                    >
                        <ArrowLeft size={20} />
                        Zurück zum Katalog
                    </Link>

                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-6 sm:gap-8 lg:gap-12 items-start">
                        <div
                            ref={imageColumnRef}
                            className="min-w-0 relative hidden lg:block"
                            style={{ minHeight: `${cardHeight}px` }}
                        >
                            <div ref={imageCardRef} style={imageCardStyles}>
                                <div
                                    className="bg-white rounded-2xl overflow-hidden"
                                    style={{
                                        boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
                                        border: "1px solid #eeeeee",
                                    }}
                                >
                                    <div
                                        className="relative w-full h-[600px] xl:h-[660px] flex items-center justify-center p-6 lg:p-10 xl:p-12"
                                        style={{ backgroundColor: "#ffffff" }}
                                    >
                                        <img
                                            src={product.image}
                                            alt={product.title}
                                            className="w-full h-full object-contain"
                                        />

                                        {product.featured && (
                                            <span
                                                className="absolute top-4 sm:top-5 right-4 sm:right-5 text-white text-xs font-semibold px-3 py-1 rounded"
                                                style={{ backgroundColor: "#15415a" }}
                                            >
                                                Beliebt
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="lg:hidden min-w-0">
                            <div
                                className="bg-white rounded-2xl overflow-hidden"
                                style={{
                                    boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
                                    border: "1px solid #eeeeee",
                                }}
                            >
                                <div
                                    className="relative w-full h-[320px] sm:h-[440px] md:h-[560px] flex items-center justify-center p-6 lg:p-10 xl:p-12"
                                    style={{ backgroundColor: "#ffffff" }}
                                >
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                        className="w-full h-full object-contain"
                                    />

                                    {product.featured && (
                                        <span
                                            className="absolute top-4 sm:top-5 right-4 sm:right-5 text-white text-xs font-semibold px-3 py-1 rounded"
                                            style={{ backgroundColor: "#15415a" }}
                                        >
                                            Beliebt
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="pt-0 lg:pt-2 min-w-0">
                            <p
                                className="text-xs sm:text-sm uppercase tracking-[0.18em] mb-3 sm:mb-4"
                                style={{ color: "#444444" }}
                            >
                                {product.category}
                            </p>

                            <h1
                                className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold leading-tight mb-4"
                                style={{ fontFamily: "'Georgia', serif", color: "#111111" }}
                            >
                                {product.title}
                            </h1>

                            <p
                                className="text-base sm:text-lg leading-relaxed mb-6 sm:mb-8"
                                style={{ color: "#666666" }}
                            >
                                {product.subtitle}
                            </p>

                            <div className="flex flex-col sm:flex-row sm:items-end gap-1 sm:gap-4 mb-6 sm:mb-8">
                                <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
                                    {product.price}
                                </span>
                                <span
                                    className="text-sm sm:text-lg sm:mb-1"
                                    style={{ color: "#666666" }}
                                >
                                    inkl. MwSt.
                                </span>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 sm:mb-8">
                                <div
                                    className="bg-white rounded-2xl p-4 sm:p-5 border"
                                    style={{ borderColor: "#e8e8e8" }}
                                >
                                    <p className="text-sm mb-1" style={{ color: "#777777" }}>
                                        Marke
                                    </p>
                                    <p className="text-base sm:text-lg font-semibold text-gray-900 break-words">
                                        {product.brand}
                                    </p>
                                </div>

                                <div
                                    className="bg-white rounded-2xl p-4 sm:p-5 border"
                                    style={{ borderColor: "#e8e8e8" }}
                                >
                                    <p className="text-sm mb-1" style={{ color: "#777777" }}>
                                        Referenz
                                    </p>
                                    <p className="text-base sm:text-lg font-semibold text-gray-900 break-words">
                                        {product.sku}
                                    </p>
                                </div>

                                <div
                                    className="bg-white rounded-2xl p-4 sm:p-5 border"
                                    style={{ borderColor: "#e8e8e8" }}
                                >
                                    <p className="text-sm mb-1" style={{ color: "#777777" }}>
                                        Unterkategorie
                                    </p>
                                    <p className="text-base sm:text-lg font-semibold text-gray-900 break-words">
                                        {product.subcategory}
                                    </p>
                                </div>

                                <div
                                    className="bg-white rounded-2xl p-4 sm:p-5 border"
                                    style={{ borderColor: "#e8e8e8" }}
                                >
                                    <p className="text-sm mb-1" style={{ color: "#777777" }}>
                                        Verpackung
                                    </p>
                                    <p className="text-base sm:text-lg font-semibold text-gray-900 break-words">
                                        {product.packaging}
                                    </p>
                                </div>
                            </div>

                            <div className="mb-6 sm:mb-8">
                                <p className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
                                    Kompatibilität
                                </p>

                                <div className="flex flex-wrap gap-2 sm:gap-3">
                                    {product.vehicle.map((item) => (
                                        <span
                                            key={item}
                                            className="px-3 sm:px-4 py-2 rounded-xl text-sm sm:text-base"
                                            style={{ backgroundColor: "#edf1f3", color: "#15415a" }}
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div
                                className="inline-flex items-start sm:items-center gap-3 rounded-2xl px-4 sm:px-5 py-4 mb-8 sm:mb-10 max-w-full"
                                style={{
                                    color: availability.textColor,
                                    backgroundColor: availability.bgColor,
                                }}
                            >
                                <StatusIcon size={22} className="shrink-0 mt-0.5 sm:mt-0" />
                                <span className="text-base sm:text-lg lg:text-xl font-semibold leading-relaxed">
                                    {availability.label}
                                </span>
                            </div>

                            <div className="mb-6 sm:mb-8">
                                <p className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
                                    Menge
                                </p>

                                <div
                                    className="inline-flex items-center overflow-hidden rounded-2xl border"
                                    style={{
                                        borderColor: "#d9d9d9",
                                        backgroundColor: "#ffffff",
                                    }}
                                >
                                    <button
                                        type="button"
                                        onClick={decreaseQty}
                                        className="w-12 sm:w-14 md:w-16 h-12 sm:h-14 flex items-center justify-center"
                                    >
                                        <Minus size={20} />
                                    </button>

                                    <div className="w-14 sm:w-16 md:w-20 h-12 sm:h-14 flex items-center justify-center text-xl sm:text-2xl font-semibold">
                                        {quantity}
                                    </div>

                                    <button
                                        type="button"
                                        onClick={increaseQty}
                                        className="w-12 sm:w-14 md:w-16 h-12 sm:h-14 flex items-center justify-center"
                                    >
                                        <Plus size={20} />
                                    </button>
                                </div>
                            </div>

                            <button
                                onClick={() => addToCart(product, quantity)}
                                className="w-full flex items-center justify-center gap-3 text-white text-base sm:text-lg md:text-xl font-semibold px-6 sm:px-8 py-4 sm:py-5 rounded-xl transition-opacity hover:opacity-90 mb-6 sm:mb-8"
                                style={{ backgroundColor: "#15415a" }}
                            >
                                <ShoppingCart size={22} />
                                In den Warenkorb
                            </button>

                            <div
                                className="bg-white rounded-2xl p-5 sm:p-6 md:p-8"
                                style={{
                                    boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
                                    border: "1px solid #e4e4e4",
                                }}
                            >
                                <div className="flex items-start gap-4">
                                    <Truck
                                        size={28}
                                        style={{ color: "#15415a" }}
                                        className="mt-1 shrink-0"
                                    />
                                    <div>
                                        <p className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mb-1">
                                            Schnelle Lieferung
                                        </p>
                                        <p
                                            className="text-sm sm:text-base md:text-lg leading-relaxed"
                                            style={{ color: "#666666" }}
                                        >
                                            Versand innerhalb von 24-48 Stunden in Europa und weltweit
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6 sm:mt-8 space-y-6 sm:space-y-8">
                                <div>
                                    <p className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                                        Kurzbeschreibung
                                    </p>
                                    <p
                                        className="text-sm sm:text-base md:text-lg leading-relaxed"
                                        style={{ color: "#666666" }}
                                    >
                                        {product.shortDescription}
                                    </p>
                                </div>

                                <div>
                                    <p className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                                        Produktdetails
                                    </p>
                                    <p
                                        className="text-sm sm:text-base md:text-lg leading-relaxed"
                                        style={{ color: "#666666" }}
                                    >
                                        {product.longDescription}
                                    </p>
                                </div>

                                <div>
                                    <p className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                                        Produktlink
                                    </p>
                                    <a
                                        href={product.productUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-sm sm:text-base md:text-lg underline break-all"
                                        style={{ color: "#15415a" }}
                                    >
                                        {product.productUrl}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="px-4 sm:px-6 pb-16 sm:pb-20 md:pb-24">
                <div className="max-w-7xl mx-auto">
                    <h2
                        className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-10"
                        style={{ fontFamily: "'Georgia', serif", color: "#111111" }}
                    >
                        Ähnliche Produkte
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 sm:gap-6">
                        {similarProducts.map((item) => (
                            <ProductCard key={item.id} product={item} />
                        ))}
                    </div>

                    {similarProducts.length === 0 && (
                        <div
                            className="bg-white rounded-2xl p-6 sm:p-8 md:p-10 text-center mt-6"
                            style={{
                                boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
                                border: "1px solid #eeeeee",
                            }}
                        >
                            <h3
                                className="text-xl sm:text-2xl font-bold mb-3"
                                style={{ fontFamily: "'Georgia', serif", color: "#15415a" }}
                            >
                                Keine ähnlichen Produkte gefunden
                            </h3>
                            <p
                                className="text-sm sm:text-base leading-relaxed"
                                style={{ color: "#666666" }}
                            >
                                Für diese Kategorie sind aktuell keine weiteren Produkte verfügbar.
                            </p>
                        </div>
                    )}
                </div>
            </section>

            <Footer />
        </div>
    );
}