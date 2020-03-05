import React, { useState } from 'react';
import { Container, Header, Left, Body, Right, Title, Button, Icon } from 'native-base';
import Menu from './menu';
import styles from './Styling';

export default (props) => {
  const [menuVisible, setMenuVisible] = useState(false); 

  return (
    <>
      <Container style={styles.headerContainer}>
        <Header style={styles.header}>
          <Left/>
          <Body>
            <Title>To-Dos</Title>
          </Body>
          <Right>
            <Button transparent onPress={() => setMenuVisible(!menuVisible)}>
              <Icon name='more' />
            </Button>
          </Right>
        </Header>
      </Container>
      <Menu visible={menuVisible} onClose={() => setMenuVisible(false)}/>
    </>
  );
}