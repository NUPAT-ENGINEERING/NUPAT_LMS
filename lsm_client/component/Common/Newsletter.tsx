import React from "react";
import { Button, Grid } from "@mui/material";
import { Container } from "@mui/system";

const Newsletter = () => {
	return (
		<>
			<Container
				sx={{
					mb: 5,
					pb: 5,
				}}
				className="newsletter_container">
				<Grid container>
					<Grid item lg={6} md={6} sm={12} xs={12} className="newsletter_info">
						<h2>Subscribe</h2>
						<p>Join our community and get the latest information about our products and services. </p>
					</Grid>
					<Grid item lg={6} md={6} sm={12} xs={12} className="newsletter_input">
						<input type="text" placeholder="Your email address"></input>
						<Button variant="contained">Subcribe</Button>
					</Grid>
				</Grid>
			</Container>
		</>
	);
};

export default Newsletter;
