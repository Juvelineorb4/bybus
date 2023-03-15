import { atom } from "recoil";
/* DropDowns */
export const searchPlan = atom({
  key: "searchPlanValue",
  default: "newest",
});
export const searchNotification = atom({
  key: "searchNotificationValue",
  default: "newest",
});
export const searchTicketPlan = atom({
  key: "searchTicketPlanValue",
  default: "adult-ticket",
});
/* Permits */
export const notificationPermissions = atom({
  key: "notificationPermissionsValue",
  default: false,
});
export const statsPermissions = atom({
  key: "statsPermissionsValue",
  default: false,
});
export const locationPermissions = atom({
  key: "locationPermissionsValue",
  default: false,
});
export const contactPermissions = atom({
  key: "contactPermissionsValue",
  default: false,
});
export const calendarPermissions = atom({
  key: "calendarPermissionsValue",
  default: false,
});
export const cameraPermissions = atom({
  key: "cameraPermissionsValue",
  default: false,
});
/*  */
export const predeterminedPayment = atom({
  key: "predeterminedPaymentMethods",
  default: {},
});

/* User */
export const userAuthenticated = atom({
  key: "user",
  default: undefined,
});

/* Token Notification */
export const tokenNotification = atom({
  key: "token",
  default: undefined
})

export const imageUri = atom({
  key: "imageUriValue",
  default: undefined
})
export const imageProfile = atom({
  key: "imageProfileValue",
  default: undefined
})


/* selected */

export const userSelectedPlan = atom({
  key: "userSelectedPlan",
  default: false,
});