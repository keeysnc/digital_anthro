import { getSortedPostsData } from "../../utils/dataParser";
import { getPostData } from "../../utils/markdownToHtml";
import caseStyles from "../../styles/Case.module.css";

const mednovate = ({ contentData, allPostsData }) => {
	return (
		<div>
			<div className={caseStyles.case__hero}>
				<img style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }} src={allPostsData[1].image} />
			</div>
			<div className={caseStyles.case__study} dangerouslySetInnerHTML={{ __html: contentData.contentHtml }}></div>
		</div>
	);
};

// runs at build time
export async function getStaticProps() {
	const allPostsData = getSortedPostsData();
	const contentData = await getPostData("mednovate");
	return {
		props: {
			allPostsData,
			contentData,
		},
	};
}

export default mednovate;
