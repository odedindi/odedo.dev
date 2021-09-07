import styled from 'styled-components';

export const MdxHeader = styled.header`
	background-color: #8bc34a;
	padding: 30px;
	display: flex;
	align-items: center;
	line-height: 30px;

	a {
		text-decoration: none;
		color: #000;
		font-weight: 600;
		:hover {
			color: #fff;
		}
	}

	.user-info {
		margin-left: auto;
		display: flex;
		align-items: center;
	}
	img {
		width: 30px;
		height: 30px;
		border-radius: 50%;
		margin-right: 10px;
	}
`;

export const MdxPostList = styled.div`
	margin: 50px auto;
	max-width: 650px;
	padding: 0 30px;

	.post-link a {
		display: block;
		border: 1px solid #8bc34a;
		color: #222;
		text-decoration: none;
		font-weight: 600;
		padding: 15px;
		border-radius: 2px;
		margin: 20px 0;
	}
	.post-link a .time {
		font-size: 12px;
		font-weight: 400;
		margin: 0 0 3px 0;
		opacity: 0.8;
	}
	.post-link a:hover {
		background-color: #8bc34a;
		color: #fff;
	}
`;

export const MdxPost = styled.div`
	margin: 5rem auto;
	max-width: 70vw;
	padding: 0 30px;
	color: ${({ theme }) => theme.colors.text.primary};
	line-height: 28px;
	font-size: 18px;
	background: ${({ theme }) => theme.colors.background.secondary};

	a {
		color: #1e88e5;
		text-decoration: none;
		:hover {
			border-bottom: 1px solid #1e88e5;
		}
	}
	img {
		max-width: 100%;
		margin: 30px 0;
	}
	.time {
		color: #666;
		font-size: 13px;
	}
	h1 {
		margin: 0 0 30px 0;
		line-height: 40px;
	}
	.content {
		border-bottom: 1px solid #eee;
		margin-bottom: 20px;
	}
`;

export const MdxComment = styled.div`
	border: 1px solid #eee;
	border-radius: 4px;
	margin: 10px 0;
	max-width: 650px;

	width: 100%;
	border-radius: 4px;
`;
export const MdxCommentClientOnly = styled(MdxComment)`
	opacity: 0.6;
`;

export const MdxCommentAuthoer = styled(MdxComment)`
	display: flex;
	align-items: center;
	border-top: 1px solid #eee;
	padding: 10px;
	font-size: 11px;
	background-color: #fafafa;

	img {
		width: 20px;
		height: 20px;
		border-radius: 20px;
		margin: 0 5px 0 0;
	}
`;

export const MdxCommentsInfo = styled.p`
	padding: 15px 0;
	font-size: 14px;
`;

export const MdxCommentsContent = styled.p`
	padding: 15px 10px;
	font-size: 14px;

	&:first-child {
		margin-top: 0;
	}
	&:last-child {
		margin-bottom: 0;
	}
`;

export const MdxAddCommentBox = styled.div`
	border-top: 1px solid #eee;
	padding: 0 0 30px 0;

	textarea {
		margin: 10px 0 5px 0;
		width: calc(100% - 20px);
		border: 1px solid #ccc;
		border-radius: 4px;
		height: 50px;
		padding: 10px 10px;
	}
`;

export const MdxPreviewBar = styled.div`
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	text-align: center;
	padding: 10px;
	background-color: #f8bbd0;
	font-size: 12px;
	letter-spacing: 1px;
	text-transform: uppercase;

	button {
		margin-left: 10px;
		font-size: 12px;
		text-transform: uppercase;
	}
`;
export const MdxYutubeContainer = styled.div`
	position: relative;
	cursor: pointer;

	.click-to-play {
		position: absolute;
		width: 200px;
		height: 30px;
		line-height: 30px;
		border-radius: 20px;
		box-shadow: 0px 0px 7px 1px #9e9e9e;
		color: #fff;
		background-color: #ca0c0c;

		text-align: center;
		left: 50%;
		margin-left: -100px;
		top: 50%;
		margin-top: -17px;
		pointer-events: none;

		font-family: arial;
		letter-spacing: 4px;
		text-transform: uppercase;
		font-size: 13px;
		font-weight: bold;
	}

	&:global(img) {
		border: 0;
		box-shadow: 0px 0px 7px 0px #9e9e9e;
		border-radius: 4px;
	}

	&:hover {
		opacity: 0.8;
	}
`;
