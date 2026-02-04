import { BrowserRouter, Route, Routes } from "react-router-dom";
import RouteScrollToTop from "./helper/RouteScrollToTop";
import ScrollToTop from "react-scroll-to-top";
import AboutPage from "./pages/AboutPage";
import ServicePage from "./pages/ServicePage";
import ShopPage from "./pages/ShopPage";

import ContactPage from "./pages/ContactPage";
import HomePageSix from "./pages/HomePageSix";

function App() {
  return (
    <BrowserRouter>
      <RouteScrollToTop />
      <ScrollToTop smooth color="#E8092E" />
      <Routes>
        <Route exact path="/" element={<HomePageSix />} />
        <Route exact path="/about" element={<AboutPage />} />
        <Route exact path="/service" element={<ServicePage />} /> 
        <Route exact path="/shop" element={<ShopPage />} /> 
        <Route exact path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
