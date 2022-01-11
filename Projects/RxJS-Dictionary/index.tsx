import type { NextPage } from 'next';
import Layout from './Layout';
import * as React from 'react';
import { Intro } from './content/intro';
import Sidebar from './Layout/sidebar';
import { MainScreen } from './styles/pageLayout';
import Patterns from './content/patterns';

const sidebarContent = [
	{ id: 'Intro', content: <Intro /> },
	{
		id: 2,
		content: <Patterns />,
	},
	{ id: 3, content: null },
];

const App: NextPage = () => {
	const [isOpen, setIsOpen] = React.useState(false);
	const toggleSidebar = () => setIsOpen(!isOpen);
	const closeSidebar = () => setIsOpen(false);

	const [mainScreenContent, setMainScreenContent] = React.useState<any>(
		() => sidebarContent[0],
	);

	const updateMainScreentContent = (content: any) =>
		setMainScreenContent(content);

	return (
		<>
			<Layout>
				{isOpen && (
					<Sidebar
						isOpen={isOpen}
						close={closeSidebar}
						handleChoice={updateMainScreentContent}
						content={sidebarContent}
					/>
				)}
				<MainScreen>
					<button onClick={toggleSidebar}>{isOpen ? '<' : '>'}</button>
					{mainScreenContent?.content ?? null}
				</MainScreen>
			</Layout>
		</>
	);
};

export default App;
