import * as React from 'react';

import { useRouter } from 'next/router';

import Link from 'next/link';

import * as M from '@mantine/core';
import * as I from '@modulz/radix-icons';
import PageLink from './PageLink';

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

const UserSettings = () => {
	const { colorScheme, dir } = M.useMantineTheme();
	const isDark = colorScheme === 'dark';
	const { toggleColorScheme } = M.useMantineColorScheme();

	const userMenuPosition = {
		top: 20,
		right: dir === 'ltr' ? 25 : undefined,
		left: dir === 'rtl' ? 25 : undefined,
	};

	const router = useRouter();
	const { locales, locale: activeLocale, pathname, query, asPath } = router;
	return (
		<M.Affix position={userMenuPosition}>
			<Menu>
				{pathname !== '/' && (
					<M.Menu.Item icon={<I.HomeIcon />}>
						<Link passHref href={'/'}>
							<M.Text size="xs" color="dimmed">
								Home
							</M.Text>
						</Link>
					</M.Menu.Item>
				)}
				{pathname !== '/dev' && (
					<M.Menu.Item icon={<I.ActivityLogIcon />}>
						<Link passHref href={'/dev'}>
							<M.Text size="xs" color="dimmed">
								Dev Tools
							</M.Text>
						</Link>
					</M.Menu.Item>
				)}
				<M.Divider />
				<M.Menu.Label>Color Theme</M.Menu.Label>

				<M.Menu.Item
					icon={isDark ? <I.SunIcon /> : <I.MoonIcon />}
					onClick={() => toggleColorScheme()}
					rightSection={
						<M.Text size="xs" color="dimmed">
							⌘J
						</M.Text>
					}>
					{isDark ? 'Light' : 'Dark'}
				</M.Menu.Item>
				<M.Divider />

				<M.Menu.Label>
					<M.Group>
						<I.GlobeIcon />
						Languages
					</M.Group>
				</M.Menu.Label>
				{locales?.map((locale) =>
					locale === activeLocale ? (
						<M.Menu.Item
							key={locale}
							disabled
							sx={({ colors }) => ({
								border: `solid 1px ${isDark ? colors.teal[7] : colors.cyan[3]}`,
							})}
							icon={<LanguageIcon locale={locale} />}>
							<M.Text size="xs" color="dimmed">
								{locale}
							</M.Text>
						</M.Menu.Item>
					) : (
						<M.Menu.Item key={locale} icon={<LanguageIcon locale={locale} />}>
							<Link
								href={{ pathname, query }}
								as={asPath}
								locale={locale}
								passHref>
								<M.Text size="xs" color="dimmed">
									{locale}
								</M.Text>
							</Link>
						</M.Menu.Item>
					),
				)}
			</Menu>
		</M.Affix>
	);
};

export default UserSettings;

const LanguageIcon: React.FC<{ locale: string }> = ({ locale }) => (
	<M.Avatar
		mt={7.5}
		radius="xl"
		src={`/flags/${locale}.png`}
		alt={`${locale}`}
	/>
);
