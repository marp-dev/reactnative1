import React, {useState, useEffect} from 'react'
import { Select } from "native-base"
import { View, Text, TextInput, Button } from 'react-native'
import styles from './Styling'
import { Fieldset } from './Forms'
import {useDispatch, useSelector} from 'react-redux'
import {SetDataSource as _SetDataSource} from './actions'
import {DATA_SOURCE_URL} from './global'

export default function(props){

    const _data_source = useSelector( (state) => state.data_source )
    const [dataSource, setDataSource] = useState(_data_source)
    const [serverLocation, setserverLocation] = useState('')
    const dispatch = useDispatch()

    const ServerForm = (props) => {
        if(dataSource != "server"){
            return <>
            </>
        }

        return <>
            <TextInput
                onChangeText={setserverLocation}
                value={serverLocation}
                style={props.style}
                placeholder={`${DATA_SOURCE_URL}`}></TextInput>
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