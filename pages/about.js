import Head from "next/head";
import PageTitle from "../components/pageTitle/PageTitle";
import aboutStyles from "../styles/About.module.css";

const about = () => {
	return (
		<div className={aboutStyles.about}>
			<Head>
				<title>About</title>
			</Head>
			<PageTitle
				title="About"
				textTitle=""
				textDescription="The studio was founded in 2018 due to the emergence and maturity of interactive and immersive technologies on the web. Digital Anthro's mission is one of design, technology and human behavior. The mission is simply to explore modern methods of web interaction and how they can better the digital human experience."
			></PageTitle>
			<div className="social-media" style={{ textAlign: "center" }}>
				<a target="_blank" rel="noreferrer" href="https://www.linkedin.com/company/digital-anthro">
					LinkedIn
				</a>
				<a target="_blank" rel="noreferrer" href="https://www.instagram.com/digitalanthro/" style={{ paddingRight: "0" }}>
					Instagram
				</a>
			</div>
		</div>
	);
};

export default about;
