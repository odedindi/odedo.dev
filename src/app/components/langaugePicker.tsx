"use client";
import { FC } from "react";
import { UnstyledButton, Menu, Image, Group } from "@mantine/core";
import { IconChevronDown, IconWorld } from "@tabler/icons-react";
import classes from "./languagePicker.module.css";
import { useRouter, useParams } from "next/navigation";

const options = [
	{
		code: "en",
		label: "English",
		image: "/assets/english.png",
	},
	{
		code: "de",
		label: "Deutsch",
		image: "assets/german.png",
	},
	{
		code: "he",
		label: "עברית",
		image: "assets/hebrew.png",
	},
];

const LanguagePicker: FC = () => {
	const router = useRouter();
	const { lng: activeLng } = useParams();
	const selected = options.find(({ code }) => code === activeLng) ?? options[0];

	return (
		<Menu radius="md" width="target" withinPortal>
			<Menu.Target>
				<UnstyledButton className={classes.control}>
					<Group gap="xs">
						<IconWorld />
						<span className={classes.label}>{selected.label}</span>
					</Group>
					<IconChevronDown size="1rem" className={classes.icon} stroke={1.5} />
				</UnstyledButton>
			</Menu.Target>
			<Menu.Dropdown>
				{options.map((item) => (
					<Menu.Item
						key={item.label}
						className={classes.option}
						data-active={item.code === activeLng || undefined}
						leftSection={
							<Image src={item.image} alt={item.label} width={18} height={18} />
						}
						onClick={() => {
							if (typeof window !== "undefined")
								router.push(`${window.location.origin}/${item.code}`);
						}}
					>
						{item.label}
					</Menu.Item>
				))}
			</Menu.Dropdown>
		</Menu>
	);
};

export default LanguagePicker;
