// ================== styles ==================
import * as S from '../style';
// ================= helpers ==================
import { contactSource, contactLinks } from 'utils/ContactLinks';
// ================ components ================
import { SocialIcon } from 'react-social-icons';
import CreateAnimation from 'components/CreateAnimation';
// ============================================
type ContactMeProps = {
	onClick: ContactLink;
};

const SocialMediaButton = ({ onClick }: ContactMeProps) => (
	<SocialIcon url={onClick} style={{ width: '1.75rem', height: '1.75rem' }} />
);

const ContactMeButtons = () => (
	<S.ContactMeButtonsWrapper>
		{contactSource.map((source: ContactSource) => (
			<CreateAnimation key={source} type="Hover">
				<SocialMediaButton key={source} onClick={contactLinks[source]} />
			</CreateAnimation>
		))}
	</S.ContactMeButtonsWrapper>
);
export default ContactMeButtons;
