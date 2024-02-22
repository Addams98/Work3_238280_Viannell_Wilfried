// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from './src/screens/HomeScreen';
import CalculatorScreen from './src/screens/CalculatorScreen';
import ContactsScreen from './src/screens/ContactsScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import SignInScreen from './src/screens/SignInScreen';
import ThemeContext, { ThemeProvider } from './src/utils/ThemeContext';
import OfflineAlert from './src/components/OfflineAlert';
import { SafeAreaView } from 'react-native-safe-area-context';


const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const HomeTabScreen = () => <HomeScreen />;
const CalculatorTabScreen = () => <CalculatorScreen />;
const ContactsTabScreen = () => <ContactsScreen />;
const ProfileTabScreen = () => <ProfileScreen />;
const SignUpTabScreen = () => <SignUpScreen />;
const SignInTabScreen = () => <SignInScreen />;

const TabNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="Home" 
        component={HomeTabScreen} 
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons 
              name={focused ? 'home' : 'home-outline'} 
              size={size} 
              color={color} 
            />
          ),
        }}
      />
      <Tab.Screen 
        name="Calculator" 
        component={CalculatorTabScreen} 
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons 
              name={focused ? 'calculator' : 'calculator-outline'} 
              size={size} 
              color={color} 
            />
          ),
        }}
      />
      <Tab.Screen 
        name="Contacts" 
        component={ContactsTabScreen} 
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons 
              name={focused ? 'people' : 'people-outline'} 
              size={size} 
              color={color} 
            />
          ),
        }}
      />
      <Tab.Screen 
        name="Profile" 
        component={ProfileTabScreen} 
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons 
              name={focused ? 'person' : 'person-outline'} 
              size={size} 
              color={color} 
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Dashboard" component={TabNavigation} />
      <Drawer.Screen name="Sign Up" component={SignUpTabScreen} />
      <Drawer.Screen name="Sign In" component={SignInTabScreen} />
    </Drawer.Navigator>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <ThemeContext.Consumer>
        {({ theme }) => (
          <NavigationContainer>
            <DrawerNavigation />
            <OfflineAlert />
          </NavigationContainer>
        )}
      </ThemeContext.Consumer>
    </ThemeProvider>
  );
};

export default App;
