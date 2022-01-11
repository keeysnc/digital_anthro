import Head from "next/head";
import PageTitle from "../components/pageTitle/PageTitle";
import aboutStyles from "../styles/About.module.css";

const about = () => {
	return (
		<div className={aboutStyles.about}>
			<Head>
				<title>Contact</title>
			</Head>
			<PageTitle
				title="Contact"
				textTitle=""
				textDescription="Send us an email to quote for a project, inquire about a collaboration, or simply say hello."
			></PageTitle>
			<p style={{ textAlign: "center" }}>
				Contact Us:{" "}
				<a href="mailto:nathan@digitalanthro.com" style={{ paddingRight: "0" }}>
					nathan@digitalanthro.com
				</a>
			</p>
		</div>
	);
};

export default about;
