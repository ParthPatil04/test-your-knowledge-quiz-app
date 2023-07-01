import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import QuizContext from "./Context/QuizContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QuizContext>
      <App />
    </QuizContext>
  </React.StrictMode>
);
