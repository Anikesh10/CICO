// App imports
import FetchUtils from '../../../utils/FetchUtils';

const authenticateUser = async body => {
  const url = 'user/authenticate';
  try {
    let response = await FetchUtils.postData(url, body, 'Login user ==>');
    return response;
  } catch (error) {
    console.error(error);
  }
};

export {authenticateUser};
