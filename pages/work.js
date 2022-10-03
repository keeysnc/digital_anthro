import { getSortedPostsData } from "../utils/dataParser";
import workStyles from "../styles/Work.module.css";
import indexStyles from "../styles/Index.module.css";

const work = ({ allPostsData }) => {
	console.log(allPostsData);

	const cards = allPostsData.map((post) => (
		<div key={post.id}>
			<li className={workStyles.work__grid__item}>
				<a href={post.study}>
					<div className={workStyles.work__case__info}>
						<h2>{post.client}</h2>
					</div>
				</a>
			</li>
			<hr />
		</div>
	));

	return (
		<div className={indexStyles.home}>
			<hr />
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
