import React from 'react';
import {Loader, Login, CheckIn} from '../screens';
import {
  Scene,
  Router,
  Actions,
  Reducer,
  ActionConst,
  Overlay,
  Tabs,
  Modal,
  Drawer,
  Stack,
  Lightbox,
} from 'react-native-router-flux';

const transitionConfig = () => ({
  screenInterpolator: StackViewStyleInterpolator.forFadeFromBottomAndroid,
});

const Routes = () => {
  return (
    <Router>
      <Lightbox>
        <Stack key="root" titleStyle={{alignSelf: 'center'}} hideNavBar>
          <Scene key="login" component={Login} title="Login" />
          <Scene key="checkIn" component={CheckIn} title="CheckIn" initial />
        </Stack>
        {/* Lightbox components will lay over the screen, allowing transparency*/}
        <Scene key="loader" component={Loader} />
      </Lightbox>
    </Router>
  );
};

export default Routes;
