/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTodo = /* GraphQL */ `
  query GetTodo($id: ID!) {
    getTodo(id: $id) {
      id
      name
      description
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listTodos = /* GraphQL */ `
  query ListTodos(
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getWalletUser = /* GraphQL */ `
  query GetWalletUser($userID: ID!) {
    getWalletUser(userID: $userID) {
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
export const listWalletUsers = /* GraphQL */ `
  query ListWalletUsers(
    $userID: ID
    $filter: ModelWalletUserFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listWalletUsers(
      userID: $userID
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
      nextToken
    }
  }
`;
