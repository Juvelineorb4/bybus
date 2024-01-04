export const createOrderDetail = /* GraphQL */ `
  mutation CreateOrderDetail(
    $input: CreateOrderDetailInput!
    $condition: ModelOrderDetailConditionInput
  ) {
    createOrderDetail(input: $input, condition: $condition) {
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
      userID
      createdAt
      updatedAt
      userOrdersId
      owner
    }
  }
`;

export const createPayment = /* GraphQL */ `
  mutation CreatePayment(
    $input: CreatePaymentInput!
    $condition: ModelPaymentConditionInput
  ) {
    createPayment(input: $input, condition: $condition) {
      id
      reference
      amount
      metadata
      userID
      createdAt
      updatedAt
      owner
    }
  }
`;

export const createOrderTicket = /* GraphQL */ `
  mutation CreateOrderTicket(
    $input: CreateOrderTicketInput!
    $condition: ModelOrderTicketConditionInput
  ) {
    createOrderTicket(input: $input, condition: $condition) {
      id
      orderID
      ticketID
      ticket {
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
      }
    }
  }
`;
export const updateTicket = /* GraphQL */ `
  mutation UpdateTicket(
    $input: UpdateTicketInput!
    $condition: ModelTicketConditionInput
  ) {
    updateTicket(input: $input, condition: $condition) {
      id
      status
      customerID
    }
  }
`;

export const updateBooking = /* GraphQL */ `
  mutation UpdateBooking(
    $input: UpdateBookingInput!
    $condition: ModelBookingConditionInput
  ) {
    updateBooking(input: $input, condition: $condition) {
      id
      status
      code
      agencyID
      tickets {
        items {
          id
          code
          bookingID
          orderDetailID
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
          orderDetailTicketsId
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
      percentage
      driver
      transport
    }
  }
`;

export const createCustomer = /* GraphQL */ `
  mutation CreateCustomer(
    $input: CreateCustomerInput!
    $condition: ModelCustomerConditionInput
  ) {
    createCustomer(input: $input, condition: $condition) {
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
      }
    }
  }
`;

export const updateCustomer = /* GraphQL */ `
  mutation UpdateCustomer(
    $input: UpdateCustomerInput!
    $condition: ModelCustomerConditionInput
  ) {
    updateCustomer(input: $input, condition: $condition) {
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
        customer {
          id
          fullName
          ci
          email
          bookingID
          ticketID
        }
        status
        description
      }
    }
  }
`;

export const createTicket = /* GraphQL */ `
  mutation CreateTicket(
    $input: CreateTicketInput!
    $condition: ModelTicketConditionInput
  ) {
    createTicket(input: $input, condition: $condition) {
      id
      code
      bookingID
      orderDetailID
      stop
      customerID
      customer {
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
          customer {
            id
            fullName
            ci
            email
            bookingID
            ticketID
            owner
            createdAt
            updatedAt
            __typename
          }
          seating
          status
          description
          url
          owner
          createdAt
          updatedAt
          stopBookingTicketsId
          __typename
        }
        owner
        createdAt
        updatedAt
        __typename
      }
      seating
      status
      description
      url
      owner
      createdAt
      updatedAt
      stopBookingTicketsId
      __typename
    }
  }
`;

export const updateOrderDetail = /* GraphQL */ `
  mutation UpdateOrderDetail(
    $input: UpdateOrderDetailInput!
    $condition: ModelOrderDetailConditionInput
  ) {
    updateOrderDetail(input: $input, condition: $condition) {
      id
      status
    }
  }
`;