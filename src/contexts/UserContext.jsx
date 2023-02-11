import { createContext, useContext, useEffect, useState } from "react";

export const UserContext = createContext();
export const UserProvider = ({children}) => {

    /* Estado de Permisos de Notificaciones */
  const [notificationsPermission, setNotificationsPermission] = useState(false);
//   const updateNotificationsPermission = (action) => setNotificationsPermission(action);
  return (
    <UserContext.Provider
      value={{ notificationsPermission, setNotificationsPermission }}
    >
      {children}
    </UserContext.Provider>
  );
};