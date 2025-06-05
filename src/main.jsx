import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/ui/Navbar.jsx";
import Footer from "./components/ui/Footer.jsx";
import TopLoadingBar from "./components/ui/TopLoadingBar.jsx";
import ScrollToTop from "./components/utils/ScrollToTop.jsx";
import ScrollToTopButton from "./components/ui/ScrollToTopButton.jsx";
import { HelmetProvider } from "react-helmet-async";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <TopLoadingBar />
        <ScrollToTop />
        <ScrollToTopButton />
        <Navbar />
        <App />
        <Footer />
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>
);
