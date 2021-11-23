import archiveItemStyles from "./Archive.module.css";
import Image from "next/image";

const ArchiveItem = ({ image }) => {
	return (
		<div className={archiveItemStyles.archiveItem}>
			<Image alt="me" layout="fill" src={image}></Image>
		</div>
	);
};
export default ArchiveItem;
