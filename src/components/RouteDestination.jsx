import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import styles from "@/utils/styles/RouteSearch.module.css";
import Icon from "./Icon"

const CustomText = ({ text, gray }) => {
    return (
        <Text style={[styles.text, gray && { color: "#9D9D9D" }]} >{text}</Text>
    )
}


const RouteDestination = () => {
    return (
        <View style={[styles.container, styles.containerRouteDestination]}>
            <View style={[styles.contentText, { flex: 5 }]}>
                <CustomText text="Destino" />
                <CustomText gray text="Guanare, Portuguesa" />
            </View>
            <View style={styles.containerButton}>
                <View style={[styles.borderButton, { backgroundColor: "rgba(241, 241, 241, 0.2)" }]}>
                    <Icon name={"arrow-expand-down"} color={"white"} size={24} />
                </View>
            </View>
        </View>
    )
}

export default RouteDestination
