import React, {useState, useEffect} from 'react'
import { Select } from "native-base"
import { View, Text, TextInput, Button } from 'react-native'
import styles from './Styling'
import {useDispatch} from 'react-redux'
import * as Actions from './actions'

export default function(props){

    const [dataSource, setDataSource] = useState('')
    const [serverLocation, setserverLocation] = useState('')

    const ServerForm = () => {
        if(dataSource != "server"){
            return <>
            </>
        }

        return <>
            <TextInput
                onChangeText={setserverLocation}
                value={serverLocation}
                placeholder="http://127.0.0.1:3000/"></TextInput>
        </>
    }

    const DeviceForm = () => {

        if(dataSource != "device"){
            return <>
            </>
        }

        return <>
            <Text>
                The App will use the available Storage API provided by the Device you are using
            </Text>
        </>

    }

    return <>
        <View>

            <Text>Data Source</Text>

            <Select
                selectedValue={dataSource}
                minWidth="200"
                accessibilityLabel="Choose data source"
                placeholder="Choose data source"
                _selectedItem={{bg: "teal.600"}}
                onValueChange={itemValue => setDataSource(itemValue)}>

                <Select.Item label="Local Server" value="server" />
                <Select.Item label="Device" value="device" />

            </Select>

            <ServerForm/>
            <DeviceForm/>

        </View>
    </>;

}