import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import styles from "@/utils/styles/RouteSearch.module.css";
import Icon from "./Icon";

const IconBorder = ({ name, size, color }) => {
    return (
        <View style={styles.IconBorder}>
            <Icon name={name} size={size} color={color} />
        </View>
    )
}

const TicketPrice = () => {
    return (
        <View style={[styles.ticketPrice]}>
            {/* icono */}
            <Icon name={"ticket-confirmation-outline"} size={24} color={"black"} />
            {/* Texto */}
            <Text style={styles.ticketText}>5.00 $</Text>
        </View>
    )
}


const RouteCard = () => {
    return (
        <View style={[styles.container, styles.containerRouteCard]}>
            <View style={styles.containerTextTop}>
                <View style={{ justifyContent: "space-between" }}>
                    <Text style={styles.textHour} >14:05</Text>
                    <Text style={styles.textMin} >23 min, 0 shifts</Text>
                </View>
                <View style={{ justifyContent: "space-between" }}>
                    <Text style={styles.textMin}>From</Text>
                    <Text style={[styles.textHour, { fontSize: 18 }]}>Terminal Guanare</Text>
                </View>
            </View>
            {/* Iconos */}
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-evenly" }}>
                {/* icon streey */}
                <IconBorder name="walk" color={"black"} size={20} />
                <View style={[styles.lineDashed, { width: 30 }]} />
                <IconBorder name="bus" color={"black"} size={20} />
                <View style={[styles.lineSolid, { width: 40 }]} />
                <IconBorder name="walk" color={"black"} size={20} />
                {/* Card yellow price ticket */}
                <TicketPrice />
            </View>
        </View>
    )
}

export default RouteCard
