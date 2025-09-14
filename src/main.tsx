import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./app/App.tsx";
import AppProvider from "./app/App-provider.tsx";
import Layout from "./features/layout/layout.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
      <AppProvider>
          <Layout><App /></Layout>
      </AppProvider>
  </StrictMode>
);
