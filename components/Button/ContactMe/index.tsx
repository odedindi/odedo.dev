// ================== styles ==================
import * as S from '../style';
// ================= helpers ==================
import { contactLinks } from 'utils/ContactLinks';
import { capitalize } from 'lodash';
// ================ components ================
import { SocialIcon } from 'react-social-icons';
import CreateAnimation from 'components/CreateAnimation';

import { ActionIcon, Group } from '@mantine/core';

// ============================================
type SocialMediaButtonProps = {
	id: string;
	href: ContactLink;
};

const SocialMediaButton: React.FC<SocialMediaButtonProps> = ({ id, href }) => (
	<ActionIcon
		variant="transparent"
		sx={({ colors, colorScheme }) => ({
			backgroundColor: colorScheme === 'dark' ? colors.gray[0] : undefined,
			width: '1.25rem',
			height: '1.25rem',
			borderRadius: '50%',
			border: 0,
		})}
		title={capitalize(id)}>
		<SocialIcon
			id={id}
			url={href}
			style={{ width: '1.75rem', height: '1.75rem' }}
		/>
	</ActionIcon>
);

type ContactMeProps = {
	id: string;
};

const ContactMeButtons = ({ id }: ContactMeProps) => (
	<>
		<Group position="center">
			{Object.keys(contactLinks).map((key) => (
				<CreateAnimation key={key} type="Hover">
					<SocialMediaButton id={key} href={contactLinks[key]} />
				</CreateAnimation>
			))}
		</Group>
	</>
);
export default ContactMeButtons;
