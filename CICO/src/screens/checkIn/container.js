import React, {Component} from 'react';
import {getProjectList, checkinUser, checkoutUser} from './duck/service';
import {map, get} from 'lodash';
import {Actions} from 'react-native-router-flux';
const container = Main =>
  class CheckIn extends Component {
    state = {
      selectedProject: '',
      isCheckedIn: false,
      checkinDetails: {},
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

    onClear = () => {
      this.setState({
        selectedProject: '',
      });
    };

    onCheckOut = async () => {
      let {_id} = this.state.checkinDetails;
      let body = {
        id: _id,
      };
      let response = await checkoutUser(body);

      if (!response.success) {
        this.setError({
          flag: true,
          message: 'Unable to Check out. Please try again',
        });
      } else {
        this.setError({flag: false, message: ''});
        this.setState({
          isCheckedIn: false,
        });
      }
    };

    setCheckIn = async project => {
      let {email, name} = this.props.user;
      let body = {
        email,
        name,
        project_name: project,
      };
      let response = await checkinUser(body);
      if (!response.success) {
        this.setError({
          flag: true,
          message: 'Unable to Check in. Please try again',
        });
      } else {
        this.setError({flag: false, message: ''});
        this.setState({
          isCheckedIn: true,
          checkinDetails: response.data.transaction,
        });
      }
    };

    onCheckIn = () => {
      let {selectedProject} = this.state;
      if (selectedProject) {
        this.setCheckIn(selectedProject.value);
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
        onClear: this.onClear,
      };

      return <Main {...ComponentProps} />;
    }
  };

export default container;
