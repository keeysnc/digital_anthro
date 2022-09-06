import Head from "next/head";
import aboutStyles from "../styles/About.module.css";
import indexStyles from "../styles/Index.module.css";

const about = () => {
	return (
		<div className={indexStyles.home}>
			<div className={indexStyles.home__content}>
				<div className={aboutStyles.about}>
					<Head>
						<title>Contact</title>
					</Head>
					<div>
						<h2>Contact</h2>
						<p>
							Send us an{" "}
							<span>
								<a href="mailto:nathan@digitalanthro.com" style={{ paddingRight: "0" }}>
									email
								</a>
							</span>{" "}
							to quote for a project, inquire about a collaboration, or simply say hello.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default about;
