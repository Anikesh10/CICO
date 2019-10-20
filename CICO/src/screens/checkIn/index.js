import React from 'react';
import {
  StyleSheet,
  Platform,
  Image,
  Text,
  View,
  Button,
  Picker,
  Alert,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import {ToastAndroid} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {AsyncStorage} from 'react-native';

export default class Main extends React.Component {
  state = {
    status: false,
    project: 'placeholder',
  };

  static navigationOptions = {
    header: null,
  };

  onCheckHistory() {
    Actions.history();
  }

  logout = async () => {
    await AsyncStorage.removeItem('auth');
    Actions.login();
  };

  changeStatus = () => {
    if (this.state.project === 'placeholder') {
      ToastAndroid.show('First select a project !', ToastAndroid.SHORT);
    } else {
      this.setState({
        status: !this.state.status,
      });
    }
  };
  render() {
    return (
      <View style={styles.customcontainer}>
        {!this.state.status ? (
          <View style={styles.pickerDiv}>
            <Text style={styles.projectLabel}>Select Project :</Text>
            <View style={styles.cuspicker}>
              <Picker
                selectedValue={this.state.project}
                onValueChange={(itemValue, itemIndex) => {
                  this.setState({project: itemValue});
                }}>
                <Picker.Item label="Project Name" value="placeholder" />
                <Picker.Item label="K1 2501" value="K1 2501" />
                <Picker.Item label="SPEC" value="SPEC" />
                <Picker.Item label="Total Oil" value="Total Oil" />
                <Picker.Item label="C & D Building  " value="C & D Building" />
              </Picker>
            </View>
          </View>
        ) : (
          <View style={styles.nameDiv}>
            <Text style={{fontSize: 20}}>Checked in at project</Text>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>
              {this.state.project}
            </Text>
          </View>
        )}

        <View style={styles.btnView}>
          {!this.state.status ? (
            <TouchableHighlight
              style={styles.btn}
              onPress={
                // this.setState({ status: !this.state.status });
                this.changeStatus
              }
              underlayColor="#a2dea0">
              <Text style={styles.btnText}>Check In</Text>
            </TouchableHighlight>
          ) : (
            <TouchableHighlight
              style={styles.redbtn}
              onPress={() => {
                this.setState({status: !this.state.status});
              }}
              underlayColor="#de5766">
              <Text style={styles.redbtnText}>Check Out</Text>
            </TouchableHighlight>
          )}
        </View>
        <TouchableOpacity onPress={this.logout}>
          <Text>Logout</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
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
  btn: {
    backgroundColor: '#57fa6d',
    width: 150,
    height: 150,
    borderRadius: 80,
    justifyContent: 'center',
    borderColor: '#47a153',
    borderWidth: 2,
  },
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
