import vewibLogo from "../assets/vewib.webp";

export default function PublicNavbar() {
    return (
        <nav className="w-full bg-white border-b border-gray-100 sticky top-0 z-50 py-5">
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                <a href="/" className="flex items-center">
                    <img src={vewibLogo} alt="Vewib Logo" className="h-8 w-auto" />
                </a>

                <div className="flex items-center gap-4">
                    <a
                        href="/login"
                        className="text-sm font-semibold px-5 py-2.5 rounded-xl border transition-colors"
                        style={{
                            color: "#15415a",
                            borderColor: "#15415a",
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = "#f4f5f6";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = "transparent";
                        }}
                    >
                        Anmelden
                    </a>

                    <a
                        href="/register"
                        className="text-sm font-semibold px-5 py-2.5 rounded-xl text-white transition-opacity hover:opacity-90"
                        style={{ backgroundColor: "#15415a" }}
                    >
                        Registrieren
                    </a>
                </div>
            </div>
        </nav>
    );
}