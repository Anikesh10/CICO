import {API_BASE} from 'react-native-dotenv';
import axios from 'axios';

axios.defaults.baseURL = API_BASE;
axios.defaults.timeout = 50000;

// Handle response
const formatResponse = response => {
  if (
    response.status >= 200 &&
    response.status < 300 &&
    (response.data.user || response.data.projectlist)
  ) {
    return {
      code: response.status,
      data: response.data,
      success: true,
    };
  } else if (response.data.status) {
    return {
      code: response.status,
      data: {
        message: response.data.status,
      },
      success: false,
    };
  } else {
    return {
      code: response.response.status,
      data: {
        message: 'Something went wrong.',
      },
      success: false,
    };
  }
};
class FetchUtils {
  getData = async (url, log) => {
    return axios
      .get(url)
      .then(function(response) {
        console.log(log, response);
        // handle success
        return formatResponse(response);
      })
      .catch(function(error) {
        // handle error
        return formatResponse(error);
      });
  };

  postData = (url, body, log) => {
    console.log(url, body);
    return axios
      .post(url, body)
      .then(function(response) {
        console.log(log, response);
        // handle success
        return formatResponse(response);
      })
      .catch(function(error) {
        // handle error
        return formatResponse(error);
      });
  };
}

export default new FetchUtils();
