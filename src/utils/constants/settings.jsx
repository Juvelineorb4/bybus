import { Ionicons } from '@expo/vector-icons';
export const settings = {
  buttons: [
    // {
    //   title: "Notificaciones",
    //   subtitle: "Recibe notificaciones sobre tus viajes y ofertas.",
    //   icon: {
    //     left: require('@/utils/images/notification_default.png')
    //   },
    //   toogle: 'notifications',
    //   // routePush: false,
    // },
    // {
    //   title: "Metodos de pago",
    //   subtitle: "Escoge tu metodo de pago preferencial.",
    //   icon: {
    //     left: require('@/utils/images/guarented.png'),
    //     right: require('@/utils/images/arrow_right.png'),
    //   },
    //   route: "PaymentMethods",
    //   // routePush: true,
    // },
    // {
    //   title: "Permisos",
    //   subtitle: "Selecciona los permisos que podemos tener acceso.",
    //   icon: {
    //     left: require('@/utils/images/editcard.png'),
    //     right: require('@/utils/images/arrow_right.png'),
    //   },
    //   route: "Permissions",
    //   // routePush: true,
    // },
    // {
    //   title: "Introduccion",
    //   subtitle: "Guia resumen de nuestra app.",
    //   icon: {
    //     left: require('@/utils/images/walk.png'),
    //     right: require('@/utils/images/arrow_right.png'),
    //   },
    //   route: "Introduction",
    //   // routePush: true,
    // },
    {
      title: "Politicas y Privacidad",
      subtitle: "Mira las politicas de nuestra aplicacion",
      icon: {
        left: {
          type: 'ant',
          name: 'questioncircleo',
          color: 'white',
          size: 24
        },
        right: require('@/utils/images/arrow_right.png'),
      },
      route: "Terms",
      // routePush: true,
    },
    {
      title: "Especificaciones de la App",
      subtitle: "Mira los detalles de nuestra aplicacion",
      icon: {
        left: {
          type: 'ios',
          name: 'ios-alert-circle-outline',
          color: 'white',
          size: 24
        },
        right: require('@/utils/images/arrow_right.png'),
      },
      route: "About",
      // routePush: true,
    },
    {
      title: "Cierra Sesion",
      icon: {
        left: {
          type: 'ios',
          name: 'ios-exit-outline',
          color: 'white',
          size: 24
        },
      },
      logout: "Logout"
      // routePush: true,
    },
    // {
    //   title: "Inicia Sesion",
    //   icon: {
    //     left: require('@/utils/images/exit.png')
    //   },
    //   login: "Welcome_App"
    //   // routePush: true,
    // },
  ],
};
