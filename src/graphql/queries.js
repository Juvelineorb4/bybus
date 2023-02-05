/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getWalletUser = /* GraphQL */ `
  query GetWalletUser($id: ID!) {
    getWalletUser(id: $id) {
      id
      userID
      createdAt
      updatedAt
    }
  }
`;
export const listWalletUsers = /* GraphQL */ `
  query ListWalletUsers(
    $filter: ModelWalletUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listWalletUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
