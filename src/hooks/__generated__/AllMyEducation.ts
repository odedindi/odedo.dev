/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Me
// ====================================================

export interface AllMyEducation_allMyEducation {
  __typename: "Education";
  id: string;
  title: string;
  institute: string;
  link: string;
  startDate: Date;
  endDate: Date;
  location: string;
  description: string[];
}

export interface AllMyEducations {
  allMyEducation: AllMyEducation_allMyEducation[] | null;
}
