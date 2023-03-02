import { getSortedPostsData } from "../../utils/dataParser";
import { getPostData } from "../../utils/markdownToHtml";

const doj = ({ contentData }) => {
	return (
		<div>
			<div dangerouslySetInnerHTML={{ __html: contentData.contentHtml }}></div>
		</div>
	);
};

// runs at build time
export async function getStaticProps() {
	const allPostsData = getSortedPostsData();
	const contentData = await getPostData("doj");
	return {
		props: {
			allPostsData,
			contentData,
		},
	};
}

export default doj;
