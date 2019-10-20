import React from 'react';
import styled, {withTheme} from 'styled-components/native';
import {Button as RPButton} from 'react-native-paper';

const Button = props => {
  return (
    <StyledButton {...props} color={props.theme.APP_COLOR.PRIMARY.TITLE}>
      {props.children}
    </StyledButton>
  );
};

export default withTheme(Button);

const StyledButton = styled(RPButton)`
  width: 100%;
  height: 50px;
  justify-content: center;
`;
