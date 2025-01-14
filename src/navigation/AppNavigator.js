import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import AboutScreen from '../screens/AboutScreen';
import MonthlyBulletinScreen from '../screens/MonthlyBulletinScreen';
import ActivityPagesScreen from '../screens/ActivityPagesScreen';
import BookRecommendationsScreen from '../screens/BookRecommendationsScreen';
import MovieRecommendationsScreen from '../screens/MovieRecommendationsScreen';
import BrainGamesScreen from '../screens/BrainGamesScreen';
import NearestLibraryScreen from '../screens/NearestLibraryScreen';
import AllArticlesScreen from '../screens/AllArticlesScreen';
import ContactScreen from '../screens/ContactScreen';
import Menu from '../components/Menu';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
        <Stack.Screen name="MonthlyBulletin" component={MonthlyBulletinScreen} />
        <Stack.Screen name="ActivityPages" component={ActivityPagesScreen} />
        <Stack.Screen name="BookRecommendations" component={BookRecommendationsScreen} />
        <Stack.Screen name="MovieRecommendations" component={MovieRecommendationsScreen} />
        <Stack.Screen name="BrainGames" component={BrainGamesScreen} />
        <Stack.Screen name="NearestLibrary" component={NearestLibraryScreen} />
        <Stack.Screen name="AllArticles" component={AllArticlesScreen} />
        <Stack.Screen name="Contact" component={ContactScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;