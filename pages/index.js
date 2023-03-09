import indexStyles from "../styles/Index.module.css";

export default function Home() {
	return (
		<div>
			<div>
				<h3 className={indexStyles.index_h3}>Nathan Keeys - Front-End Web Engineer | Software Consultant</h3>
				<h1>Building interfaces for modern web applications and interactive web experiences.</h1>
				<p>
					Nathan Keeys is a software engineer, and consultant with a specialization in architecting interactive user web interfaces. He has worked in
					design, tech, and consulting industries for 10+ years with an array of companies ranging from creative agencies to in-house consultancies.
					Nathan consults with organizations, agencies, and other consultancies helping them build complex front-end solutions for digital products,
					experiences, and web & mobile applications.
				</p>
			</div>
			<br></br>
			<div>
				<div>
					<h3 className={indexStyles.index_h3}>Specialization</h3>
					<hr></hr>
					<p>Microservices</p>
					<hr></hr>
					<p>Interactive Web Experiences</p>
					<hr></hr>
					<p>Dashboards & Data Visualization</p>
					<hr></hr>
					<p>Marketing & Commerce Websites</p>
					<hr></hr>
				</div>
				<br></br>
				<div>
					<h3 className={indexStyles.index_h3}>Notable Clients</h3>
					<hr></hr>
					<p>Accenture</p>
					<hr></hr>
					<p>RP3 Agency</p>
					<hr></hr>
					<p>DOJ</p>
					<hr></hr>
					<p>USDA</p>
					<hr></hr>
					<p>Centers for Medicare & Medicaid Services</p>
					<hr></hr>
					<p>Mednovate Connect</p>
					<hr></hr>
					<p>Childrens National Hospital</p>
					<hr></hr>
					<p>U.S Department of Veteran Affairs</p>
					<hr></hr>
					<p>PenFed Credit Union</p>
					<hr></hr>
					<p>Westat</p>
					<hr></hr>
				</div>
				<br></br>
				<div>
					<h3 className={indexStyles.index_h3}>Technologies currently used</h3>
					<hr></hr>
					<p>React | Redux | Typescript</p>
					<hr></hr>
					<p>Node.js | Next.js | RTL | Cypress | Jest </p>
					<hr></hr>
					<p>WebGL | Three.js | D3.js</p>
					<hr></hr>
				</div>
			</div>
			<br></br>
		</div>
	);
}
