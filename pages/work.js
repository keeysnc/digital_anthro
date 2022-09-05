import { getSortedPostsData } from "../utils/dataParser";
import Image from "next/image";
import workStyles from "../styles/Work.module.css";

const work = ({ allPostsData }) => {
	console.log(allPostsData);

	const cards = allPostsData.map((post) => (
		<li className={workStyles.work__grid__item} key={post.id}>
			<a href={post.study}>
				<Image layout="responsive" width={300} height={300} src={post.image}></Image>
			</a>
			<div className={workStyles.work__case__info}>
				<h3>{post.client}</h3>
				<a href={post.link} rel="noreferrer" target="_blank">
					<caption className={workStyles.work__link}>View Website</caption>
				</a>
			</div>
		</li>
	));

	return (
		<div>
			<ul className={workStyles.work__grid}>{cards}</ul>
		</div>
	);
};

// runs at build time
export async function getStaticProps() {
	const allPostsData = getSortedPostsData();
	return {
		props: {
			allPostsData,
		},
	};
}

export default work;
