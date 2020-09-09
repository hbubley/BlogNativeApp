import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import IndexScreen from './src/screens/IndexScreen';
import BlogState from './src/context/blog/BlogState';
const navigator = createStackNavigator(
  {
    Index: IndexScreen,
  },
  {
    initialRouteName: 'Index',
    defaultNavigationOptions: 'Home',
  },
);

const App = createAppContainer(navigator);
export default () => {
  return (
    <BlogState>
      <App />
    </BlogState>
  );
};
