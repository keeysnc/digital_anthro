import Head from "next/head";
import BgCover from "../components/BgCover/BgCover";
import PageTitle from "../components/pageTitle/PageTitle";
import aboutStyles from "../styles/About.module.css";
import Link from "next/link";

const about = () => {
	return (
		<div className={aboutStyles.about}>
			<Head>
				<title>About</title>
			</Head>
			<PageTitle
				title="About"
				textTitle=""
				textDescription="The studio was founded in 2018 by Creative Technologist, Nathan Keeys due to the increasing complexities in front-end web development and user experience design. Digital Anthro continues to grow and explore connections between design, technology, and digital human behavior."
			></PageTitle>
			<div clasName="social-media">
				<a target="_blank" rel="noreferrer" href="https://www.linkedin.com/company/digital-anthro">
					LinkedIn
				</a>
				<a target="_blank" rel="noreferrer" href="https://www.instagram.com/digitalanthro/">
					Instagram
				</a>
			</div>
		</div>
	);
};

export default about;
