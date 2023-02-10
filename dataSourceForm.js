import React, {useState, useEffect} from 'react'
import { Select } from "native-base"
import { View, Text, TextInput, Button } from 'react-native'
import styles from './Styling'
import { Fieldset } from './Forms'
import {useDispatch} from 'react-redux'
import * as Actions from './actions'

export default function(props){

    const [dataSource, setDataSource] = useState('')
    const [serverLocation, setserverLocation] = useState('')

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
                placeholder="http://127.0.0.1:3000/"></TextInput>
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

    return <>
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
                    onValueChange={itemValue => setDataSource(itemValue)}>
                    <Select.Item label="Local Server" value="server" />
                    <Select.Item label="Device" value="device" />
                </Select>
            </Fieldset>


            <Fieldset>
                <ServerForm style={styles.field}/>
                <DeviceForm style={styles.field}/>
            </Fieldset>

        </View>
    </>;

}