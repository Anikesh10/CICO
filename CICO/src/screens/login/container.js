import React, {Component} from 'react';
import {Actions} from 'react-native-router-flux';
import {authenticateUser} from './duck/service';
import {flatMap, get} from 'lodash';
import ValidationUtils from '../../utils/ValidationUtils';

const container = Main =>
  class Login extends Component {
    static defaultProps = {
      inputFields: [
        {
          key: 'email',
          label: 'Email',
          editable: true,
          value: '',
        },
        {
          key: 'password',
          label: 'Password',
          editable: true,
          value: '',
        },
      ],
    };

    componentDidMount() {
      this.setState({inputFields: this.props.inputFields});
    }

    /*
     * Handle user login
     **/
    handleLogin = async () => {
      let {inputFields} = this.state;
      // Show loader
      Actions.push('loader');

      let {setLoading, setError, setProfile} = this.props;
      let body = {},
        inValid = false;

      flatMap(inputFields, ({key, value}) => {
        if (!value) {
          setError({flag: true, message: 'Please fill all fields.'});
          inValid = true;
        } else {
          body[key] = value;
        }
      });
      if (!inValid) {
        let response = await authenticateUser(body);
        setLoading(false);
        if (!response.success) {
          setError({flag: true, message: get(response, 'data.message')});
        } else {
          setProfile(response.user);
          setError({flag: false, message: ''});
          Actions.pop();
          Actions.push('checkIn');
        }
      }
    };

    handleInputChange = (text, key) => {
      const {inputFields} = this.state;
      flatMap(inputFields, eachInput => {
        let errorMessage = null;
        if (eachInput['key'] === key && eachInput.editable) {
          if (ValidationUtils.checkIfEmptyField()) {
            errorMessage = 'Please do not leave any field empty.';
          } else if (ValidationUtils.checkIfWhiteSpace()) {
            if (eachInput.key === 'password') {
              errorMessage = 'Do not leave empty space in password.';
            } else {
              errorMessage = 'Do not leave empty space in email.';
            }
          } else if (
            ValidationUtils.validateEmail() &&
            eachInput.key === 'email'
          ) {
            errorMessage = 'Please enter a valid email.';
          }

          if (errorMessage) {
            eachInput.error = errorMessage;
          }
          eachInput.error = errorMessage;
          eachInput.value = text;
        }
      });
      this.setState({
        inputFields,
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
