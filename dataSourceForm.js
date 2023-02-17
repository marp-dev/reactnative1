import React, {useState, useEffect} from 'react'
import { Select } from "native-base"
import { View, Text, TextInput, Button } from 'react-native'
import styles from './Styling'
import { Fieldset } from './Forms'
import {useDispatch, useSelector} from 'react-redux'
import {SetDataSource as _SetDataSource, SetDataSourceURL, CreateNotification} from './actions'

export default function(props){

    const _data_source = useSelector( (state) => state.data_source )
    const _data_source_url = useSelector( (state) => state.data_source_url )
    const _errors = useSelector( (state) => state.errors )
    const [dataSource, setDataSource] = useState(_data_source)
    const [sourceLocation, setSourceLocation] = useState(_data_source_url)
    const dispatch = useDispatch()

    const ServerForm = (props) => {
        if(dataSource != "server"){
            return <>
            </>
        }

        return <>
            <TextInput
                onSubmitEditing={setSourceLocation}
                onBlur={setSourceLocation}
                onKeyPress={(e) => { if(e.keyCode == 13) setSourceLocation(e.target.value) }}
                style={props.style}
                placeholder={`${sourceLocation}`}></TextInput>
        </>
    }

    const DeviceForm = (props) => {

        if(dataSource != "device"){
            return <>
            </>
        }

        return <>
            <Text style={props.style}>
                The App will use the available Storage API provided by the Device you are using
            </Text>
        </>

    }

    useEffect(() => {
        if(_data_source != dataSource) 
            dispatch(_SetDataSource(dataSource) )
    }, [dataSource])

    useEffect(() => {
        if(sourceLocation == '' || _data_source_url == sourceLocation) return;

        if(_data_source_url != sourceLocation){
            dispatch(SetDataSourceURL(sourceLocation) )
        }
    }, [sourceLocation])

    useEffect(() => {
        setDataSource(_data_source)
        setSourceLocation(_data_source_url)
    }, [_errors])

    return (<>
        <View style={styles.container}>

            <Fieldset>
                <Text style={styles.field}>Data Source</Text>
            </Fieldset>

            <Fieldset>
                <Select
                    flexGrow="1"
                    selectedValue={dataSource}
                    accessibilityLabel="Choose data source"
                    placeholder="Choose data source"
                    _selectedItem={{bg: "teal.600"}}
                    onValueChange={(itemValue) => setDataSource(itemValue)}>
                    <Select.Item label="Local Server" value="server" />
                </Select>
            </Fieldset>


            <Fieldset>
                <ServerForm style={styles.field}/>
            </Fieldset>

        </View>
    </>);

}