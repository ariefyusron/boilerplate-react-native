import { useEffect } from 'react';
import { NavigationStackProp } from 'react-navigation-stack';
import { useSelector, useDispatch } from 'react-redux';

import { chooseLanguage } from '../redux/actions';
import { isEnglish } from '../I18n';

interface Props {
  navigation: NavigationStackProp;
}

interface Setting {
  language: string;
}

interface State {
  setting: Setting;
}

const Main = (props: Props) => {
  const setting = useSelector((state: State) => state.setting);
  const dispatch = useDispatch();

  useEffect(() => {
    if (setting.language === '') {
      if (isEnglish()) {
        dispatch(chooseLanguage('en'));
      } else {
        dispatch(chooseLanguage('id'));
      }
    } else {
      dispatch(chooseLanguage(setting.language));
    }

    props.navigation.navigate('App');
  }, []);

  return null;
};

export default Main;
