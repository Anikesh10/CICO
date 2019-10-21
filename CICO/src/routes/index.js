import React from 'react';
import {Loader, Login, CheckIn} from '../screens';
import {
  Scene,
  Router,
  Stack,
  Lightbox,
  ActionConst,
} from 'react-native-router-flux';
import GlobalContext from '../context/GlobalContext';

const Routes = props => {
  return (
    <GlobalContext.Consumer>
      {contextProps => (
        <Router>
          <Lightbox key="modal">
            <Stack key="root" hideNavBar {...contextProps}>
              <Scene key="login" title="Login" component={Login} initial />
              <Scene
                key="checkIn"
                title="CheckIn"
                {...contextProps}
                component={CheckIn}
                clone
              />
            </Stack>
            {/* Lightbox components will lay over the screen, allowing transparency*/}
            <Scene key="loader" component={Loader} />
          </Lightbox>
        </Router>
      )}
    </GlobalContext.Consumer>
  );
};

export default Routes;
