import React from "react";
import Image from "next/image";
import logo from "../public/logoColor.png";
import { Button, InputAdornment, Link, TextField } from "@mui/material";
// Material icons

import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import NoteAltIcon from "@mui/icons-material/NoteAlt";
import PasswordIcon from "@mui/icons-material/Password";
import Navbar from "../component/Header/Navbar";

const Register = () => {
	return (
		<>
			<Navbar />
			<div className="register_container">
				<div className="register_left">
					<Link href="/">
						<Image src={logo} width="73" height="73" className="searchImg" />
					</Link>

					<h3>Learn a Tech Skill With Nupat Technologies</h3>
					<p>Start Your Tech journey with us </p>
					<div className="register_image"></div>
				</div>
				<div className="register_right">
					<div className="register_names">
						<div style={{ marginRight: "10px" }}>
							<TextField size="small" label="First Name " fullWidth></TextField>
						</div>
						<div>
							<TextField size="small" label="Surname " fullWidth></TextField>
						</div>
					</div>
					<div className="email">
						<TextField
							size="small"
							label="Email "
							type="email"
							fullWidth
							InputProps={{
								startAdornment: (
									<InputAdornment position="start">
										<EmailIcon sx={{ fontSize: "20px" }} />
									</InputAdornment>
								),
							}}></TextField>
					</div>
					<div>
						<TextField
							size="small"
							fullWidth
							label="Phone Number "
							InputProps={{
								startAdornment: (
									<InputAdornment position="start">
										<PhoneIcon sx={{ fontSize: "20px" }} />
									</InputAdornment>
								),
							}}></TextField>
					</div>
					<div>
						<TextField
							size="small"
							label="Track"
							fullWidth
							InputProps={{
								startAdornment: (
									<InputAdornment position="start">
										<NoteAltIcon sx={{ fontSize: "20px" }} />
									</InputAdornment>
								),
							}}></TextField>
					</div>
					<div>
						<TextField
							size="small"
							label="Password"
							type="password"
							fullWidth
							InputProps={{
								startAdornment: (
									<InputAdornment position="start">
										<PasswordIcon sx={{ fontSize: "20px" }} />
									</InputAdornment>
								),
							}}></TextField>
					</div>
					<div>
						<TextField
							size="small"
							fullWidth
							label="Confirm Password"
							type="password"
							InputProps={{
								startAdornment: (
									<InputAdornment position="start">
										<PasswordIcon sx={{ fontSize: "20px" }} />
									</InputAdornment>
								),
							}}></TextField>
					</div>
					<p>
						By signing up, you have agreed to Terms of Services and Privacy Polices. We will also subscribe you to
						our news letter.You can unsubscribe at anyime
					</p>
					<Button variant="contained" sx={{ mb: 1 }}>
						Sign Up
					</Button>
					<Button variant="outlined">Sign Up with Google</Button>
					<div className="switch_login">
						<p>
							Already have an account?
							<Link href="/">Sign in</Link>
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default Register;
