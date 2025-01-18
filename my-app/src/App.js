import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import ProductSection from "./Components/ProductSection";
import data from "./Data/data.json";

// Placeholder components for other routes
const Shop = () => <div className="min-h-screen p-4">Shop Page Content</div>;
const Bundles = () => <div className="min-h-screen p-4">Bundles Page Content</div>;
const Learn = () => <div className="min-h-screen p-4">Learn Page Content</div>;
const Find = () => <div className="min-h-screen p-4">Find Wildwonder Page Content</div>;

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            {/* Home page route */}
            <Route path="/" element={<ProductSection products={data.products} />} />
          
            
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;