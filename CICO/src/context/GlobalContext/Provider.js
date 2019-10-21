import React, {Component} from 'react';
import GlobalContext from './index';

class GlobalProvider extends Component {
  setProfile = profile => {
    this.setState({
      profile,
    });
  };

  setLoading = isLoading => {
    this.setState({isLoading});
  };

  setError = error => {
    this.setState({error});
  };

  state = {
    profile: {},
    isLoading: false,
    error: {
      flag: false,
      message: '',
    },
    setProfile: this.setProfile,
    setLoading: this.setLoading,
    setError: this.setError,
  };
  render() {
    return (
      <GlobalContext.Provider value={this.state}>
        {this.props.children}
      </GlobalContext.Provider>
    );
  }
}

export default GlobalProvider;
