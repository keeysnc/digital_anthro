const EventItem = ({ eventTitle, eventDate, eventDescription }) => {
	return (
		<div>
			<h3>{eventTitle}</h3>
			<p>Event Date: {eventDate}</p>
			<p>Description: {eventDescription}</p>
		</div>
	);
};

export default EventItem;
