import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from './views/Home';
import Favorites from './views/Favorites';
import About from './views/About';
import Login from './views/Login';
import Registry from './views/Registry';
import ContextProvider from './context';
import { QueryClient, QueryClientProvider } from 'react-query';
// Navegador, pantallas de rutas, estilos de iconos.

function App(): JSX.Element {
  const Tab = createBottomTabNavigator();
  // usamos react-query.
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <ContextProvider>
        <NavigationContainer>
          <Tab.Navigator initialRouteName="Login"
            screenOptions={({ route }) => ({
              tabBarIcon: ({ color }) => {
                let icon = "";
                if (route.name === 'Home') {
                  icon = 'home';
                } else if (route.name === 'Favoritos') {
                  icon = 'heart';
                } else if (route.name === 'Acerca') {
                  icon = 'information';
                } else if (route.name === 'Login') {
                  icon = 'account-circle';
                } else if (route.name === 'Registry') {
                  icon = 'note';
                }
                return <Icon name={icon} size={30} color={color} />;
              },
              tabBarActiveTintColor: '#18BDB2',
              tabBarInactiveTintColor: 'gray',
              headerShown: false,
            })}
          >
            <Tab.Screen name="Login" component={Login} />
            <Tab.Screen name="Registry" component={Registry} />
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Favoritos" component={Favorites} />
            <Tab.Screen name="Acerca" component={About} />
          </Tab.Navigator>
        </NavigationContainer>
      </ContextProvider>
    </QueryClientProvider>
  );
}

export default App;
