import React from 'react';
import { View, TouchableWithoutFeedback, Animated } from 'react-native';
import { Button, Text } from 'native-base';
import {useDispatch, useSelector} from 'react-redux';
import { LoadRoute } from './actions';
import styles from './Styling';

export default (props) => {
    const routes = useSelector((state) => state.routes)
    const dispatch = useDispatch();

    const closeMenu = () => {
        if(props.onClose) props.onClose();
    };
    const changeRoute = (route) => {
        if(route) dispatch(LoadRoute(route));
        closeMenu();
    };
    const menuSorting = (a, b) => {
        if(a.order < b.order) return -1;
        if(a.order > b.order) return 1;
        return 0;
    };

    if(!props.visible) return <></>;
    return (
        <TouchableWithoutFeedback onPress={closeMenu}>
            <Animated.View style={styles.menu}>
                <View style={{backgroundColor:'white'}}>
                    {
                        routes
                        .sort(menuSorting)
                        .map((route) => {
                            return (
                                <Button key={route.id} borderRadius="0" full onPress={() => changeRoute({id:route.id})}>
                                    <Text color="white">{route.label}</Text>
                                </Button>
                            )
                        })
                    }
                </View>
            </Animated.View>
        </TouchableWithoutFeedback>
    );

}