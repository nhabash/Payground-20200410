import React from "react";
import "./App.scss";
import "./styles.css";
import TypeCategoryWizard from "./views/TypeCategory/Forms/TypeCategoryWizard";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <TypeCategoryWizard />
    </div>
  );
}
