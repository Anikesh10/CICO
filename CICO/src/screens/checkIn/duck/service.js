// App imports
import FetchUtils from '../../../utils/FetchUtils';

const getProjectList = async body => {
  const url = '/project/projectList';
  try {
    let response = await FetchUtils.getData(url, 'Project list ==>');
    return response;
  } catch (error) {
    console.log(error);
  }
};

const checkinUser = async body => {
  const url = '/checkIn';
  try {
    console.log('hit');
    let response = await FetchUtils.postData(url, body, 'checkin user ==>');
    console.log('hit', response);
    return response;
  } catch (error) {
    console.log(error);
  }
};

const checkoutUser = async body => {
  const url = '/checkIn/checkout';
  try {
    let response = await FetchUtils.postData(url, body, 'checkout user ==>');
    return response;
  } catch (error) {
    console.log(error);
  }
};

export {getProjectList, checkinUser, checkoutUser};
