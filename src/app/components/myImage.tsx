import type { FC } from "react";
import { Box, Image } from "@mantine/core";
import classes from "./myImage.module.css";

const MyImage: FC = () => (
	<Box className={classes.base}>
		<Image src="/assets/oded.jpg" alt="me" className={classes.image} />
	</Box>
);

export default MyImage;
