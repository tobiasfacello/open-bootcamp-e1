import React, { useState } from "react";
import PropTypes from "prop-types";
import { Contact } from "../../models/contact.class";

const ContactComponent = ({ contact }) => {
	const [newStatus, setStatus] = useState(false);

	const changeContactStatus = () => {
		//? Toma el boolean actual y lo cambia por el contrario.
		setStatus((current) => !current);
	};

	return (
		<div>
			<p>{contact.firstName}</p>
			<p>{contact.lastName}</p>
			<p>{contact.email}</p>
			<p>Estado: {newStatus === true ? "Online" : "Offline"}</p>
			<button onClick={changeContactStatus}>Cambiar estado</button>
		</div>
	);
};

// {contact.connected === true ? "Online" : "Offline"}

ContactComponent.propTypes = {
	contact: PropTypes.instanceOf(Contact),
};

export default ContactComponent;
