import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
//import components
import DrawerComp from "./DrawerComp";
// import TopNav from './TopNav'
// import Mui components
import { AppBar, Tab, Tabs, Toolbar, Typography, Button, useMediaQuery, useTheme } from "@mui/material";
import { Container } from "@mui/system";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
// images
import logo from "../../public/logo.png";

const Navbar = () => {
	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};
	// const NavDetails = [
	//   {
	//     id: 1,
	//     title: 'College',
	//     link: '/',
	//   },
	//   {
	//     id: 2,
	//     title: 'Faq',
	//     link: '/Faq',
	//   },
	// ]

	const theme = useTheme();
	const isMatch = useMediaQuery(theme.breakpoints.down("md"));
	const [value, setValue] = useState(0);
	return (
		<>
			{/* <TopNav/> */}
			<AppBar sx={{ background: "white", color: "#3b3d94" }}>
				<Container>
					<Toolbar>
						<div>
							<Link href="/">
								<a>
									<Image src={logo} width="50" height="50" className="searchImg" />
								</a>
							</Link>
						</div>
						{isMatch ? (
							<>
								<DrawerComp />
							</>
						) : (
							<>
								<Button
									sx={{
										ml: "auto",
										fontSize: "12px",
									}}
									id="basic-button"
									aria-controls={open ? "basic-menu" : undefined}
									aria-haspopup="true"
									aria-expanded={open ? "true" : undefined}
									onClick={handleClick}>
									College
									<KeyboardArrowDownIcon />
								</Button>
								<Menu
									id="basic-menu"
									anchorEl={anchorEl}
									open={open}
									onClose={handleClose}
									MenuListProps={{
										"aria-labelledby": "basic-button",
									}}>
									<Link href="/Engineer">
										<MenuItem onClick={handleClose}>College of Engineer</MenuItem>
									</Link>
									<Link href="/DataScience">
										<MenuItem onClick={handleClose}>College of Data</MenuItem>
									</Link>
									<Link href="/Design">
										<MenuItem onClick={handleClose}>College of Design</MenuItem>
									</Link>
								</Menu>
								<Tabs
									sx={{ marginRight: "30px" }}
									value={value}
									onChange={(e, value) => setValue(value)}>
									{/* <Tab
                    label="College"
                    href="/Engineer"
                    sx={{ fontSize: '12px', color: 'inherit' }}
                  /> */}
									<Tab label="Faq" href="/Faq" sx={{ fontSize: "12px", color: "inherit" }} />
								</Tabs>
								<Link href="/register">
									<a target="blank">
										<Button variant="contained" sx={{ fontSize: "12px" }}>
											Sign Up
											<PersonAddIcon
												sx={{ marginLeft: "10px", fontSize: "15px" }}
											/>
										</Button>
									</a>
								</Link>
							</>
						)}
					</Toolbar>
				</Container>
			</AppBar>
		</>
	);
};

export default Navbar;
