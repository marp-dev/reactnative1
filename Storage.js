import {useEffect} from 'react';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import {LoadFromServer} from './actions';
import {useDispatch, useSelector} from 'react-redux';

export const store = createStore(reducers, applyMiddleware(thunk))

export const load = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(LoadFromServer());
    }, []);
}

export default store
