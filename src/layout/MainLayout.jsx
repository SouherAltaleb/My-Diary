import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

export default function MainLayout() {
  return (
    // Gesamtes Layout über die ganze Bildschirmhöhe
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Dynamischer Seiteninhalt */}
      <main className="grow px-4 sm:px-8 md:px-16 py-10">
        <Outlet /> {/* Hier werden Home, Destinations, Contact...  geladen */}
      </main>

      <Footer />
    </div>
  );
}
