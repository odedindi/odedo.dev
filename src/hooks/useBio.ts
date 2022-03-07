import { gql, useQuery } from '@apollo/client';
import { MyBio, Me, MyObjective, MyContacts } from './__generated__';

export const MYBIO = gql`
	query MyBio {
		myBio {
			name
			email
			tagline
			website
			github
			linkedin
			objective
			skills
		}
	}
`;

export const useMyBio = () => useQuery<MyBio>(MYBIO);

export const ME = gql`
	query Me {
		me {
			name
			tagline
		}
	}
`;

export const useMe = () => useQuery<Me>(ME);

export const MYOBJECTIVE = gql`
	query MyObjective {
		myObjective {
			objective
		}
	}
`;

export const useMyObjective = () => useQuery<MyObjective>(MYOBJECTIVE);

export const MYCONTACTS = gql`
	query MyContacts {
		myContacts {
			email
			github
			linkedin
			website
		}
	}
`;

export const useMyContacts = () => useQuery<MyContacts>(MYCONTACTS);
