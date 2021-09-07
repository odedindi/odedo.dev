import SEO from './SEO';
import Theme from './Theme';
import Toast from './Toaster';

const Providers: React.FC = ({ children }) => (
	<>
		<Theme>
			<SEO />
			<Toast />

			{children}
		</Theme>
	</>
);

export default Providers;
