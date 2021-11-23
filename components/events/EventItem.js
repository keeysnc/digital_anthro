const EventItem = ({ eventTitle, eventDate, eventDescription }) => {
	return (
		<div>
			<h4>{eventTitle}</h4>
			<p>Event Date: {eventDate}</p>
			<p>Description: {eventDescription}</p>
		</div>
	);
};

export default EventItem;
