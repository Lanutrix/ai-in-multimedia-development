import { Route, Routes } from "react-router-dom";
import { Layout } from "@/components/layout/layout";
import HomePage from "@/pages/home";
import BasicsPage from "@/pages/basics";
import PipelinePage from "@/pages/pipeline";
import ToolsPage from "@/pages/tools";
import ToolsRegionPage from "@/pages/tools-region";
import ComparisonPage from "@/pages/comparison";
import CasesPage from "@/pages/cases";
import EthicsPage from "@/pages/ethics";
import TrendsPage from "@/pages/trends";
import AboutPage from "@/pages/about";
import NotFoundPage from "@/pages/not-found";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="basics" element={<BasicsPage />} />
        <Route path="pipeline" element={<PipelinePage />} />
        <Route path="tools" element={<ToolsPage />} />
        <Route path="tools/:region" element={<ToolsRegionPage />} />
        <Route path="comparison" element={<ComparisonPage />} />
        <Route path="cases" element={<CasesPage />} />
        <Route path="ethics" element={<EthicsPage />} />
        <Route path="trends" element={<TrendsPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
