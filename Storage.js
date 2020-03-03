import {useState, useEffect} from 'react';
import {Platform} from 'react-native';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import {LoadFromServer} from './actions';
import {useDispatch, useSelector} from 'react-redux';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';

export const store = createStore(reducers, applyMiddleware(thunk))

export const load = () => {
    const [serverLoaded, setServerLoaded] = useState(false);
    const [fontLoaded, setFontLoaded] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(LoadFromServer(() => setServerLoaded(true)));
        (async () => {
            //"a try? why?" => https://github.com/expo/expo/issues/4217
            try{
            await Font.loadAsync({
                'Roboto': require('native-base/Fonts/Roboto.ttf'),
                'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
                ...Ionicons.font,
            });
            }catch(e){}
            setFontLoaded(true);
        })();
    }, []);
    return {serverLoaded, fontLoaded};
}

export default store
