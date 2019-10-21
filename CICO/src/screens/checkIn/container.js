import React, {Component} from 'react';
import {getProjectList} from './duck/service';
import {map, get} from 'lodash';
import {Actions} from 'react-native-router-flux';
const container = Main =>
  class CheckIn extends Component {
    state = {
      selectedProject: '',
    };
    componentDidMount() {
      this.fetchProjectList();
    }

    setError = error => {
      this.setState({error});
    };

    fetchProjectList = async () => {
      let response = await getProjectList();
      if (!response.success) {
        this.setError({flag: true, message: 'Unable to load project list'});
      } else {
        this.setError({flag: false, message: ''});
        let projectList = map(get(response, 'data.projectlist'), each => {
          return {
            label: each,
            value: each.toLowerCase(),
          };
        });
        this.setState({
          projectList,
        });
      }
    };

    onSelect = value => {
      if (value) {
        this.setState({
          selectedProject: value,
        });
      } else {
        this.onCheckOut();
      }
    };

    onCheckOut = () => {
      this.setState({
        isCheckedIn: false,
      });
    };

    onCheckIn = () => {
      let {selectedProject} = this.state;
      if (selectedProject) {
        this.setState({
          isCheckedIn: true,
        });
      } else {
        this.setError({
          flag: true,
          message: 'Please select a project before checking in.',
        });
      }
    };

    changeStatus = () => {
      let {isCheckedIn} = this.state;
      if (isCheckedIn) {
        this.onCheckOut();
      } else {
        this.onCheckIn();
      }
    };

    handleLogout = () => {
      Actions.login();
    };

    render() {
      let ComponentProps = {
        ...this.props,
        ...this.state,
        onSelect: this.onSelect,
        changeStatus: this.changeStatus,
        setError: this.setError,
        handleLogout: this.handleLogout,
      };

      return <Main {...ComponentProps} />;
    }
  };

export default container;
