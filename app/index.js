import React from 'react';
import {StackNavigator, SwitchNavigator} from 'react-navigation';
import HomeScreen from './Home';

const RootNavigator = (signedIn = false) => {
    return SwitchNavigator(
        {
          //  Guest: {
            //    screen: LoginScreen
            //},
            User: {
                screen: HomeScreen
            }
        },
        {
            initialRouteName: signedIn ? "User" : "Guest"
        }
    );
};

const Screens = StackNavigator(
    {
        Home: {
            screen: HomeScreen
        },
        
      //  Profile:{
        //  screen:ProfileScreen
        //}
    },
    {
        initialRouteName: 'Home',
    }
);

export default class App extends React.Component {
    render() {
        return <Screens/>
    }
}
