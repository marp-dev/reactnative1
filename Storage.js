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
    const [fontLoaded, setFontLoaded] = useState(true);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(LoadFromServer(() => setServerLoaded(true)));
        (async () => {

            await Font.loadAsync({
                ...Ionicons.font,
            });
            setFontLoaded(true);
        })();
    }, []);
    return {serverLoaded, fontLoaded};
}

export default store
