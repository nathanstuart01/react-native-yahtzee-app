import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NativeRouter, Route, Switch } from 'react-router-native';
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Drawer,
} from 'native-base';

import Yahtzee from './Yahtzee';
import Login from './Login';
import Register from './Register';
import Rules from './Rules';
import Scores from './Scores';
import About from './About';
import Store from './Store';
import ProtectedRoute from './ProtectedRoute';

export default class App extends React.Component {

  async componentWillMount() {
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    });
  }

  render() {
    return (
    <Provider>
      <NativeRouter>
        <Container>
          <Header>
            <Left>
              <Button transparent>
                <Icon name='menu' />
              </Button>
            </Left>
            <Body>
              <Title>Yahtzee</Title>
            </Body>
            <Right />
          </Header>
          <Content padder>
            <Switch>
              <ProtectedRoute exact path="/" component={Yahtzee} />
              <ProtectedRoute exact path="/scores" component={Scores} />
              <Route exact path="/" component={Yahtzee} />
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
              <Route exact path="/about" component={About} />
              <Route exact path="/rules" component={Rules} />
              <Route exact path="/scores" component={Scores} />
            </Switch>
          </Content>
        </Container>
      </NativeRouter>
    </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
