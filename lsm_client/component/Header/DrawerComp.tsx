import React, { useState } from "react";
import { Drawer, List, ListItemButton, ListItemIcon, ListItemText, IconButton, Divider } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import LiveHelpIcon from "@mui/icons-material/LiveHelp";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import HomeIcon from "@mui/icons-material/Home";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/logo.png";
import DataArrayIcon from "@mui/icons-material/DataArray";
import DataObjectIcon from "@mui/icons-material/DataObject";
import DesignServicesIcon from "@mui/icons-material/DesignServices";

const DrawerComp = () => {
	const [openDrawer, setopenDrawer] = useState(false);

	const NavPages = ["Home", "College", "Faq"];

	return (
		<>
			<Drawer open={openDrawer} onClose={() => setopenDrawer(false)}>
				<List>
					<Link href="/">
						<a>
							<Image src={logo} width="70" height="70" className="searchImg" />
						</a>
					</Link>

					{/* {
    NavPages.map((page, index)=>(
<ListItemButton key={index} onClick={()=>setopenDrawer(false)}>
        <ListItemIcon>
<ListItemText sx={{fontSize:'12px'}}>{page}</ListItemText>
        </ListItemIcon>
    </ListItemButton>
    ))
  } */}

					<Link href="/">
						<ListItemButton onClick={() => setopenDrawer(false)}>
							<ListItemIcon>
								<HomeIcon sx={{ fontSize: "23px", paddingTop: "4px", color: "#131e47" }} />
								<ListItemText sx={{ fontSize: "12px", marginLeft: "10px", color: "#131e47" }}>
									Home
								</ListItemText>
							</ListItemIcon>
						</ListItemButton>
					</Link>

					<Link href="/Engineer">
						<ListItemButton
							sx={{
								ml: 1,
							}}
							onClick={() => setopenDrawer(false)}>
							<ListItemIcon>
								<DataObjectIcon sx={{ fontSize: "23px", paddingTop: "4px", color: "#131e47" }} />
								<ListItemText sx={{ fontSize: "10px", marginLeft: "10px", color: "#131e47" }}>
									College of Engineer
								</ListItemText>
							</ListItemIcon>
						</ListItemButton>
					</Link>
					<Link href="/DataScience">
						<ListItemButton
							sx={{
								ml: 1,
							}}
							onClick={() => setopenDrawer(false)}>
							<ListItemIcon>
								<DataArrayIcon sx={{ fontSize: "23px", paddingTop: "4px", color: "#131e47" }} />
								<ListItemText sx={{ fontSize: "10px", marginLeft: "10px", color: "#131e47" }}>
									College of Data
								</ListItemText>
							</ListItemIcon>
						</ListItemButton>
					</Link>
					<Link href="/Design">
						<ListItemButton
							sx={{
								ml: 1,
							}}
							onClick={() => setopenDrawer(false)}>
							<ListItemIcon>
								<DesignServicesIcon sx={{ fontSize: "23px", paddingTop: "4px", color: "#131e47" }} />
								<ListItemText sx={{ fontSize: "10px", marginLeft: "10px", color: "#131e47" }}>
									College of Design
								</ListItemText>
							</ListItemIcon>
						</ListItemButton>
					</Link>

					<Link href="/Faq">
						<ListItemButton sx={{ marginBottom: "20px" }} onClick={() => setopenDrawer(false)}>
							<ListItemIcon>
								<LiveHelpIcon sx={{ fontSize: "23px", paddingTop: "4px", color: "#131e47" }} />
								<ListItemText sx={{ fontSize: "12px", marginLeft: "10px", color: "#131e47" }}>
									Faq
								</ListItemText>
							</ListItemIcon>
						</ListItemButton>
					</Link>
					<Divider />

					<Link href="/Register">
						<ListItemButton sx={{ marginBottom: "20px" }} onClick={() => setopenDrawer(false)}>
							<ListItemIcon>
								<PersonAddAlt1Icon sx={{ fontSize: "23px", paddingTop: "4px", color: "#131e47" }} />
								<ListItemText sx={{ fontSize: "12px", marginLeft: "10px", color: "#131e47" }}>
									<a href="https://ugwu-henry-s-school.teachable.com/sign_in">Sign Up</a>S
								</ListItemText>
							</ListItemIcon>
						</ListItemButton>
					</Link>
				</List>
			</Drawer>
			<IconButton sx={{ marginLeft: "auto" }} onClick={() => setopenDrawer(!openDrawer)}>
				<MenuIcon />
			</IconButton>
		</>
	);
};

export default DrawerComp;
