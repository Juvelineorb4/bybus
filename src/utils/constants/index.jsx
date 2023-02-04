import * as Component from "@/screens";

export const routing = {
  main: {
    WELCOME: "Welcome",
    LOGIN: "Login",
    REGISTER: "Register",
    FORGOT: "Forgot",
    CONTINUE: "Home",
    HOME: "Home",
    PLAN: "Plan",
    TICKETS: "Tickets",
    PROFILE: "Profile",
    SETTINGS: "Settings",
  },
  tabs: {
    inital: "Plan",
    routes: [
      {
        id: "tab-1",
        title: "Plan",
        component: Component.Plan,
        icon: "map-outline",
      },
      {
        id: "tab-2",
        title: "Tickets",
        component: Component.Tickets,
        icon: "ticket-confirmation-outline",
      },
      {
        id: "tab-3",
        title: "Profile",
        component: Component.Profile,
        icon: "account-outline",
      },
      {
        id: "tab-4",
        title: "Settings",
        component: Component.Settings,
        icon: "cog-outline",
      },
    ],
  },
  routes: [
    {
      id: "plans-1",
      title: "List",
      component: Component.List,
    },
    {
      id: "plans-2",
      title: "Selected",
      component: Component.Selected,
    },
    {
      id: "ticket-1",
      title: "ChooseTicket",
      component: Component.ChooseTicket,
    },
    {
      id: "ticket-2",
      title: "CreateTicket",
      component: Component.CreateTicket,
    },
    {
      id: "ticket-3",
      title: "ViewTicket",
      component: Component.ViewTicket,
    },
    {
      id: "profile-1",
      title: "Edit",
      component: Component.Edit,
    },
    {
      id: "settings-1",
      title: "PaymentMethods",
      component: Component.PaymentMethods,
    },
    {
      id: "settings-2",
      title: "Permissions",
      component: Component.Permissions,
    },
    {
      id: "settings-3",
      title: "Notifications",
      component: Component.Notifications,
    },
    {
      id: "settings-4",
      title: "Introduction",
      component: Component.Introduction,
    },
    {
      id: "settings-5",
      title: "Terms",
      component: Component.Terms,
    },
    {
      id: "settings-6",
      title: "About",
      component: Component.About,
    },
    {
      id: "settings-7",
      title: "PaymentView",
      component: Component.PaymentView,
    },
  ],
};
