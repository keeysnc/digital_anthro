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
				<title>Contact</title>
			</Head>
			<PageTitle
				title="Contact"
				textTitle=""
				textDescription="Send us an email to quote for a project, inquire about a collaboration, or simply say hello."
			></PageTitle>
			<p>
				Contact Us: <a href="mailto:info@digitalanthro.com">info@digitalanthro.com</a>
			</p>
		</div>
	);
};

export default about;
