import React from 'react';
import {Text} from 'react-native';
import { useSelector } from 'react-redux';

export default (props) => {
    const currentRoute = useSelector((state) => state.currentRoute);

    const rendering = () => {
        if(props.id == currentRoute.id){
            return props.children;
        }
        return;    
    };

    return (
        <>
            {rendering()}
        </>
    );
}