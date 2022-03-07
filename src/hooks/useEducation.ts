import { gql, useQuery } from '@apollo/client';

import {
	AllMyEducations,
	MyEducation,
	MyEducationVariables,
} from './__generated__';

export const ALLMYEDUCATION = gql`
	query AllMyEducation {
		allMyEducation {
			id
			title
			institute
			link
			startDate
			endDate
			location
			description
		}
	}
`;

export const useAllMyEducation = () =>
	useQuery<AllMyEducations>(ALLMYEDUCATION);

export const MYEDUCATION = gql`
	query MyEducation($id: ID!) {
		myEducation(id: $id) {
			id
			title
			institute
			link
			startDate
			endDate
			location
			description
		}
	}
`;
export const useMyEducation = (id: string) =>
	useQuery<MyEducation, MyEducationVariables>(MYEDUCATION, {
		variables: { id },
	});
