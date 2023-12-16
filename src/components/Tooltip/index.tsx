import { Popover } from '@mantine/core';

import React, { FC, PropsWithChildren, ReactNode, useState } from 'react';

const Tooltip: FC<PropsWithChildren<{ content: ReactNode }>> = ({
	content,
	children,
}) => {
	const [opened, setOpened] = useState(false);

	const open = () => setOpened(true);
	const close = () => setOpened(false);

	return (
		<Popover
			opened={opened}
			onClose={() => setOpened(false)}
			transitionDuration={250}
			withArrow
			noFocusTrap
			noEscape
			styles={{ body: { pointerEvents: 'none' } }}
			placement="start"
			radius="lg"
			spacing="xs"
			target={
				<div onMouseEnter={open} onMouseLeave={close}>
					{children}
				</div>
			}
		>
			{content}
		</Popover>
	);
};

export default Tooltip;
