import React, {useState} from 'react';
import {ConfigColor} from "./ConfigColor";
import {Collapse} from "react-collapse";

export const Colors = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div>

			<button onClick={() => setIsOpen(!isOpen)}>
				Colors
			</button>

			<Collapse isOpened={isOpen}>
				<ConfigColor type={"primaryColor"} />
				<ConfigColor type={"secondaryColor"} />
				<ConfigColor type={"tertiaryColor"} />
				<ConfigColor type={"tintColor"} />
				<ConfigColor type={"shadeColor"} />
				<ConfigColor type={"toneColor"} />
				<button onClick={() => setIsOpen(false)}>
					Done
				</button>
			</Collapse>
		</div>
	);
}
