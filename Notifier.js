import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { Platform, StyleSheet, View, Text, TouchableWithoutFeedback } from 'react-native';
import {CloseNotification} from './actions';
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
    const notifications = useSelector((state) => state.notifications);
    const dispatch = useDispatch();
    const list =    _.map(notifications, 
                        (notification) =>
                            <Notification
                            timestamp={notification.timestamp}
                            key={notification.timestamp}
                            type={notification.type}
                            title={notification.title}
                            description={notification.description}
                            onClose={() => { dispatch(CloseNotification(notification.timestamp)); }}/>
                    );
  
    return (
        <View style={style.notifier}>
            {list}
        </View>
    );
};

const Notification = ({timestamp, type, title, description, onClose}) => {
    let styleType;
    switch(type){
        case 'danger':
            styleType = style.danger;
            break;
        case 'warning':
            styleType = style.warning;
            break;
        case 'notice':
        default:
            styleType = style.notice;
    }

    const notificationTime = 10000;
    const [timer, setTimer] = useState(null);
    useEffect(() => {
        setTimer(setTimeout(function(){
            //call fading animation an then...
            onClose();
        }, notificationTime));
    }, []);

    const onClick = () => {
        clearTimeout(timer);
        //call fading animation an then...
        onClose();
    };

    return (
        <TouchableWithoutFeedback onPress={onClick}>
            <View style={[style.notification, styleType]}>
                <Text style={style.notificationTitle}>{title}</Text>
                <Text style={style.notificationDescription}>{description}</Text>
            </View>
        </TouchableWithoutFeedback>
    );
};

export default NotifierList