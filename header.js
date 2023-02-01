import React, { useState } from 'react';
import { Container, Flex, Heading, Button, Icon } from 'native-base';
import Menu from './menu';
import styles from './Styling';

export default (props) => {
  const [menuVisible, setMenuVisible] = useState(false); 

  return (
    <>
      <Container style={styles.headerContainer}>
        <Flex direction="row" style={styles.header}>
            <Heading>To-Dos</Heading>
            <Button transparent onPress={() => setMenuVisible(!menuVisible)}>
              <Icon name='more' />
            </Button>
        </Flex>
      </Container>
      <Menu visible={menuVisible} onClose={() => setMenuVisible(false)}/>
    </>
  );
}
