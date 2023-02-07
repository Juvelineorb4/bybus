import { Text, View } from 'react-native'
import React from 'react'
import styles from "@/utils/styles/RouteSearch.module.css";
import Icon from "./Icon"

const TagTravel = ({ name = "wifi", color = "black", size = 15, text = "none", styleTags = {}, styleTextTags = {} }) => {
    return (
        <View style={[styles.containerTagTravel, styleTags]}>
            {/* ICOM */}
            <Icon name={name} color={color} size={size} />
            {/* TEXT */}
            <Text style={[styles.TagTravelText, styleTextTags]}>{text}</Text>
        </View>
    )
}

export default TagTravel

