import EventItem from "./EventItem";

const Events = () => {
	return (
		<div>
			<EventItem
				eventTitle="WebGL Workshop"
				eventDate="01/10/2022"
				eventDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae tristique orci. Integer arcu tortor, tincidunt id ex vel, gravida accumsan nisl. Mauris ex ligula"
			></EventItem>
			<EventItem
				eventTitle="Touchdesigner Show & Tell"
				eventDate="01/10/2022"
				eventDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae tristique orci. Integer arcu tortor, tincidunt id ex vel, gravida accumsan nisl. Mauris ex ligula"
			></EventItem>
			<EventItem
				eventTitle="New Event"
				eventDate="01/10/2022"
				eventDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae tristique orci. Integer arcu tortor, tincidunt id ex vel, gravida accumsan nisl. Mauris ex ligula"
			></EventItem>
		</div>
	);
};

export default Events;
