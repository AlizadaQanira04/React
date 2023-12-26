import { Route, Router, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./layout/footer";
import Header from "./layout/header";
import AboutPage from "./pages/about";

import HomePage from "./pages/home";
import NotFound from "./pages/not-found";
import ProductDetails from "./pages/page-details";
import ProductsPage from "./pages/products";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path={"/"} element={<HomePage />} />
        <Route path={"about"} element={<AboutPage />} />
        <Route path={"products"} element={<ProductsPage />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
