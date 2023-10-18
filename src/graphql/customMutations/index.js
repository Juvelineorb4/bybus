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
      orderTickets {
        items {
          id
          orderID
          ticketID
          owner
          createdAt
          updatedAt
          orderDetailOrderTicketsId
        }
        nextToken
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
      code
      stock
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