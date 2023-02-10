import React from 'react'
import { View } from 'react-native'
import styles from './Styling'

export function Fieldset(props){

    return (
        <View style={styles.fieldset}>
            {props.children}
        </View>
    )

}