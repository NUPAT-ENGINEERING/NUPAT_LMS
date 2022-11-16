import React from "react";
import { Box, Container } from "@mui/system";
import { Button, Typography } from "@mui/material";
import Link from "next/link";

const Banner = () => {
	return (
		<>
			<Container sx={{ marginTop: "100px", display: "flex" }}>
				<div className="banner-text">
					<Typography
						variant="h2"
						sx={{ color: "#131E47", fontSize: "64px", fontWeight: "bold", marginBottom: "20px" }}>
						Nupat Code Camp
					</Typography>
					<p>You are about to begin a journey to discovering the innovative part of you in the Tech World</p>

					<p>
						“ Technology gives the quitest student a Voice “ <br></br>-Jerry Blumengarten
					</p>
					<p>Find your Voice with Nupat </p>
					<div className="banner_button_container">
						<Link href="/Register">
							<a>
								<Button
									variant="contained"
									sx={{
										fontSize: "12px",
										background: "#131e47",
										textTransform: "none",
										padding: "6px 28px",
									}}>
									Sign Up
								</Button>
							</a>
						</Link>
						<Button
							variant="outlined"
							sx={{
								fontSize: "12px",
								border: "1px solid #131e47",
								color: "#131e47",
								textTransform: "none",
								padding: "5px 28px",
								marginLeft: "10px",
							}}>
							Sign In
						</Button>
					</div>
				</div>
				<div className="banner-img">
					<div className="banner_circle_img"></div>
				</div>
			</Container>
		</>
	);
};

export default Banner;
