import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ContactProvider } from "./store/appContext.jsx";
import Layout from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ContactProvider>
      
      <Layout />

    </ContactProvider>
  </StrictMode>
);
