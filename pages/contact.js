import Head from "next/head";
import PageTitle from "../components/pageTitle/PageTitle";
import aboutStyles from "../styles/About.module.css";

const about = () => {
	return (
		<div className={aboutStyles.about}>
			<Head>
				<title>Contact</title>
			</Head>
			<PageTitle title="Contact" textTitle=""></PageTitle>
			<p style={{ textAlign: "center" }}>
				Send us an{" "}
				<span>
					<a href="mailto:nathan@digitalanthro.com" style={{ paddingRight: "0" }}>
						email
					</a>
				</span>{" "}
				to quote for a project, inquire about a collaboration, or simply say hello.
			</p>
		</div>
	);
};

export default about;
