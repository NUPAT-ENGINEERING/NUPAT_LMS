import Navbar from "../component/Header/Navbar";
import Banner from "../component/Common/Banner";
import Footer from "../component/Common/Footer";
import Newsletter from "../component/Common/Newsletter";
import Colleges from "../component/Courses/Colleges";
// import Features from "../component/";

import styles from "../styles/Home.module.css";
import { Divider } from "@mui/material";

const Home = () => {
	return (
		<>
			<Navbar />
			<Banner />
			<br />
			<Colleges />
			<Divider />
			<br />
			<Newsletter />
			<Footer />
		</>
	);
};

export default Home;
