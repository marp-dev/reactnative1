import {useState, useEffect} from 'react';
import {Platform} from 'react-native';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import {LoadFromServer, LoadDataSource} from './actions';
import {useDispatch, useSelector} from 'react-redux';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';

export const store = createStore(reducers, applyMiddleware(thunk))

export const useLoadData = () => {
    const [serverLoaded, setServerLoaded] = useState(false);
    const [fontLoaded, setFontLoaded] = useState(true);
    const dispatch = useDispatch();
    const data_source = useSelector((state) => state.data_source)

    useEffect(async () => {
        await Font.loadAsync({ ...Ionicons.font })
        setFontLoaded(true)
    }, []);

    useEffect(() => {
        dispatch(LoadDataSource())
    }, [])

    useEffect(() => {
        if(data_source == 'server')
            dispatch(LoadFromServer(() => setServerLoaded(true)));
    }, [data_source]);

    return {serverLoaded, fontLoaded};
}

export default store
