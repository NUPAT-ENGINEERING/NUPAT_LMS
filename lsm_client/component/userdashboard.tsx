import * as React from "react";
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

import logo from "../public/logoBlue.png";
import Image from "next/image";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Link from "next/link";
// import { jsx } from "@emotion/react";

const drawerWidth = 240;

export interface Props_Dashboard {
	content: { text?: string };
	children?: React.ReactNode;
	/**
	 * Injected by the documentation to work in an iframe.
	 * You won't need it on your project.
	 */
	window?: () => Window;
}

export default function userdashboard(props: Props_Dashboard) {
	const { window } = props;
	const [mobileOpen, setMobileOpen] = useState(false);

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	const drawer = (
		<div>
			<Toolbar />
			{/* <Image src={logo} width="50" height="50" className="searchImg" alt={"nupat logo"} /> */}

			<List sx={{ bgcolor: "#131e47", height: "100vh" }} disablePadding>
				<Stack
					justifyContent="flex-start"
					spacing={0}
					alignItems="flex-start"
					flexDirection="column"
					height={`calc(100% - ${80}px)`}
					gap={0}>
					{["Dashboard", "Task", "Quiz", "Community", "Help", "Feedback", "FAQ"].map((text, index) => (
						<ListItem key={text} sx={{ paddingLeft: "10px", paddingTop: "1px", margin: "0" }}>
							<ListItemButton>
								{/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
								<ListItemText sx={{ color: "white" }} primary={text} />
							</ListItemButton>
						</ListItem>
					))}
					<ListItem sx={{ color: "white", marginTop: "auto" }}>
						<ListItemButton sx={{ margin: "auto" }}>
							<LogoutOutlinedIcon sx={{ color: "white" }} />
							<ListItemText sx={{ color: "white" }} primary="Logout" />
						</ListItemButton>
					</ListItem>
				</Stack>
			</List>
			<Divider />
		</div>
	);

	const container = window !== undefined ? () => window().document.body : undefined;

	return (
		<Box sx={{ display: "flex" }}>
			<CssBaseline />
			<AppBar
				position="fixed"
				// sm: `calc(100% - ${drawerWidth}px)`,

				sx={{
					width: { lg: "100%", md: "100%", sm: "100%" },
					ml: { sm: `${drawerWidth}px` },
					zIndex: (theme) => theme.zIndex.drawer + 1,
				}}>
				<Toolbar>
					<Stack display="flex" direction="row" width="100%" justifyContent="space-between">
						<Stack>
							<IconButton
								color="inherit"
								aria-label="open drawer"
								edge="start"
								onClick={handleDrawerToggle}
								sx={{ mr: 2, display: { sm: "none" } }}>
								<MenuIcon />
							</IconButton>
							<Image src={logo} width="70" height="60" className="searchImg" alt={"nupat logo"} />
						</Stack>

						<Stack alignItems="center" display="flex" direction="row" gap={2}>
							<Link href="#">
								<a className="nav-link"> All courses</a>
							</Link>
							<Link href="#">
								<a className="nav-link">My courses</a>
							</Link>

							<AccountCircleIcon />
						</Stack>
					</Stack>
				</Toolbar>
			</AppBar>
			<Box component="nav" sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }} aria-label="mailbox folders">
				{/* The implementation can be swapped with js to avoid SEO duplication of links. */}
				<Drawer
					container={container}
					variant="temporary"
					open={mobileOpen}
					onClose={handleDrawerToggle}
					ModalProps={{
						keepMounted: true, // Better open performance on mobile.
					}}
					sx={{
						display: { xs: "block", sm: "none" },
						"& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
					}}>
					{drawer}
				</Drawer>
				<Drawer
					variant="permanent"
					sx={{
						display: { xs: "none", sm: "block" },
						"& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
					}}
					open>
					{drawer}
				</Drawer>
			</Box>
			<Box component="main" sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}>
				<Toolbar />
				{/* {props.content.jsx_el && props.content.jsx_el}
				 */}
				{props.children}
			</Box>
		</Box>
	);
}
