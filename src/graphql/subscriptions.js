/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTasaCambio = /* GraphQL */ `
  subscription OnCreateTasaCambio(
    $filter: ModelSubscriptionTasaCambioFilterInput
  ) {
    onCreateTasaCambio(filter: $filter) {
      id
      price
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateTasaCambio = /* GraphQL */ `
  subscription OnUpdateTasaCambio(
    $filter: ModelSubscriptionTasaCambioFilterInput
  ) {
    onUpdateTasaCambio(filter: $filter) {
      id
      price
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteTasaCambio = /* GraphQL */ `
  subscription OnDeleteTasaCambio(
    $filter: ModelSubscriptionTasaCambioFilterInput
  ) {
    onDeleteTasaCambio(filter: $filter) {
      id
      price
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateEmailSusbcription = /* GraphQL */ `
  subscription OnCreateEmailSusbcription(
    $filter: ModelSubscriptionEmailSusbcriptionFilterInput
  ) {
    onCreateEmailSusbcription(filter: $filter) {
      id
      email
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateEmailSusbcription = /* GraphQL */ `
  subscription OnUpdateEmailSusbcription(
    $filter: ModelSubscriptionEmailSusbcriptionFilterInput
  ) {
    onUpdateEmailSusbcription(filter: $filter) {
      id
      email
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteEmailSusbcription = /* GraphQL */ `
  subscription OnDeleteEmailSusbcription(
    $filter: ModelSubscriptionEmailSusbcriptionFilterInput
  ) {
    onDeleteEmailSusbcription(filter: $filter) {
      id
      email
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateAgencySubscription = /* GraphQL */ `
  subscription OnCreateAgencySubscription(
    $filter: ModelSubscriptionAgencySubscriptionFilterInput
  ) {
    onCreateAgencySubscription(filter: $filter) {
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
export const onUpdateAgencySubscription = /* GraphQL */ `
  subscription OnUpdateAgencySubscription(
    $filter: ModelSubscriptionAgencySubscriptionFilterInput
  ) {
    onUpdateAgencySubscription(filter: $filter) {
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
export const onDeleteAgencySubscription = /* GraphQL */ `
  subscription OnDeleteAgencySubscription(
    $filter: ModelSubscriptionAgencySubscriptionFilterInput
  ) {
    onDeleteAgencySubscription(filter: $filter) {
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
export const onCreateAgency = /* GraphQL */ `
  subscription OnCreateAgency(
    $filter: ModelSubscriptionAgencyFilterInput
    $owner: String
  ) {
    onCreateAgency(filter: $filter, owner: $owner) {
      id
      cognitoID
      identityID
      image
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
            identityID
            image
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
            identityID
            image
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
          transportParking
          transportFeatures
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
export const onUpdateAgency = /* GraphQL */ `
  subscription OnUpdateAgency(
    $filter: ModelSubscriptionAgencyFilterInput
    $owner: String
  ) {
    onUpdateAgency(filter: $filter, owner: $owner) {
      id
      cognitoID
      identityID
      image
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
            identityID
            image
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
            identityID
            image
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
          transportParking
          transportFeatures
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
export const onDeleteAgency = /* GraphQL */ `
  subscription OnDeleteAgency(
    $filter: ModelSubscriptionAgencyFilterInput
    $owner: String
  ) {
    onDeleteAgency(filter: $filter, owner: $owner) {
      id
      cognitoID
      identityID
      image
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
            identityID
            image
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
            identityID
            image
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
          transportParking
          transportFeatures
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
export const onCreateAgencyHistory = /* GraphQL */ `
  subscription OnCreateAgencyHistory(
    $filter: ModelSubscriptionAgencyHistoryFilterInput
    $owner: String
  ) {
    onCreateAgencyHistory(filter: $filter, owner: $owner) {
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
export const onUpdateAgencyHistory = /* GraphQL */ `
  subscription OnUpdateAgencyHistory(
    $filter: ModelSubscriptionAgencyHistoryFilterInput
    $owner: String
  ) {
    onUpdateAgencyHistory(filter: $filter, owner: $owner) {
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
export const onDeleteAgencyHistory = /* GraphQL */ `
  subscription OnDeleteAgencyHistory(
    $filter: ModelSubscriptionAgencyHistoryFilterInput
    $owner: String
  ) {
    onDeleteAgencyHistory(filter: $filter, owner: $owner) {
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
export const onCreateOffice = /* GraphQL */ `
  subscription OnCreateOffice(
    $filter: ModelSubscriptionOfficeFilterInput
    $owner: String
  ) {
    onCreateOffice(filter: $filter, owner: $owner) {
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
            identityID
            image
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
            identityID
            image
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
          transportParking
          transportFeatures
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
export const onUpdateOffice = /* GraphQL */ `
  subscription OnUpdateOffice(
    $filter: ModelSubscriptionOfficeFilterInput
    $owner: String
  ) {
    onUpdateOffice(filter: $filter, owner: $owner) {
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
            identityID
            image
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
            identityID
            image
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
          transportParking
          transportFeatures
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
export const onDeleteOffice = /* GraphQL */ `
  subscription OnDeleteOffice(
    $filter: ModelSubscriptionOfficeFilterInput
    $owner: String
  ) {
    onDeleteOffice(filter: $filter, owner: $owner) {
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
            identityID
            image
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
            identityID
            image
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
          transportParking
          transportFeatures
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
export const onCreateState = /* GraphQL */ `
  subscription OnCreateState($filter: ModelSubscriptionStateFilterInput) {
    onCreateState(filter: $filter) {
      id
      name
      cities
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateState = /* GraphQL */ `
  subscription OnUpdateState($filter: ModelSubscriptionStateFilterInput) {
    onUpdateState(filter: $filter) {
      id
      name
      cities
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteState = /* GraphQL */ `
  subscription OnDeleteState($filter: ModelSubscriptionStateFilterInput) {
    onDeleteState(filter: $filter) {
      id
      name
      cities
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateEmployee = /* GraphQL */ `
  subscription OnCreateEmployee(
    $filter: ModelSubscriptionEmployeeFilterInput
    $owner: String
  ) {
    onCreateEmployee(filter: $filter, owner: $owner) {
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
        identityID
        image
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
            transportParking
            transportFeatures
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
            transportParking
            transportFeatures
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
export const onUpdateEmployee = /* GraphQL */ `
  subscription OnUpdateEmployee(
    $filter: ModelSubscriptionEmployeeFilterInput
    $owner: String
  ) {
    onUpdateEmployee(filter: $filter, owner: $owner) {
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
        identityID
        image
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
            transportParking
            transportFeatures
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
            transportParking
            transportFeatures
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
export const onDeleteEmployee = /* GraphQL */ `
  subscription OnDeleteEmployee(
    $filter: ModelSubscriptionEmployeeFilterInput
    $owner: String
  ) {
    onDeleteEmployee(filter: $filter, owner: $owner) {
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
        identityID
        image
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
            transportParking
            transportFeatures
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
            transportParking
            transportFeatures
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
export const onCreateTransport = /* GraphQL */ `
  subscription OnCreateTransport(
    $filter: ModelSubscriptionTransportFilterInput
    $owner: String
  ) {
    onCreateTransport(filter: $filter, owner: $owner) {
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
export const onUpdateTransport = /* GraphQL */ `
  subscription OnUpdateTransport(
    $filter: ModelSubscriptionTransportFilterInput
    $owner: String
  ) {
    onUpdateTransport(filter: $filter, owner: $owner) {
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
export const onDeleteTransport = /* GraphQL */ `
  subscription OnDeleteTransport(
    $filter: ModelSubscriptionTransportFilterInput
    $owner: String
  ) {
    onDeleteTransport(filter: $filter, owner: $owner) {
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
export const onCreateScheduleBooking = /* GraphQL */ `
  subscription OnCreateScheduleBooking(
    $filter: ModelSubscriptionScheduleBookingFilterInput
    $owner: String
  ) {
    onCreateScheduleBooking(filter: $filter, owner: $owner) {
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
          identityID
          image
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
        transportParking
        transportFeatures
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
export const onUpdateScheduleBooking = /* GraphQL */ `
  subscription OnUpdateScheduleBooking(
    $filter: ModelSubscriptionScheduleBookingFilterInput
    $owner: String
  ) {
    onUpdateScheduleBooking(filter: $filter, owner: $owner) {
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
          identityID
          image
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
        transportParking
        transportFeatures
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
export const onDeleteScheduleBooking = /* GraphQL */ `
  subscription OnDeleteScheduleBooking(
    $filter: ModelSubscriptionScheduleBookingFilterInput
    $owner: String
  ) {
    onDeleteScheduleBooking(filter: $filter, owner: $owner) {
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
          identityID
          image
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
        transportParking
        transportFeatures
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
export const onCreateBooking = /* GraphQL */ `
  subscription OnCreateBooking(
    $filter: ModelSubscriptionBookingFilterInput
    $owner: String
  ) {
    onCreateBooking(filter: $filter, owner: $owner) {
      id
      status
      code
      agencyID
      agency {
        id
        cognitoID
        identityID
        image
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
            transportParking
            transportFeatures
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
            transportParking
            transportFeatures
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
            transportParking
            transportFeatures
            owner
            createdAt
            updatedAt
            __typename
          }
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
      transportParking
      transportFeatures
      owner
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateBooking = /* GraphQL */ `
  subscription OnUpdateBooking(
    $filter: ModelSubscriptionBookingFilterInput
    $owner: String
  ) {
    onUpdateBooking(filter: $filter, owner: $owner) {
      id
      status
      code
      agencyID
      agency {
        id
        cognitoID
        identityID
        image
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
            transportParking
            transportFeatures
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
            transportParking
            transportFeatures
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
            transportParking
            transportFeatures
            owner
            createdAt
            updatedAt
            __typename
          }
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
      transportParking
      transportFeatures
      owner
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteBooking = /* GraphQL */ `
  subscription OnDeleteBooking(
    $filter: ModelSubscriptionBookingFilterInput
    $owner: String
  ) {
    onDeleteBooking(filter: $filter, owner: $owner) {
      id
      status
      code
      agencyID
      agency {
        id
        cognitoID
        identityID
        image
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
            transportParking
            transportFeatures
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
            transportParking
            transportFeatures
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
            transportParking
            transportFeatures
            owner
            createdAt
            updatedAt
            __typename
          }
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
      transportParking
      transportFeatures
      owner
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateStopBooking = /* GraphQL */ `
  subscription OnCreateStopBooking(
    $filter: ModelSubscriptionStopBookingFilterInput
    $owner: String
  ) {
    onCreateStopBooking(filter: $filter, owner: $owner) {
      id
      bookingID
      tickets {
        items {
          id
          code
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
            transportParking
            transportFeatures
            owner
            createdAt
            updatedAt
            __typename
          }
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
export const onUpdateStopBooking = /* GraphQL */ `
  subscription OnUpdateStopBooking(
    $filter: ModelSubscriptionStopBookingFilterInput
    $owner: String
  ) {
    onUpdateStopBooking(filter: $filter, owner: $owner) {
      id
      bookingID
      tickets {
        items {
          id
          code
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
            transportParking
            transportFeatures
            owner
            createdAt
            updatedAt
            __typename
          }
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
export const onDeleteStopBooking = /* GraphQL */ `
  subscription OnDeleteStopBooking(
    $filter: ModelSubscriptionStopBookingFilterInput
    $owner: String
  ) {
    onDeleteStopBooking(filter: $filter, owner: $owner) {
      id
      bookingID
      tickets {
        items {
          id
          code
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
            transportParking
            transportFeatures
            owner
            createdAt
            updatedAt
            __typename
          }
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
export const onCreateCustomer = /* GraphQL */ `
  subscription OnCreateCustomer(
    $filter: ModelSubscriptionCustomerFilterInput
    $owner: String
  ) {
    onCreateCustomer(filter: $filter, owner: $owner) {
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
        booking {
          id
          status
          code
          agencyID
          agency {
            id
            cognitoID
            identityID
            image
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
          transportParking
          transportFeatures
          owner
          createdAt
          updatedAt
          __typename
        }
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
export const onUpdateCustomer = /* GraphQL */ `
  subscription OnUpdateCustomer(
    $filter: ModelSubscriptionCustomerFilterInput
    $owner: String
  ) {
    onUpdateCustomer(filter: $filter, owner: $owner) {
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
        booking {
          id
          status
          code
          agencyID
          agency {
            id
            cognitoID
            identityID
            image
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
          transportParking
          transportFeatures
          owner
          createdAt
          updatedAt
          __typename
        }
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
export const onDeleteCustomer = /* GraphQL */ `
  subscription OnDeleteCustomer(
    $filter: ModelSubscriptionCustomerFilterInput
    $owner: String
  ) {
    onDeleteCustomer(filter: $filter, owner: $owner) {
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
        booking {
          id
          status
          code
          agencyID
          agency {
            id
            cognitoID
            identityID
            image
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
          transportParking
          transportFeatures
          owner
          createdAt
          updatedAt
          __typename
        }
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
export const onCreateTicket = /* GraphQL */ `
  subscription OnCreateTicket(
    $filter: ModelSubscriptionTicketFilterInput
    $owner: String
  ) {
    onCreateTicket(filter: $filter, owner: $owner) {
      id
      code
      bookingID
      booking {
        id
        status
        code
        agencyID
        agency {
          id
          cognitoID
          identityID
          image
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
        transportParking
        transportFeatures
        owner
        createdAt
        updatedAt
        __typename
      }
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
            transportParking
            transportFeatures
            owner
            createdAt
            updatedAt
            __typename
          }
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
export const onUpdateTicket = /* GraphQL */ `
  subscription OnUpdateTicket(
    $filter: ModelSubscriptionTicketFilterInput
    $owner: String
  ) {
    onUpdateTicket(filter: $filter, owner: $owner) {
      id
      code
      bookingID
      booking {
        id
        status
        code
        agencyID
        agency {
          id
          cognitoID
          identityID
          image
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
        transportParking
        transportFeatures
        owner
        createdAt
        updatedAt
        __typename
      }
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
            transportParking
            transportFeatures
            owner
            createdAt
            updatedAt
            __typename
          }
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
export const onDeleteTicket = /* GraphQL */ `
  subscription OnDeleteTicket(
    $filter: ModelSubscriptionTicketFilterInput
    $owner: String
  ) {
    onDeleteTicket(filter: $filter, owner: $owner) {
      id
      code
      bookingID
      booking {
        id
        status
        code
        agencyID
        agency {
          id
          cognitoID
          identityID
          image
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
        transportParking
        transportFeatures
        owner
        createdAt
        updatedAt
        __typename
      }
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
            transportParking
            transportFeatures
            owner
            createdAt
            updatedAt
            __typename
          }
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
export const onCreateOrderDetail = /* GraphQL */ `
  subscription OnCreateOrderDetail(
    $filter: ModelSubscriptionOrderDetailFilterInput
    $owner: String
  ) {
    onCreateOrderDetail(filter: $filter, owner: $owner) {
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
          identityID
          image
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
        transportParking
        transportFeatures
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
            transportParking
            transportFeatures
            owner
            createdAt
            updatedAt
            __typename
          }
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
export const onUpdateOrderDetail = /* GraphQL */ `
  subscription OnUpdateOrderDetail(
    $filter: ModelSubscriptionOrderDetailFilterInput
    $owner: String
  ) {
    onUpdateOrderDetail(filter: $filter, owner: $owner) {
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
          identityID
          image
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
        transportParking
        transportFeatures
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
            transportParking
            transportFeatures
            owner
            createdAt
            updatedAt
            __typename
          }
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
export const onDeleteOrderDetail = /* GraphQL */ `
  subscription OnDeleteOrderDetail(
    $filter: ModelSubscriptionOrderDetailFilterInput
    $owner: String
  ) {
    onDeleteOrderDetail(filter: $filter, owner: $owner) {
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
          identityID
          image
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
        transportParking
        transportFeatures
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
            transportParking
            transportFeatures
            owner
            createdAt
            updatedAt
            __typename
          }
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
export const onCreatePayment = /* GraphQL */ `
  subscription OnCreatePayment(
    $filter: ModelSubscriptionPaymentFilterInput
    $owner: String
  ) {
    onCreatePayment(filter: $filter, owner: $owner) {
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
export const onUpdatePayment = /* GraphQL */ `
  subscription OnUpdatePayment(
    $filter: ModelSubscriptionPaymentFilterInput
    $owner: String
  ) {
    onUpdatePayment(filter: $filter, owner: $owner) {
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
export const onDeletePayment = /* GraphQL */ `
  subscription OnDeletePayment(
    $filter: ModelSubscriptionPaymentFilterInput
    $owner: String
  ) {
    onDeletePayment(filter: $filter, owner: $owner) {
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
export const onCreateOrderDetailHistory = /* GraphQL */ `
  subscription OnCreateOrderDetailHistory(
    $filter: ModelSubscriptionOrderDetailHistoryFilterInput
    $owner: String
    $googleOwner: String
  ) {
    onCreateOrderDetailHistory(
      filter: $filter
      owner: $owner
      googleOwner: $googleOwner
    ) {
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
            identityID
            image
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
          transportParking
          transportFeatures
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
export const onUpdateOrderDetailHistory = /* GraphQL */ `
  subscription OnUpdateOrderDetailHistory(
    $filter: ModelSubscriptionOrderDetailHistoryFilterInput
    $owner: String
    $googleOwner: String
  ) {
    onUpdateOrderDetailHistory(
      filter: $filter
      owner: $owner
      googleOwner: $googleOwner
    ) {
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
            identityID
            image
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
          transportParking
          transportFeatures
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
export const onDeleteOrderDetailHistory = /* GraphQL */ `
  subscription OnDeleteOrderDetailHistory(
    $filter: ModelSubscriptionOrderDetailHistoryFilterInput
    $owner: String
    $googleOwner: String
  ) {
    onDeleteOrderDetailHistory(
      filter: $filter
      owner: $owner
      googleOwner: $googleOwner
    ) {
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
            identityID
            image
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
          transportParking
          transportFeatures
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
    $googleOwner: String
  ) {
    onCreateUser(filter: $filter, owner: $owner, googleOwner: $googleOwner) {
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
            transportParking
            transportFeatures
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
    $googleOwner: String
  ) {
    onUpdateUser(filter: $filter, owner: $owner, googleOwner: $googleOwner) {
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
            transportParking
            transportFeatures
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
    $googleOwner: String
  ) {
    onDeleteUser(filter: $filter, owner: $owner, googleOwner: $googleOwner) {
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
            transportParking
            transportFeatures
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
