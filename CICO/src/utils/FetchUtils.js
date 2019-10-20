import axios from 'axios';
import {API_BASE} from 'react-native-dotenv';

// axios.defaults.baseURL= API_BASE;
// axios.defaults.timeout= 50000;
axios.defaults = {
  baseURL: API_BASE,
  timeout: 50000,
};
class FetchUtils {
  getData = (url, log) => {
    return axios
      .get(url)
      .then(function(response) {
        // handle success
        console.log(log, response);
        return response;
      })
      .catch(function(error) {
        // handle error
        console.error(log, error);
        return error;
      });
  };

  postData = (url, body, log) => {
    console.log(url, body);
    return axios
      .post(url, body)
      .then(function(response) {
        // handle success
        console.log(log, response);
        return response;
      })
      .catch(function(error) {
        // handle error
        console.error(log, error);
        return error;
      });
  };
}

export default new FetchUtils();
