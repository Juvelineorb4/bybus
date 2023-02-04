import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Controller } from "react-hook-form";


const CustomDatePicker = ({ control, isVisible, setIsVisible }) => {
    const hideDatePicker = () => {
        setIsVisible(false);
    };

    const handleConfirm = (value, onChange) => {
        onChange(value)
        hideDatePicker();
    };
    return (

        <Controller
            control={control}
            name={"date"}
            render={({
                field: { value, onChange },
                fieldState: { error },
            }) => (
                <>
                    <DateTimePickerModal
                        date={new Date(value)}
                        isVisible={isVisible}
                        mode="time"
                        onConfirm={(value) => handleConfirm(value, onChange)}
                        onCancel={hideDatePicker}
                    />
                </>
            )}
        />
    )
}

export default CustomDatePicker

const styles = StyleSheet.create({})