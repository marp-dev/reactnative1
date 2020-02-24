import React from 'react';
import { StyleSheet, Animated } from 'react-native';
import { Container, Button, Text } from 'native-base';
import styles from './Styling';

export default (props) => {
    const menuStyle = [styles.menu, styles.menuZIndex];
    if(props.visible) menuStyle.push(styles.dFlex);
    return (
        <Animated.View style={menuStyle}>
            <Button full>
                <Text>To-Dos</Text>
            </Button>
            <Button full>
                <Text>Archive</Text>
            </Button>
            <Button full>
                <Text>Settings</Text>
            </Button>
        </Animated.View>
    );

}