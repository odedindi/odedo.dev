import type { FC } from "react";
import { Box, Image } from "@mantine/core";
import classes from "./myImage.module.css";

const MyImage: FC = () => (
	<Box className={classes.base}>
		<Image src="/assets/Oded.jpg" alt="me" />
	</Box>
);

export default MyImage;
