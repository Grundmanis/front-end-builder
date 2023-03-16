import {ReactNode} from "react";

interface IListSettings {
	elements: string[],
}

export const List = (props: {settings: IListSettings, onClick: () => void, className: string, children?: ReactNode}) => {

	const elements = [];
	for (let i = 0; i < props.settings.elements.length; i++) {
		elements.push(<li key={i}>{props.settings.elements[i]}</li>)
	}
	return (
		<ul className={props.className} onClick={props.onClick}>
			{elements}
		</ul>
	);
}
