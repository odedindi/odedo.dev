/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Me
// ====================================================

export interface MyBio_myBio {
  __typename: "Bio";
  name: string;
  email: string;
  tagline: string;

  website: URL;
  github: URL;
  linkedin: URL;
  objective: string;
  skills: string[];
}

export interface MyBio {
  myBio: MyBio_myBio | null;
}
