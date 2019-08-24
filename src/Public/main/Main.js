import { Component } from 'react';
import { connect } from 'react-redux';

import { chooseLanguage } from '../../Setting/action';
import { isEnglish } from '../I18n';

class Main extends Component {
  async componentDidMount() {
    if (this.props.setting.language === '') {
      if (isEnglish()) {
        this.props.chooseLanguage('en');
      } else {
        this.props.chooseLanguage('id');
      }
    } else {
      this.props.chooseLanguage(this.props.setting.language);
    }

    this.props.navigation.navigate('App');
  }

  render() {
    return null;
  }
}

const mapStateToProps = state => ({
  setting: state.setting
});

const mapDispatchToProps = {
  chooseLanguage
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
