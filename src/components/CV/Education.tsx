import { Anchor, List, Text, Title } from '@mantine/core';
import Spinner from 'src/components/Spinner';
import { useAllMyEducation } from 'src/hooks';
import moment from 'moment';

export const Education = () => {
	const allMyEducation = useAllMyEducation().data?.allMyEducation;
	return (
		<>
			<Title order={2} align="center">
				Education
			</Title>
			{allMyEducation ? (
				allMyEducation.map((e) => {
					return (
						<div key={e.id}>
							<Title order={3}>{e.title}</Title>
							<Text>
								{e.institute} | {e.location}
							</Text>
							<Text>
								{moment(e.startDate).format('MMM yyyy')} -{' '}
								{e.endDate ? moment(e.endDate).format('MMM yyyy') : 'Current'}
							</Text>
							<List withPadding size="sm">
								{e.description.map((d) => (
									<List.Item key={d}>{d}</List.Item>
								))}
							</List>
						</div>
					);
				})
			) : (
				<Spinner />
			)}
		</>
	);
};

export default Education;
