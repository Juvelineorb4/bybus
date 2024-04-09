/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTodayTasaCambio = /* GraphQL */ `
  query GetTodayTasaCambio {
    getTodayTasaCambio
  }
`;
export const getTasaCambio = /* GraphQL */ `
  query GetTasaCambio($id: ID!) {
    getTasaCambio(id: $id) {
      id
      price
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listTasaCambios = /* GraphQL */ `
  query ListTasaCambios(
    $filter: ModelTasaCambioFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTasaCambios(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        price
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const TasaCambiosByDate = /* GraphQL */ `
  query TasaCambiosByDate(
    $price: Float!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelTasaCambioFilterInput
    $limit: Int
    $nextToken: String
  ) {
    TasaCambiosByDate(
      price: $price
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        price
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getEmailSusbcription = /* GraphQL */ `
  query GetEmailSusbcription($id: ID!) {
    getEmailSusbcription(id: $id) {
      id
      email
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listEmailSusbcriptions = /* GraphQL */ `
  query ListEmailSusbcriptions(
    $filter: ModelEmailSusbcriptionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEmailSusbcriptions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        email
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getEmailSubscriptionbyEmail = /* GraphQL */ `
  query GetEmailSubscriptionbyEmail(
    $email: String!
    $sortDirection: ModelSortDirection
    $filter: ModelEmailSusbcriptionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getEmailSubscriptionbyEmail(
      email: $email
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        email
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getAgencySubscription = /* GraphQL */ `
  query GetAgencySubscription($id: ID!) {
    getAgencySubscription(id: $id) {
      id
      name
      rif
      email
      phone
      subscriptionDate
      status
      scheduledDate
      agencyID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listAgencySubscriptions = /* GraphQL */ `
  query ListAgencySubscriptions(
    $filter: ModelAgencySubscriptionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAgencySubscriptions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        rif
        email
        phone
        subscriptionDate
        status
        scheduledDate
        agencyID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getAgencySubscriptionbyRif = /* GraphQL */ `
  query GetAgencySubscriptionbyRif(
    $rif: String!
    $sortDirection: ModelSortDirection
    $filter: ModelAgencySubscriptionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getAgencySubscriptionbyRif(
      rif: $rif
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        rif
        email
        phone
        subscriptionDate
        status
        scheduledDate
        agencyID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getAgencySubscriptionbyEmail = /* GraphQL */ `
  query GetAgencySubscriptionbyEmail(
    $email: String!
    $sortDirection: ModelSortDirection
    $filter: ModelAgencySubscriptionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getAgencySubscriptionbyEmail(
      email: $email
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        rif
        email
        phone
        subscriptionDate
        status
        scheduledDate
        agencyID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getAgency = /* GraphQL */ `
  query GetAgency($id: ID!) {
    getAgency(id: $id) {
      id
      cognitoID
      pin
      name
      rif
      email
      phone
      percentage
      status
      history {
        items {
          id
          agencyID
          reason
          description
          createdAt
          updatedAt
          owner
          __typename
        }
        nextToken
        __typename
      }
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
          status
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
            percentage
            status
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
            status
            owner
            createdAt
            updatedAt
            __typename
          }
          status
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
          agency {
            id
            cognitoID
            pin
            name
            rif
            email
            phone
            percentage
            status
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
            status
            owner
            createdAt
            updatedAt
            __typename
          }
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
          percentage
          createdBy
          driver
          transport
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
export const listAgencies = /* GraphQL */ `
  query ListAgencies(
    $filter: ModelAgencyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAgencies(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        cognitoID
        pin
        name
        rif
        email
        phone
        percentage
        status
        history {
          items {
            id
            agencyID
            reason
            description
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
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
            status
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
            status
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
            departureCity
            arrivalCity
            stock
            price
            percentage
            createdBy
            driver
            transport
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
      nextToken
      __typename
    }
  }
`;
export const getAgencyByEmail = /* GraphQL */ `
  query GetAgencyByEmail(
    $email: String!
    $sortDirection: ModelSortDirection
    $filter: ModelAgencyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getAgencyByEmail(
      email: $email
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        cognitoID
        pin
        name
        rif
        email
        phone
        percentage
        status
        history {
          items {
            id
            agencyID
            reason
            description
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
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
            status
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
            status
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
            departureCity
            arrivalCity
            stock
            price
            percentage
            createdBy
            driver
            transport
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
      nextToken
      __typename
    }
  }
`;
export const getAgencyHistory = /* GraphQL */ `
  query GetAgencyHistory($id: ID!) {
    getAgencyHistory(id: $id) {
      id
      agencyID
      reason
      description
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const listAgencyHistories = /* GraphQL */ `
  query ListAgencyHistories(
    $filter: ModelAgencyHistoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAgencyHistories(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        agencyID
        reason
        description
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const agencyHistoriesByAgencyID = /* GraphQL */ `
  query AgencyHistoriesByAgencyID(
    $agencyID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelAgencyHistoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    agencyHistoriesByAgencyID(
      agencyID: $agencyID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        agencyID
        reason
        description
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getOffice = /* GraphQL */ `
  query GetOffice($id: ID!) {
    getOffice(id: $id) {
      id
      agencyID
      name
      state
      city
      address
      email
      phone
      status
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
            percentage
            status
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
            status
            owner
            createdAt
            updatedAt
            __typename
          }
          status
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
          agency {
            id
            cognitoID
            pin
            name
            rif
            email
            phone
            percentage
            status
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
            status
            owner
            createdAt
            updatedAt
            __typename
          }
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
          percentage
          createdBy
          driver
          transport
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
export const listOffices = /* GraphQL */ `
  query ListOffices(
    $filter: ModelOfficeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOffices(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        agencyID
        name
        state
        city
        address
        email
        phone
        status
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
            status
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
            departureCity
            arrivalCity
            stock
            price
            percentage
            createdBy
            driver
            transport
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
      nextToken
      __typename
    }
  }
`;
export const officesByAgencyID = /* GraphQL */ `
  query OfficesByAgencyID(
    $agencyID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelOfficeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    officesByAgencyID(
      agencyID: $agencyID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        agencyID
        name
        state
        city
        address
        email
        phone
        status
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
            status
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
            departureCity
            arrivalCity
            stock
            price
            percentage
            createdBy
            driver
            transport
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
      nextToken
      __typename
    }
  }
`;
export const getState = /* GraphQL */ `
  query GetState($id: ID!) {
    getState(id: $id) {
      id
      name
      cities
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listStates = /* GraphQL */ `
  query ListStates(
    $filter: ModelStateFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStates(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        cities
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getEmployee = /* GraphQL */ `
  query GetEmployee($id: ID!) {
    getEmployee(id: $id) {
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
        percentage
        status
        history {
          items {
            id
            agencyID
            reason
            description
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
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
            status
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
            status
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
            departureCity
            arrivalCity
            stock
            price
            percentage
            createdBy
            driver
            transport
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
        status
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
            status
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
            departureCity
            arrivalCity
            stock
            price
            percentage
            createdBy
            driver
            transport
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
      status
      owner
      lastConnection
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listEmployees = /* GraphQL */ `
  query ListEmployees(
    $filter: ModelEmployeeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEmployees(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
          percentage
          status
          history {
            nextToken
            __typename
          }
          officies {
            nextToken
            __typename
          }
          employees {
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
          status
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
        status
        owner
        lastConnection
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const employeesByAgencyID = /* GraphQL */ `
  query EmployeesByAgencyID(
    $agencyID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelEmployeeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    employeesByAgencyID(
      agencyID: $agencyID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
          percentage
          status
          history {
            nextToken
            __typename
          }
          officies {
            nextToken
            __typename
          }
          employees {
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
          status
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
        status
        owner
        lastConnection
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const employeesByOfficeID = /* GraphQL */ `
  query EmployeesByOfficeID(
    $officeID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelEmployeeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    employeesByOfficeID(
      officeID: $officeID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
          percentage
          status
          history {
            nextToken
            __typename
          }
          officies {
            nextToken
            __typename
          }
          employees {
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
          status
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
        status
        owner
        lastConnection
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getTransport = /* GraphQL */ `
  query GetTransport($id: ID!) {
    getTransport(id: $id) {
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
  }
`;
export const listTransports = /* GraphQL */ `
  query ListTransports(
    $filter: ModelTransportFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTransports(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const transportsByOfficeID = /* GraphQL */ `
  query TransportsByOfficeID(
    $officeID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelTransportFilterInput
    $limit: Int
    $nextToken: String
  ) {
    transportsByOfficeID(
      officeID: $officeID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const getScheduleBooking = /* GraphQL */ `
  query GetScheduleBooking($id: ID!) {
    getScheduleBooking(id: $id) {
      id
      bookingID
      booking {
        id
        status
        code
        agencyID
        agency {
          id
          cognitoID
          pin
          name
          rif
          email
          phone
          percentage
          status
          history {
            nextToken
            __typename
          }
          officies {
            nextToken
            __typename
          }
          employees {
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
          status
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
        customers {
          items {
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
          nextToken
          __typename
        }
        tickets {
          items {
            id
            code
            bookingID
            orderDetailID
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
            orderDetailTicketsId
            __typename
          }
          nextToken
          __typename
        }
        stops {
          items {
            id
            bookingID
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
        percentage
        createdBy
        driver
        transport
        owner
        createdAt
        updatedAt
        __typename
      }
      freq
      owner
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listScheduleBookings = /* GraphQL */ `
  query ListScheduleBookings(
    $filter: ModelScheduleBookingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listScheduleBookings(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        bookingID
        booking {
          id
          status
          code
          agencyID
          agency {
            id
            cognitoID
            pin
            name
            rif
            email
            phone
            percentage
            status
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
            status
            owner
            createdAt
            updatedAt
            __typename
          }
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
          percentage
          createdBy
          driver
          transport
          owner
          createdAt
          updatedAt
          __typename
        }
        freq
        owner
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getBooking = /* GraphQL */ `
  query GetBooking($id: ID!) {
    getBooking(id: $id) {
      id
      status
      code
      agencyID
      agency {
        id
        cognitoID
        pin
        name
        rif
        email
        phone
        percentage
        status
        history {
          items {
            id
            agencyID
            reason
            description
            createdAt
            updatedAt
            owner
            __typename
          }
          nextToken
          __typename
        }
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
            status
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
            status
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
            departureCity
            arrivalCity
            stock
            price
            percentage
            createdBy
            driver
            transport
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
        status
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
            status
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
            departureCity
            arrivalCity
            stock
            price
            percentage
            createdBy
            driver
            transport
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
            orderDetailID
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
            orderDetailTicketsId
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
          orderDetailTicketsId
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
      percentage
      createdBy
      driver
      transport
      owner
      createdAt
      updatedAt
      __typename
    }
  }
`;
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
        agency {
          id
          cognitoID
          pin
          name
          rif
          email
          phone
          percentage
          status
          history {
            nextToken
            __typename
          }
          officies {
            nextToken
            __typename
          }
          employees {
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
          status
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
        customers {
          items {
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
          nextToken
          __typename
        }
        tickets {
          items {
            id
            code
            bookingID
            orderDetailID
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
            orderDetailTicketsId
            __typename
          }
          nextToken
          __typename
        }
        stops {
          items {
            id
            bookingID
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
        percentage
        createdBy
        driver
        transport
        owner
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getBookingbyCode = /* GraphQL */ `
  query GetBookingbyCode(
    $code: String!
    $sortDirection: ModelSortDirection
    $filter: ModelBookingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getBookingbyCode(
      code: $code
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        status
        code
        agencyID
        agency {
          id
          cognitoID
          pin
          name
          rif
          email
          phone
          percentage
          status
          history {
            nextToken
            __typename
          }
          officies {
            nextToken
            __typename
          }
          employees {
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
          status
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
        customers {
          items {
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
          nextToken
          __typename
        }
        tickets {
          items {
            id
            code
            bookingID
            orderDetailID
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
            orderDetailTicketsId
            __typename
          }
          nextToken
          __typename
        }
        stops {
          items {
            id
            bookingID
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
        percentage
        createdBy
        driver
        transport
        owner
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const bookingsByAgencyID = /* GraphQL */ `
  query BookingsByAgencyID(
    $agencyID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelBookingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    bookingsByAgencyID(
      agencyID: $agencyID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        status
        code
        agencyID
        agency {
          id
          cognitoID
          pin
          name
          rif
          email
          phone
          percentage
          status
          history {
            nextToken
            __typename
          }
          officies {
            nextToken
            __typename
          }
          employees {
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
          status
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
        customers {
          items {
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
          nextToken
          __typename
        }
        tickets {
          items {
            id
            code
            bookingID
            orderDetailID
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
            orderDetailTicketsId
            __typename
          }
          nextToken
          __typename
        }
        stops {
          items {
            id
            bookingID
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
        percentage
        createdBy
        driver
        transport
        owner
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const bookingsByOfficeID = /* GraphQL */ `
  query BookingsByOfficeID(
    $officeID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelBookingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    bookingsByOfficeID(
      officeID: $officeID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        status
        code
        agencyID
        agency {
          id
          cognitoID
          pin
          name
          rif
          email
          phone
          percentage
          status
          history {
            nextToken
            __typename
          }
          officies {
            nextToken
            __typename
          }
          employees {
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
          status
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
        customers {
          items {
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
          nextToken
          __typename
        }
        tickets {
          items {
            id
            code
            bookingID
            orderDetailID
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
            orderDetailTicketsId
            __typename
          }
          nextToken
          __typename
        }
        stops {
          items {
            id
            bookingID
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
        percentage
        createdBy
        driver
        transport
        owner
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getStopBooking = /* GraphQL */ `
  query GetStopBooking($id: ID!) {
    getStopBooking(id: $id) {
      id
      bookingID
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
          orderDetailTicketsId
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
export const listStopBookings = /* GraphQL */ `
  query ListStopBookings(
    $filter: ModelStopBookingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStopBookings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        bookingID
        tickets {
          items {
            id
            code
            bookingID
            orderDetailID
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
            orderDetailTicketsId
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
      nextToken
      __typename
    }
  }
`;
export const stopBookingsByBookingID = /* GraphQL */ `
  query StopBookingsByBookingID(
    $bookingID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelStopBookingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    stopBookingsByBookingID(
      bookingID: $bookingID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        bookingID
        tickets {
          items {
            id
            code
            bookingID
            orderDetailID
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
            orderDetailTicketsId
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
      nextToken
      __typename
    }
  }
`;
export const getCustomer = /* GraphQL */ `
  query GetCustomer($id: ID!) {
    getCustomer(id: $id) {
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
            orderDetailID
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
            orderDetailTicketsId
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
        orderDetailTicketsId
        __typename
      }
      owner
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listCustomers = /* GraphQL */ `
  query ListCustomers(
    $filter: ModelCustomerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCustomers(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
          orderDetailTicketsId
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
  }
`;
export const customersByBookingID = /* GraphQL */ `
  query CustomersByBookingID(
    $bookingID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelCustomerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    customersByBookingID(
      bookingID: $bookingID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
          orderDetailTicketsId
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
  }
`;
export const getTicket = /* GraphQL */ `
  query GetTicket($id: ID!) {
    getTicket(id: $id) {
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
          orderDetailTicketsId
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
      orderDetailTicketsId
      __typename
    }
  }
`;
export const listTickets = /* GraphQL */ `
  query ListTickets(
    $filter: ModelTicketFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTickets(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
          ticket {
            id
            code
            bookingID
            orderDetailID
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
            orderDetailTicketsId
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
        orderDetailTicketsId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const ticketsByBookingID = /* GraphQL */ `
  query TicketsByBookingID(
    $bookingID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelTicketFilterInput
    $limit: Int
    $nextToken: String
  ) {
    ticketsByBookingID(
      bookingID: $bookingID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
          ticket {
            id
            code
            bookingID
            orderDetailID
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
            orderDetailTicketsId
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
        orderDetailTicketsId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const ticketsByOrderDetailID = /* GraphQL */ `
  query TicketsByOrderDetailID(
    $orderDetailID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelTicketFilterInput
    $limit: Int
    $nextToken: String
  ) {
    ticketsByOrderDetailID(
      orderDetailID: $orderDetailID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
          ticket {
            id
            code
            bookingID
            orderDetailID
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
            orderDetailTicketsId
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
        orderDetailTicketsId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const ticketsByStop = /* GraphQL */ `
  query TicketsByStop(
    $stop: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelTicketFilterInput
    $limit: Int
    $nextToken: String
  ) {
    ticketsByStop(
      stop: $stop
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
          ticket {
            id
            code
            bookingID
            orderDetailID
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
            orderDetailTicketsId
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
        orderDetailTicketsId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getOrderDetail = /* GraphQL */ `
  query GetOrderDetail($id: ID!) {
    getOrderDetail(id: $id) {
      id
      amount
      paymentMethod
      documentType
      customerDocument
      customerName
      customerEmail
      total
      isGuest
      status
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
      booking {
        id
        status
        code
        agencyID
        agency {
          id
          cognitoID
          pin
          name
          rif
          email
          phone
          percentage
          status
          history {
            nextToken
            __typename
          }
          officies {
            nextToken
            __typename
          }
          employees {
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
          status
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
        customers {
          items {
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
          nextToken
          __typename
        }
        tickets {
          items {
            id
            code
            bookingID
            orderDetailID
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
            orderDetailTicketsId
            __typename
          }
          nextToken
          __typename
        }
        stops {
          items {
            id
            bookingID
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
        percentage
        createdBy
        driver
        transport
        owner
        createdAt
        updatedAt
        __typename
      }
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
          orderDetailTicketsId
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
        total
        isGuest
        status
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
        booking {
          id
          status
          code
          agencyID
          agency {
            id
            cognitoID
            pin
            name
            rif
            email
            phone
            percentage
            status
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
            status
            owner
            createdAt
            updatedAt
            __typename
          }
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
          percentage
          createdBy
          driver
          transport
          owner
          createdAt
          updatedAt
          __typename
        }
        tickets {
          items {
            id
            code
            bookingID
            orderDetailID
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
            orderDetailTicketsId
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
      nextToken
      __typename
    }
  }
`;
export const orderDetailsByUserID = /* GraphQL */ `
  query OrderDetailsByUserID(
    $userID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelOrderDetailFilterInput
    $limit: Int
    $nextToken: String
  ) {
    orderDetailsByUserID(
      userID: $userID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
        status
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
        booking {
          id
          status
          code
          agencyID
          agency {
            id
            cognitoID
            pin
            name
            rif
            email
            phone
            percentage
            status
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
            status
            owner
            createdAt
            updatedAt
            __typename
          }
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
          percentage
          createdBy
          driver
          transport
          owner
          createdAt
          updatedAt
          __typename
        }
        tickets {
          items {
            id
            code
            bookingID
            orderDetailID
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
            orderDetailTicketsId
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
      nextToken
      __typename
    }
  }
`;
export const getPayment = /* GraphQL */ `
  query GetPayment($id: ID!) {
    getPayment(id: $id) {
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
export const listPayments = /* GraphQL */ `
  query ListPayments(
    $filter: ModelPaymentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPayments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getOrderDetailHistory = /* GraphQL */ `
  query GetOrderDetailHistory($id: ID!) {
    getOrderDetailHistory(id: $id) {
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
        status
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
        booking {
          id
          status
          code
          agencyID
          agency {
            id
            cognitoID
            pin
            name
            rif
            email
            phone
            percentage
            status
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
            status
            owner
            createdAt
            updatedAt
            __typename
          }
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
          percentage
          createdBy
          driver
          transport
          owner
          createdAt
          updatedAt
          __typename
        }
        tickets {
          items {
            id
            code
            bookingID
            orderDetailID
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
            orderDetailTicketsId
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
export const listOrderDetailHistories = /* GraphQL */ `
  query ListOrderDetailHistories(
    $filter: ModelOrderDetailHistoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrderDetailHistories(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
          status
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
          booking {
            id
            status
            code
            agencyID
            officeID
            departureCity
            arrivalCity
            stock
            price
            percentage
            createdBy
            driver
            transport
            owner
            createdAt
            updatedAt
            __typename
          }
          tickets {
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
      nextToken
      __typename
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
          status
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
          booking {
            id
            status
            code
            agencyID
            officeID
            departureCity
            arrivalCity
            stock
            price
            percentage
            createdBy
            driver
            transport
            owner
            createdAt
            updatedAt
            __typename
          }
          tickets {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
            status
            paymentID
            bookingID
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
      nextToken
      __typename
    }
  }
`;
export const getUserbyEmail = /* GraphQL */ `
  query GetUserbyEmail(
    $email: String!
    $sortDirection: ModelSortDirection
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getUserbyEmail(
      email: $email
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
            status
            paymentID
            bookingID
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
      nextToken
      __typename
    }
  }
`;
