import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Header, Left, Body, Right, Title, Button, Icon } from 'native-base';
import Menu from './menu';
import styles from './Styling';

export default (props) => {
  const [menuVisible, setMenuVisible] = useState(false); 

  return (
    <React.Fragment>
      <Header style={[styles.relative, styles.menuZIndex]}>
        <Left/>
        <Body>
          <Title>To-Dos</Title>
        </Body>
        <Right>
          <Button transparent onPress={() => setMenuVisible(!menuVisible)}>
            <Icon name='more' />
          </Button>
        </Right>
        <Menu visible={menuVisible}/>
      </Header>
    </React.Fragment>
  );
}