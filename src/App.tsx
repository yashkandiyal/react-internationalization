import React from "react";
import { useTranslation } from "react-i18next";
import LanguageSelector from "./components/languageSelector";

const App = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-gray-800 h-screen w-screen">
      <LanguageSelector />
      <h1 className="text-white text-center text-2xl">{t("greeting")}</h1>
    </div>
  );
};

export default App;
