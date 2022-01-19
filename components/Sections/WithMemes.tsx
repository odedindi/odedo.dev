/* eslint-disable @next/next/no-img-element */
import * as React from 'react';
import * as S from './style';
import styled from 'styled-components';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { GetStaticProps } from 'next';

interface Meme {
	id: string;
	name: string;
	with: number;
	height: number;
	url: string;
	box_count: number;
}

const SectionWithMemes: React.FC = ({}) => {
	const sectionRef = React.useRef<HTMLElement>(undefined!);
	const titleRef = React.useRef<HTMLHeadingElement>(undefined!);
	const titleBlockRef = React.useRef<HTMLSpanElement>(undefined!);

	const imageRef = React.useRef<HTMLImageElement>(undefined!);
	React.useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);
		const timeline = gsap.timeline({
			scrollTrigger: {
				trigger: sectionRef.current,
			},
		});
		const sectionAnimation = timeline
			.from(titleRef.current, {
				ease: 'power4',
				y: '+=5vh',
				duration: 2.5,
			})
			.from(
				titleBlockRef.current,
				{
					y: 200,
					duration: 2,
					ease: 'power4',
					stagger: 0.1,
				},
				0,
			);

		return () => {
			sectionAnimation.kill();
		};
	}, []);

	// const parallaxEffect = React.useMemo(
	// 	() => ({
	// 		trigger: imageRef.current,
	// 		scrub: true,
	// 		start: 'top bottom',
	// 	}),
	// 	[imageRef],
	// );
	// React.useEffect(() => {
	// 	gsap.registerPlugin(ScrollTrigger);

	// 	const parallaxAnimation = gsap.fromTo(
	// 		sectionRef.current,
	// 		{ y: '-40vh' },
	// 		{ y: '40vh', scrollTrigger: parallaxEffect, ease: 'none' },
	// 	);
	// 	return () => {
	// 		parallaxAnimation.kill();
	// 	};
	// }, [parallaxEffect]);

	const [state, setState] = React.useState(() => ({
		font_size: '22',
		topText: '',
		bottomText: '',
		randomImg: 'http://i.imgflip.com/1bij.jpg',
		allMemeImgs: [] as Meme[],
	}));

	const handleChange = (event: any) => {
		const { name, value } = event.target;
		setState((prev) => ({ ...prev, [name]: value }));
	};
	const handleClick = () => {
		let randomNumber = Math.floor(Math.random() * state.allMemeImgs.length);
		setState((prev) => ({
			...prev,
			randomImg: state.allMemeImgs[randomNumber].url,
		}));
	};

	React.useEffect(() => {
		fetch('https://api.imgflip.com/get_memes')
			.then((data) => data.json())
			.then((response) => {
				const { memes } = response.data;
				setState((prev) => ({ ...prev, allMemeImgs: memes }));
			});
	}, []);

	const [selectedTemplate, setSelectedTemplate] = React.useState<any>(null);
	const [boxes, setBoxes] = React.useState<any>([]);
	const [generatedMeme, setGeneratedMeme] = React.useState<any>(null);
	const handleInputChange = (index: any) => (e: any) => {
		const newValues = boxes;
		newValues[index] = e.target.value;
		setBoxes(newValues);
	};

	function handleSelectTemplate(memes: any) {
		setSelectedTemplate(memes);
		setBoxes([]);
	}

	async function handleSubmit(e: any) {
		e.preventDefault();

		const params = JSON.stringify({
			template_id: selectedTemplate.id,
			username: 'OdedWinberger',
			password: 'memulaim',
			boxes: boxes.map((text: any) => ({ text })),
		});

		const resp = await fetch(`https://api.imgflip.com/caption_image?${params}`);
		const { data } = await resp.json();
		console.log(data);
		// setGeneratedMeme(url);
	}

	function handleReset() {
		setSelectedTemplate(null);
		setBoxes([]);
		setGeneratedMeme(null);
	}
	return (
		<S.Section ref={sectionRef}>
			<S.Title ref={titleRef}>
				<S.TitleBlock ref={titleBlockRef}>Memes</S.TitleBlock>
			</S.Title>
			<MemeWrapper>
				<Card>
					{generatedMeme && (
						<div>
							<img
								src={generatedMeme}
								alt="Generated Meme"
								className="thumbnail"
							/>
							<Button type="button" onClick={handleReset}>
								Create another meme
							</Button>

							<a href={generatedMeme} target="blank" download>
								<Button type="button">Download</Button>
							</a>
						</div>
					)}

					{!generatedMeme && (
						<>
							<h2>Pick up a thumbnail</h2>
							<Templates>
								{state.allMemeImgs.map((meme: any) => (
									<button
										key={meme.id}
										type="button"
										onClick={() => handleSelectTemplate(meme)}
										className={
											meme.id === selectedTemplate?.id ? 'selected' : ''
										}>
										<img src={meme.url} alt={meme.name} />
									</button>
								))}
							</Templates>

							{selectedTemplate && (
								<>
									<h2>Create your meme</h2>
									<Form onSubmit={handleSubmit}>
										{new Array(selectedTemplate.box_count)
											.fill('')
											.map((_, index) => (
												<input
													key={String(Math.random())}
													placeholder={`Text #${index + 1}`}
													onChange={handleInputChange(index)}
												/>
											))}

										<Button type="submit">Generate</Button>
									</Form>
								</>
							)}
						</>
					)}
				</Card>
			</MemeWrapper>
			{/* <img src="" alt="" ref={imageRef} /> */}
		</S.Section>
	);
};

export default SectionWithMemes;

// export const getStaticProps: GetStaticProps = async () => {
// 	const response = await fetch('https://api.imgflip.com/get_memes');
// 	const {
// 		data: { memes },
// 	} = await response.json();

// 	console.log(memes);
// 	return {
// 		props: {
// 			memes,
// 		},

// 		revalidate: 60 * 60 * 24,
// 	};
// };

const MemeWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;

	margin-top: 1.9rem;
	text-align: center;

	@media screen and (max-width: 425px) {
		margin: 0 0.75rem 0 0.75rem;
		img {
			max-width: 80px;
			max-height: 80px;
		}
	}
	h1 {
		font-family: 'Luckiest Guy';
		font-size: 3.5rem;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		color: white;
		text-transform: uppercase;
		text-shadow: 0 4px 1px #212121;
		margin-left: 0.5rem;
		@media screen and (max-width: 425px) {
			font-size: 2.25rem;
		}
	}

	.meme {
		position: relative;
		width: 100%;
		margin-top: 1.2em;
		text-align: center;
	}

	.meme > img {
		width: 95%;
		max-width: 40em;
		max-height: 40em;
		margin-bottom: 1.5em;
		background: cover;
		background-repeat: no-repeat;
	}

	.meme > h2 {
		position: absolute;
		max-width: 36em;
		text-align: center;
		left: 49%;
		transform: translateX(-50%);
		margin: 0.3em 0;
		padding: 0 0px;
		font-family: impact, sans-serif;
		text-transform: uppercase;
		color: white;
		letter-spacing: 2px;
		text-shadow: 2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000,
			-2px 2px 0 #000, 0 2px 0 #000, 2px 0 0 #000, 0 -2px 0 #000, -2px 0 0 #000,
			2px 2px 5px #000;
	}

	.meme > .bottom {
		bottom: 0.9em;
	}

	.meme > .top {
		top: 0.1em;
	}

	.meme-form {
		width: 90%;
		margin: 1.4em 0em 1em 1.4em;
		display: inline-block;
		justify-content: space-between;
	}

	.meme-form > input {
		border: 1.5px solid;
		border-radius: 5px;
		margin: 0.4em;
		display: block;
		width: 40%;
		min-width: 20em;
		height: 3em;
	}

	.meme-form > button {
		height: 2.1em;
		width: 8em;
		margin-top: 1em;
		margin-left: 0.1em;
		border: 3px rgb(221, 210, 210) solid;
		font-family: VT323, monospace;
		font-size: 20px;
		letter-spacing: 1.5px;
		color: white;
		background: rgb(138, 32, 32);
	}
	.meme-form > button:hover {
		background: rgba(138, 32, 32, 0.8);
	}
	.meme-form > input::-webkit-input-placeholder {
		/* Chrome/Opera/Safari */
		font-family: VT323, monospace;
		font-size: 1.3em;
		text-align: left;
		padding-left: 5px;
	}
	.meme-form > input::-moz-placeholder {
		/* Firefox 19+ */
		font-family: VT323, monospace;
		font-size: 25px;
		text-align: left;
	}
	.meme-form > input:-ms-input-placeholder {
		/* IE 10+ */
		font-family: VT323, monospace;
		font-size: 25px;
		text-align: left;
	}
	.meme-form > input:-moz-placeholder {
		/* Firefox 18- */
		font-family: VT323, monospace;
		font-size: 25px;
		text-align: left;
	}
`;

const Card = styled.div`
	background: white;
	max-width: 35rem;
	width: 100%;
	padding: 1.25rem;
	margin: 1.9rem 0 1.9rem 0;
	border-radius: 0.5rem;
	box-shadow: 0 6px 0.62rem 0 rgba(0, 0, 0, 0.2);
	.thumbnail {
		max-width: 35rem;
		width: 100%;
		height: auto;
	}
	h2 {
		font-size: 1.35rem;
		color: #2e384d;
		margin-bottom: 0.6rem;
		@media screen and (max-width: 425px) {
			font-size: 1.25rem;
		}
	}
`;

const Templates = styled.div`
	max-width: 100%;
	height: 10rem;
	border-radius: 0.5rem;
	overflow-y: auto;
	display: flex;
	align-items: center;
	padding: 0 0.35rem;
	margin-bottom: 1.5rem;
	button {
		background: transparent;
		margin-right: 0.6rem;
		border: 2px solid transparent;
		&.selected {
			border-color: rgb(81, 215, 100);
		}
		img {
			width: auto;
			height: 8rem;
		}
	}
`;

const Form = styled.form`
	input {
		width: 100%;
		height: 2.5rem;
		border-radius: 0.5rem;
		border: 1px solid #dbdbdb;
		padding: 0 15px;
		font-size: 0.875rem;
		margin-bottom: 0.62rem;
	}
`;

const Button = styled.button`
	width: 100%;
	height: 2.4rem;
	border-radius: 8px;
	border: 2px solid transparent;
	font-size: 0.875rem;
	font-weight: bold;
	text-transform: uppercase;
	background: rgb(81, 215, 100);
	color: white;
	transition: background 0.2s ease-in;
	&:hover {
		background: rgba(81, 215, 100, 0.7);
	}
	&:nth-child(2) {
		margin: 0.62rem 0 0.62rem 0;
	}
`;
