import { Text, View } from 'react-native'
import React from 'react'
import { RouteDestination, BottomSheetModal, Icon, CustomButton, TagTravel } from "@/components";
import styles from "@/utils/styles/Plan.module.css";

const Selected = () => {
  return (
    <>
      <View style={styles.container}>
        <RouteDestination />
      </View>
      <BottomSheetModal bottomSheetStyle={{ flex: 1 }}>
        <SelectedView />
      </BottomSheetModal>
    </>
  )
}

const SelectedView = () => {
  return (
    <View style={styles.containerModal}>
      {/* Title */}
      <Text style={[styles.titleModal, styles.separeModal]}>Your Travel</Text>
      {/* Hora y Icono */}
      <View style={[styles.hourIconModal, styles.separeModal]}>
        {/* Hora */}
        <Text style={styles.textHourModal}>
          {`14:05 `}
          <Text style={styles.textMinutesModal}>
            {`25 min, 0 shifts`}
          </Text>
        </Text>
        {/* icono */}
        <View style={[styles.borderIconModal, { backgroundColor: "#FF8811", padding: 10 }]}>
          <Icon name={"bell-outline"} size={24} color={"black"} />
        </View>
      </View>
      {/* Departure and Destination */}
      <View style={[styles.destinationModal, styles.separeModal]}>
        {/* Departure */}
        <View style={{ alignItems: "stretch" }}>
          <Text style={styles.textStateModal}>Lara</Text>
          <Text style={styles.textCityModal}>Barquismeto</Text>
        </View>
        <Text style={styles.textToModal}>{`To`}</Text>
        {/* Destiantion */}
        <View >
          <Text style={styles.textStateModal}>Portuguesa</Text>
          <Text style={[styles.textCityModal, { textAlign: "right" }]}>Guanare</Text>
        </View>
      </View>
      {/* tags travel */}
      <View style={[styles.tagsModal, styles.separeModal]}>
        <TagTravel text={"Free Wifi"} name={"wifi"} color={"black"} size={15} />
        <TagTravel text={"Travel Guarantees"} name={"wifi"} color={"black"} size={15} styleTags={{ marginLeft: 5 }} />
      </View>
      {/* Botones modal */}
      <View style={[styles.buttonsModal, styles.separeModal]}>
        <CustomButton
          text={"Adult Ticket"}
          handlePress={() => ("")}
          buttonStyles={[styles.btnModal, styles.btnLeftModal]}
          textStyles={[styles.textBtnModal]}
          icon={{
            status: true,
            color: "black",
            size: 25,
            name: "chevron-down"
          }}
        />
        <CustomButton
          text={"Buy 5.00 $."}
          handlePress={() => ("")}
          buttonStyles={[styles.btnModal, styles.btnRightModal]}
          textStyles={[styles.textBtnModal, { color: "#FFFFFF" }]}
        />
      </View>
      {/* detalles del viaje */}
      <View style={styles.detailsModal}>
        <View style={styles.titleDetailModal} >
          <View style={styles.borderIconDetail}>
            <Icon name={"map-check-outline"} color={"black"} size={25} />
          </View>
          <Text style={styles.textTitleDetail}>Departure Details</Text>
        </View>
      </View>
    </View >
  )
}


export default Selected
