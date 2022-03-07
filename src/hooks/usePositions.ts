import { gql, useQuery } from '@apollo/client';

import {
	AllMyPositions,
	MyPosition,
	MyPositionVariables,
	AllMyOtherExperiences,
	MyOtherExperience,
	MyOtherExperienceVariables,
} from './__generated__';

export const ALLMYPOSITIONS = gql`
	query AllMyPositions {
		allMyPositions {
			id
			title
			company
			location
			startDate
			endDate
			achievements
		}
	}
`;

export const useAllMyPosition = () => useQuery<AllMyPositions>(ALLMYPOSITIONS);

export const MYPOSITION = gql`
	query MyPosition($id: ID!) {
		myPosition(id: $id) {
			id
			title
			company
			location
			startDate
			endDate
			achievements
		}
	}
`;
export const useMyPosition = (id: string) =>
	useQuery<MyPosition, MyPositionVariables>(MYPOSITION, { variables: { id } });

export const ALLMYOTHEREXPERIENCES = gql`
	query AllMyOtherExperiences {
		allMyOtherExperiences {
			id
			title
			company
			location
			startDate
			endDate
			achievements
		}
	}
`;

export const useAllMyOtherExperiences = () =>
	useQuery<AllMyOtherExperiences>(ALLMYOTHEREXPERIENCES);

export const MYOTHEREXPERIENCE = gql`
	query MyOtherExperience($id: ID!) {
		myOtherExperience(id: $id) {
			id
			title
			company
			location
			startDate
			endDate
			achievements
		}
	}
`;
export const useMyOtherExperience = (id: string) =>
	useQuery<MyOtherExperience, MyOtherExperienceVariables>(MYOTHEREXPERIENCE, {
		variables: { id },
	});
