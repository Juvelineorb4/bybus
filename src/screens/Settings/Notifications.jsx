import { useState, useEffect, useRef } from 'react';
import { Text, View, Button, Platform } from 'react-native';
import NotificationTypes from '@/components/NotificationTypes'



const NotificationsView = () => {
  

  return (
    <View style={{ padding: 20 }}>
      <Text>Notifications</Text>
      <NotificationTypes
        title={"Delay!"}
        text={"We take care of the maintenance of the skins."}
        warning
      />
      <NotificationTypes
        title={"Eliminate happened"}
        text={"A car driver has driven off the light rail. We are working to repair the damage."}
        dangerous
      />
      <NotificationTypes
        title={"Opening completed"}
        text={"We  care of the maintenance of the skins."}
        success
      />
      <NotificationTypes
        title={"Free weekend"}
        text={"Good weekend. We give all young people under 25 free rides on the bus."}
        other
      />
    </View>
  )
}

export default NotificationsView
