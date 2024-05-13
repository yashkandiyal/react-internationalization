import React from "react";
import { useTranslation } from "react-i18next";

const languages = [
  { code: "en", lang: "English" },
  { code: "fr", lang: "French" },
  { code: "hi", lang: "Hindi" },
];

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (code:any) => {
    i18n.changeLanguage(code);
  };

  return (
    <div className="flex gap-4 items-center justify-center mb-2">
      {languages.map((language) => {
        return (
          <button
            key={language.code}
            onClick={() => changeLanguage(language.code)}
            className={`p-1 text-white border-1 border-black ${
              language.code === i18n.language ? "bg-blue-500" : "bg-slate-700"
            }`}>
            {language.lang}{" "}
          </button>
        );
      })}
    </div>
  );
};

export default LanguageSelector;
