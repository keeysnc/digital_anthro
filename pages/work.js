import { getSortedPostsData } from "../utils/dataParser";
import workStyles from "../styles/Work.module.css";
import indexStyles from "../styles/Index.module.css";

const work = ({ allPostsData }) => {
	console.log(allPostsData);

	const cards = allPostsData.map((post) => (
		<div>
			<li className={workStyles.work__grid__item} key={post.id}>
				<a href={post.study}>
					<div className={workStyles.work__case__info}>
						<p>{post.client}</p>
					</div>
				</a>
			</li>
			<hr />
		</div>
	));

	return (
		<div className={indexStyles.home}>
			<h2>Work</h2>
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
