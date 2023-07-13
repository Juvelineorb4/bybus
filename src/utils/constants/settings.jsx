export const settings = {
  buttons: [
    {
      title: "Notifications",
      subtitle: "Get notified of changes to your route.",
      icon: {
        left: require('@/utils/images/notification_default.png')
      },
      toogle: 'notifications',
      // routePush: false,
    },
    {
      title: "Payment methods",
      subtitle: "Set your payment preferences.",
      icon: {
        left: require('@/utils/images/guarented.png'),
        right: require('@/utils/images/arrow_right.png'),
      },
      route: "PaymentMethods",
      // routePush: true,
    },
    {
      title: "App permissions",
      subtitle: "Set which permissions the app has access to.",
      icon: {
        left: require('@/utils/images/editcard.png'),
        right: require('@/utils/images/arrow_right.png'),
      },
      route: "Permissions",
      // routePush: true,
    },
    {
      title: "Introduction",
      subtitle: "Was guided through our new app.",
      icon: {
        left: require('@/utils/images/walk.png'),
        right: require('@/utils/images/arrow_right.png'),
      },
      route: "Introduction",
      // routePush: true,
    },
    {
      title: "Privacy & Policy",
      subtitle: "See details of our policy",
      icon: {
        left: require('@/utils/images/question_black.png'),
        right: require('@/utils/images/arrow_right.png'),
      },
      route: "Terms",
      // routePush: true,
    },
    {
      title: "App specs",
      subtitle: "See details about the app",
      icon: {
        left: require('@/utils/images/info.png'),
        right: require('@/utils/images/arrow_right.png'),
      },
      route: "About",
      // routePush: true,
    },
    {
      title: "Logout",
      icon: {
        left: require('@/utils/images/exit.png')
      },
      logout: "Logout"
      // routePush: true,
    },
    {
      title: "Login",
      icon: {
        left: require('@/utils/images/exit.png')
      },
      login: "Welcome_App"
      // routePush: true,
    },
  ],
};
