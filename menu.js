import React from 'react';
import { StyleSheet, Animated } from 'react-native';
import { Container, Button, Text } from 'native-base';
import {useDispatch} from 'react-redux';
import { LoadRoute } from './actions';
import styles from './Styling';

export default (props) => {
    const dispatch = useDispatch();
    const menuStyle = [styles.menu, styles.menuZIndex];
    if(props.visible) menuStyle.push(styles.dFlex);
    return (
        <Animated.View style={menuStyle}>
            <Button full onPress={() => dispatch(LoadRoute({id:'HOME'}))}>
                <Text>To-Dos</Text>
            </Button>
            <Button full onPress={() => dispatch(LoadRoute({id:'ARCHIVE'}))}>
                <Text>Archive</Text>
            </Button>
            <Button full>
                <Text>Settings</Text>
            </Button>
        </Animated.View>
    );

}