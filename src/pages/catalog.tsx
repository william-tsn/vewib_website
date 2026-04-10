import { useMemo, useState } from "react";
import { Filter, ChevronDown, ShoppingCart } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
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

const categoryTree = [
    {
        title: "Motor",
        items: [
            "Motoren",
            "Zylinderköpfe, Ventildeckel, -dichtungen",
            "Kurbelwelle, Simmerringe, Hohlschrauben",
            "Stößelstangen, -schutzrohre, Ventile",
            "Ölkreislauf",
            "Ölkühler",
            "Abdeck- und Luftleitbleche",
            "Wasserkühlung",
            "Benzinpumpen, -leitungen am Motor",
            "Vergaser und Luftfilter",
            "Katalysatoren und Teile dazu",
            "Motor diverses",
            "Kupplung",
            "Vakuum Servopumpe",
            "Sätze im Bereich Motor",
            "Motoraufhängung",
        ],
    },
    {
        title: "Kraftstoff, Auspuff, Warmluftleitung",
        items: [
            "Tankdeckel, -dichtungen, Benzineinfüllung",
            "Benzinhähne, Benzinleitungen",
            "Auspufftöpfe, Endrohre",
            "Abgaskrümmer",
            "Wärmetauscher",
            "Wärmetauscher Frischluft Bus",
            "Standheizung, Heizluftgebläse, -teile",
            "Anbausätze für Auspuffmaterial",
        ],
    },
    {
        title: "Getriebe",
        items: [
            "Diverse Getriebeteile",
            "Sicherungsblech",
            "Antriebswelle",
            "Getriebedichtsatz",
        ],
    },
    {
        title: "Vorderachse und Lenkung",
        items: [
            "Vorderachskörper, Nadellager",
            "Tragarm, Achsschenkel, Bremstrommel",
            "Bremsscheiben vorne, Querlenker, -teile",
            "Stabilisator, -teile, -gummis",
            "Stoßdämpfer LVW vorne, Domlager",
            "Stoßdämpfer KVW vorne",
            "Lenkgetriebe, Spurstangen, Mantelrohr",
            "Umlenkhebel",
            "Zahnstangenlenkung",
            "Lenkungsdämpfer",
            "Sätze Vorderachse",
        ],
    },
    {
        title: "Hinterachse",
        items: [
            "Radlager hinten, Bremstrommeln hinten",
            "Hinterachse diverses",
            "Drehfederstabteile, -gummis, -deckel",
            "Stoßdämpfer hinten",
            "Gleitstein Hinterachse",
            "Achsmanschettensätze, HA-Dichtsätze",
        ],
    },
    {
        title: "Räder und Bremsen",
        items: [
            "Felgen, Radkappen",
            "Seilzugbremse",
            "Handbremse, Ankerplatten, Bremsbeläge + Klötze",
            "Bremszylinder, Bremsschläuche",
            "Bremskraftverstärker",
            "Bremssättel, Bremsscheiben Bus + mod. Mex",
            "Sätze für Bremsen",
            "Reifen und Reifenzubehör",
        ],
    },
    {
        title: "Rahmen, Hand- & Fußhebelwerk",
        items: [
            "Chassis",
            "Bodenhälften, Rahmenköpfe, Chassisdichtungen",
            "Bus Chassisbleche",
            "Stoßstangen, -teile bis 1974",
            "Batteriebodenblech",
            "Schalthebel, -teile, Heizzüge",
            "Fußhebelwerkteile, Gas-, Kupplungszüge",
            "Pedalgummi Automatic",
            "Exportstoßstangen, Schaltstangenkupplung",
            "Chassis- und Aufbaubefestigung",
            "Schalthebelteile für Automatik",
        ],
    },
    {
        title: "Aufbau",
        items: [
            "Schweller, Cabrioletverstärkungen",
            "Vorderwagen, Schottwände",
            "Stoßstangen, -teile ab 1975",
            "Seitenteile vorn und hinten",
            "Hinterwagen, Heckbleche",
            "Dachpartie",
            "Luftdüsen und Schläuche",
            "Kotflügel / Trittbrett",
            "Haube, -teile vorne",
            "Haube, -teile hinten",
            "Heckklappe",
            "Türen, Scharniere, Dichtungen Käfer, T2, Ghia",
            "Tür- und Türfensterteile, Dichtungen T3/Golf",
            "Klapptür Bus",
            "Bus Schiebetürteile",
            "Verglasung, Fensterdichtungen",
            "Cabrioschwenkfenster hinten, Ausstellfenster",
            "Zierteile, Embleme",
            "Armaturenbrett, Spiegel, Blenden",
            "Gummipuffer Fronthaube",
            "Gummimatten",
            "Innenausstattung Bus",
            "Cabrioverdeckspitze, Cabriodachdichtung",
            "Spannbügel Faltdach",
            "Schiebedachteile",
            "Sitzgleitstücke",
            "Sitzgarnitur Teile, Zubehör",
            "Zierleistensätze, bunte Keder",
            "Aufbaustütze, -befestigung",
        ],
    },
    {
        title: "Elektrik",
        items: [
            "Kennschild",
            "Lichtmaschinen, -teile",
            "Verteilerkappen, -finger, Kondensatoren",
            "Einspritzanlage",
            "Anlasser",
            "Batterien",
            "Tankuhrgeber, Öldruckschalter",
            "Universalsteckdose",
            "Sicherungsteile",
            "Scheinwerfer, Rückfahrscheinwerfer, Lichtschalter",
            "Kennzeichenleuchtenteile",
            "Rückleuchten, -teile",
            "Innenleuchten, -teile",
            "Parkleuchte",
            "Hupen, -teile",
            "Blinker, -teile",
            "Wischer, -teile",
            "Tacho und Tachowellen",
            "Gebläse, Kühler, Heizheckscheibenteile",
            "Relais",
            "Kabeltüllen",
            "Unterbrecherkontakt, Zündkabel, Wischerwelle",
        ],
    },
    {
        title: "Zubehör",
        items: ["Zubehör", "Marketing"],
    },
    {
        title: "Normteile",
        items: ["Normteile"],
    },
];

const vehicles = ["Käfer", "Bulli", "Transporter", "Karmann Ghia", "Golf"];

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
        image: "https://www.dream-machine.fr/media/catalog/product/cache/30/image/800x800/9df78eab33525d08d6e5fb8d27136e95/m/a/marche-pied-noir-gauche-et-droit.jpg",
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
        image: "https://www.dream-machine.fr/media/catalog/product/cache/30/image/800x800/9df78eab33525d08d6e5fb8d27136e95/1/1/111998031b.jpg",
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
        image: "https://www.dream-machine.fr/media/catalog/product/cache/30/image/800x800/9df78eab33525d08d6e5fb8d27136e95/0/2/021998031_1.jpg",
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
        image: "https://www.dream-machine.fr/media/catalog/product/cache/30/image/641x800/9df78eab33525d08d6e5fb8d27136e95/p/h/photoroom-20241014_103249_1_.jpg",
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
        image: "https://www.dream-machine.fr/media/catalog/product/cache/30/image/800x600/9df78eab33525d08d6e5fb8d27136e95/1/1/111821707478.jpg",
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
        image: "https://www.dream-machine.fr/media/catalog/product/cache/30/image/641x800/9df78eab33525d08d6e5fb8d27136e95/p/h/photoroom-20241014_113711.jpg",
        shortDescription:
            "Modernisiertes 6V Blinkrelais mit 4 Anschlüssen für einen stabilen und zuverlässigen Blinkbetrieb bei klassischen VW Fahrzeugen.",
        longDescription:
            "Dieses elektronische Blinkrelais ersetzt das ursprüngliche zylindrische Relais durch moderne Komponenten und sorgt für gleichmäßiges Blinken, auch bei eingeschaltetem Licht oder niedriger Drehzahl. Ideal für Fahrzeuge mit 6-Volt-Elektrik.",
        productUrl:
            "https://www.dream-machine.fr/relais-de-clignotants-electronique-6v-3-1-broches-pour-vehicules-classiques.html",
    },
];

function getAvailabilityConfig(status: StockStatus) {
    switch (status) {
        case "in_stock":
            return {
                label: "Auf Lager",
                textColor: "#2f9e44",
                bgColor: "#ebfbee",
            };
        case "out_of_stock":
            return {
                label: "Nicht auf Lager",
                textColor: "#e03131",
                bgColor: "#fff5f5",
            };
        case "coming_soon":
            return {
                label: "Demnächst verfügbar",
                textColor: "#f08c00",
                bgColor: "#fff4e6",
            };
        default:
            return {
                label: "Unbekannt",
                textColor: "#666666",
                bgColor: "#f1f3f5",
            };
    }
}

export default function Catalog() {
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [selectedSubcategories, setSelectedSubcategories] = useState<string[]>([]);
    const [selectedVehicles, setSelectedVehicles] = useState<string[]>([]);
    const [expandedGroups, setExpandedGroups] = useState<string[]>([]);
    const [sortBy, setSortBy] = useState("popular");
    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
    const { addToCart } = useCart();

    const allMainCategories = categoryTree.map((category) => category.title);

    function toggleSelection(
        value: string,
        setter: React.Dispatch<React.SetStateAction<string[]>>
    ) {
        setter((prev) =>
            prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
        );
    }

    function toggleExpanded(groupTitle: string) {
        setExpandedGroups((prev) =>
            prev.includes(groupTitle)
                ? prev.filter((item) => item !== groupTitle)
                : [...prev, groupTitle]
        );
    }

    function clearAllFilters() {
        setSelectedCategories([]);
        setSelectedSubcategories([]);
        setSelectedVehicles([]);
    }

    const activeFiltersCount =
        selectedCategories.length + selectedSubcategories.length + selectedVehicles.length;

    const filteredProducts = useMemo(() => {
        let products = [...mockProducts];

        if (selectedCategories.length > 0) {
            products = products.filter((product) =>
                selectedCategories.includes(product.category)
            );
        }

        if (selectedSubcategories.length > 0) {
            products = products.filter((product) =>
                selectedSubcategories.includes(product.subcategory)
            );
        }

        if (selectedVehicles.length > 0) {
            products = products.filter((product) =>
                product.vehicle.some((item) => selectedVehicles.includes(item))
            );
        }

        if (sortBy === "price-asc") {
            products.sort(
                (a, b) =>
                    Number(a.price.replace(" €", "").replace(",", ".")) -
                    Number(b.price.replace(" €", "").replace(",", "."))
            );
        }

        if (sortBy === "price-desc") {
            products.sort(
                (a, b) =>
                    Number(b.price.replace(" €", "").replace(",", ".")) -
                    Number(a.price.replace(" €", "").replace(",", "."))
            );
        }

        return products;
    }, [selectedCategories, selectedSubcategories, selectedVehicles, sortBy]);

    return (
        <div className="min-h-screen font-sans overflow-x-hidden pt-16" style={{ backgroundColor: "#f4f5f6" }}>
            <Navbar />

            <section className="px-4 sm:px-6 py-12 md:py-20">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-8 md:mb-12">
                        <h1
                            className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-900 mb-4"
                            style={{ fontFamily: "'Georgia', serif" }}
                        >
                            Katalog
                        </h1>
                        <p className="text-sm sm:text-base md:text-lg leading-relaxed" style={{ color: "#666666" }}>
                            Entdecken Sie unsere komplette Auswahl an Ersatzteilen für klassische Volkswagen.
                        </p>
                    </div>

                    <div className="flex items-center gap-3 mb-6 lg:hidden">
                        <button
                            type="button"
                            onClick={() => setMobileFiltersOpen((prev) => !prev)}
                            className="flex-1 flex items-center justify-center gap-2 bg-white rounded-xl border px-4 py-3 text-sm font-semibold"
                            style={{ borderColor: "#d9d9d9", color: "#15415a" }}
                        >
                            <Filter size={18} />
                            Filter {activeFiltersCount > 0 ? `(${activeFiltersCount})` : ""}
                        </button>

                        {activeFiltersCount > 0 && (
                            <button
                                type="button"
                                onClick={clearAllFilters}
                                className="shrink-0 rounded-xl border px-4 py-3 text-sm font-medium bg-white"
                                style={{ borderColor: "#d9d9d9", color: "#666666" }}
                            >
                                Zurücksetzen
                            </button>
                        )}
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-[320px_minmax(0,1fr)] gap-6 md:gap-10">
                        <aside
                            className={`${mobileFiltersOpen ? "block" : "hidden"} lg:block bg-white rounded-2xl p-5 sm:p-6 lg:p-8 h-fit`}
                            style={{
                                boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
                                border: "1px solid #e9e9e9",
                            }}
                        >
                            <div className="flex items-center justify-between gap-3 mb-6 lg:mb-8">
                                <div className="flex items-center gap-3">
                                    <Filter size={22} style={{ color: "#111111" }} />
                                    <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Filter</h2>
                                </div>

                                {activeFiltersCount > 0 && (
                                    <button
                                        type="button"
                                        onClick={clearAllFilters}
                                        className="text-sm font-medium"
                                        style={{ color: "#15415a" }}
                                    >
                                        Löschen
                                    </button>
                                )}
                            </div>

                            <div className="mb-8 md:mb-10">
                                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4 sm:mb-5">Kategorien</h3>
                                <div className="space-y-3 max-h-[320px] lg:max-h-[420px] overflow-auto pr-1 sm:pr-2">
                                    {allMainCategories.map((category) => (
                                        <label key={category} className="flex items-start gap-3 cursor-pointer">
                                            <input
                                                type="checkbox"
                                                checked={selectedCategories.includes(category)}
                                                onChange={() => toggleSelection(category, setSelectedCategories)}
                                                className="mt-1 h-5 w-5 rounded border-gray-300 shrink-0"
                                            />
                                            <span className="text-sm sm:text-base leading-relaxed break-words" style={{ color: "#222222" }}>
                                                {category}
                                            </span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <div className="mb-8 md:mb-10">
                                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4 sm:mb-5">Fahrzeuge</h3>
                                <div className="space-y-3">
                                    {vehicles.map((vehicle) => (
                                        <label key={vehicle} className="flex items-start gap-3 cursor-pointer">
                                            <input
                                                type="checkbox"
                                                checked={selectedVehicles.includes(vehicle)}
                                                onChange={() => toggleSelection(vehicle, setSelectedVehicles)}
                                                className="mt-1 h-5 w-5 rounded border-gray-300 shrink-0"
                                            />
                                            <span className="text-sm sm:text-base leading-relaxed break-words" style={{ color: "#222222" }}>
                                                {vehicle}
                                            </span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4 sm:mb-5">Unterkategorien</h3>
                                <div className="space-y-5 sm:space-y-6 max-h-[360px] lg:max-h-[520px] overflow-auto pr-1 sm:pr-2">
                                    {categoryTree.map((group) => {
                                        const isExpanded = expandedGroups.includes(group.title);
                                        const visibleItems = isExpanded ? group.items : group.items.slice(0, 4);

                                        return (
                                            <div key={group.title}>
                                                <button
                                                    type="button"
                                                    onClick={() => toggleSelection(group.title, setSelectedCategories)}
                                                    className="text-left text-xs sm:text-sm font-bold uppercase tracking-wider mb-3 transition-colors break-words"
                                                    style={{ color: "#15415a" }}
                                                >
                                                    {group.title}
                                                </button>

                                                <div className="space-y-2">
                                                    {visibleItems.map((item) => {
                                                        const active = selectedSubcategories.includes(item);

                                                        return (
                                                            <button
                                                                key={item}
                                                                type="button"
                                                                onClick={() => toggleSelection(item, setSelectedSubcategories)}
                                                                className="block w-full text-left text-sm leading-relaxed transition-colors break-words"
                                                                style={{
                                                                    color: active ? "#15415a" : "#666666",
                                                                    fontWeight: active ? 700 : 400,
                                                                }}
                                                            >
                                                                {item}
                                                            </button>
                                                        );
                                                    })}

                                                    {group.items.length > 4 && (
                                                        <button
                                                            type="button"
                                                            onClick={() => toggleExpanded(group.title)}
                                                            className="text-sm font-medium"
                                                            style={{ color: "#15415a" }}
                                                        >
                                                            {isExpanded
                                                                ? "Weniger anzeigen"
                                                                : `+ ${group.items.length - 4} weitere`}
                                                        </button>
                                                    )}
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </aside>

                        <div className="min-w-0">
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
                                <p className="text-lg sm:text-2xl" style={{ color: "#444444" }}>
                                    {filteredProducts.length} Produkte gefunden
                                </p>

                                <div className="relative w-full sm:w-[250px]">
                                    <select
                                        value={sortBy}
                                        onChange={(e) => setSortBy(e.target.value)}
                                        className="w-full appearance-none bg-white rounded-xl border px-4 sm:px-5 py-3 sm:py-4 pr-11 sm:pr-12 text-sm sm:text-base outline-none"
                                        style={{
                                            borderColor: "#d9d9d9",
                                            color: "#333333",
                                        }}
                                    >
                                        <option value="popular">Beliebtheit</option>
                                        <option value="price-asc">Preis aufsteigend</option>
                                        <option value="price-desc">Preis absteigend</option>
                                    </select>
                                    <ChevronDown
                                        size={18}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none"
                                        style={{ color: "#999999" }}
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6">
                                {filteredProducts.map((product) => {
                                    const availability = getAvailabilityConfig(product.stockStatus);

                                    return (
                                        <Link
                                            key={product.id}
                                            to={`/product/${product.id}`}
                                            className="group bg-white rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-xl min-w-0"
                                            style={{
                                                boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
                                                border: "1px solid #eeeeee",
                                            }}
                                        >
                                            <div className="relative">
                                                <div
                                                    className="w-full h-56 sm:h-64 md:h-72 flex items-center justify-center overflow-hidden"
                                                    style={{ backgroundColor: "#f4f5f6" }}
                                                >
                                                    <img
                                                        src={product.image}
                                                        alt={product.title}
                                                        className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                                                    />
                                                </div>

                                                {product.featured && (
                                                    <span
                                                        className="absolute top-3 sm:top-4 right-3 sm:right-4 text-white text-xs font-semibold px-3 py-1 rounded"
                                                        style={{ backgroundColor: "#15415a" }}
                                                    >
                                                        Beliebt
                                                    </span>
                                                )}
                                            </div>

                                            <div className="p-4 sm:p-5 flex flex-col flex-1 min-w-0">
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

                                                <p className="text-sm mb-3 leading-relaxed break-words" style={{ color: "#888888" }}>
                                                    {product.vehicle.join(" • ")} • {product.subcategory}
                                                </p>

                                                <div className="mb-4">
                                                    <span
                                                        className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold"
                                                        style={{
                                                            color: availability.textColor,
                                                            backgroundColor: availability.bgColor,
                                                        }}
                                                    >
                                                        {availability.label}
                                                    </span>
                                                </div>

                                                <div className="flex flex-col xs:flex-row sm:flex-col md:flex-row items-start xs:items-center sm:items-start md:items-center justify-between mt-auto gap-3 sm:gap-4">
                                                    <span className="text-lg font-bold text-gray-900">{product.price}</span>
                                                    <button
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            addToCart(product, 1);
                                                        }}
                                                        className="w-full xs:w-auto sm:w-full md:w-auto flex items-center justify-center gap-2 text-white text-sm font-semibold px-4 py-2.5 rounded transition-opacity hover:opacity-90"
                                                        style={{ backgroundColor: "#15415a" }}
                                                    >
                                                        <ShoppingCart size={14} />
                                                        Hinzufügen
                                                    </button>
                                                </div>
                                            </div>
                                        </Link>
                                    );
                                })}
                            </div>

                            {filteredProducts.length === 0 && (
                                <div
                                    className="bg-white rounded-2xl p-6 sm:p-10 text-center mt-6"
                                    style={{
                                        boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
                                        border: "1px solid #eeeeee",
                                    }}
                                >
                                    <h3
                                        className="text-2xl font-bold mb-3"
                                        style={{ fontFamily: "'Georgia', serif", color: "#15415a" }}
                                    >
                                        Keine Produkte gefunden
                                    </h3>
                                    <p className="text-sm sm:text-base leading-relaxed" style={{ color: "#666666" }}>
                                        Bitte passen Sie Ihre Filter an, um weitere Ergebnisse zu sehen.
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}