import {
  Text,
  View,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import styles from "@/utils/styles/ResultView.module.css";
import { CustomButton, RouteCard } from "@/components";
import { API } from "aws-amplify";
import * as queries from "@/graphql/queries";
import * as customQueries from "@/graphql/customQueries";
import * as mutations from "@/graphql/mutations";
import { loadingSearch, userAuthenticated } from "@/atoms/Modals";
import { useRecoilState, useRecoilValue } from "recoil";

const ResultView = ({ data }) => {
  const global = require("@/utils/styles/global.js");
  const [search, setSearch] = useState([]);
  const [qDeparted, setQDeparted] = useState(0);
  const [timeline, setTimeline] = useState(false);
  const [qAvailable, setQAvailable] = useState(0);
  const [loading, setLoading] = useRecoilState(loadingSearch);
  const userAuth = useRecoilValue(userAuthenticated);
  const [sendReport, setSendReport] = useState(false);
  const [viewReport, setViewReport] = useState(true);
  const Bookings = async () => {
    try {
      const list = await API.graphql({
        query: customQueries.listBookings,
        authMode: "AWS_IAM",
        variables: {
          filter: {
            and: [
              { departureCity: { eq: data.departureCity } },
              { arrivalCity: { eq: data.arrivalCity } },
            ],
          },
        },
      });
      const fetchAllBookings = async (nextToken, result = []) => {
        const response = await API.graphql({
          query: customQueries.listBookings,
          authMode: "AWS_IAM",
          variables: {
            filter: {
              and: [
                { departureCity: { eq: data.departureCity } },
                { arrivalCity: { eq: data.arrivalCity } },
              ],
            },
            nextToken,
          },
        });

        const items = response.data.listBookings.items;
        result.push(...items);

        if (response.data.listBookings.nextToken) {
          return fetchAllBookings(response.data.listBookings.nextToken, result);
        }

        return result;
      };

      const allBookings = await fetchAllBookings();

      let array = allBookings.sort(
        (a, b) => new Date(a.departure.date) - new Date(b.departure.date)
      );
      setSearch(array);
      setLoading(false);
      const viajesDisponibles = allBookings.filter(
        (viaje) => viaje.status === "AVAILABLE"
      );
      const viajesPartidos = allBookings.filter(
        (viaje) => viaje.status === "DEPARTED"
      );

      const cantidadDisponibles = viajesDisponibles.length;
      const cantidadPartidos = viajesPartidos.length;
      setQAvailable(cantidadDisponibles);
      setQDeparted(cantidadPartidos);
    } catch (error) {
      console.log(error);
    }
  };
  let fecha = new Date();
  let dia = fecha.getDate();
  let mes = fecha.getMonth() + 1; // Los meses en JavaScript comienzan desde 0
  let año = fecha.getFullYear();

  let dateToday = año + "-" + mes + "-" + dia;
  let fecha1 = new Date(dateToday);
  let fecha2 = new Date(data?.date);
  useEffect(() => {
    if (data) Bookings();
    fecha1 = new Date(dateToday);
    fecha2 = new Date(data?.date);
    if (fecha2.getTime() > fecha1.getTime()) {
     
      setTimeline(false);
    } else if (fecha2.getTime() < fecha1.getTime()) {
      setTimeline(true);
    
    } else if (fecha2.getTime() === fecha1.getTime()) {
      setTimeline(false);
      
    }

    setViewReport(true);
  }, [data]);

  const sendReportTrips = async () => {
    setSendReport(true);

    try {
      const api = "apibybus";
      const path = "/sendTripReport";
      const params = {
        headers: {},
        body: {
          data,
          user: userAuth?.attributes,
        }, // replace this with attributes you need
      };

      const result = await API.post(api, path, params);
      console.log("REPORT RESULT: ", result);
      setViewReport(false);
    } catch (error) {
      console.log("ERROR AL ENVIAR REPORTE: ", error);
      setViewReport(false);
    }
    setSendReport(false);
  };
  return (
    <View style={styles.container}>
      <Text style={[styles.title, global.black]}>
        Resultados de la busqueda
      </Text>
      {search.length !== 0 && qAvailable !== 0 && timeline === false && (
        <Text style={[styles.titleSearch, global.black]}>
          {`Viajes disponibles hasta: ${data.arrivalState}, ${data.arrivalCity}`}
        </Text>
      )}

      <TouchableOpacity activeOpacity={1} style={{ marginTop: 20 }}>
        {loading ? (
          <View
            style={{
              flex: 1,
              alignItems: "center",
              marginTop: 30,
            }}
          >
            <ActivityIndicator size="large" color="#00B4D8" />
          </View>
        ) : search.length !== 0 && qAvailable !== 0 && timeline === false ? (
          search.map(
            (item, index) =>
              item.status === "AVAILABLE" &&
              item.status !== "SOLDOUT" &&
              fecha2.getTime() <= new Date(item?.departure?.date).getTime() && (
                <RouteCard data={item} key={index} />
              )
          )
        ) : (
          <View
            style={{
              flex: 1,
              alignItems: "center",
              marginTop: 0,
            }}
          >
            <Text
              style={[
                {
                  fontFamily: "regular",
                  textAlign: "center",
                },
                global.black,
              ]}
            >
              {`No hay viajes disponibles hasta: ${data.arrivalState}, ${data.arrivalCity}`}
            </Text>

            {viewReport ? (
              <>
                <Text
                  style={[
                    {
                      fontFamily: "regular",
                      textAlign: "center",
                      marginBottom: 10,
                      marginTop: 20,
                    },
                    global.black,
                  ]}
                >
                  ¿Quieres que existan viajes para estos destinos?
                </Text>
                <CustomButton
                  disabled={sendReport}
                  text={sendReport ? <ActivityIndicator /> : "Comunícanoslo"}
                  handlePress={sendReportTrips}
                  textStyles={[styles.textResult, global.white]}
                  buttonStyles={[styles.result, global.mainBgColor]}
                />
              </>
            ) : (
              <View style={{ marginTop: 15 }}>
                <Text style={[styles.textResult, { color: "green" }]}>
                  Comunicado enviado a Bybus, ¡Gracias por tu apoyo!
                </Text>
              </View>
            )}
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default ResultView;
