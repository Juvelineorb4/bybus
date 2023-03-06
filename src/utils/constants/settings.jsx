export const settings = {
  buttons: [
    {
      title: "Notifications",
      subtitle: "Get notified of changes to your route.",
      icon: {
        left: {
          name: "bell-outline",
          size: 20,
          color: "white",
        },
      },
      toogle: 'notifications',
      // routePush: false,
    },
    {
      title: "Payment methods",
      subtitle: "Set your payment preferences.",
      icon: {
        left: {
          name: "credit-card-edit-outline",
          size: 20,
          color: "white",
        },
        right: {
          name: "arrow-right",
          size: 24,
          color: "#404040",
        },
      },
      route: "PaymentMethods",
      // routePush: true,
    },
    {
      title: "App permissions",
      subtitle: "Set which permissions the app has access to.",
      icon: {
        left: {
          name: "lock-outline",
          size: 20,
          color: "white",
        },
        right: {
          name: "arrow-right",
          size: 24,
          color: "#404040",
        },
      },
      route: "Permissions",
      // routePush: true,
    },
    {
      title: "Introduction",
      subtitle: "Was guided through our new app.",
      icon: {
        left: {
          name: "crosshairs-question",
          size: 20,
          color: "white",
        },
        right: {
          name: "arrow-right",
          size: 24,
          color: "#404040",
        },
      },
      route: "Introduction",
      // routePush: true,
    },
    {
      title: "Privacy & Policy",
      subtitle: "See details of our policy",
      icon: {
        left: {
          name: "file-document-outline",
          size: 20,
          color: "white",
        },
        right: {
          name: "arrow-right",
          size: 24,
          color: "#404040",
        },
      },
      route: "Terms",
      // routePush: true,
    },
    {
      title: "App specs",
      subtitle: "See details about the app",
      icon: {
        left: {
          name: "information-outline",
          size: 20,
          color: "white",
        },
        right: {
          name: "arrow-right",
          size: 24,
          color: "#404040",
        },
      },
      route: "About",
      // routePush: true,
    },
    {
      title: "Logout",
      icon: {
        left: {
          name: "logout",
          size: 20,
          color: "white",
        },
      },
      logout: "Logout"
      // routePush: true,
    },
    {
      title: "Login",
      icon: {
        left: {
          name: "login",
          size: 20,
          color: "white",
        },
      },
      login: "Welcome_App"
      // routePush: true,
    },
  ],
};
