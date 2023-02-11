import React from "react";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Controller } from "react-hook-form";

const CustomTimePicker = ({ control, isVisible, setIsVisible }) => {
  const hideDatePicker = () => {
    setIsVisible(false);
  };

  const handleConfirm = (value, onChange) => {
    onChange(value);
    hideDatePicker();
  };
  return (
    <Controller
      control={control}
      name={"time"}
      render={({ field: { value, onChange }, fieldState: { error } }) => (
        <>
          <DateTimePickerModal
            date={new Date(value)}
            isVisible={isVisible}
            mode={"time"}
            onConfirm={(value) => handleConfirm(value, onChange)}
            onCancel={hideDatePicker}
          />
        </>
      )}
    />
  );
};

export default CustomTimePicker;
