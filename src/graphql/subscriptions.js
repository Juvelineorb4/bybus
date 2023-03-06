/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTodo = /* GraphQL */ `
  subscription OnCreateTodo(
    $filter: ModelSubscriptionTodoFilterInput
    $owner: String
  ) {
    onCreateTodo(filter: $filter, owner: $owner) {
      id
      name
      description
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateTodo = /* GraphQL */ `
  subscription OnUpdateTodo(
    $filter: ModelSubscriptionTodoFilterInput
    $owner: String
  ) {
    onUpdateTodo(filter: $filter, owner: $owner) {
      id
      name
      description
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteTodo = /* GraphQL */ `
  subscription OnDeleteTodo(
    $filter: ModelSubscriptionTodoFilterInput
    $owner: String
  ) {
    onDeleteTodo(filter: $filter, owner: $owner) {
      id
      name
      description
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateWalletUser = /* GraphQL */ `
  subscription OnCreateWalletUser(
    $filter: ModelSubscriptionWalletUserFilterInput
    $owner: String
  ) {
    onCreateWalletUser(filter: $filter, owner: $owner) {
      userID
      email
      status
      notificationToken {
        type
        token
      }
      previousBalance
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateWalletUser = /* GraphQL */ `
  subscription OnUpdateWalletUser(
    $filter: ModelSubscriptionWalletUserFilterInput
    $owner: String
  ) {
    onUpdateWalletUser(filter: $filter, owner: $owner) {
      userID
      email
      status
      notificationToken {
        type
        token
      }
      previousBalance
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteWalletUser = /* GraphQL */ `
  subscription OnDeleteWalletUser(
    $filter: ModelSubscriptionWalletUserFilterInput
    $owner: String
  ) {
    onDeleteWalletUser(filter: $filter, owner: $owner) {
      userID
      email
      status
      notificationToken {
        type
        token
      }
      previousBalance
      owner
      createdAt
      updatedAt
    }
  }
`;
