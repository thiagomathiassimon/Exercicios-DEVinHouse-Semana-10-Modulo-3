import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import "./baseCss.css";
import { BookListProvider } from "./context/booksContext";

ReactDOM.render(
  <React.StrictMode>
    <BookListProvider>
      <App />
    </BookListProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
