import { useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProfileSidebar from "./components/ProfileSidebar";
import AppRoutes from "./routes/AppRoutes";

function App() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div className="min-h-screen flex flex-col bg-bgColor text-secondary">
      <Navbar />

      {/* Main content grows to push footer down */}
      <main className="flex-grow w-full max-w-7xl mx-auto px-2 sm:px-4 md:px-6 py-4 sm:py-6 md:py-10">
        {isHome ? (
          // Home page: full width
          <AppRoutes />
        ) : (
          // Other pages: sidebar + content
          <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-8">
            <ProfileSidebar />
            <div className="flex-1">
              <AppRoutes />
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;

