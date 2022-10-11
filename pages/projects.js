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
						<hr></hr>
						<h2>
							<a target="_blank" rel="noreferrer" href="https://80percentmusic.com">
								80% Cacao Music
							</a>
						</h2>
						<hr></hr>
						<h2>
							<a target="_blank" rel="noreferrer" href="https://noisegen.io/">
								noisegen.io
							</a>
						</h2>
						<hr></hr>
						<h2>
							<a target="_blank" rel="noreferrer" href="https://thelumaproject.com/#/">
								thelumaproject.com
							</a>
						</h2>
						<hr></hr>
						<h2>
							<a target="_blank" rel="noreferrer" href="https://www.80percentmusic.com/installations/noise-shift">
								Noise Shift Audiovisual Exhibit
							</a>
						</h2>
						<hr></hr>
					</div>
					<br />
				</div>
			</div>
		</div>
	);
};

export default services;
