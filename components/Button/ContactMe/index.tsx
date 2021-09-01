// ================== styles ==================
import * as S from '../style';
// ================= helpers ==================
import { contactSource, contactLinks } from 'helpers/ContactLinks';
// ================ components ================
import { SocialIcon } from 'react-social-icons';
// ============================================
type ContactMeProps = {
	onClick: ContactLink;
};


const SocialMediaButton = ({ onClick }: ContactMeProps) => (
	<SocialIcon
		url={onClick}
		style={{ width: '1.75rem', height: '1.75rem' }}
	/>
);

const ContactMeButtons = () => (
	<S.ContactMeButtonsWrapper>
		{contactSource.map((source: ContactSource) => (
			<SocialMediaButton
				key={source}
				onClick={contactLinks[source]}
			/>
		))}
	</S.ContactMeButtonsWrapper>
);
export default ContactMeButtons;
