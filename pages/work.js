import Head from "next/head";
import PageTitle from "../components/pageTitle/PageTitle";
import Slider from "../components/slider/Slider";
const work = () => {
	return (
		<div>
			<Head>
				<title>Work</title>
			</Head>
			<PageTitle title="Work Page" textTitle="Text title" textDescription="Text description"></PageTitle>
			<Slider></Slider>
		</div>
	);
};

export default work;
