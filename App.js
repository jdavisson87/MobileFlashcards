import React from 'react'
import { Text, View, StatusBar, Platform } from 'react-native'
import { Constants } from 'expo'
import NewDeck from './components/NewDeck'
import DeckList from './components/DeckList'
import DeckEdit from './components/DeckEdit'
import AddCard from './components/AddCard'
import RemoveConfirm from './components/RemoveConfirm'
import QuizView from './components/QuizView'
import { createBottomTabNavigator, createMaterialTopTabNavigator, createAppContainer, createStackNavigator } from 'react-navigation'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import middleware from './middleware'
import { Entypo, FontAwesome } from '@expo/vector-icons'


function FlashCardStatusBar({ backgroundColor, ...props}) {
  return (
    <View style={{backgroundColor, height: Constants.statusBarHeight}}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

const RouteConfigs = {
  DeckList: {
    screen: DeckList,
    navigationOptions: {
      tabBarLabel: 'Deck List',
      tabBarIcon: ({ tintColor }) => <Entypo name='documents' size={30} color={tintColor} />
    }
  },
  NewDeck: {
    screen: NewDeck,
    navigationOptions: {
      tabBarLabel: 'New Deck',
      tabBarIcon: ({ tintColor }) => <FontAwesome name='plus-square' size={30} color={tintColor} />
    }
  },
}

const TabNavigatorConfig = {
  navigationOptions: {
    header: null
  },
  tabBarOptions: {
    activeTintColor: 'white',
    style: {
      height: 56,
      backgroundColor: 'black',
      shadowColor: 'rgba(0, 0, 0, 0.24)',
      shadowOffset: {
        width: 0,
        height: 3
      },
      shadowRadius: 6,
      shadowOpacity: 1
    }
  }
}

const Tabs =
  Platform.OS === 'ios'
    ? createBottomTabNavigator(RouteConfigs, TabNavigatorConfig)
    : createMaterialTopTabNavigator(RouteConfigs, TabNavigatorConfig)

const TabsContainer = createAppContainer(Tabs)

const MainNavigator = createStackNavigator({
  home: {
    screen: Tabs,
    navigationOptions: {
      header: null,
    },
  },
  DeckEdit: {
    screen: DeckEdit,
    navigationOptions: ({ navigation }) => ({
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: 'black',
      }
    })
  },
  AddCard: {
    screen: AddCard,
    navigationOptions: ({ navigation }) => ({
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: 'black',
      }
    })
  },
  RemoveConfirm: {
    screen: RemoveConfirm,
    navigationOptions: ({ navigation }) => ({
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: 'black',
      }
    })
  },
  QuizView: {
    screen: QuizView,
    navigationOptions: ({ navigation }) => ({
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: 'black',
      }
    })
  },
});

const Main = createAppContainer(MainNavigator)

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducer, middleware)}>
        <View style={{flex:1}}>
          <FlashCardStatusBar backgroundColor={'black'} barStyle='light-content'/>
          <Main />
        </View>
      </Provider>
    );
  }
}
