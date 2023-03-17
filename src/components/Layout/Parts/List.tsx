import {ReactNode} from "react";
import {useStyles} from "../../../hooks/useStyles";

interface IListSettings {
	elements: string[],
}

export const List = (props: {
	settings: IListSettings,
	onClick: (e: unknown, styles: object) => void,
	className: string,
	styles: Record<string, string>,
	children?: ReactNode
}) => {

	const styles = useStyles({
		border: "1px solid green",
		color: "red",
		backgroundColor: "#f9f9f9"
	}, props.styles)

	const elements = [];
	for (let i = 0; i < props.settings.elements.length; i++) {
		elements.push(<li key={i}>{props.settings.elements[i]}</li>)
	}
	return (
		<ul style={styles} className={props.className} onClick={(e) => props.onClick(e, styles)}>
			{elements}
		</ul>
	);
}
