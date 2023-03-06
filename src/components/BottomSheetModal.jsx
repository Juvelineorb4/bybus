import React, { useCallback, useRef, useMemo, Children } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import BottomSheet, {
  BottomSheetView,
  BottomSheetScrollView,
} from "@gorhom/bottom-sheet";

const BottomSheetModal = ({ children, bottomSheetStyle = {} }) => {
  // hooks

  const sheetRef = useRef(null);
  /* El useMemogancho se puede utilizar para evitar que funciones costosas y que consumen muchos recursos se ejecuten innecesariamente.*/

  //variable para el porcentajes que se abrira la app
  const snapPoints = useMemo(() => ["50%", "100%"], []);

  // callbacks
  const handleSheetChange = useCallback((index) => {
    console.log("handleSheetChange", index);
  }, []);

  const handleSnapPress = useCallback((index) => {
    sheetRef.current?.snapToIndex(index);
  }, []);

  const handleClosePress = useCallback(() => {
    sheetRef.current?.close();
  }, []);

  // render
  return (
    <BottomSheet
      ref={sheetRef}
      snapPoints={snapPoints}
      onChange={handleSheetChange}
      handleIndicatorStyle={{ backgroundColor: "#F5F5F5" }}
    >
      <BottomSheetScrollView style={bottomSheetStyle}>
        {children}
      </BottomSheetScrollView>
    </BottomSheet>
  );
};

export default BottomSheetModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 200,
  },
});
