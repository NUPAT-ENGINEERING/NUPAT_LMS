import React, { useState } from "react";
import Footer from "../../component/Common/Footer";
import User_dashboard, { Props_Dashboard } from "../../component/userdashboard";
import { Stack, Typography } from "@mui/material";
import ButtonContained from "../../component/Common/ButtonContained";
import ButtonOutline from "../../component/Common/ButtonOutline";
import { Box, Container, width } from "@mui/system";
import Video_player from "../../component/video_player";

import { data } from "../../public/test_data/fake_data";
// import vid from "/t.mp4";

function course_area() {
	const [lesson, setLesson] = useState<number>(0);
	const [Week, setWeek] = useState<string>("week1");

	const content: Props_Dashboard = {
		content: { text: `Hi there` },
	};
	return (
		<Stack display="flex" justifyContent="space-between" height={"100vh"} maxWidth="100%">
			<User_dashboard content={content.content}>
				<Stack direction="row" justifyContent="space-between" alignItems="flex-start" spacing={2}>
					<Typography variant="h5" display="inline">
						{data[0].week1.lesson[lesson].topic}
					</Typography>

					<Stack direction="row" justifyContent="flex-end" alignItems="flex-start" spacing={14}>
						<ButtonContained onClick={() => setLesson(lesson - 1)}>Prev</ButtonContained>
						<ButtonContained onClick={() => setLesson(lesson + 1)}>Next</ButtonContained>
					</Stack>
				</Stack>
				<Container>
					<Typography variant="h4">What is UI/UX DESIGN</Typography>
					<Typography variant="h5">
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro corrupti reprehenderit iste id aliquam
					</Typography>
					<video controls loop style={{ width: "700px", height: "auto" }}>
						<source src={"/t.mp4"} />
					</video>
					<Typography variant="body1" padding="5px" margin="10px">
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam recusandae veritatis cupiditate
						voluptate eveniet vitae ipsum autem esse et! Eum optio error qui ipsam amet soluta ut nulla unde
						veniam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque minus at nam velit consequuntur
						quasi vel tenetur magnam repudiandae! Omnis quae et atque adipisci facere sunt deleniti quisquam,
						expedita consequatur.
					</Typography>
					<Typography variant="body1" padding="5px" margin="10px">
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam recusandae veritatis cupiditate
						voluptate eveniet vitae ipsum autem esse et! Eum optio error qui ipsam amet soluta ut nulla unde
						veniam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque minus at nam velit consequuntur
						quasi vel tenetur magnam repudiandae! Omnis quae et atque adipisci facere sunt deleniti quisquam,
						expedita consequatur.
					</Typography>
					{/* <Video_player /> */}
				</Container>
			</User_dashboard>

			<Footer />
		</Stack>
	);
}

export default course_area;
