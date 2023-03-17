import {ReactNode} from "react";
import {useStyles} from "../../../hooks/useStyles";

export const Link = (props: {
	children: ReactNode,
	onClick: (e: unknown, styles: object) => void,
	className: string,
	styles: Record<string, string>,
}) => {

	const styles = useStyles({
		border: "1px solid green",
		color: "red",
		backgroundColor: "#f9f9f9"
	}, props.styles)

	return (
		<a
			style={styles}
			className={props.className}
			onClick={(e) => props.onClick(e, styles)}
			href="#"
		>
			{props.children}
		</a>
	);
}
