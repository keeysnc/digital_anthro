import Head from "next/head";
import indexStyles from "../styles/Index.module.css";

const services = () => {
	return (
		<div className={indexStyles.home}>
			<div className={indexStyles.home__content}>
				<Head>
					<title>Services</title>
				</Head>
				<div className={indexStyles.service__info}>
					<div>
						<h2>Awards</h2>
						<hr></hr>
						<p>
							<a target="_blank" rel="noreferrer" href="https://www.awwwards.com/sites/noisegen-io">
								Awwwards - Honorable Mention - noisegen.io
							</a>
						</p>
						<hr></hr>
						<p>
							<a target="_blank" rel="noreferrer" href="https://www.awwwards.com/sites/noisegen-io">
								Awwwards - Mobile Excellence - noisegen.io
							</a>
						</p>
						<hr></hr>
					</div>
				</div>
			</div>
		</div>
	);
};

export default services;
