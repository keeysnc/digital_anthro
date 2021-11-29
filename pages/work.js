import Head from "next/head";
import PageTitle from "../components/pageTitle/PageTitle";
import Slider from "../components/slider/Slider";
import workStyles from "../styles/Work.module.css";
import { getSortedPostsData } from "../lib/work";

export async function getStaticProps() {
	const allPostsData = getSortedPostsData();
	return {
		props: {
			allPostsData,
		},
	};
}

const work = ({ allPostsData }) => {
	return (
		<div>
			<Head>
				<title>Work</title>
			</Head>
			<PageTitle title="Work"></PageTitle>
			{/* <Slider allPostsData={allPostsData}></Slider> */}
			{/* <div className={workStyles.work__grid}>
				<div className={workStyles.work__grid__item}>
					<div>
						<img src="#"></img>
					</div>
				</div>
				<div className={workStyles.work__grid__item}>
					<div>
						<img src="#"></img>
					</div>
				</div>
				<div className={workStyles.work__grid__item}>
					<div>
						<img src="#"></img>
					</div>
				</div>
				<div className={workStyles.work__grid__item}>
					<div>
						<img src="#"></img>
					</div>
				</div>
			</div> */}
		</div>
	);
};

export default work;
