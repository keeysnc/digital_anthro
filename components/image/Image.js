import Image from "next/image";

const myLoader = ({ src, width, quality }) => {
	return `http://localhost:3000//${src}?w=${width}&q=${quality || 75}`;
};

const ImageInstance = (props) => {
	return <Image loader={myLoader} src={props.src} alt="Picture of the author" width={props.width} height={props.height} />;
};

export default ImageInstance;
