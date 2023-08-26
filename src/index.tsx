import React from "react";
import App from "./App";
import { createRoot } from "react-dom/client";

var id = document.getElementById("app");
if (id) {
    const root = createRoot(id);
    root.render(<App />);
}