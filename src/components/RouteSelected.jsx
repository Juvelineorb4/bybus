import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import styles from "@/utils/styles/RouteSearch.module.css";
import Icon from "./Icon"
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
const CustomText = ({ text, gray }) => {
    return (
        <Text style={[styles.text, gray && { color: "#9D9D9D" }]} >{text}</Text>
    )
}

const RouteSelected = () => {
 
    return (
        <View style={[styles.container, styles.containerRouteSelected]}>
            {/* Decoration */}
            <View style={styles.containerDecoration}>
                <FontAwesome name="dot-circle-o" size={24} color="#FFFFFF" />
                <Entypo name="flow-line" size={24} color="white" />
                <Entypo name="flow-line" size={24} color="white" />
                <FontAwesome name="dot-circle-o" size={24} color="#FF8811" />
            </View>
            {/* Departure and Destination */}
            <View style={styles.containerText}>
                {/* Departure */}
                <View style={styles.contentText}>
                    <CustomText text="Departure" />
                    <CustomText gray text="Barquismeto, Lara" />
                </View>
                <View style={styles.line} />
                {/* Destination */}
                <View style={styles.contentText}>
                    <CustomText text="Destination" />
                    <CustomText gray text="Guanare, Portuguesa" />
                </View>
            </View>
            {/* Button pr Icon */}
            <View style={styles.containerButton}>
                <View style={[styles.borderButton, { backgroundColor: "rgba(241, 241, 241, 0.2)" }]}>
                    <Icon name={"close"} color={"white"} size={25} />
                </View>
                <View style={[styles.borderButton, { backgroundColor: "#FF8811" }]}>
                    <Icon name={"arrow-all"} color={"white"} size={25} />
                </View>
            </View>
        </View>
    )
}

export default RouteSelected
