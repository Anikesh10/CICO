import React from 'react';
import {Dimensions, TextInput, StyleSheet} from 'react-native';
import container from './container';
import styled from 'styled-components/native';
import TextBox from '../../components/textBox';
import Button from '../../components/button';
import {map} from 'lodash';

// Import login page image
const HomepageImage = require('../../assets/images/homepage.jpg');

const renderFields = (input, handleInputChange, props) => {
  return map(input, ({label, key}) => {
    return (
      <TextBox
        key={key}
        label={label}
        value={props[key]}
        onChangeText={text => handleInputChange(text, key)}
      />
    );
  });
};

const Login = props => {
  let {handleInputChange, inputFields, handleLogin} = props;
  return (
    <Wrapper>
      <Scrollable>
        <LoginBox>
          <Heading>CICO</Heading>
          {renderFields(inputFields, handleInputChange, props)}
          <ButtonWrapper>
            <Button title={'Login'} mode="contained" onPress={handleLogin}>
              Login
            </Button>
          </ButtonWrapper>
        </LoginBox>
      </Scrollable>
      <BgImage source={HomepageImage} />
      <Overlay />
    </Wrapper>
  );
};

Login.defaultProps = {
  inputFields: [],
};
export default container(Login);

const Heading = styled.Text`
  ${props => `
    font-family: ${props.theme.FONT_FAMILY.PRIMARY.TITLE};
    color:  ${props.theme.APP_COLOR.PRIMARY.TITLE};
    font-size: 50px;
    margin-bottom: 30px;
  `};
`;

const Wrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const LoginBox = styled.View`
  margin-top: 50%;
  padding: 30px 20px;
  width: ${Dimensions.get('window').width - 100};
  max-width: 300px;
  align-items: center;
  background-color: ${props => props.theme.APP_COLOR.PRIMARY.MAIN};
  border-radius: 10px;
`;

const Scrollable = styled.ScrollView`
  background-color: transparent;
`;

const BgImage = styled.ImageBackground`
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  bottom: 0;
  z-index: -1;
  width: ${Dimensions.get('window').width};
  height: ${Dimensions.get('window').height};
`;

const ButtonWrapper = styled.View`
  width: 100%;
  margin-top: 20px;
`;

const Overlay = styled.View`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -1;
  opacity: 0.8;
  background-color: ${props => props.theme.APP_COLOR.PRIMARY.MAIN};
`;
