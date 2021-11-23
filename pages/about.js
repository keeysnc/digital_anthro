import Head from "next/head";
import BgCover from "../components/BgCover/BgCover";
import PageTitle from "../components/pageTitle/PageTitle";
import aboutStyles from "../styles/About.module.css";
import Link from "next/link";

const about = () => {
	return (
		<div className={aboutStyles.about}>
			{/* <BgCover></BgCover> */}
			<Head>
				<title>About</title>
			</Head>
			<PageTitle
				title="About"
				textTitle=""
				textDescription="Digital Anthro was founded in 2018 by Creative Technologist, Nathan Keeys due to a curiosity to explore new and emerging front-end web technologies. The curiosity grew and eventually fueled a deeper focus on designing and developing digital experiences. Digital Anthro continues to grow and explore connections between design, technology and digital human behavior."
			></PageTitle>
			<div clasName="social-media">
				<Link target="_blank" href="https://www.linkedin.com/company/digital-anthro">
					LinkedIn
				</Link>
				<Link target="_blank" href="https://www.instagram.com/digitalanthro/">
					Instagram
				</Link>
			</div>
		</div>
	);
};

export default about;
