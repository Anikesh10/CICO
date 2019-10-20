import React from 'react';
import styled, {withTheme} from 'styled-components/native';
import {ActivityIndicator} from 'react-native-paper';

const Loader = props => {
  return (
    <Wrapper>
      <ActivityIndicator
        color={props.theme.APP_COLOR.PRIMARY.TITLE}
        size="large"
      />
    </Wrapper>
  );
};

const Wrapper = styled.View`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10;
  background-color: ${props => props.theme.APP_COLOR.PRIMARY.MAIN};
  opacity: 0.8;
  align-items: center;
  justify-content: center;
`;

export default withTheme(Loader);
