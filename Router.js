import React, {useEffect} from 'react';
import { AddRoute, RemoveRoute } from './actions';
import { useDispatch, useSelector } from 'react-redux';

export default (props) => {
    const currentRoute = useSelector((state) => state.currentRoute);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(AddRoute({
            id: props.id,
            label: props.label,
            order: props.order
        }));
        return function cleanup(){
            dispatch(RemoveRoute(props.id));
        }
    }, []);

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