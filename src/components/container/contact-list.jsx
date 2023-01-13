import React from "react";
import PropTypes from "prop-types";
import { Contact } from "../../models/contact.class";
import ContactComponent from "../pure/contact";

const ContactListComponent = () => {
	const defaultContact = new Contact(
		"Tobías",
		"Facello",
		"tobiasfacellodeveloper@gmail.com",
		true
	);

	return (
		<div>
			<ContactComponent contact={defaultContact}></ContactComponent>
		</div>
	);
};

ContactListComponent.propTypes = {
	contact: PropTypes.instanceOf(Contact),
};

export default ContactListComponent;
