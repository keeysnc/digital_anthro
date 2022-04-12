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
					<h3>Visual Branding</h3>
					<h3>Experience Design</h3>
					<h3>Javascript Development</h3>
					<h3>WebGL Development</h3>
					<h3>Cloud/Headless CMS Integration</h3>
					<h3>Touchdesigner Development</h3>
					<h3>Sound Design - Ableton Live</h3>
				</div>
			</div>
		</div>
	);
};

export default services;
