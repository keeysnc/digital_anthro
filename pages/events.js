import Head from "next/head";
import Events from "../components/events/Events";
import indexStyles from "../styles/Index.module.css";

const events = () => {
	return (
		<div>
			<Head>
				<title>Events</title>
			</Head>
			<div className={indexStyles.home}>
				<h2>Events & Talks</h2>
				<Events></Events>
			</div>
		</div>
	);
};

export default events;
