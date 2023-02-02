import React from 'react';
import { View, TouchableWithoutFeedback, Animated } from 'react-native';
import { Button, Text } from 'native-base';
import {useDispatch} from 'react-redux';
import { LoadRoute } from './actions';
import styles from './Styling';

export default (props) => {
    const dispatch = useDispatch();

    const closeMenu = () => {
        if(props.onClose) props.onClose();
    };
    const changeRoute = (route) => {
        if(route) dispatch(LoadRoute(route));
        closeMenu();
    };

    if(!props.visible) return <></>;
    return (
        <TouchableWithoutFeedback onPress={closeMenu}>
            <Animated.View style={styles.menu}>
                <View style={{backgroundColor:'white'}}>
                    <Button borderRadius="0" full onPress={() => changeRoute({id:'HOME'})}>
                        <Text color="white">To-Dos</Text>
                    </Button>
                    <Button borderRadius="0" full onPress={() => changeRoute({id:'ARCHIVE'})}>
                        <Text color="white">Archive</Text>
                    </Button>
                    <Button borderRadius="0" full>
                        <Text color="white">Settings</Text>
                    </Button>
                </View>
            </Animated.View>
        </TouchableWithoutFeedback>
    );

}