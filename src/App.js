import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import store from './redux/store';
import AppNavigator from './navigation/AppNavigator';
import { requestUserPermission } from './services/fcm';
import './services/amplify';

const App = () => {
  React.useEffect(() => {
    requestUserPermission();
  }, []);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;