import {ReactNode} from "react";
import {useStyles} from "../../../hooks/useStyles";

export const Col = (props: {
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
		<div className={"col " + props.className} onClick={(e) => props.onClick(e, styles)} style={styles}>
			{props.children}
		</div>
	);
};
