export const listBookings = /* GraphQL */ `
  query ListBookings(
    $filter: ModelBookingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBookings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        code
        agencyID
        officeID
        transport
        tickets {
          items {
            id
            status
          }
          nextToken
        }
        stops {
          nextToken
        }
        departureCity
        arrivalCity
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
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;

export const listOrderDetails = /* GraphQL */ `
  query ListOrderDetails(
    $filter: ModelOrderDetailFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrderDetails(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        amount
        paymentMethod
        customerName
        customerEmail
        isGuest
        paymentID
        payment {
          id
          reference
          amount
          metadata
          userID
          createdAt
          updatedAt
          owner
        }
        orderTickets {
          items {
            id
            ticketID
          }
          nextToken
        }
        userID
        createdAt
        updatedAt
        userOrdersId
        owner
      }
      nextToken
    }
  }
`;