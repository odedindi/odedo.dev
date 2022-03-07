/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Me
// ====================================================

export interface MyContacts_myContact {
  __typename: "Bio";
  email: string;
  github: URL;
  linkedin: URL;
  website: URL;
}

export interface MyContacts {
  myContacts: MyContacts_myContact | null;
}
