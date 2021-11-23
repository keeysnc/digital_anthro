import Head from "next/head";
import Events from "../components/events/Events";
import PageTitle from "../components/pageTitle/PageTitle";

const events = () => {
	return (
		<div>
			<Head>
				<title>Events</title>
			</Head>
			<PageTitle title="Events & Talks"></PageTitle>
			<Events></Events>
		</div>
	);
};

export default events;
