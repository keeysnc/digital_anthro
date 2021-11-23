import { useEffect, useState } from "react";
import sliderStyles from "../slider/Slider.module.css";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";

const slideArray = [
	{
		id: "slide 1",
		link: "/work/clinical-pharmacy-associates",
		image: "/clin-pharm-cover.png",
		project: "Web Design",
		client: "Clinical Pharmacy Associates",
	},
	{
		id: "slide 2",
		link: "/work/carpe-dm-app",
		image: "/carpedm-dating-cover.png",
		project: "UX Consulting, Web Development, Vue.js Development, Stripe Integration",
		client: "CarpeDM Dating",
	},
	{
		id: "slide 3",
		link: "/work/80percentcacao",
		image: "/coming-soon-cover.png",
		project: "Next.js, React Development, Shopify API",
		client: "80% Cacao Music",
	},
	// {
	// 	id: "slide 4",
	// 	link: "/80percentcacao",
	// 	image: "/work-slider-image.png",
	// 	project: "Next.js, React Development, Shopify API",
	// 	client: "80% Cacao Music",
	// },
	// {
	// 	id: "slide 5",
	// 	link: "",
	// 	image: "/work-slider-image.png",
	// 	project: "Front-End Web Development, Wordpress Development",
	// 	client: "ABF Creative",
	// },
	// {
	// 	id: "slide 6",
	// 	link: "",
	// 	image: "/work-slider-image.png",
	// 	project: "Front-End Web Development, Wordpress Development",
	// 	client: "ABF Creative",
	// },
	// {
	// 	id: "slide 7",
	// 	link: "",
	// 	image: "/work-slider-image.png",
	// 	project: "",
	// 	client: "",
	// },
	// {
	// 	id: "slide 8",
	// 	link: "",
	// 	image: "/work-slider-image.png",
	// 	project: "",
	// 	client: "",
	// },
	// {
	// 	id: "slide 9",
	// 	link: "",
	// 	image: "/work-slider-image.png",
	// 	project: "",
	// 	client: "",
	// },
	// {
	// 	id: "slide 10",
	// 	link: "",
	// 	image: "/work-slider-image.png",
	// 	project: "",
	// 	client: "",
	// },
];

let activeSlidesArray = [];
let filterActiveNextSlides;
let filterActivePrevSlides;

const Slider = ({ allPostsData }) => {
	const [activeSlides, setActiveSlides] = useState([]);

	const getSlides = allPostsData.map((slide, i) => {
		return (
			<li key={i} className={(i % 2 === 0 && i !== 0 ? "last" : null, "slide")}>
				<div className={sliderStyles.slide__content}>
					<div>
						<Link href={slide.link ? slide.link : "#"}>
							<Image id={slide.id} className={sliderStyles.slider__img} alt="me" layout="fill" src={slide.image ? slide.image : "/coming-soon.png"} />
						</Link>
					</div>
				</div>
				<div className={sliderStyles.slide__meta}>
					<span className={sliderStyles.slider_project_description}>{slide.title}</span>
					<br />
					<span className={sliderStyles.slider_client_description}>{slide.client}</span>
				</div>
			</li>
		);
	});

	const handleUpdateSlides = () => {
		activeSlidesArray.length = 0;
		setActiveSlides(activeSlidesArray);
		getSlides.map((slide) => {
			if (parseInt(slide.key) < 3) {
				activeSlidesArray.push(slide);
			}
		});

		setActiveSlides(activeSlidesArray);
	};

	// handle next button click
	const handleNext = () => {
		let lastOldSlide = getSlides.at(-1);

		if (handleNextSlideLimit(lastOldSlide) !== "stop") {
			let lastSlide = activeSlidesArray.at(-1);

			filterActiveNextSlides = getSlides.filter((slide, i) => {
				// if slide is >= last slide
				// if slide is no greater than last slide + 3
				if (parseInt(slide.key) >= parseInt(lastSlide.key) + 1 && parseInt(slide.key) <= parseInt(lastSlide.key) + 3) {
					return slide;
				}
			});
			activeSlidesArray.length = 0;
			activeSlidesArray = filterActiveNextSlides;
			setActiveSlides(activeSlidesArray);
		} else {
			console.log("stop slider");
			return;
		}
	};

	const handleNextSlideLimit = (lastOldSlide) => {
		// check to see if getSlides last slide is in the activeSlidesArray
		for (let x = 0; x <= activeSlidesArray.length - 1; x++) {
			console.log("x", x, "old slide", parseInt(lastOldSlide.key));
			if (x === parseInt(lastOldSlide.key)) {
				console.log("stop");
				return "stop";
			} else {
				console.log("keep going");
			}
		}
	};

	// handle previous button click
	const handlePrevious = () => {
		let firstSlide = parseInt(activeSlidesArray[0].key);
		// if slide is <= first slide
		// if slide is no less than first slide - 3
		console.log(getSlides);
		filterActivePrevSlides = getSlides.filter((slide, i) => {
			if (i < firstSlide && i >= firstSlide - 3) {
				if (slide.key === "0") {
					console.log("return");
					return slide;
				}
				return slide;
			}
		});

		activeSlidesArray.length = 0;
		activeSlidesArray = filterActivePrevSlides;
		setActiveSlides(activeSlidesArray);
	};

	useEffect(() => {
		const animate = document.querySelectorAll(".slide");
		gsap.to(animate, {
			y: 0,
			duration: 1,
			stagger: { each: 0.15 },
			opacity: 1,
		});
	}, [filterActiveNextSlides, filterActivePrevSlides]);

	useEffect(() => {
		const animate = document.querySelectorAll(".slide");
		gsap.to(animate, {
			y: 0,
			duration: 1,
			stagger: { each: 0.1 },
			opacity: 1,
		});
	});

	// useEffect(() => {
	// 	setActiveSlides(activeSlidesArray);
	// }, [activeSlidesArray, setActiveSlides, filterActiveNextSlides, filterActivePrevSlides]);

	useEffect(() => {
		handleUpdateSlides();
	}, []);

	return (
		<div className={sliderStyles.slider}>
			{/* <div className={sliderStyles.slider__pagination}>
				<span className={sliderStyles.slider__pagination__previous} onClick={handlePrevious}>
					Previous
				</span>
				<span className={sliderStyles.slider__pagination__next} onClick={handleNext}>
					Next
				</span>
			</div> */}
			<div className={sliderStyles.slider__inner}>
				<ul>{activeSlidesArray}</ul>
			</div>
		</div>
	);
};

export default Slider;
