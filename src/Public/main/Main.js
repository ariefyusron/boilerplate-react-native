import { Component } from 'react';
import { connect } from 'react-redux';

import { chooseLanguage } from '../../Setting/action';
import { switchLanguage, isEnglish } from '../I18n';

class Main extends Component {
  async componentDidMount() {
    if (this.props.setting.language === ''){
      if (isEnglish()){
        this.props.chooseLanguage('en');
        await switchLanguage('en');
      } else {
        this.props.chooseLanguage('id');
        await switchLanguage('id');
      }
    } else {
      await switchLanguage(this.props.setting.language);
    }

    this.props.navigation.navigate('App');
  }

  render() {
    return null;
  }
}

const mapStateToProps = state => ({
  setting: state.setting,
});

const mapDispatchToProps = {
  chooseLanguage,
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
