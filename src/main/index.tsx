import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { chooseLanguage } from "../redux/actions";
import { isEnglish } from "../I18n";
import { State } from "./types";

const Main = () => {
  const setting = useSelector((state: State) => state.setting);
  const dispatch = useDispatch();

  useEffect(() => {
    if (setting.language === "") {
      if (isEnglish()) {
        dispatch(chooseLanguage("en"));
      } else {
        dispatch(chooseLanguage("id"));
      }
    } else {
      dispatch(chooseLanguage(setting.language));
    }
  }, []);

  return null;
};

export default Main;
