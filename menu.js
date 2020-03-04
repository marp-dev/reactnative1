import React from 'react';
import { Animated } from 'react-native';
import { Platform, Container, Button, Text } from 'native-base';
import {useDispatch} from 'react-redux';
import { LoadRoute } from './actions';
import styles from './Styling';

export default (props) => {
    const dispatch = useDispatch();

    if(!props.visible) return <></>;
    return (
        <Animated.View style={styles.menu}>
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