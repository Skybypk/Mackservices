import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

// Layout + Core
import Layout from "@/api/components/layout/layout";
import { AuthProvider } from "@/api/components/lib/AuthContext";

// Pages
import HomePage from "@/api/pages/HomePage";
import AboutPage from "@/api/pages/AboutPage"; 
import ContactPage from "@/api/services/ContactPage";

// Services
import HvacMaintenancePage from "@/api/pages/HvacMaintenance";
import RepairsPage from "@/api/pages/Repairs";
import SteelworksPage from "@/api/pages/Steelworks";

// 404 Page (check location!)
import PageNotFound from "@/api/components/lib/PageNotFound"; 

// Routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <PageNotFound />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/about", element: <AboutPage /> },
      { path: "/contact", element: <ContactPage /> },
      { path: "/services/hvac-maintenance", element: <HvacMaintenancePage /> },
      { path: "/services/repairs", element: <RepairsPage /> },
      { path: "/services/steelworks", element: <SteelworksPage /> },
    ],
  },
]);

// App render
const rootElement = document.getElementById("root");

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </React.StrictMode>
  );
} else {
  console.error("Root element not found");
} 