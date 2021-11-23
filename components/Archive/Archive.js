import ArchiveItem from "./ArchiveItem";
import archiveItemStyles from "./Archive.module.css";
const Archive = () => {
	return (
		<div className="archive">
			<div className={archiveItemStyles.archive__grid}>
				<ArchiveItem image="https://i.picsum.photos/id/902/200/300.jpg?hmac=jcXqlZDNedKqsptpWe_80nmMFRvBXBCnWCpzYwJik3g"></ArchiveItem>
				<ArchiveItem image="https://i.picsum.photos/id/902/200/300.jpg?hmac=jcXqlZDNedKqsptpWe_80nmMFRvBXBCnWCpzYwJik3g"></ArchiveItem>
				<ArchiveItem image="https://i.picsum.photos/id/902/200/300.jpg?hmac=jcXqlZDNedKqsptpWe_80nmMFRvBXBCnWCpzYwJik3g"></ArchiveItem>
				<ArchiveItem image="https://i.picsum.photos/id/902/200/300.jpg?hmac=jcXqlZDNedKqsptpWe_80nmMFRvBXBCnWCpzYwJik3g"></ArchiveItem>
			</div>
		</div>
	);
};
export default Archive;
