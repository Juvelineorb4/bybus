export const listBookings = /* GraphQL */ `
  query ListBookings(
    $filter: ModelBookingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBookings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        status
        code
        agencyID
        officeID
        percentage
        transport
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
        tickets {
          items {
            id
          }
        }
        driver
        transport
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
        documentType
        customerDocument
        customerName
        customerEmail
        status
        total
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
        bookingID
        booking {
          id
          code
          agencyID
          officeID
          percentage
          status
          transport
          stops {
            items {
              id
              bookingID
              price
              owner
              createdAt
              updatedAt
            }
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
          status
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

export const getTicket = /* GraphQL */ `
  query GetTicket($id: ID!) {
    getTicket(id: $id) {
      id
      code
      bookingID
      stop
      customerID
      seating
      status
      description
      url
      owner
      createdAt
      updatedAt
      stopBookingTicketsId
    }
  }
`;
export const getBooking = /* GraphQL */ `
  query GetBooking($id: ID!) {
    getBooking(id: $id) {
      id
      code
      agencyID
      officeID
      transport
      percentage
      status
      stops {
        items {
          id
          bookingID
          price
          owner
          createdAt
          updatedAt
        }
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
      createdAt
      updatedAt
    }
  }
`;

export const getAgency = /* GraphQL */ `
  query GetAgency($id: ID!) {
    getAgency(id: $id) {
      name
      percentage
    }
  }
`;

export const getUserOrderDetails = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      name
      email
      notificationToken
      previousBalance
      orders {
        items {
          id
          amount
          paymentMethod
          documentType
          customerDocument
          customerName
          customerEmail
          status
          total
          isGuest
          paymentID
          payment {
            id
            reference
            amount
            metadata
            userID
          }
          bookingID
          booking {
            id
            status
            code
            agencyID
            officeID
            percentage
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
            driver
            transport
          }
          tickets {
            items {
              id
              code
              bookingID
              orderDetailID
              customerID
              customer {
                id
                fullName
                ci
                email
                bookingID
              }
              seating
              status
              description
              url
            }
            nextToken
          }
          userID
        }
        nextToken
      }
    }
  }
`;

export const getBookingView = /* GraphQL */ `
  query GetBooking($id: ID!) {
    getBooking(id: $id) {
      id
      status
      code
      agencyID
      officeID
      percentage
      customers {
        items {
          id
          fullName
          ci
          email
          bookingID
          ticketID
          ticket {
            id
            code
            bookingID
            stop
            customerID
            seating
            status
            description
            url
            stopBookingTicketsId
          }
        }
      }
      tickets {
        items {
          id
          code
          bookingID
          stop
          customerID
          customer {
            id
            fullName
            ci
            email
            bookingID
            ticketID
          }
          seating
          status
          description
          url
          stopBookingTicketsId
        }
      }
      departureCity
      arrivalCity
      departure {
        time
        date
        city
        state
        address
        __typename
      }
      arrival {
        time
        date
        city
        state
        address
        __typename
      }
      stock
      price
      createdBy
      driver
      transport
    }
  }
`;

export const getTodayTC = /* GraphQL */ `
  query GetTodayTasaCambio {
    getTodayTasaCambio
  }
`;