import React, {Component} from 'react';
import {Actions} from 'react-native-router-flux';
import {authenticateUser} from './duck/service';

const container = Main =>
  class Login extends Component {
    static defaultProps = {
      inputFields: [
        {
          key: 'email',
          label: 'Email',
        },
        {
          key: 'password',
          label: 'Password',
        },
      ],
    };

    /*
     * Handle user login
     **/
    handleLogin = async () => {
      let {email, password} = this.state;
      let body = {
        email,
        password,
      };
      // let response = await authenticateUser(body);
      Actions.push('loader');
    };

    handleInputChange = (text, key) => {
      this.setState({
        [key]: text,
      });
    };

    render() {
      let ComponentProps = {
        ...this.props,
        ...this.state,
        handleLogin: this.handleLogin,
        handleInputChange: this.handleInputChange,
      };

      return <Main {...ComponentProps} />;
    }
  };

export default container;
