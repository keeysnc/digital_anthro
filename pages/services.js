import Head from "next/head";
import PageTitle from "../components/pageTitle/PageTitle";
import ParagraphText from "../components/paragraphText/ParagraphText";
import indexStyles from "../styles/Index.module.css";
import serviceStyles from "../styles/Services.module.css";

const services = () => {
	return (
		<div className={indexStyles.home}>
			<div className={indexStyles.home__content}>
				<Head>
					<title>Services</title>
				</Head>
				<div style={{ textAlign: "center" }}>
					<h1>Services & Technologies</h1>
					<h3>Javascript Web & Mobile Development</h3>
					<h3>WebGL & 3D Web Development</h3>
					<h3>D3.js & WebGL Data Visualizations</h3>
					<h3>UI / UX / Interaction Design</h3>
					<h3>3D Modeling and Animation</h3>
				</div>
			</div>
		</div>
	);
};

export default services;
