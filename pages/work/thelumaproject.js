import { getSortedPostsData } from "../../utils/dataParser";
import { getPostData } from "../../utils/markdownToHtml";
import caseStyles from "../../styles/Case.module.css";

const thelumaproject = ({ contentData }) => {
	return (
		<div>
			<div className={caseStyles.case__study} dangerouslySetInnerHTML={{ __html: contentData.contentHtml }}></div>
		</div>
	);
};

// runs at build time
export async function getStaticProps() {
	const allPostsData = getSortedPostsData();
	const contentData = await getPostData("thelumaproject");
	return {
		props: {
			allPostsData,
			contentData,
		},
	};
}

export default thelumaproject;
