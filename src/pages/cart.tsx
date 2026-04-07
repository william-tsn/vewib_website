import { Link } from "react-router-dom";
import { ArrowLeft, ShoppingBag, Minus, Plus, Trash2 } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useCart } from "../context/CartContext";

function getNumericPrice(price: string) {
  return Number(price.replace(" €", "").replace(",", "."));
}

export default function Cart() {
  const { cartItems, removeFromCart, updateQuantity, clearCart } = useCart();

  const isEmpty = cartItems.length === 0;

  const total = cartItems.reduce((sum, item) => {
    return sum + getNumericPrice(item.price) * item.quantity;
  }, 0);

  return (
    <div className="min-h-screen font-sans" style={{ backgroundColor: "#f4f5f6" }}>
      <Navbar />

      <section className="px-6 py-16 md:py-24">
        <div className="max-w-7xl mx-auto">
          {isEmpty ? (
            <div
              className="min-h-[70vh] flex flex-col items-center justify-center text-center"
              style={{ backgroundColor: "#f4f5f6" }}
            >
              <div
                className="w-36 h-36 rounded-full flex items-center justify-center mb-8"
                style={{ backgroundColor: "#e9ebee" }}
              >
                <ShoppingBag size={56} strokeWidth={1.8} color="#5f6368" />
              </div>

              <h1
                className="text-4xl md:text-6xl font-bold mb-6"
                style={{ fontFamily: "'Georgia', serif", color: "#111111" }}
              >
                Ihr Warenkorb ist leer
              </h1>

              <p
                className="text-lg md:text-2xl max-w-2xl mx-auto mb-10"
                style={{ color: "#666666" }}
              >
                Entdecken Sie unseren Ersatzteilkatalog für klassische Volkswagen.
              </p>

              <Link
                to="/catalog"
                className="inline-flex items-center gap-3 text-white text-lg font-semibold px-8 py-4 rounded-xl transition-opacity hover:opacity-90"
                style={{ backgroundColor: "#15415a" }}
              >
                <ArrowLeft size={20} />
                Weiter einkaufen
              </Link>
            </div>
          ) : (
            <div>
              <div className="flex items-center justify-between mb-10">
                <div>
                  <h1
                    className="text-4xl md:text-5xl font-bold mb-3"
                    style={{ fontFamily: "'Georgia', serif", color: "#111111" }}
                  >
                    Warenkorb
                  </h1>
                  <p style={{ color: "#666666" }}>
                    {cartItems.length} Artikel in Ihrem Warenkorb
                  </p>
                </div>

                <button
                  type="button"
                  onClick={clearCart}
                  className="text-sm font-semibold px-5 py-3 rounded-xl border transition-colors hover:bg-gray-50"
                  style={{ borderColor: "#d9d9d9", color: "#333333" }}
                >
                  Warenkorb leeren
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-8">
                <div className="space-y-6">
                  {cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="bg-white rounded-2xl p-6"
                      style={{
                        boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
                        border: "1px solid #eeeeee",
                      }}
                    >
                      <div className="grid grid-cols-1 md:grid-cols-[140px_1fr_auto] gap-6 items-center">
                        <div
                          className="w-full h-32 rounded-xl overflow-hidden flex items-center justify-center"
                          style={{ backgroundColor: "#f4f5f6" }}
                        >
                          {item.image ? (
                            <img
                              src={item.image}
                              alt={item.title}
                              className="w-full h-full object-contain"
                            />
                          ) : (
                            <span className="text-xs" style={{ color: "#aaaaaa" }}>
                              Bild Produkt
                            </span>
                          )}
                        </div>

                        <div>
                          <p
                            className="text-xs font-semibold tracking-widest uppercase mb-2"
                            style={{ color: "#666666" }}
                          >
                            {item.category}
                          </p>
                          <h3 className="text-xl font-bold text-gray-900 mb-2">
                            {item.title}
                          </h3>
                          <p className="text-sm mb-1" style={{ color: "#666666" }}>
                            {Array.isArray(item.vehicle)
                              ? item.vehicle.join(" • ")
                              : item.vehicle}
                          </p>
                          <p className="text-sm" style={{ color: "#888888" }}>
                            {item.subcategory}
                          </p>
                        </div>

                        <div className="flex flex-col items-end gap-4">
                          <span className="text-2xl font-bold text-gray-900">
                            {item.price}
                          </span>

                          <div
                            className="inline-flex items-center overflow-hidden rounded-xl border"
                            style={{
                              borderColor: "#d9d9d9",
                              backgroundColor: "#ffffff",
                            }}
                          >
                            <button
                              type="button"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="w-10 h-10 flex items-center justify-center"
                            >
                              <Minus size={16} />
                            </button>

                            <div className="w-12 h-10 flex items-center justify-center text-base font-semibold">
                              {item.quantity}
                            </div>

                            <button
                              type="button"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="w-10 h-10 flex items-center justify-center"
                            >
                              <Plus size={16} />
                            </button>
                          </div>

                          <button
                            type="button"
                            onClick={() => removeFromCart(item.id)}
                            className="inline-flex items-center gap-2 text-sm"
                            style={{ color: "#b00020" }}
                          >
                            <Trash2 size={16} />
                            Entfernen
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div
                  className="bg-white rounded-2xl p-6 h-fit sticky top-28"
                  style={{
                    boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
                    border: "1px solid #eeeeee",
                  }}
                >
                  <h2
                    className="text-2xl font-bold mb-6"
                    style={{ fontFamily: "'Georgia', serif", color: "#111111" }}
                  >
                    Zusammenfassung
                  </h2>

                  <div className="flex items-center justify-between mb-4">
                    <span style={{ color: "#666666" }}>Zwischensumme</span>
                    <span className="font-semibold">{total.toFixed(2)} €</span>
                  </div>

                  <div className="flex items-center justify-between mb-6">
                    <span style={{ color: "#666666" }}>Versand</span>
                    <span className="font-semibold">Berechnet im nächsten Schritt</span>
                  </div>

                  <div
                    className="flex items-center justify-between pt-4 border-t mb-6"
                    style={{ borderColor: "#eeeeee" }}
                  >
                    <span className="text-lg font-semibold">Gesamt</span>
                    <span className="text-2xl font-bold">{total.toFixed(2)} €</span>
                  </div>

                  <button
                    type="button"
                    className="w-full text-white text-base font-semibold px-6 py-4 rounded-xl transition-opacity hover:opacity-90"
                    style={{ backgroundColor: "#15415a" }}
                  >
                    Zur Kasse
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}