/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTodo = /* GraphQL */ `
  mutation CreateTodo(
    $input: CreateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    createTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateTodo = /* GraphQL */ `
  mutation UpdateTodo(
    $input: UpdateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    updateTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteTodo = /* GraphQL */ `
  mutation DeleteTodo(
    $input: DeleteTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    deleteTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createWalletUser = /* GraphQL */ `
  mutation CreateWalletUser(
    $input: CreateWalletUserInput!
    $condition: ModelWalletUserConditionInput
  ) {
    createWalletUser(input: $input, condition: $condition) {
      userID
      name
      email
      status
      notificationToken
      previousBalance
      owner
      createdAt
      updatedAt
    }
  }
`;
export const updateWalletUser = /* GraphQL */ `
  mutation UpdateWalletUser(
    $input: UpdateWalletUserInput!
    $condition: ModelWalletUserConditionInput
  ) {
    updateWalletUser(input: $input, condition: $condition) {
      userID
      name
      email
      status
      notificationToken
      previousBalance
      owner
      createdAt
      updatedAt
    }
  }
`;
export const deleteWalletUser = /* GraphQL */ `
  mutation DeleteWalletUser(
    $input: DeleteWalletUserInput!
    $condition: ModelWalletUserConditionInput
  ) {
    deleteWalletUser(input: $input, condition: $condition) {
      userID
      name
      email
      status
      notificationToken
      previousBalance
      owner
      createdAt
      updatedAt
    }
  }
`;
