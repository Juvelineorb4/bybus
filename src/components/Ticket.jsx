import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import styles from "@/utils/styles/Tickets.module.css";
import TagTravel from './TagTravel'
const Ticket = () => {
    return (
        <View style={styles.containerTicket}>
            {/* content TOP */}
            <View style={[styles.topTicket, styles.separeContentTicket]}>
                <Text style={styles.textHourTicket}>14:05 <Text style={styles.textMinTicket}>23m</Text></Text>
                <TagTravel
                    text='L10'
                    styleTextTags={styles.textTagTicket}
                    styleTags={styles.tagTicket}
                    name="taxi"
                    color={"#FFFFFF"}
                    size={20} />
            </View>
            {/* Content mid */}
            <View style={[styles.midTicket, styles.separeContentTicket]}>
                <View>
                    <Text style={styles.textStateTicket}>Lara</Text>
                    <Text style={styles.textCityTicket}>Barquismeto</Text>
                </View>
                <Text style={styles.textToTicket}>To</Text>
                <View>
                    <Text style={styles.textStateTicket}>Portuguesa</Text>
                    <Text style={styles.textCityTicket}>Guanare</Text>
                </View>
            </View>

            {/* decoration ticket */}
            <View style={[styles.circleDecorationTicket, styles.circleLeft]} />
            <View style={[styles.lineDashedTicket, styles.separeContentTicket]} />
            <View style={[styles.circleDecorationTicket, styles.circleRight]} />
            {/* Bolita blanca */}
            {/* Content Bottom */}
            <View style={[styles.bottomTicket]}>
                <Text style={styles.methodTitleTicked}>Precio con tu tarjeta de Viaje</Text>
                <Text style={styles.priceTicked}>5.00$</Text>
            </View>
        </View>
    )
}

export default Ticket

