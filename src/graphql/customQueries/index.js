export const listBookingsByCitiesAndStates = /* GraphQL */ `
  query ListBookingsByCitiesAndStates(
    $departureCity: String
    $departureState: String
    $arrivalCity: String
    $arrivalState: String
  ) {
    listBookings(
      filter: {
        departure: {
          city: { eq: $departureCity }
          state: { eq: $departureState }
        }
        arrival: {
          city: { eq: $arrivalCity }
          state: { eq: $arrivalState }
        }
      }
    ) {
      items {
        id
        code
        agencyID
        officeID
        transport
        departure {
          time
          date
          city
          state
          address
        }
        arrival {
          time
          date
          city
          state
          address
        }
        stock
        price
        createdBy
        owner
      }
    }
  }
`;