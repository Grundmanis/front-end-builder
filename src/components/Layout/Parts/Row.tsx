import {ForwardedRef, forwardRef, ReactNode, useEffect, useState} from "react";

export const Row = forwardRef((props: {
	children: ReactNode,
	onClick: (e: unknown, styles: object) => void,
	className: string,
	styles: Record<string, string>,
}, ref: ForwardedRef<HTMLDivElement>) => {

	useEffect(() => {
		setStyles({...styles, ...props.styles});
	}, [props.styles]); // 👈️ add props as dependencies

	const [styles, setStyles] = useState({...{
			border: "1px solid blue",
			color: "red",
			backgroundColor: "#f1f1f1"
		}, ...props.styles
	});

	return (
		<div ref={ref} className={"row " + props.className} onClick={(e) => props.onClick(e, styles)} style={styles}>
			{props.children}
		</div>
	);
});
