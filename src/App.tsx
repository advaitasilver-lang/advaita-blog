import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MainLayout } from "@/layouts/MainLayout";
import { HomePage } from "@/pages/HomePage";
import { PoemsPage } from "@/pages/PoemsPage";
import { PoemDetailPage } from "@/pages/PoemDetailPage";
import { AboutPage } from "@/pages/AboutPage";
import { CollectionsPage } from "@/pages/CollectionsPage";
import { CollectionDetailPage } from "@/pages/CollectionDetailPage";

export default function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/poems" element={<PoemsPage />} />
          <Route path="/poems/:slug" element={<PoemDetailPage />} />
          <Route path="/collections" element={<CollectionsPage />} />
          <Route path="/collections/:slug" element={<CollectionDetailPage />} />
          <Route path="/about" element={<AboutPage />} />
          {/* Add more routes here as needed */}
        </Routes>
      </MainLayout>
    </Router>
  );
}
