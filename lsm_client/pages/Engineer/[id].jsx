import React from "react";
import Navbar from "../../component/Header/Navbar";
import Footer from "../../component/Common/Footer";
import Newsletter from "../../component/Common/Newsletter";
import { EngineerData } from "../../Data/EngineerData";
import { Box, Container } from "@mui/system";
import { Button, Grid, Typography } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import PlaylistAddCheckIcon from "@mui/icons-material/PlaylistAddCheck";
import SellIcon from "@mui/icons-material/Sell";
import BookmarkAddedIcon from "@mui/icons-material/BookmarkAdded";

export const getStaticPaths = () => {
	const data = EngineerData;

	const paths = data.map((info) => {
		return {
			params: { id: info.id.toString() },
		};
	});
	return {
		paths,
		fallback: false,
	};
};

export const getStaticProps = (context) => {
	const id = context.params.id;
	// const res = EngineerData + id;
	const data = EngineerData + id;

	return {
		props: { info: data },
	};
};
// console.log(id)
const Details = ({ info }) => {
	return (
		<>
			<Navbar />

			<Container
				sx={{
					mt: 10,
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
								mb: 1,
							}}>
							Front End Development
						</Typography>
						<Typography variant="body1">
							The Design Department consist of courses such as User interface and User Experience Design,
							and Graphic design (photoshop)
						</Typography>
					</Grid>
					<Grid item lg={12} md={12} sm={12} xs={12}>
						<Box
							className="videoThumbnail"
							sx={{
								width: "100%",
								height: {
									lg: "552px",
									md: "480px",
									sm: "350px",
									xs: "260px",
								},
								mt: 3,
							}}></Box>
					</Grid>
					<Grid item>
						<Box
							sx={{
								display: "flex",
								mb: 0.2,
								mt: 3,
							}}>
							<AccessTimeIcon
								sx={{
									color: "#131e47",
								}}
							/>
							<Typography
								variant="body1"
								sx={{
									color: "#131E47",
									ml: 1,
									fontSize: "18px",
									fontWeight: "500",
								}}>
								Duration: 4 Months
							</Typography>
						</Box>
						<Box
							sx={{
								display: "flex",
								mb: 0.2,
							}}>
							<ViewModuleIcon
								sx={{
									color: "#131e47",
								}}
							/>
							<Typography
								variant="body1"
								sx={{
									color: "#131E47",
									ml: 1,
									fontSize: "18px",
									fontWeight: "500",
								}}>
								Modules: 16
							</Typography>
						</Box>
						<Box
							sx={{
								display: "flex",
								mb: 0.2,
							}}>
							<PlaylistAddCheckIcon
								sx={{
									color: "#131e47",
								}}
							/>
							<Typography
								variant="body1"
								sx={{
									color: "#131E47",
									ml: 1,
									fontSize: "18px",
									fontWeight: "500",
								}}>
								Projects: 12 projects
							</Typography>
						</Box>
						<Box
							sx={{
								display: "flex",
								mb: 0.2,
							}}>
							<SellIcon
								sx={{
									color: "#131e47",
								}}
							/>
							<Typography
								variant="body1"
								sx={{
									color: "#131E47",
									ml: 1,
									fontSize: "18px",
									fontWeight: "500",
								}}>
								Price: 250,000
							</Typography>
						</Box>
						<Button
							href="https://ugwu-henry-s-school.teachable.com/p/fullstack-web-development"
							variant="contained"
							sx={{
								mt: 2,
							}}>
							Buy Now
						</Button>
					</Grid>
				</Grid>
				<Grid
					container
					sx={{
						mt: 5,
					}}>
					<Grid item lg={12} md={12} sm={12}>
						<Typography variant="h5">Course Content</Typography>
					</Grid>
					<Grid item lg={12}>
						<Box
							gap={1}
							sx={{
								display: "flex",
							}}>
							<Box
								sx={{
									border: "2px solid black",
									display: "flex",
									justify: "center",
									alignContent: "center",
									p: 1,
								}}>
								<BookmarkAddedIcon />
							</Box>
							<Box
								lg={11}
								sx={{
									border: "2px solid black",
									display: "flex",
									justify: "center",
									alignContent: "center",
									p: 1,
									pl: 3,
								}}>
								This is the topic for The week
							</Box>
						</Box>
						<Box
							gap={1}
							sx={{
								display: "flex",
							}}>
							<Box
								sx={{
									border: "2px solid black",
									display: "flex",
									justify: "center",
									alignContent: "center",
									p: 1,
								}}>
								<BookmarkAddedIcon />
							</Box>
							<Box
								lg={11}
								sx={{
									border: "2px solid black",
									display: "flex",
									justify: "center",
									alignContent: "center",
									p: 1,
									pl: 3,
								}}>
								This is the topic for The week
							</Box>
						</Box>
						<Box
							gap={1}
							sx={{
								display: "flex",
							}}>
							<Box
								sx={{
									border: "2px solid black",
									display: "flex",
									justify: "center",
									alignContent: "center",
									p: 1,
								}}>
								<BookmarkAddedIcon />
							</Box>
							<Box
								lg={11}
								sx={{
									border: "2px solid black",
									display: "flex",
									justify: "center",
									alignContent: "center",
									p: 1,
									pl: 3,
								}}>
								This is the topic for The week
							</Box>
						</Box>
					</Grid>
				</Grid>
			</Container>
			<Newsletter />
			<Footer />
		</>
	);
};

export default Details;
