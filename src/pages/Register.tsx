import { useState } from "react";
import PublicNavbar from "../components/PublicNavbar";
import Footer from "../components/Footer";

type FormData = {
  companyName: string;
  contactName: string;
  email: string;
  phone: string;
  country: string;
  vatNumber: string;
  businessType: string;
  message: string;
};

export default function Register() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    companyName: "",
    contactName: "",
    email: "",
    phone: "",
    country: "",
    vatNumber: "",
    businessType: "",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    // Ici je pourrais envoyer les données à une API ou un service de backend
    console.log("Demande envoyée :", formData);

    setSubmitted(true);
  }

  return (
    <div className="min-h-screen font-sans overflow-x-hidden" style={{ backgroundColor: "#f4f5f6" }}>
      <PublicNavbar />

      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <p
              className="uppercase tracking-[0.18em] text-sm md:text-base mb-4"
              style={{
                color: "#15415a",
                fontFamily: "'Georgia', serif",
              }}
            >
              Registrierung
            </p>

            <h1
              className="text-4xl md:text-6xl leading-tight mb-6"
              style={{
                fontFamily: "'Georgia', serif",
                color: "#15415a",
                fontWeight: 700,
              }}
            >
              Professionelles Konto eröffnen
            </h1>

            <p
              className="text-lg md:text-xl max-w-2xl mx-auto"
              style={{ color: "#666666", fontFamily: "'Georgia', serif" }}
            >
              Füllen Sie das Formular aus, um eine Zugangsanfrage für Ihr
              Geschäftskonto bei VEWIB zu senden.
            </p>
          </div>

          {!submitted ? (
            <div
              className="rounded-[2rem] p-8 md:p-12"
              style={{ backgroundColor: "#ffffff", boxShadow: "0 8px 30px rgba(0,0,0,0.06)" }}
            >
              <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <label
                    htmlFor="companyName"
                    className="block mb-2 text-sm font-semibold"
                    style={{ color: "#15415a" }}
                  >
                    Firmenname
                  </label>
                  <input
                    id="companyName"
                    name="companyName"
                    type="text"
                    required
                    value={formData.companyName}
                    onChange={handleChange}
                    className="w-full rounded-xl px-4 py-3 border outline-none"
                    style={{ borderColor: "#d7dce0" }}
                  />
                </div>

                <div>
                  <label
                    htmlFor="contactName"
                    className="block mb-2 text-sm font-semibold"
                    style={{ color: "#15415a" }}
                  >
                    Ansprechpartner
                  </label>
                  <input
                    id="contactName"
                    name="contactName"
                    type="text"
                    required
                    value={formData.contactName}
                    onChange={handleChange}
                    className="w-full rounded-xl px-4 py-3 border outline-none"
                    style={{ borderColor: "#d7dce0" }}
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-semibold"
                    style={{ color: "#15415a" }}
                  >
                    E-Mail-Adresse
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-xl px-4 py-3 border outline-none"
                    style={{ borderColor: "#d7dce0" }}
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block mb-2 text-sm font-semibold"
                    style={{ color: "#15415a" }}
                  >
                    Telefonnummer
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full rounded-xl px-4 py-3 border outline-none"
                    style={{ borderColor: "#d7dce0" }}
                  />
                </div>

                <div>
                  <label
                    htmlFor="country"
                    className="block mb-2 text-sm font-semibold"
                    style={{ color: "#15415a" }}
                  >
                    Land
                  </label>
                  <input
                    id="country"
                    name="country"
                    type="text"
                    required
                    value={formData.country}
                    onChange={handleChange}
                    className="w-full rounded-xl px-4 py-3 border outline-none"
                    style={{ borderColor: "#d7dce0" }}
                  />
                </div>

                <div>
                  <label
                    htmlFor="vatNumber"
                    className="block mb-2 text-sm font-semibold"
                    style={{ color: "#15415a" }}
                  >
                    USt-IdNr. / SIRET / Unternehmensnummer
                  </label>
                  <input
                    id="vatNumber"
                    name="vatNumber"
                    type="text"
                    required
                    value={formData.vatNumber}
                    onChange={handleChange}
                    className="w-full rounded-xl px-4 py-3 border outline-none"
                    style={{ borderColor: "#d7dce0" }}
                  />
                </div>

                <div>
                  <label
                    htmlFor="businessType"
                    className="block mb-2 text-sm font-semibold"
                    style={{ color: "#15415a" }}
                  >
                    Geschäftstätigkeit
                  </label>
                  <select
                    id="businessType"
                    name="businessType"
                    required
                    value={formData.businessType}
                    onChange={handleChange}
                    className="w-full rounded-xl px-4 py-3 border outline-none bg-white"
                    style={{ borderColor: "#d7dce0" }}
                  >
                    <option value="">Bitte wählen</option>
                    <option value="werkstatt">Werkstatt</option>
                    <option value="restauration">Restaurationsbetrieb</option>
                    <option value="handler">Wiederverkäufer / Händler</option>
                    <option value="sonstige">Sonstige</option>
                  </select>
                </div>

                <div className="md:col-span-2">
                  <label
                    htmlFor="message"
                    className="block mb-2 text-sm font-semibold"
                    style={{ color: "#15415a" }}
                  >
                    Nachricht
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full rounded-xl px-4 py-3 border outline-none resize-none"
                    style={{ borderColor: "#d7dce0" }}
                    placeholder="Ergänzende Informationen zu Ihrem Unternehmen"
                  />
                </div>

                <div className="md:col-span-2 pt-4">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center px-8 py-4 rounded-2xl text-white text-base font-semibold transition-opacity hover:opacity-90"
                    style={{ backgroundColor: "#15415a" }}
                  >
                    Anfrage senden
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <div
              className="rounded-[2rem] p-8 md:p-12 text-center"
              style={{ backgroundColor: "#ffffff", boxShadow: "0 8px 30px rgba(0,0,0,0.06)" }}
            >
              <h2
                className="text-3xl md:text-4xl mb-6"
                style={{
                  fontFamily: "'Georgia', serif",
                  color: "#15415a",
                  fontWeight: 700,
                }}
              >
                Ihre Anfrage wurde erfolgreich gesendet
              </h2>

              <p
                className="text-lg leading-relaxed max-w-2xl mx-auto"
                style={{ color: "#666666", fontFamily: "'Georgia', serif" }}
              >
                Vielen Dank. Ihre Registrierungsanfrage wurde erfolgreich an unser
                Team übermittelt. Die Bearbeitungszeit beträgt in der Regel 24 bis
                48 Stunden. Sie erhalten eine Antwort per E-Mail und werden von
                unserem Team per E-Mail kontaktiert.
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}