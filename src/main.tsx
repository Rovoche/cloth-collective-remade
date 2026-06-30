import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import "./styles.css";

import Home from "./routes/index";
import AboutPage from "./routes/about";
import LearningPage from "./routes/learning";
import MagazinePage from "./routes/magazine";
import BlogPage from "./routes/blog";
import ContactPage from "./routes/contact";
import DonatePage from "./routes/donate";

function ScrollToTop() {
  // No-op placeholder kept for future enhancement.
  return null;
}

function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-ivory px-4">
      <div className="max-w-md text-center">
        <p className="eyebrow">404</p>
        <h1 className="mt-4 font-display text-5xl">Page not found</h1>
        <p className="mt-4 text-sm text-muted-foreground">
          The thread you followed leads somewhere else.
        </p>
        <div className="mt-8">
          <a
            href="#/"
            className="inline-flex items-center justify-center rounded-full bg-forest px-6 py-3 text-sm text-ivory transition-colors hover:bg-olive"
          >
            Return home
          </a>
        </div>
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/learning" element={<LearningPage />} />
        <Route path="/magazine" element={<MagazinePage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/donate" element={<DonatePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>,
);
