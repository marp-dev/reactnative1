import {useState, useEffect} from 'react'
import {Platform} from 'react-native'
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers'
import {LoadFromServer, LoadDataSource} from './actions'
import {useDispatch, useSelector} from 'react-redux'
import * as Font from 'expo-font'
import { Ionicons } from '@expo/vector-icons'

export const store = createStore(reducers, applyMiddleware(thunk))

export const useLoadData = () => {
    const [fontLoaded, setFontLoaded] = useState(false)
    const dispatch = useDispatch()
    const data_source = useSelector((state) => state.data_source)
    const data_loaded = useSelector((state) => state.data_loaded)

    useEffect(async () => {
        await Font.loadAsync({ ...Ionicons.font })
        setFontLoaded(true)
    }, []);

    useEffect(() => {
        dispatch(LoadDataSource())
    }, [])

    useEffect(() => {
        if(data_source == 'server')
            dispatch(LoadFromServer())
    }, [data_source])

    return {data_loaded, fontLoaded}
}

export default store
