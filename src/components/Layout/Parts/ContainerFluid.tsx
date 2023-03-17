import {ReactNode} from "react";
import {useStyles} from "../../../hooks/useStyles";

export const ContainerFluid = (props: {
	children: ReactNode,
	onClick: (e: unknown, styles: object) => void,
	className: string,
	styles: Record<string, string>,
}) => {

	const styles = useStyles({
		border: "1px solid blue",
		color: "red",
		backgroundColor: "#f9f9f9"
	}, props.styles)

	return (
		<div className={"container-fluid " + props.className} onClick={(e) => props.onClick(e, styles)} style={styles}>
			{props.children}
		</div>
	);
};
