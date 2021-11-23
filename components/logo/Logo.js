import React, { useState, useEffect } from "react";
import Image from "next/image";

// wrapper component
const Logo = () => {
	const img = "/logo.svg";
	// useEffect(() => {
	// 	var c = document.getElementById("myCanvas");
	// 	var ctx = c.getContext("2d");
	// 	let particleArray = [];
	// 	let adjustX = 0;
	// 	let adjustY = 0;

	// 	//Circle Constructor
	// 	function Circle(x, y, radius, startPoint, endPoint, clockwise) {
	// 		this.x = x;
	// 		this.y = y;
	// 		this.startPoint = startPoint;
	// 		this.endPoint = endPoint;
	// 		this.radius = radius;
	// 		this.clockwise = clockwise;

	// 		this.createCircle = function () {
	// 			ctx.beginPath();
	// 			ctx.lineCap = "round";
	// 			ctx.arc(this.x, this.y, this.radius, this.startPoint, this.endPoint, this.clockwise);
	// 			ctx.lineWidth = 4;
	// 			ctx.stroke();
	// 		};
	// 	}

	// 	const ring4 = new Circle(100, 75, 50, 10, 1.5 * Math.PI, true);
	// 	const ring3 = new Circle(100, 75, 40, 20, 1.85 * Math.PI, false);
	// 	const ring3_partial = new Circle(100, 75, 40, 0, 0.25 * Math.PI, false);
	// 	const ring2 = new Circle(100, 75, 30, 5, 1.0 * Math.PI, false);
	// 	const ring1 = new Circle(100, 75, 20, 20, 2 * Math.PI, false);
	// 	ring4.createCircle();
	// 	ring3.createCircle();
	// 	ring3_partial.createCircle();
	// 	ring2.createCircle();
	// 	ring1.createCircle();

	// 	// ctx.fillStyle = 'white';
	// 	// ctx.font = '20px Helvetica';
	// 	// ctx.fillText('MOVE', 0, 30);

	// 	//     ctx.beginPath();
	// 	// ctx.arc(100, 75, 50, 0, 2 * Math.PI);
	// 	// ctx.stroke()
	// 	// ctx.styleStroke = 'red';
	// 	// ctx.strokeRect(0,0, 300, 300);
	// 	const logoCoords = ctx.getImageData(0, 0, 200, 200);
	// 	const mouse = {
	// 		x: null,
	// 		y: null,
	// 		radius: 50,
	// 	};

	// 	document.addEventListener("mousemove", function (event) {
	// 		mouse.x = event.x;
	// 		mouse.y = event.y;

	// 		console.log("mouse x" + mouse.x, "mouse y" + mouse.y);
	// 	});

	// 	class Particle {
	// 		constructor(x, y) {
	// 			this.x = x;
	// 			this.y = y;
	// 			this.size = 1;
	// 			this.baseX = this.x;
	// 			this.baseY = this.y;
	// 			this.density = Math.random() * 30 + 1;
	// 		}
	// 		draw() {
	// 			ctx.fillStyle = "black";
	// 			ctx.beginPath();
	// 			ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
	// 			ctx.closePath();
	// 			ctx.fill();
	// 		}

	// 		update() {
	// 			// distance difference between mouse and particle
	// 			// compares difference between mouse move and each particle

	// 			let dx = mouse.x - this.x;
	// 			let dy = mouse.y - this.y;
	// 			// console.log("dx", dx);
	// 			// console.log("this x", this.x)
	// 			//longest side
	// 			let distance = Math.sqrt(dx * dx + dy * dy);
	// 			let forceDirectionX = dx / distance;
	// 			let forceDirectionY = dy / distance;
	// 			let maxDistance = mouse.radius;
	// 			// normalize range between 1 to 0
	// 			let force = (maxDistance - distance) / maxDistance;
	// 			let directionX = forceDirectionX * force * this.density;
	// 			let directionY = forceDirectionY * force * this.density;
	// 			if (distance < mouse.radius) {
	// 				this.x -= directionX;
	// 				this.y -= directionY;
	// 				this.size = 1;
	// 			} else {
	// 				if (this.x !== this.baseX) {
	// 					let dx = this.x - this.baseX;
	// 					this.x -= dx;
	// 				}
	// 				if (this.y !== this.baseY) {
	// 					let dy = this.y - this.baseY;
	// 					this.y -= dy;
	// 				}
	// 			}
	// 			//the dx and dy make a right angle 90deg. Need to calculate the longest side - hypotenus. This uses the pythagorean theorem.
	// 		}
	// 	}

	// 	function init() {
	// 		particleArray = [];
	// 		for (let y = 0, y2 = logoCoords.height; y < y2; y++) {
	// 			for (let x = 0, x2 = logoCoords.width; x < x2; x++) {
	// 				if (logoCoords.data[y * 4 * logoCoords.width + x * 4 + 3] > 128) {
	// 					let positionX = x + adjustX;
	// 					let positionY = y + adjustY;
	// 					particleArray.push(new Particle(positionX, positionY));
	// 				}
	// 			}
	// 		}

	// 		// for(let i = 0; i < 2000; i++){
	// 		//   let x = Math.random() * myCanvas.width;
	// 		//   let y = Math.random() * myCanvas.height;
	// 		//   particleArray.push(new Particle(x,y));
	// 		// }
	// 	}

	// 	init();

	// 	function animate() {
	// 		ctx.clearRect(0, 0, c.width, c.height);

	// 		for (let i = 0; i < particleArray.length; i++) {
	// 			particleArray[i].draw();
	// 			particleArray[i].update();
	// 		}
	// 		// connect();
	// 		requestAnimationFrame(animate);
	// 	}

	// 	animate();

	// 	function connect() {
	// 		let opacityValue = 1;
	// 		for (let a = 0; a < particleArray.length; a++) {
	// 			for (let b = a; b < particleArray.length; b++) {
	// 				// let dx = mouse.x - this.x;
	// 				// let dy = mouse.y - this.y;

	// 				let dx = particleArray[a].x - particleArray[b].x;
	// 				let dy = particleArray[a].y - particleArray[b].y;
	// 				let distance = Math.sqrt(dx * dx + dy * dy);

	// 				if (distance < 10) {
	// 					opacityValue = 1 - distance / 40;
	// 					ctx.strokeStyle = `rgba(0,0,0, ${opacityValue})`;
	// 					ctx.lineWidth = 2;
	// 					ctx.beginPath();
	// 					ctx.moveTo(particleArray[a].x, particleArray[a].y);
	// 					ctx.lineTo(particleArray[b].x, particleArray[b].y);
	// 					ctx.stroke();
	// 				}
	// 			}
	// 		}
	// 	}
	// }, []);

	return (
		<>
			<div>
				{/* <canvas id="myCanvas" width="200px" height="200px"></canvas> */}
				<Image alt="me" width="100px" height="100px" src={img} />
			</div>
		</>
	);
};

export default Logo;
