import React, { useState, useEffect } from "react";
import Image from "next/image";
// import logoStyles from "./LogoStyles.module.css";

// wrapper component
const Logo = () => {
	// const img = "/logo.svg";
	return (
		<>
			<div>
				{/* <canvas id="myCanvas" width="200px" height="200px"></canvas> */}
				{/* <Image alt="me" width="100px" height="100px" src={img} /> */}

				<svg width="72px" height="72px" viewBox="0 0 72 72" version="1.1" xmlns="http://www.w3.org/2000/svg">
					<title>Logo</title>
					<g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
						<g id="Homepage" transform="translate(-212.000000, -54.000000)" stroke="#000000" strokeWidth="5">
							<g id="Group-12" transform="translate(215.000000, 57.000000)">
								<g className="stroke5 stroke">
									<path
										d="M33.0674187,58.6153402 C18.9798112,58.6153402 7.55934393,47.1948729 7.55934393,33.1072654 C7.55934393,19.0202748 18.9798112,7.59980748 33.0674187,7.59980748 C47.1550262,7.59980748 58.5754935,19.0202748 58.5754935,33.1072654"
										id="Stroke-2"
									></path>
									<path d="M56.7178093,41.9379421 C54.2727252,47.9908206 49.5182579,53.1104467 43.0342206,55.8627084" id="Stroke-4"></path>
								</g>

								<path
									d="M33.0674187,15.1308393 C42.9957925,15.1308393 51.0440916,23.1791383 51.0440916,33.1075121 C51.0440916,43.035886 42.9957925,51.084185 33.0674187,51.084185 C23.1390449,51.084185 15.0907458,43.035886 15.0907458,33.1075121"
									id="Stroke-6"
									className="stroke3 stroke"
								></path>
								<path
									d="M33.0674187,43.6646131 C27.2372131,43.6646131 22.5105028,38.9379028 22.5105028,33.1076972 C22.5105028,27.2774916 27.2372131,22.5507813 33.0674187,22.5507813 C38.8982411,22.5507813 43.6243346,27.2774916 43.6243346,33.1076972"
									id="Stroke-8"
									className="stroke2 stroke"
								></path>
								<path
									d="M33.0674187,0.47408972 C51.0903533,0.47408972 65.7010262,15.0847626 65.7010262,33.1076972 C65.7010262,51.1306318 51.0903533,65.7413047 33.0674187,65.7413047 C15.0444841,65.7413047 0.433811215,51.1306318 0.433811215,33.1076972 C0.433811215,24.5042579 3.76341869,16.6786318 9.20379252,10.8484262"
									id="Stroke-10"
									className="stroke1 stroke"
								></path>
							</g>
						</g>
					</g>
				</svg>
			</div>
		</>
	);
};

export default Logo;
