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

export {getProjectList};
