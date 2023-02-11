import { atom } from 'recoil';

export const searchPlan = atom({
  key: 'searchPlanValue',
  default: 'newest',
});

export const notificationPermissions = atom({
  key: 'notificationPermissionsValue',
  default: undefined,
});

export const predeterminedPayment = atom({
  key: 'predeterminedPaymentMethods',
  default: {},
});
