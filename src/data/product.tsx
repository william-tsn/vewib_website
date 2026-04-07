export type StockStatus = "in_stock" | "out_of_stock" | "coming_soon";

export type Product = {
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

export const products: Product[] = [
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