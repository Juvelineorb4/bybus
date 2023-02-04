/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createWalletUser = /* GraphQL */ `
  mutation CreateWalletUser(
    $input: CreateWalletUserInput!
    $condition: ModelWalletUserConditionInput
  ) {
    createWalletUser(input: $input, condition: $condition) {
      id
      userID
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
      id
      userID
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
      id
      userID
      createdAt
      updatedAt
    }
  }
`;
