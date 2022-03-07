import { List, Text, Title } from '@mantine/core';
import Spinner from 'src/components/Spinner';
import { useAllMyOtherExperiences } from 'src/hooks';
import moment from 'moment';

export const OtherExperiences = () => {
	const allMyOtherExperiences =
		useAllMyOtherExperiences().data?.allMyOtherExperiences;
	return (
		<>
			<Title order={2} align="center">
				Other Experience
			</Title>
			{allMyOtherExperiences ? (
				allMyOtherExperiences.map((e) => {
					return (
						<div key={e.id}>
							<Title order={3}>{e.title}</Title>
							<Text>
								{e.company} | {e.location}
							</Text>
							<Text>
								{moment(e.startDate).format('MMM yyyy')} -{' '}
								{e.endDate ? moment(e.endDate).format('MMM yyyy') : 'Current'}
							</Text>
							<List withPadding size="sm">
								{e.achievements.map((achievement: string) => (
									<List.Item key={achievement}>{achievement}</List.Item>
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

export default OtherExperiences;
