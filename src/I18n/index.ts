import I18n from "react-native-i18n";

import en from "./language/en.json";
import id from "./language/id.json";

I18n.fallbacks = true;
I18n.translations = {
  en,
  id,
};

export const switchLanguage = (language: string) => {
  I18n.locale = language;
};

export const isEnglish = () => {
  if (I18n.locale.includes("en")) {
    return true;
  }
  return false;
};

export default I18n;
