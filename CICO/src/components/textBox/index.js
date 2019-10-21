import React from 'react';
import styled, {withTheme} from 'styled-components/native';
import {TextInput, HelperText} from 'react-native-paper';
const TextBox = props => {
  return (
    <FiledWrap>
      <TextField
        {...props}
        theme={{
          colors: {
            text: props.theme.APP_COLOR.PRIMARY.LEVEL_3,
            placeholder: props.theme.APP_COLOR.PRIMARY.LEVEL_3,
            primary: props.theme.APP_COLOR.PRIMARY.TITLE,
            background: props.theme.APP_COLOR.PRIMARY.LEVEL_1,
            underlineColor: props.theme.APP_COLOR.PRIMARY.TITLE,
          },
        }}
      />
      {props.error && (
        <HelperText type="error" visible={!!props.error}>
          {props.error}
        </HelperText>
      )}
    </FiledWrap>
  );
};

export default withTheme(TextBox);

const TextField = styled(TextInput)`
  width: 100%;
`;

const FiledWrap = styled.View`
  width: 100%;
  margin-bottom: 20px;
`;
