import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons'

import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailsScreen from './screens/MealDetailsScreen';
import FavoritScreen from './screens/FavoritScreen';
// import FavoritContextProvider from './store/context/favorit-context'
// import { title } from 'process';
import { Provider } from 'react-redux';
import { store } from './store/redux/store'


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#320064" },
        headerTintColor: 'white',
        sceneContainerStyle: { backgroundColor: '#48018a' },
        drawerContentStyle: { backgroundColor: '#d2cfcf' },
        // drawerInactiveTintColor: 'white',
        drawerActiveTintColor: '#2e015b',
        drawerActiveBackgroundColor: '#b976fc'
      }}
    >
      <Drawer.Screen name='Categories' component={CategoriesScreen} options={{
        title: 'All Categories',
        drawerIcon: ({ color, size }) => <Ionicons name='list' color={color} size={size} />
      }} />
      <Drawer.Screen name='Favorits' component={FavoritScreen} options={{
        drawerIcon: ({ color, size }) => <Ionicons name='star' color={color} size={size} />
      }} />
    </Drawer.Navigator>
  )
}

export default function App() {
  return (
    <>
      <StatusBar style='light' />
      {/* <FavoritContextProvider> */}
      <Provider store = {store}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: "#320064" },
              headerTintColor: 'white',
              contentStyle: { backgroundColor: '#48018a' },
            }}>
            <Stack.Screen
              name='Drawer'
              component={DrawerNavigator}
              options={{
                headerShown: false
              }} />
            <Stack.Screen
              name='Meals OverView'
              component={MealsOverviewScreen}

            />
            <Stack.Screen
              name='Meal Details'
              component={MealDetailsScreen}
              options={{
                title: 'About The Meal'
              }}

            />
          </Stack.Navigator>
        </NavigationContainer>
        {/* </FavoritContextProvider> */}
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {

  },
});
