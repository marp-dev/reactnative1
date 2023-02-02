import React, { useState, useEffect } from 'react'; //
import { Container, Flex, Heading, Button, HamburgerIcon } from 'native-base';
import Menu from './menu';
import styles from './Styling';
import { useSelector } from 'react-redux';

export default (props) => {
  const [menuVisible, setMenuVisible] = useState(false); 
  const [headerTitle, setHeaderTitle] = useState('To-Dos');

  const currentRoute = useSelector((state) => state.currentRoute);

  useEffect(() => {
    if(currentRoute.id == "HOME"){ setHeaderTitle('To-Dos') }
    if(currentRoute.id == "ARCHIVE"){ setHeaderTitle('Archive') }
    if(currentRoute.id == "SETTINGS"){ setHeaderTitle('Settings') }
  }, [currentRoute])

  return (
    <>
      <Container style={styles.headerContainer}>
        <Flex direction="row" justifyContent="space-between" alignItems="center" style={styles.header}>
          <Heading color="white">{headerTitle}</Heading>
          <Button transparent onPress={() => setMenuVisible(!menuVisible)}>
            <HamburgerIcon style={styles.menuIcon} />
          </Button>
        </Flex>
      </Container>
      <Menu visible={menuVisible} onClose={() => setMenuVisible(false)}/>
    </>
  );
}
