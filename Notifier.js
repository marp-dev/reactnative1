import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import { Platform, StyleSheet, View, Text } from 'react-native';
import _ from 'lodash';

const style = StyleSheet.create({
    notifier: {
        ...Platform.select({
            android: { zIndex: 12,elevation: 12 },
            web: {zIndex: 12}
          }),
        position:'absolute',
        top:0,
        right:0,
        width:300,
        paddingLeft:10,
        paddingRight:10
    },
    notification: {
        marginTop:10,
        paddingLeft:15,
        paddingRight:15,
        paddingTop:10,
        paddingBottom:10,
        opacity: 0.8
    },
    notice: {
        backgroundColor: 'green'
    },
    warning: {
        backgroundColor: 'yellow'
    },
    danger: {
        backgroundColor: 'red'
    },
    notificationTitle: {
        fontWeight:'bold',
        opacity:1
    },
    notificationDescription: {
        fontWeight:'normal',
        opacity:1
    }
});

const NotifierList = () => {
    const errors = useSelector((state) => state.errors);
    const [notifications, setNotifications] = useState([]);
    const [timers, setTimers] = useState([]);
    const notificationTime = 10000;

    useEffect(() => {
        console.log(errors);
        _.each(errors, (error)=>{
            setNotifications([...notifications, <Notification type="danger" title={error.action_name} description={error.error.message}/>]);
            const timeout = setTimeout(() => {
                setNotifications(_.drop(notifications,1));
            }, notificationTime);
            setTimers([...timers, timeout]);
        });
    }, [errors]);
  
    return (
        <View style={style.notifier}>
            {notifications}
        </View>
    );
};

const Notification = ({type, title, description}) => {
    let styleType;
    switch(type){
        case 'danger':
            styleType = style.danger;
            break;
        case 'warning':
            styleType = style.warning;
            break;
        case 'notice':
            styleType = style.notice;
            break;
    }
    return (
        <View style={[style.notification, styleType]}>
            <Text style={style.notificationTitle}>{title}</Text>
            <Text style={style.notificationDescription}>{description}</Text>
        </View>
    );
};

export default NotifierList