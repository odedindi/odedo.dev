/* eslint-disable @next/next/no-img-element */
import { forwardRef, type FC } from 'react';
import { Group, Text, Select, SelectProps } from '@mantine/core';
import { Locale, useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { GlobeIcon } from '@modulz/radix-icons';

const SelectItem = forwardRef<HTMLDivElement, { value: Locale }>(
	({ value, ...props }, ref) => {
		const { t } = useTranslation('common', { keyPrefix: 'selectLanguage' });
		const src = `https://flagcdn.com/w20/${value === 'en' ? 'gb' : value}.png`;
		const srcSet = `${src} 1x, ${src} 2x`;
		return (
			<div ref={ref} {...props}>
				<Group noWrap>
					<img
						loading="lazy"
						src={src}
						srcSet={srcSet}
						alt={t(value)}
						width={24}
						height={24}
						style={{ objectFit: 'contain' }}
					/>
					<div>
						<Text>{t(value)}</Text>
					</div>
				</Group>
			</div>
		);
	},
);

const SelectLanguage: FC<Pick<SelectProps, 'sx'>> = ({ sx }) => {
	const router = useRouter();
	const { t } = useTranslation('common', { keyPrefix: 'selectLanguage' });

	const onChange = (locale: Locale | null) => {
		if (!locale) return;
		const { pathname, asPath, query } = router;
		router.push({ pathname, query }, asPath, { locale });
	};
	const data = router.locales.map((locale) => ({
		value: locale,
		label: t(locale),
	}));
	return (
		<Select
			itemComponent={SelectItem}
			data={data}
			value={router.locale}
			onChange={(value) => onChange(value as Locale)}
			sx={sx}
			icon={<GlobeIcon />}
			aria-label={t('title')}
		/>
	);
};
export default SelectLanguage;
