import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import styles from './styles/NotificationTypes.module.css'
import { Ionicons } from '@expo/vector-icons';

const objectIcon = {
    warning: "warning-outline",
    success: "checkmark",
    dangerous: "close",
    other: "bus"
}

const NotificationCard = ({ title = "", text = "", ...props }) => {
    function upFirstLetter(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    const typeNotification = () => {
        // console.log(upFirstLetter(Object.keys(props)[0]))
        return upFirstLetter(Object.keys(props)[0])
    }


    return (
        <>
            {
                objectIcon[Object.keys(props)[0]] ?
                    < View style={[styles.container, styles[`container${typeNotification()}`]]}>
                        {/* Icono izquierdo */}
                        <View style={[styles.iconLeft, styles[`icon${typeNotification()}`]]}>
                            <Ionicons
                                name={objectIcon[Object.keys(props)[0]]}
                                size={24}
                                color="black"
                            />
                        </View>
                        {/* Contenedor cental */}
                        <View style={styles.contentCenter}>
                            <Text style={styles.title}>{title}</Text>
                            <Text style={styles.text}>
                                {text}
                            </Text>
                        </View>
                    </View>
                    :
                    console.error(`La propiedad "${Object.keys(props)[0]}" no admitido`)
            }
        </>

    )
}

export default NotificationCard
