/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Me
// ====================================================

export interface MyOtherExperience_myOtherExperience {
  __typename: "Position";
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: Date;
  endDate: Date;
  achievements: string[];
}

export interface MyOtherExperience {
  myOtherExperience: MyOtherExperience_myOtherExperience;
}

export interface MyOtherExperienceVariables {
  id: string;
}
