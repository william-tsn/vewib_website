import { useMemo, useState } from "react";
import { Link, useNavigate, createSearchParams } from "react-router-dom";
import {
  Search,
  User,
  ShoppingCart,
  Menu,
  X,
  ArrowRight,
} from "lucide-react";
import vewibLogo from "../assets/vewib.webp";
import { useCart } from "../context/CartContext";
import { products } from "../data/product";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const { cartCount } = useCart();

  function buildCatalogLink(filters?: {
    categories?: string[];
    subcategories?: string[];
    vehicles?: string[];
  }) {
    if (!filters) return "/catalog";

    const params = new URLSearchParams();

    filters.categories?.forEach((category) => {
      params.append("category", category);
    });

    filters.subcategories?.forEach((subcategory) => {
      params.append("subcategory", subcategory);
    });

    filters.vehicles?.forEach((vehicle) => {
      params.append("vehicle", vehicle);
    });

    const search = params.toString();
    return search ? `/catalog?${search}` : "/catalog";
  }

  const links = [
    { label: "Startseite", href: "/home" },
    { label: "Katalog", href: "/catalog" },

    // correspond exactement à la catégorie de ton Catalog
    { label: "Motor", href: buildCatalogLink({ categories: ["Motor"] }) },

    // dans tes données de filtres, "Karosserie" n'existe pas comme catégorie
    // la catégorie réelle correspondante est "Aufbau"
    { label: "Karosserie", href: buildCatalogLink({ categories: ["Aufbau"] }) },

    // idem : "Innenraum" n'existe pas comme catégorie principale dans ton Catalog
    // donc on l'envoie vers Aufbau aussi, sans inventer une sous-catégorie
    { label: "Innenraum", href: buildCatalogLink({ categories: ["Aufbau"] }) },

    { label: "Zubehör", href: buildCatalogLink({ categories: ["Zubehör"] }) },
  ];

  const results = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();

    if (!query) return [];

    return products.filter((product) => {
      return (
        product.title.toLowerCase().includes(query) ||
        product.sku.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query) ||
        product.subcategory.toLowerCase().includes(query) ||
        product.brand.toLowerCase().includes(query) ||
        product.subtitle.toLowerCase().includes(query) ||
        product.shortDescription.toLowerCase().includes(query) ||
        product.longDescription.toLowerCase().includes(query) ||
        product.vehicle.some((vehicle) => vehicle.toLowerCase().includes(query))
      );
    });
  }, [searchTerm]);

  const iconBaseStyle = { color: "#666666" as const };

  function handleLogout() {
    navigate("/");
  }

  return (
    <nav className="w-full bg-white border-b border-gray-100 fixed top-0 z-50 py-5">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between gap-6">
        <Link to="/home" className="flex items-center shrink-0">
          <img src={vewibLogo} alt="Vewib Logo" className="h-8 w-auto" />
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link.label}>
              <Link
                to={link.href}
                className="text-sm font-medium transition-colors duration-200"
                style={{ color: "#666666" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#15415a")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#666666")}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-4 relative">
          <div className="relative flex items-center">
            <div
              className={`overflow-hidden transition-all duration-300 ${
                searchOpen ? "w-[340px] opacity-100 mr-2" : "w-0 opacity-0 mr-0"
              }`}
            >
              <div className="relative">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Suche nach Produkt, Referenz, Kategorie..."
                  className="w-full border rounded-xl pl-4 pr-10 py-2.5 text-sm outline-none"
                  style={{
                    borderColor: "#d9d9d9",
                    color: "#333333",
                    backgroundColor: "#ffffff",
                  }}
                />
                {searchOpen && searchTerm && (
                  <button
                    type="button"
                    onClick={() => setSearchTerm("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-sm"
                    style={{ color: "#999999" }}
                  >
                    <X size={16} />
                  </button>
                )}
              </div>

              {searchOpen && searchTerm && (
                <div
                  className="absolute right-0 top-[56px] w-[380px] bg-white rounded-2xl p-3"
                  style={{
                    boxShadow: "0 10px 30px rgba(0,0,0,0.10)",
                    border: "1px solid #eeeeee",
                  }}
                >
                  {results.length > 0 ? (
                    <div className="space-y-2 max-h-[360px] overflow-auto">
                      {results.slice(0, 8).map((item) => (
                        <Link
                          key={item.id}
                          to={`/product/${item.id}`}
                          onClick={() => {
                            setSearchOpen(false);
                            setSearchTerm("");
                          }}
                          className="flex gap-3 rounded-xl p-3 transition-colors hover:bg-gray-50"
                        >
                          <div
                            className="w-14 h-14 rounded-lg overflow-hidden shrink-0 flex items-center justify-center"
                            style={{ backgroundColor: "#f4f5f6" }}
                          >
                            <img
                              src={item.image}
                              alt={item.title}
                              className="w-full h-full object-contain"
                            />
                          </div>

                          <div className="min-w-0">
                            <p className="text-sm font-semibold text-gray-900 line-clamp-1">
                              {item.title}
                            </p>
                            <p className="text-xs mt-1" style={{ color: "#15415a" }}>
                              {item.sku}
                            </p>
                            <p className="text-xs mt-1" style={{ color: "#666666" }}>
                              {item.vehicle.join(" • ")}
                            </p>
                            <p
                              className="text-xs mt-1 line-clamp-2"
                              style={{ color: "#888888" }}
                            >
                              {item.subcategory}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <div className="p-3">
                      <p className="text-sm font-medium text-gray-900">
                        Keine Ergebnisse
                      </p>
                      <p className="text-xs mt-1" style={{ color: "#666666" }}>
                        Bitte versuchen Sie einen anderen Suchbegriff.
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>

            <button
              type="button"
              className="transition-colors shrink-0"
              style={iconBaseStyle}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#15415a")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#666666")}
              onClick={() => setSearchOpen((prev) => !prev)}
              aria-label="Suche"
            >
              <Search size={18} />
            </button>
          </div>

          <Link
            to="/profile"
            className="transition-colors"
            style={iconBaseStyle}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#15415a")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#666666")}
            aria-label="Mein Profil"
          >
            <User size={18} />
          </Link>

          <Link
            to="/cart"
            className="transition-colors relative"
            style={iconBaseStyle}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#15415a")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#666666")}
            aria-label="Warenkorb"
          >
            <ShoppingCart size={18} />
            {cartCount > 0 && (
              <span
                className="absolute -top-2 -right-2 min-w-[18px] h-[18px] px-1 rounded-full text-[10px] flex items-center justify-center text-white"
                style={{ backgroundColor: "#15415a" }}
              >
                {cartCount}
              </span>
            )}
          </Link>
        </div>

        <button
          className="md:hidden transition-colors"
          style={{ color: "#666666" }}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menü öffnen"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4">
          {links.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className="text-sm font-medium"
              style={{ color: "#666666" }}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          <div className="pt-2 border-t border-gray-100">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Suche..."
              className="w-full border rounded-xl px-4 py-3 text-sm outline-none"
              style={{
                borderColor: "#d9d9d9",
                color: "#333333",
                backgroundColor: "#ffffff",
              }}
            />
          </div>

          {searchTerm && (
            <div className="space-y-2">
              {results.length > 0 ? (
                results.slice(0, 6).map((item) => (
                  <Link
                    key={item.id}
                    to={`/product/${item.id}`}
                    className="flex gap-3 rounded-xl p-3 bg-gray-50"
                    onClick={() => {
                      setMenuOpen(false);
                      setSearchTerm("");
                    }}
                  >
                    <div
                      className="w-12 h-12 rounded-lg overflow-hidden shrink-0 flex items-center justify-center"
                      style={{ backgroundColor: "#ffffff" }}
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-contain"
                      />
                    </div>

                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-gray-900 line-clamp-1">
                        {item.title}
                      </p>
                      <p className="text-xs mt-1" style={{ color: "#15415a" }}>
                        {item.sku}
                      </p>
                    </div>
                  </Link>
                ))
              ) : (
                <p className="text-sm" style={{ color: "#666666" }}>
                  Keine Ergebnisse
                </p>
              )}
            </div>
          )}

          <div
            className="flex gap-4 pt-2 border-t border-gray-100"
            style={{ color: "#666666" }}
          >
            <Link to="/profile" aria-label="Mein Profil" onClick={() => setMenuOpen(false)}>
              <User size={18} />
            </Link>
            <Link
              to="/cart"
              aria-label="Warenkorb"
              onClick={() => setMenuOpen(false)}
              className="relative"
            >
              <ShoppingCart size={18} />
              {cartCount > 0 && (
                <span
                  className="absolute -top-2 -right-2 min-w-[18px] h-[18px] px-1 rounded-full text-[10px] flex items-center justify-center text-white"
                  style={{ backgroundColor: "#15415a" }}
                >
                  {cartCount}
                </span>
              )}
            </Link>
            <button
              type="button"
              onClick={() => {
                setMenuOpen(false);
                handleLogout();
              }}
              aria-label="Abmelden"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}