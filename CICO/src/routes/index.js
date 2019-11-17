import React from 'react';
import {Loader, Login, CheckIn} from '../screens';
import {Scene, Router, Stack, Lightbox} from 'react-native-router-flux';
import GlobalContext from '../context/GlobalContext';

const Routes = props => {
  return (
    <GlobalContext.Consumer>
      {contextProps => {
        return (
          <Router>
            <Lightbox key="modal">
              <Stack key="root" hideNavBar {...contextProps}>
                <Scene key="login" title="Login" component={Login} initial />
                <Scene
                  key="checkIn"
                  title="CheckIn"
                  profile={contextProps}
                  component={CheckIn}
                />
              </Stack>
              {/* Lightbox components will lay over the screen, allowing transparency*/}
              <Scene key="loader" component={Loader} />
            </Lightbox>
          </Router>
        );
      }}
    </GlobalContext.Consumer>
  );
};

export default Routes;
