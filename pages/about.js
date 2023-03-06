import Image from "next/image";

const img = "/profile-img-da.png";

export default function Home() {
	return (
		<div style={{ display: "flex" }}>
			<Image alt="me" layout="fixed" width={"500px"} height={"500px"} src={img}></Image>
			<div>
				<h2>About.</h2>
				<p>
					Nathan Keeys is a software engineer with a specialization in design & front-end web development. In 2018, he created Digital Anthro, LLC.
					Digital Anthro consultancy works with businesses to assist in their design & development of websites, web apps, and interactive web
					experiences. When he’s not consulting, Nathan writes music for local artists, plays guitar, and enjoys staying fitness and staying active.
				</p>
			</div>
		</div>
	);
}
