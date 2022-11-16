import { Container } from "@mui/system";
import { Button, Box, Grid, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import { EngineerData } from "../../Data/EngineerData";
import Navbar from "../../component/Header/Navbar";

const Engineer = ({ datas }) => {
	return (
		<>
			<Navbar />

			<Container
				sx={{
					mt: 12,
				}}>
				<Grid container>
					<Grid item lg={8}>
						<Typography
							variant="h2"
							sx={{
								fontSize: {
									lg: "24px",
									md: "22px",
									sm: "19px",
									xs: "18px",
								},
								fontWeight: {
									lg: "600",
									md: "600",
									sm: "600",
									xs: "600",
								},
								mb: 3,
							}}>
							College of Engineering
						</Typography>
						<Typography variant="body1">
							The Design Department consist of courses such as User interface and User Experience Design,
							and Graphic design (photoshop)
						</Typography>
					</Grid>

					<Grid
						container
						gap={1}
						sx={{
							display: "flex",
							justifyContent: "space-around",
						}}>
						{EngineerData.map((data) => (
							<Link href={"/Engineer/" + data.id} key={data.id}>
								<Grid
									item
									sx={{
										mt: 3,
										mb: 3,
										bgcolor: "rgba(33, 150, 83, 0.2)",
									}}
									lg={3.5}
									md={3}
									sm={5}
									key={data.id}
									className="college_card_2">
									<div className="card_header">
										<div className="card_profile"></div>
										<div className="card_title">
											<h2>{data.title}</h2>
										</div>
									</div>
									<div className="card_content">
										<p>{data.content}</p>

										<Link href={"/Engineer/" + data.id}>
											<a>More...</a>
										</Link>
									</div>
								</Grid>
							</Link>
						))}
					</Grid>
				</Grid>
			</Container>
		</>
	);
};

export default Engineer;
