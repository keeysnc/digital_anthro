import Head from "next/head";
import aboutStyles from "../styles/About.module.css";
import indexStyles from "../styles/Index.module.css";

const about = () => {
	return (
		<div className={indexStyles.home}>
			<div className={indexStyles.home__content}>
				<div className={aboutStyles.about}>
					<Head>
						<title>About</title>
					</Head>
					<div style={{ textAlign: "center" }}>
						<h1>About</h1>
						<h3>
							Digital Anthro is a web design & development studio specialized in immersive, human-centered websites & digital experiences for
							lifestyle, wellness, and health brands and organizations. The studio was founded in 2018 to help forward-thinking health & wellness
							companies build creative digital experiences for their future & existing customers. The Digital Anthro mission is one of design, art,
							technology and human behavior. The mission is simply to design and build impactful user experiences for the digital human.
						</h3>
						<div className="social-media" style={{ textAlign: "center", paddingTop: "10px" }}>
							<a target="_blank" rel="noreferrer" href="https://www.linkedin.com/company/digital-anthro">
								LinkedIn
							</a>
							<a target="_blank" rel="noreferrer" href="https://www.instagram.com/digitalanthro/" style={{ paddingRight: "0" }}>
								Instagram
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default about;
