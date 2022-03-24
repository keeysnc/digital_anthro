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
							Digital Anthro is a creative studio, interactive development consultancy. The studio was founded in 2018 due to the emergence and
							maturity of interactive and immersive technologies on the web. The Digital Anthro mission is one of design, art, technology and human
							behavior. The mission is simply to explore modern methods of web interaction and how they can better the digital human experience.
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
