import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from './views/Home';
import Collection from './views/Collection';
import PokemonSelection from './views/PokemonSelection';
import About from './views/About';
import Login from './views/Login';
import Registry from './views/Registry';
import Avatar from './views/AvatarSelection';
import ContextProvider from './context';
import { QueryClient, QueryClientProvider } from 'react-query';

const options = ({ route }: { route: any }) => ({
  tabBarIcon: ({ color }: { color: string }) => {
    let icon = "";
    if (route.name === 'Pokedex') {
      icon = 'crosshairs';
    } else if (route.name === 'Colección') {
      icon = 'pokeball';
    } else if (route.name === 'Acerca') {
      icon = 'information';
    }
    return <Icon name={icon} size={30} color={color} />;
  },
  tabBarActiveTintColor: '#E00004',
  tabBarInactiveTintColor: 'gray',
  headerShown: false,
})

function NavigationWithTabs() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator initialRouteName="Login"
      screenOptions={options}
    >
      <Tab.Screen name="Pokedex" component={Home} />
      <Tab.Screen name="Colección" component={Collection} />
      <Tab.Screen name="Acerca" component={About} />
    </Tab.Navigator>
  );
}

function App(): JSX.Element {

  const queryClient = new QueryClient();
  const Stack = createNativeStackNavigator();

  return (
    <QueryClientProvider client={queryClient}>
      <ContextProvider>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Registry" component={Registry} />
            <Stack.Screen name="Avatar" component={Avatar} />
            <Stack.Screen name="Selección" component={PokemonSelection} />
            <Stack.Screen name="PokedexTab" component={NavigationWithTabs} />
          </Stack.Navigator>
        </NavigationContainer>
      </ContextProvider>
    </QueryClientProvider>
  );
}

export default App;
