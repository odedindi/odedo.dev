import type { Language } from 'prism-react-renderer';

import {
	MYBIO,
	ME,
	MYCONTACTS,
	MYOBJECTIVE,
	ALLMYEDUCATION,
	MYEDUCATION,
	ALLMYOTHEREXPERIENCES,
	MYOTHEREXPERIENCE,
	MYPOSITION,
	ALLMYPOSITIONS,
} from '.';

export const useMyQueries = () => {
	const queries = [
		{ label: 'Me', code: ME },
		{ label: 'MyBio', code: MYBIO },
		{ label: 'MyContacts', code: MYCONTACTS },
		{ label: 'MyObjective', code: MYOBJECTIVE },
		{ label: 'AllMyPositions', code: ALLMYPOSITIONS },
		{ label: 'AllMyEducation', code: ALLMYEDUCATION },
		{ label: 'AllMyOtherExperiences', code: ALLMYOTHEREXPERIENCES },
		{ label: 'MyPosition', code: MYPOSITION },
		{ label: 'MyEducation', code: MYEDUCATION },
		{ label: 'MyOtherExperience', code: MYOTHEREXPERIENCE },
	];
	const language: Language = 'graphql';
	return { language, queries };
};
