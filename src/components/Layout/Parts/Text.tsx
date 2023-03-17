import {ForwardedRef, forwardRef, ReactNode, useEffect, useState} from "react";
import {useStyles} from "../../../hooks/useStyles";

export const Text = (props: {
	children: ReactNode,
	onClick: (e: unknown, styles: object) => void,
	className: string,
	styles: Record<string, string>,
}) => {

	const styles = useStyles({
		border: "1px solid red",
		color: "blue",
		backgroundColor: "#f1f1f1"
	}, props.styles)

	return (
		<p className={props.className} onClick={(e) => props.onClick(e, styles)} style={styles}>
			{props.children}
		</p>
	);
};
