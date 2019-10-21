import React from 'react';
import {StyleSheet, Text, View, TouchableHighlight} from 'react-native';

import container from './container';
import styled from 'styled-components/native';
import {Appbar} from 'react-native-paper';
import Picker from '../../components/picker';
import Button from '../../components/button';
import {Snackbar} from 'react-native-paper';
import {get} from 'lodash';

const CheckIn = props => {
  let {
    setError,
    error,
    projectList,
    onSelect,
    changeStatus,
    isCheckedIn,
    handleLogout,
  } = props;
  return (
    <Wrapper>
      <Snackbar
        visible={get(error, 'flag')}
        duration={50000}
        onDismiss={() => {
          setError({flag: false, message: ''});
        }}>
        {get(error, 'message') || `Unable to login. Please try again`}
      </Snackbar>
      <Picker
        placeholder="Please select a project."
        options={projectList || []}
        onSelect={onSelect}
      />

      <View style={styles.btnView}>
        <StyledTouchableHighlight
          style={styles.btn}
          onPress={changeStatus}
          underlayColor="#a2dea0"
          isCheckedIn={isCheckedIn}>
          <BtnText isCheckedIn={isCheckedIn}>
            {isCheckedIn ? 'Check Out' : 'Check In'}
          </BtnText>
        </StyledTouchableHighlight>
      </View>

      <ButtonWrapper>
        <Button title={'Logout'} mode="contained" onPress={handleLogout}>
          Logout
        </Button>
      </ButtonWrapper>
    </Wrapper>
  );
};

export default container(CheckIn);

const Wrapper = styled.View`
  flex: 1;
  background-color: ${props => props.theme.APP_COLOR.PRIMARY.MAIN};
  padding: 30px 20px;
`;

const ButtonWrapper = styled.View`
  width: 100%;
  margin-top: 60%;
`;

const StyledTouchableHighlight = styled.TouchableHighlight`
  background-color: ${props =>
    props.isCheckedIn
      ? props.theme.APP_COLOR.PRIMARY.TITLE
      : props.theme.APP_COLOR.PRIMARY.LEVEL_1};
  width: 150;
  height: 150;
  border-radius: 80;
  justify-content: center;
  border-color: ${props => props.theme.APP_COLOR.PRIMARY.TITLE};
  border-width: 5px;
`;

const BtnText = styled.Text`
  color: ${props =>
    props.isCheckedIn
      ? props.theme.APP_COLOR.PRIMARY.MAIN
      : props.theme.APP_COLOR.PRIMARY.TITLE};
  font-size: 20px;
  align-self: center;
`;

const styles = StyleSheet.create({
  customcontainer: {
    backgroundColor: '#fff',
    height: '100%',
  },
  pickerDiv: {
    flexDirection: 'row',
    marginTop: 30,
    marginHorizontal: 10,
    padding: 5,
    alignItems: 'center',
  },
  nameDiv: {
    flexDirection: 'column',
    marginTop: 30,
    marginHorizontal: 10,
    padding: 5,
    alignItems: 'center',
    height: 63,
  },
  projectLabel: {
    flex: 2,
  },
  projectNameLabel: {},
  cuspicker: {
    flex: 5,
    borderWidth: 2,
    borderColor: '#000',
    padding: 0,
  },
  btnView: {
    marginTop: 80,
    width: '100%',
    alignItems: 'center',
  },
  btn: {},
  btnText: {
    color: '#fff',
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  redbtn: {
    backgroundColor: '#ff2441',
    width: 150,
    height: 150,
    borderRadius: 80,
    justifyContent: 'center',
    borderColor: '#b31e32',
    borderWidth: 2,
  },
  redbtnText: {
    color: '#fff',
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
