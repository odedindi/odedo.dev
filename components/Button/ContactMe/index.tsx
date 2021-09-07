// ================== styles ==================
import * as S from '../style';
// ================= helpers ==================
import { contactSource, contactLinks } from 'utils/ContactLinks';
// ================ components ================
import { SocialIcon } from 'react-social-icons';
import CreateAnimation from 'components/CreateAnimation';
// ============================================
type SocialMediaButtonProps = {
	id: string;
	onClick: ContactLink;
};

const SocialMediaButton = ({ id, onClick }: SocialMediaButtonProps) => (
	<SocialIcon
		id={id}
		url={onClick}
		style={{ width: '1.75rem', height: '1.75rem' }}
	/>
);

type ContactMeProps = {
	id: string;
};

const ContactMeButtons = ({ id }: ContactMeProps) => (
	<S.ContactMeButtonsWrapper id={id}>
		{contactSource.map((source: ContactSource) => (
			<CreateAnimation key={source} type="Hover">
				<SocialMediaButton id={source} onClick={contactLinks[source]} />
			</CreateAnimation>
		))}
	</S.ContactMeButtonsWrapper>
);
export default ContactMeButtons;
