import Head from "next/head";
import BgCover from "../components/BgCover/BgCover";
import PageTitle from "../components/pageTitle/PageTitle";

const about = () => {
	return (
		<div>
			<BgCover></BgCover>
			<Head>
				<title>About</title>
			</Head>
			<PageTitle title="About Page"></PageTitle>
		</div>
	);
};

export default about;
