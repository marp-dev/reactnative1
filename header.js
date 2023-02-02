import React, { useState } from 'react';
import { Container, Flex, Heading, Button, HamburgerIcon } from 'native-base';
import Menu from './menu';
import styles from './Styling';

export default (props) => {
  const [menuVisible, setMenuVisible] = useState(false); 

  return (
    <>
      <Container style={styles.headerContainer}>
        <Flex direction="row" justifyContent="space-between" alignItems="center" style={styles.header}>
          <Heading color="white">To-Dos</Heading>
          <Button transparent onPress={() => setMenuVisible(!menuVisible)}>
            <HamburgerIcon style={styles.menuIcon} />
          </Button>
        </Flex>
      </Container>
      <Menu visible={menuVisible} onClose={() => setMenuVisible(false)}/>
    </>
  );
}
