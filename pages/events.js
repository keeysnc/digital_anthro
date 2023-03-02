import Head from "next/head";
import Events from "../components/events/Events";

const events = () => {
	return (
		<div>
			<Head>
				<title>Events</title>
			</Head>
			<div>
				<h2>Events & Talks</h2>
				<Events></Events>
			</div>
		</div>
	);
};

export default events;
