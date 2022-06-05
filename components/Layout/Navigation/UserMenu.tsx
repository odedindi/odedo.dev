import * as React from 'react';

import { useRouter } from 'next/router';

import { useTranslation } from 'next-i18next';

import * as M from '@mantine/core';
import * as I from '@modulz/radix-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAstronaut } from '@fortawesome/free-solid-svg-icons';

const Menu: React.FC = ({ children }) => {
	const { colorScheme, dir } = M.useMantineTheme();
	const isDark = colorScheme === 'dark';

	return (
		<M.Menu
			trigger="hover"
			delay={500}
			withArrow
			closeOnItemClick={false}
			control={
				<M.Button
					variant="outline"
					sx={({ colors }) => ({
						color: isDark ? colors.cyan[3] : colors.teal[7],
						border: `solid 1px ${isDark ? colors.teal[7] : colors.cyan[3]}`,
					})}>
					<I.GearIcon />
				</M.Button>
			}
			transition={dir === 'ltr' ? 'rotate-left' : 'rotate-right'}
			transitionDuration={250}
			transitionTimingFunction="ease"
			styles={({ colors }) => ({
				body: {
					backgroundColor: isDark ? colors.dark[5] : colors.gray[1],
				},
				label: { alignItems: 'center' },
			})}>
			{children}
		</M.Menu>
	);
};

const PageLink: React.FC<{
	href: string;
	icon: React.ReactNode;
	label: string;
}> = ({ href, icon, label }) => {
	const router = useRouter();
	if (router.pathname === href) return null;
	return (
		<M.Menu.Item icon={icon} onClick={() => router.push(href)}>
			<M.Text size="xs" color="dimmed">
				{label}
			</M.Text>
		</M.Menu.Item>
	);
};

const LanguageLink: React.FC<{ locale: string; label: string }> = ({
	label,
	locale,
}) => {
	const router = useRouter();

	const { locale: activeLocale, pathname, query, asPath } = router;
	const isCurrentlyActive: boolean = locale === activeLocale;
	return (
		<M.Menu.Item
			key={locale}
			disabled={isCurrentlyActive}
			sx={({ colors: { cyan, teal }, colorScheme }) => ({
				border: isCurrentlyActive
					? `solid 1px ${colorScheme === 'dark' ? teal[7] : cyan[3]}`
					: undefined,
				paddingBottom: '16px',
			})}
			onClick={() => router.push({ pathname, query }, asPath, { locale })}
			icon={
				<M.Avatar
					mt={7.5}
					radius="xl"
					src={`/flags/${locale}.png`}
					alt={`${locale}`}
				/>
			}>
			<M.Text size="xs" color="dimmed">
				{label}
			</M.Text>
		</M.Menu.Item>
	);
};
const UserSettings = () => {
	const { t } = useTranslation('common');

	const { colorScheme, dir } = M.useMantineTheme();
	const isDark = colorScheme === 'dark';
	const { toggleColorScheme } = M.useMantineColorScheme();

	const userMenuPosition = {
		top: 20,
		right: dir === 'ltr' ? 25 : undefined,
		left: dir === 'rtl' ? 25 : undefined,
	};

	const { locales } = useRouter();

	return (
		<M.Affix position={userMenuPosition}>
			<Menu>
				<M.Menu.Label>{t('userSettings.pages.title')}</M.Menu.Label>
				<PageLink
					href="/"
					icon={<I.HomeIcon />}
					label={t('userSettings.pages.home')}
				/>
				<PageLink
					href="/about"
					icon={
						<FontAwesomeIcon icon={faUserAstronaut} size={'lg'} radius="xl" />
					}
					label={t('userSettings.pages.about')}
				/>
				<PageLink
					href="/dev"
					icon={<I.ActivityLogIcon />}
					label={t('userSettings.pages.dev')}
				/>
				<M.Divider />
				<M.Menu.Label>{t('userSettings.colorTheme.title')}</M.Menu.Label>
				<M.Menu.Item
					icon={
						isDark ? (
							<I.SunIcon color="yellow" />
						) : (
							<I.MoonIcon color="silver" />
						)
					}
					onClick={() => toggleColorScheme()}
					rightSection={
						<M.Text size="xs" color="dimmed">
							⌘J
						</M.Text>
					}>
					{isDark
						? t('userSettings.colorTheme.light')
						: t('userSettings.colorTheme.dark')}
				</M.Menu.Item>
				<M.Divider />
				<M.Menu.Label>
					<M.Group>
						<I.GlobeIcon />
						{t('userSettings.languages.title')}
					</M.Group>
				</M.Menu.Label>
				{locales?.map((locale) => (
					<LanguageLink
						key={locale}
						locale={locale}
						label={t(`userSettings.languages.${locale}`)}
					/>
				))}
			</Menu>
		</M.Affix>
	);
};

export default UserSettings;
