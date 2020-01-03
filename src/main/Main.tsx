import { Component } from 'react';
import { NavigationStackProp } from 'react-navigation-stack';
import { connect } from 'react-redux';

import { chooseLanguage } from '../redux/actions';
import { isEnglish } from '../I18n';

interface Props {
  setting: Setting;
  navigation: NavigationStackProp;
  chooseLanguage: (language: string) => void;
}

interface Setting {
  language: string;
}

interface MapStateToProps {
  setting: Setting;
}

class Main extends Component<Props> {
  async componentDidMount() {
    const { setting, navigation } = this.props;
    if (setting.language === '') {
      if (isEnglish()) {
        this.props.chooseLanguage('en');
      } else {
        this.props.chooseLanguage('id');
      }
    } else {
      this.props.chooseLanguage(setting.language);
    }

    navigation.navigate('App');
  }

  render() {
    return null;
  }
}

const mapStateToProps = (state: MapStateToProps) => ({
  setting: state.setting
});

const mapDispatchToProps = {
  chooseLanguage
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
