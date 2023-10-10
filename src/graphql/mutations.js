/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const deleteAgency = /* GraphQL */ `
  mutation DeleteAgency(
    $input: DeleteAgencyInput!
    $condition: ModelAgencyConditionInput
  ) {
    deleteAgency(input: $input, condition: $condition) {
      id
      cognitoID
      pin
      name
      rif
      email
      phone
      officies {
        items {
          id
          agencyID
          name
          state
          city
          address
          email
          phone
          employees {
            nextToken
            __typename
          }
          transports {
            nextToken
            __typename
          }
          bookings {
            nextToken
            __typename
          }
          owner
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      employees {
        items {
          id
          name
          email
          phone
          pin
          type
          agencyID
          agency {
            id
            cognitoID
            pin
            name
            rif
            email
            phone
            owner
            createdAt
            updatedAt
            __typename
          }
          officeID
          office {
            id
            agencyID
            name
            state
            city
            address
            email
            phone
            owner
            createdAt
            updatedAt
            __typename
          }
          permissions
          owner
          lastConnection
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      bookings {
        items {
          id
          status
          code
          agencyID
          officeID
          transport
          customers {
            nextToken
            __typename
          }
          tickets {
            nextToken
            __typename
          }
          stops {
            nextToken
            __typename
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
          owner
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      owner
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteCustomer = /* GraphQL */ `
  mutation DeleteCustomer(
    $input: DeleteCustomerInput!
    $condition: ModelCustomerConditionInput
  ) {
    deleteCustomer(input: $input, condition: $condition) {
      id
      name
      lastName
      ci
      email
      phone
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
  }
`;
export const deleteTicket = /* GraphQL */ `
  mutation DeleteTicket(
    $input: DeleteTicketInput!
    $condition: ModelTicketConditionInput
  ) {
    deleteTicket(input: $input, condition: $condition) {
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
      __typename
    }
  }
`;
export const deleteOrderTicket = /* GraphQL */ `
  mutation DeleteOrderTicket(
    $input: DeleteOrderTicketInput!
    $condition: ModelOrderTicketConditionInput
  ) {
    deleteOrderTicket(input: $input, condition: $condition) {
      id
      orderID
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
        owner
        createdAt
        updatedAt
        stopBookingTicketsId
        __typename
      }
      owner
      createdAt
      updatedAt
      orderDetailOrderTicketsId
      __typename
    }
  }
`;
export const createEmailSusbcription = /* GraphQL */ `
  mutation CreateEmailSusbcription(
    $input: CreateEmailSusbcriptionInput!
    $condition: ModelEmailSusbcriptionConditionInput
  ) {
    createEmailSusbcription(input: $input, condition: $condition) {
      id
      email
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateEmailSusbcription = /* GraphQL */ `
  mutation UpdateEmailSusbcription(
    $input: UpdateEmailSusbcriptionInput!
    $condition: ModelEmailSusbcriptionConditionInput
  ) {
    updateEmailSusbcription(input: $input, condition: $condition) {
      id
      email
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteEmailSusbcription = /* GraphQL */ `
  mutation DeleteEmailSusbcription(
    $input: DeleteEmailSusbcriptionInput!
    $condition: ModelEmailSusbcriptionConditionInput
  ) {
    deleteEmailSusbcription(input: $input, condition: $condition) {
      id
      email
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createAgencySubscription = /* GraphQL */ `
  mutation CreateAgencySubscription(
    $input: CreateAgencySubscriptionInput!
    $condition: ModelAgencySubscriptionConditionInput
  ) {
    createAgencySubscription(input: $input, condition: $condition) {
      id
      name
      rif
      email
      phone
      subscriptionDate
      status
      scheduledDate
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateAgencySubscription = /* GraphQL */ `
  mutation UpdateAgencySubscription(
    $input: UpdateAgencySubscriptionInput!
    $condition: ModelAgencySubscriptionConditionInput
  ) {
    updateAgencySubscription(input: $input, condition: $condition) {
      id
      name
      rif
      email
      phone
      subscriptionDate
      status
      scheduledDate
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteAgencySubscription = /* GraphQL */ `
  mutation DeleteAgencySubscription(
    $input: DeleteAgencySubscriptionInput!
    $condition: ModelAgencySubscriptionConditionInput
  ) {
    deleteAgencySubscription(input: $input, condition: $condition) {
      id
      name
      rif
      email
      phone
      subscriptionDate
      status
      scheduledDate
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createAgency = /* GraphQL */ `
  mutation CreateAgency(
    $input: CreateAgencyInput!
    $condition: ModelAgencyConditionInput
  ) {
    createAgency(input: $input, condition: $condition) {
      id
      cognitoID
      pin
      name
      rif
      email
      phone
      officies {
        items {
          id
          agencyID
          name
          state
          city
          address
          email
          phone
          employees {
            nextToken
            __typename
          }
          transports {
            nextToken
            __typename
          }
          bookings {
            nextToken
            __typename
          }
          owner
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      employees {
        items {
          id
          name
          email
          phone
          pin
          type
          agencyID
          agency {
            id
            cognitoID
            pin
            name
            rif
            email
            phone
            owner
            createdAt
            updatedAt
            __typename
          }
          officeID
          office {
            id
            agencyID
            name
            state
            city
            address
            email
            phone
            owner
            createdAt
            updatedAt
            __typename
          }
          permissions
          owner
          lastConnection
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      bookings {
        items {
          id
          status
          code
          agencyID
          officeID
          transport
          customers {
            nextToken
            __typename
          }
          tickets {
            nextToken
            __typename
          }
          stops {
            nextToken
            __typename
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
          owner
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      owner
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateAgency = /* GraphQL */ `
  mutation UpdateAgency(
    $input: UpdateAgencyInput!
    $condition: ModelAgencyConditionInput
  ) {
    updateAgency(input: $input, condition: $condition) {
      id
      cognitoID
      pin
      name
      rif
      email
      phone
      officies {
        items {
          id
          agencyID
          name
          state
          city
          address
          email
          phone
          employees {
            nextToken
            __typename
          }
          transports {
            nextToken
            __typename
          }
          bookings {
            nextToken
            __typename
          }
          owner
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      employees {
        items {
          id
          name
          email
          phone
          pin
          type
          agencyID
          agency {
            id
            cognitoID
            pin
            name
            rif
            email
            phone
            owner
            createdAt
            updatedAt
            __typename
          }
          officeID
          office {
            id
            agencyID
            name
            state
            city
            address
            email
            phone
            owner
            createdAt
            updatedAt
            __typename
          }
          permissions
          owner
          lastConnection
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      bookings {
        items {
          id
          status
          code
          agencyID
          officeID
          transport
          customers {
            nextToken
            __typename
          }
          tickets {
            nextToken
            __typename
          }
          stops {
            nextToken
            __typename
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
          owner
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      owner
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createOffice = /* GraphQL */ `
  mutation CreateOffice(
    $input: CreateOfficeInput!
    $condition: ModelOfficeConditionInput
  ) {
    createOffice(input: $input, condition: $condition) {
      id
      agencyID
      name
      state
      city
      address
      email
      phone
      employees {
        items {
          id
          name
          email
          phone
          pin
          type
          agencyID
          agency {
            id
            cognitoID
            pin
            name
            rif
            email
            phone
            owner
            createdAt
            updatedAt
            __typename
          }
          officeID
          office {
            id
            agencyID
            name
            state
            city
            address
            email
            phone
            owner
            createdAt
            updatedAt
            __typename
          }
          permissions
          owner
          lastConnection
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      transports {
        items {
          id
          model
          serial
          type
          officeID
          bookings {
            nextToken
            __typename
          }
          createdBy
          createdAt
          updatedAt
          owner
          __typename
        }
        nextToken
        __typename
      }
      bookings {
        items {
          id
          status
          code
          agencyID
          officeID
          transport
          customers {
            nextToken
            __typename
          }
          tickets {
            nextToken
            __typename
          }
          stops {
            nextToken
            __typename
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
          owner
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      owner
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateOffice = /* GraphQL */ `
  mutation UpdateOffice(
    $input: UpdateOfficeInput!
    $condition: ModelOfficeConditionInput
  ) {
    updateOffice(input: $input, condition: $condition) {
      id
      agencyID
      name
      state
      city
      address
      email
      phone
      employees {
        items {
          id
          name
          email
          phone
          pin
          type
          agencyID
          agency {
            id
            cognitoID
            pin
            name
            rif
            email
            phone
            owner
            createdAt
            updatedAt
            __typename
          }
          officeID
          office {
            id
            agencyID
            name
            state
            city
            address
            email
            phone
            owner
            createdAt
            updatedAt
            __typename
          }
          permissions
          owner
          lastConnection
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      transports {
        items {
          id
          model
          serial
          type
          officeID
          bookings {
            nextToken
            __typename
          }
          createdBy
          createdAt
          updatedAt
          owner
          __typename
        }
        nextToken
        __typename
      }
      bookings {
        items {
          id
          status
          code
          agencyID
          officeID
          transport
          customers {
            nextToken
            __typename
          }
          tickets {
            nextToken
            __typename
          }
          stops {
            nextToken
            __typename
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
          owner
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      owner
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteOffice = /* GraphQL */ `
  mutation DeleteOffice(
    $input: DeleteOfficeInput!
    $condition: ModelOfficeConditionInput
  ) {
    deleteOffice(input: $input, condition: $condition) {
      id
      agencyID
      name
      state
      city
      address
      email
      phone
      employees {
        items {
          id
          name
          email
          phone
          pin
          type
          agencyID
          agency {
            id
            cognitoID
            pin
            name
            rif
            email
            phone
            owner
            createdAt
            updatedAt
            __typename
          }
          officeID
          office {
            id
            agencyID
            name
            state
            city
            address
            email
            phone
            owner
            createdAt
            updatedAt
            __typename
          }
          permissions
          owner
          lastConnection
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      transports {
        items {
          id
          model
          serial
          type
          officeID
          bookings {
            nextToken
            __typename
          }
          createdBy
          createdAt
          updatedAt
          owner
          __typename
        }
        nextToken
        __typename
      }
      bookings {
        items {
          id
          status
          code
          agencyID
          officeID
          transport
          customers {
            nextToken
            __typename
          }
          tickets {
            nextToken
            __typename
          }
          stops {
            nextToken
            __typename
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
          owner
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      owner
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createState = /* GraphQL */ `
  mutation CreateState(
    $input: CreateStateInput!
    $condition: ModelStateConditionInput
  ) {
    createState(input: $input, condition: $condition) {
      id
      name
      cities
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateState = /* GraphQL */ `
  mutation UpdateState(
    $input: UpdateStateInput!
    $condition: ModelStateConditionInput
  ) {
    updateState(input: $input, condition: $condition) {
      id
      name
      cities
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteState = /* GraphQL */ `
  mutation DeleteState(
    $input: DeleteStateInput!
    $condition: ModelStateConditionInput
  ) {
    deleteState(input: $input, condition: $condition) {
      id
      name
      cities
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createEmployee = /* GraphQL */ `
  mutation CreateEmployee(
    $input: CreateEmployeeInput!
    $condition: ModelEmployeeConditionInput
  ) {
    createEmployee(input: $input, condition: $condition) {
      id
      name
      email
      phone
      pin
      type
      agencyID
      agency {
        id
        cognitoID
        pin
        name
        rif
        email
        phone
        officies {
          items {
            id
            agencyID
            name
            state
            city
            address
            email
            phone
            owner
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        employees {
          items {
            id
            name
            email
            phone
            pin
            type
            agencyID
            officeID
            permissions
            owner
            lastConnection
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        bookings {
          items {
            id
            status
            code
            agencyID
            officeID
            transport
            departureCity
            arrivalCity
            stock
            price
            createdBy
            owner
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        owner
        createdAt
        updatedAt
        __typename
      }
      officeID
      office {
        id
        agencyID
        name
        state
        city
        address
        email
        phone
        employees {
          items {
            id
            name
            email
            phone
            pin
            type
            agencyID
            officeID
            permissions
            owner
            lastConnection
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        transports {
          items {
            id
            model
            serial
            type
            officeID
            createdBy
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        bookings {
          items {
            id
            status
            code
            agencyID
            officeID
            transport
            departureCity
            arrivalCity
            stock
            price
            createdBy
            owner
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        owner
        createdAt
        updatedAt
        __typename
      }
      permissions
      owner
      lastConnection
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateEmployee = /* GraphQL */ `
  mutation UpdateEmployee(
    $input: UpdateEmployeeInput!
    $condition: ModelEmployeeConditionInput
  ) {
    updateEmployee(input: $input, condition: $condition) {
      id
      name
      email
      phone
      pin
      type
      agencyID
      agency {
        id
        cognitoID
        pin
        name
        rif
        email
        phone
        officies {
          items {
            id
            agencyID
            name
            state
            city
            address
            email
            phone
            owner
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        employees {
          items {
            id
            name
            email
            phone
            pin
            type
            agencyID
            officeID
            permissions
            owner
            lastConnection
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        bookings {
          items {
            id
            status
            code
            agencyID
            officeID
            transport
            departureCity
            arrivalCity
            stock
            price
            createdBy
            owner
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        owner
        createdAt
        updatedAt
        __typename
      }
      officeID
      office {
        id
        agencyID
        name
        state
        city
        address
        email
        phone
        employees {
          items {
            id
            name
            email
            phone
            pin
            type
            agencyID
            officeID
            permissions
            owner
            lastConnection
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        transports {
          items {
            id
            model
            serial
            type
            officeID
            createdBy
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        bookings {
          items {
            id
            status
            code
            agencyID
            officeID
            transport
            departureCity
            arrivalCity
            stock
            price
            createdBy
            owner
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        owner
        createdAt
        updatedAt
        __typename
      }
      permissions
      owner
      lastConnection
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteEmployee = /* GraphQL */ `
  mutation DeleteEmployee(
    $input: DeleteEmployeeInput!
    $condition: ModelEmployeeConditionInput
  ) {
    deleteEmployee(input: $input, condition: $condition) {
      id
      name
      email
      phone
      pin
      type
      agencyID
      agency {
        id
        cognitoID
        pin
        name
        rif
        email
        phone
        officies {
          items {
            id
            agencyID
            name
            state
            city
            address
            email
            phone
            owner
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        employees {
          items {
            id
            name
            email
            phone
            pin
            type
            agencyID
            officeID
            permissions
            owner
            lastConnection
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        bookings {
          items {
            id
            status
            code
            agencyID
            officeID
            transport
            departureCity
            arrivalCity
            stock
            price
            createdBy
            owner
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        owner
        createdAt
        updatedAt
        __typename
      }
      officeID
      office {
        id
        agencyID
        name
        state
        city
        address
        email
        phone
        employees {
          items {
            id
            name
            email
            phone
            pin
            type
            agencyID
            officeID
            permissions
            owner
            lastConnection
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        transports {
          items {
            id
            model
            serial
            type
            officeID
            createdBy
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
        bookings {
          items {
            id
            status
            code
            agencyID
            officeID
            transport
            departureCity
            arrivalCity
            stock
            price
            createdBy
            owner
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        owner
        createdAt
        updatedAt
        __typename
      }
      permissions
      owner
      lastConnection
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createTransport = /* GraphQL */ `
  mutation CreateTransport(
    $input: CreateTransportInput!
    $condition: ModelTransportConditionInput
  ) {
    createTransport(input: $input, condition: $condition) {
      id
      model
      serial
      type
      officeID
      bookings {
        items {
          id
          status
          code
          agencyID
          officeID
          transport
          customers {
            nextToken
            __typename
          }
          tickets {
            nextToken
            __typename
          }
          stops {
            nextToken
            __typename
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
          owner
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdBy
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const updateTransport = /* GraphQL */ `
  mutation UpdateTransport(
    $input: UpdateTransportInput!
    $condition: ModelTransportConditionInput
  ) {
    updateTransport(input: $input, condition: $condition) {
      id
      model
      serial
      type
      officeID
      bookings {
        items {
          id
          status
          code
          agencyID
          officeID
          transport
          customers {
            nextToken
            __typename
          }
          tickets {
            nextToken
            __typename
          }
          stops {
            nextToken
            __typename
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
          owner
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdBy
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const deleteTransport = /* GraphQL */ `
  mutation DeleteTransport(
    $input: DeleteTransportInput!
    $condition: ModelTransportConditionInput
  ) {
    deleteTransport(input: $input, condition: $condition) {
      id
      model
      serial
      type
      officeID
      bookings {
        items {
          id
          status
          code
          agencyID
          officeID
          transport
          customers {
            nextToken
            __typename
          }
          tickets {
            nextToken
            __typename
          }
          stops {
            nextToken
            __typename
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
          owner
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdBy
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const createBooking = /* GraphQL */ `
  mutation CreateBooking(
    $input: CreateBookingInput!
    $condition: ModelBookingConditionInput
  ) {
    createBooking(input: $input, condition: $condition) {
      id
      status
      code
      agencyID
      officeID
      transport
      customers {
        items {
          id
          name
          lastName
          ci
          email
          phone
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
        nextToken
        __typename
      }
      tickets {
        items {
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
          __typename
        }
        nextToken
        __typename
      }
      stops {
        items {
          id
          bookingID
          tickets {
            nextToken
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
          price
          owner
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
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
      owner
      createdAt
      updatedAt
      __typename
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
      officeID
      transport
      customers {
        items {
          id
          name
          lastName
          ci
          email
          phone
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
        nextToken
        __typename
      }
      tickets {
        items {
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
          __typename
        }
        nextToken
        __typename
      }
      stops {
        items {
          id
          bookingID
          tickets {
            nextToken
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
          price
          owner
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
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
      owner
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteBooking = /* GraphQL */ `
  mutation DeleteBooking(
    $input: DeleteBookingInput!
    $condition: ModelBookingConditionInput
  ) {
    deleteBooking(input: $input, condition: $condition) {
      id
      status
      code
      agencyID
      officeID
      transport
      customers {
        items {
          id
          name
          lastName
          ci
          email
          phone
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
        nextToken
        __typename
      }
      tickets {
        items {
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
          __typename
        }
        nextToken
        __typename
      }
      stops {
        items {
          id
          bookingID
          tickets {
            nextToken
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
          price
          owner
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
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
      owner
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createStopBooking = /* GraphQL */ `
  mutation CreateStopBooking(
    $input: CreateStopBookingInput!
    $condition: ModelStopBookingConditionInput
  ) {
    createStopBooking(input: $input, condition: $condition) {
      id
      bookingID
      tickets {
        items {
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
          __typename
        }
        nextToken
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
      price
      owner
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateStopBooking = /* GraphQL */ `
  mutation UpdateStopBooking(
    $input: UpdateStopBookingInput!
    $condition: ModelStopBookingConditionInput
  ) {
    updateStopBooking(input: $input, condition: $condition) {
      id
      bookingID
      tickets {
        items {
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
          __typename
        }
        nextToken
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
      price
      owner
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteStopBooking = /* GraphQL */ `
  mutation DeleteStopBooking(
    $input: DeleteStopBookingInput!
    $condition: ModelStopBookingConditionInput
  ) {
    deleteStopBooking(input: $input, condition: $condition) {
      id
      bookingID
      tickets {
        items {
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
          __typename
        }
        nextToken
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
      price
      owner
      createdAt
      updatedAt
      __typename
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
      name
      lastName
      ci
      email
      phone
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
  }
`;
export const updateCustomer = /* GraphQL */ `
  mutation UpdateCustomer(
    $input: UpdateCustomerInput!
    $condition: ModelCustomerConditionInput
  ) {
    updateCustomer(input: $input, condition: $condition) {
      id
      name
      lastName
      ci
      email
      phone
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
      __typename
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
      __typename
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
      orderDetailOrderTicketsId
      __typename
    }
  }
`;
export const updateOrderTicket = /* GraphQL */ `
  mutation UpdateOrderTicket(
    $input: UpdateOrderTicketInput!
    $condition: ModelOrderTicketConditionInput
  ) {
    updateOrderTicket(input: $input, condition: $condition) {
      id
      orderID
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
        owner
        createdAt
        updatedAt
        stopBookingTicketsId
        __typename
      }
      owner
      createdAt
      updatedAt
      orderDetailOrderTicketsId
      __typename
    }
  }
`;
export const createOrderDetail = /* GraphQL */ `
  mutation CreateOrderDetail(
    $input: CreateOrderDetailInput!
    $condition: ModelOrderDetailConditionInput
  ) {
    createOrderDetail(input: $input, condition: $condition) {
      id
      amount
      paymentMethod
      documentType
      customerDocument
      customerName
      customerEmail
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
        __typename
      }
      bookingID
      orderTickets {
        items {
          id
          orderID
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
            owner
            createdAt
            updatedAt
            stopBookingTicketsId
            __typename
          }
          owner
          createdAt
          updatedAt
          orderDetailOrderTicketsId
          __typename
        }
        nextToken
        __typename
      }
      userID
      createdAt
      updatedAt
      userOrdersId
      owner
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
      amount
      paymentMethod
      documentType
      customerDocument
      customerName
      customerEmail
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
        __typename
      }
      bookingID
      orderTickets {
        items {
          id
          orderID
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
            owner
            createdAt
            updatedAt
            stopBookingTicketsId
            __typename
          }
          owner
          createdAt
          updatedAt
          orderDetailOrderTicketsId
          __typename
        }
        nextToken
        __typename
      }
      userID
      createdAt
      updatedAt
      userOrdersId
      owner
      __typename
    }
  }
`;
export const deleteOrderDetail = /* GraphQL */ `
  mutation DeleteOrderDetail(
    $input: DeleteOrderDetailInput!
    $condition: ModelOrderDetailConditionInput
  ) {
    deleteOrderDetail(input: $input, condition: $condition) {
      id
      amount
      paymentMethod
      documentType
      customerDocument
      customerName
      customerEmail
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
        __typename
      }
      bookingID
      orderTickets {
        items {
          id
          orderID
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
            owner
            createdAt
            updatedAt
            stopBookingTicketsId
            __typename
          }
          owner
          createdAt
          updatedAt
          orderDetailOrderTicketsId
          __typename
        }
        nextToken
        __typename
      }
      userID
      createdAt
      updatedAt
      userOrdersId
      owner
      __typename
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
      __typename
    }
  }
`;
export const updatePayment = /* GraphQL */ `
  mutation UpdatePayment(
    $input: UpdatePaymentInput!
    $condition: ModelPaymentConditionInput
  ) {
    updatePayment(input: $input, condition: $condition) {
      id
      reference
      amount
      metadata
      userID
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const deletePayment = /* GraphQL */ `
  mutation DeletePayment(
    $input: DeletePaymentInput!
    $condition: ModelPaymentConditionInput
  ) {
    deletePayment(input: $input, condition: $condition) {
      id
      reference
      amount
      metadata
      userID
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const createOrderDetailHistory = /* GraphQL */ `
  mutation CreateOrderDetailHistory(
    $input: CreateOrderDetailHistoryInput!
    $condition: ModelOrderDetailHistoryConditionInput
  ) {
    createOrderDetailHistory(input: $input, condition: $condition) {
      id
      orderID
      order {
        id
        amount
        paymentMethod
        documentType
        customerDocument
        customerName
        customerEmail
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
          __typename
        }
        bookingID
        orderTickets {
          items {
            id
            orderID
            ticketID
            owner
            createdAt
            updatedAt
            orderDetailOrderTicketsId
            __typename
          }
          nextToken
          __typename
        }
        userID
        createdAt
        updatedAt
        userOrdersId
        owner
        __typename
      }
      userID
      owner
      googleOwner
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateOrderDetailHistory = /* GraphQL */ `
  mutation UpdateOrderDetailHistory(
    $input: UpdateOrderDetailHistoryInput!
    $condition: ModelOrderDetailHistoryConditionInput
  ) {
    updateOrderDetailHistory(input: $input, condition: $condition) {
      id
      orderID
      order {
        id
        amount
        paymentMethod
        documentType
        customerDocument
        customerName
        customerEmail
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
          __typename
        }
        bookingID
        orderTickets {
          items {
            id
            orderID
            ticketID
            owner
            createdAt
            updatedAt
            orderDetailOrderTicketsId
            __typename
          }
          nextToken
          __typename
        }
        userID
        createdAt
        updatedAt
        userOrdersId
        owner
        __typename
      }
      userID
      owner
      googleOwner
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteOrderDetailHistory = /* GraphQL */ `
  mutation DeleteOrderDetailHistory(
    $input: DeleteOrderDetailHistoryInput!
    $condition: ModelOrderDetailHistoryConditionInput
  ) {
    deleteOrderDetailHistory(input: $input, condition: $condition) {
      id
      orderID
      order {
        id
        amount
        paymentMethod
        documentType
        customerDocument
        customerName
        customerEmail
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
          __typename
        }
        bookingID
        orderTickets {
          items {
            id
            orderID
            ticketID
            owner
            createdAt
            updatedAt
            orderDetailOrderTicketsId
            __typename
          }
          nextToken
          __typename
        }
        userID
        createdAt
        updatedAt
        userOrdersId
        owner
        __typename
      }
      userID
      owner
      googleOwner
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      name
      email
      status
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
            __typename
          }
          bookingID
          orderTickets {
            nextToken
            __typename
          }
          userID
          createdAt
          updatedAt
          userOrdersId
          owner
          __typename
        }
        nextToken
        __typename
      }
      owner
      googleOwner
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      name
      email
      status
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
            __typename
          }
          bookingID
          orderTickets {
            nextToken
            __typename
          }
          userID
          createdAt
          updatedAt
          userOrdersId
          owner
          __typename
        }
        nextToken
        __typename
      }
      owner
      googleOwner
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      name
      email
      status
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
            __typename
          }
          bookingID
          orderTickets {
            nextToken
            __typename
          }
          userID
          createdAt
          updatedAt
          userOrdersId
          owner
          __typename
        }
        nextToken
        __typename
      }
      owner
      googleOwner
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const registerAgencyAdmin = /* GraphQL */ `
  mutation RegisterAgencyAdmin($input: RegisterUserInput!) {
    registerAgencyAdmin(input: $input)
  }
`;
