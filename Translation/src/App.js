import "./styles.css";
import React, { useState } from "react";
import Field from "./components/field";
import Language from "./components/languages";
import Translate from "./components/translate";
export default function App() {
  const [language, setLanguage] = useState("ru");
  const [text, setText] = useState("");

  return (
    <div>
      <Field label="Enter text" onChange={setText} value={text} />
      <Language language={language} onLanguageChange={setLanguage} />
      <hr />
      <Translate text={text} language={language} />
    </div>
  );
}
