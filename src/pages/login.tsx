import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff, Mail, Lock, ArrowRight } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");

    if (!email.trim() || !password.trim()) {
      setError("Bitte füllen Sie alle Felder aus.");
      return;
    }

    if (!email.includes("@")) {
      setError("Bitte geben Sie eine gültige E-Mail-Adresse ein.");
      return;
    }

    navigate("/home");
  }

  return (
    <div className="min-h-screen font-sans flex flex-col" style={{ backgroundColor: "#f4f5f6" }}>
      <Navbar />

      <main className="flex-1 px-4 sm:px-6 py-10 sm:py-14 md:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_480px] gap-6 md:gap-10 items-stretch">
            <div
              className="hidden lg:flex rounded-3xl p-8 xl:p-12 flex-col justify-between min-h-[720px]"
              style={{
                background: "linear-gradient(135deg, #15415a 0%, #1f5675 100%)",
                color: "#ffffff",
              }}
            >
              <div>
                <p className="uppercase tracking-[0.22em] text-sm mb-6" style={{ color: "rgba(255,255,255,0.75)" }}>
                  Vewib
                </p>

                <h1
                  className="text-4xl xl:text-5xl font-bold leading-tight mb-6"
                  style={{ fontFamily: "'Georgia', serif" }}
                >
                  Willkommen zurück
                </h1>

                <p className="text-base xl:text-lg leading-relaxed max-w-xl" style={{ color: "rgba(255,255,255,0.88)" }}>
                  Melden Sie sich an, um auf Ihr Kundenkonto, Ihre Bestellungen und den
                  Ersatzteilkatalog für klassische Volkswagen zuzugreifen.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10">
                <div
                  className="rounded-2xl p-5"
                  style={{ backgroundColor: "rgba(255,255,255,0.10)", border: "1px solid rgba(255,255,255,0.14)" }}
                >
                  <p className="text-2xl font-bold mb-1">Original</p>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.8)" }}>
                    Hochwertige Teile für klassische Volkswagen
                  </p>
                </div>

                <div
                  className="rounded-2xl p-5"
                  style={{ backgroundColor: "rgba(255,255,255,0.10)", border: "1px solid rgba(255,255,255,0.14)" }}
                >
                  <p className="text-2xl font-bold mb-1">Schnell</p>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.8)" }}>
                    Einfacher Zugriff auf Katalog und Bestellungen
                  </p>
                </div>

                <div
                  className="rounded-2xl p-5"
                  style={{ backgroundColor: "rgba(255,255,255,0.10)", border: "1px solid rgba(255,255,255,0.14)" }}
                >
                  <p className="text-2xl font-bold mb-1">Sicher</p>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.8)" }}>
                    Geschützter Zugang zu Ihrem Konto
                  </p>
                </div>
              </div>
            </div>

            <div
              className="bg-white rounded-3xl p-5 sm:p-8 md:p-10 self-center w-full"
              style={{
                boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
                border: "1px solid #eaeaea",
              }}
            >
              <div className="mb-8">
                <p
                  className="text-xs sm:text-sm uppercase tracking-[0.18em] mb-3"
                  style={{ color: "#666666" }}
                >
                  Kundenkonto
                </p>

                <h2
                  className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3"
                  style={{ fontFamily: "'Georgia', serif", color: "#111111" }}
                >
                  Anmelden
                </h2>

                <p className="text-sm sm:text-base leading-relaxed" style={{ color: "#666666" }}>
                  Geben Sie Ihre Zugangsdaten ein, um fortzufahren.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold mb-2"
                    style={{ color: "#333333" }}
                  >
                    E-Mail-Adresse
                  </label>

                  <div className="relative">
                    <span
                      className="absolute left-4 top-1/2 -translate-y-1/2"
                      style={{ color: "#888888" }}
                    >
                      <Mail size={18} />
                    </span>

                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@beispiel.de"
                      className="w-full rounded-2xl border pl-12 pr-4 py-3.5 sm:py-4 text-base outline-none transition-colors"
                      style={{
                        borderColor: "#d9d9d9",
                        color: "#333333",
                        backgroundColor: "#ffffff",
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-semibold mb-2"
                    style={{ color: "#333333" }}
                  >
                    Passwort
                  </label>

                  <div className="relative">
                    <span
                      className="absolute left-4 top-1/2 -translate-y-1/2"
                      style={{ color: "#888888" }}
                    >
                      <Lock size={18} />
                    </span>

                    <input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Ihr Passwort"
                      className="w-full rounded-2xl border pl-12 pr-12 py-3.5 sm:py-4 text-base outline-none transition-colors"
                      style={{
                        borderColor: "#d9d9d9",
                        color: "#333333",
                        backgroundColor: "#ffffff",
                      }}
                    />

                    <button
                      type="button"
                      onClick={() => setShowPassword((prev) => !prev)}
                      className="absolute right-4 top-1/2 -translate-y-1/2"
                      style={{ color: "#888888" }}
                      aria-label="Passwort anzeigen oder verbergen"
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
                  <label className="inline-flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={rememberMe}
                      onChange={() => setRememberMe((prev) => !prev)}
                      className="h-4 w-4 rounded border-gray-300 shrink-0"
                    />
                    <span className="text-sm leading-relaxed" style={{ color: "#666666" }}>
                      Angemeldet bleiben
                    </span>
                  </label>

                  <Link
                    to="/forgot-password"
                    className="text-sm font-semibold sm:text-right"
                    style={{ color: "#15415a" }}
                  >
                    Passwort vergessen?
                  </Link>
                </div>

                {error && (
                  <div
                    className="rounded-2xl px-4 py-3 text-sm leading-relaxed"
                    style={{
                      backgroundColor: "#fff5f5",
                      border: "1px solid #ffd8d8",
                      color: "#c92a2a",
                    }}
                  >
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-3 text-white text-base sm:text-lg font-semibold px-6 py-3.5 sm:py-4 rounded-2xl transition-all duration-300 hover:opacity-90"
                  style={{ backgroundColor: "#15415a" }}
                >
                  Anmelden
                  <ArrowRight size={18} />
                </button>
              </form>

              <div className="mt-8 pt-6 border-t" style={{ borderColor: "#eeeeee" }}>
                <p className="text-sm text-center leading-relaxed" style={{ color: "#666666" }}>
                  Noch kein Konto?{" "}
                  <Link to="/register" className="font-semibold" style={{ color: "#15415a" }}>
                    Jetzt registrieren
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}