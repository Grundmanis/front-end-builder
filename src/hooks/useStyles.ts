import {MutableRefObject, useEffect, useState} from "react";

export function useStyles(defaultStyles: Record<string, string>, passedStyles: Record<string, string>) {

	useEffect(() => {
		setStyles({...defaultStyles, ...passedStyles});
	}, [passedStyles]); // 👈️ add props as dependencies

	const [styles, setStyles] = useState({...defaultStyles, ...passedStyles});
	return styles;
}
