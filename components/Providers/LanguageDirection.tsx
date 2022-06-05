import * as React from 'react';
import { useRouter } from 'next/router';
import { useToggle } from '@mantine/hooks';

const initLanguageDirectionContext = {
	isRtl: true,
	toggleRtl: (value?: React.SetStateAction<boolean>) => {},
};

const languageDirectionContext = React.createContext(
	initLanguageDirectionContext,
);
const { Provider } = languageDirectionContext;

export const LanguageDirectionProvider: React.FC = ({ children }) => {
	const { locale } = useRouter();
	const [isRtl, toggleRtl] = useToggle<true | false>(
		locale === 'he' || locale === 'ara' ? true : false,
		[false, true],
	);

	return <Provider value={{ isRtl, toggleRtl }}>{children}</Provider>;
};

export default LanguageDirectionProvider;

export const useLanguageDirection = () =>
	React.useContext(languageDirectionContext);
