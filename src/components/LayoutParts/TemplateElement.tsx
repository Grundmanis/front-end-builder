import React, {ReactNode, SyntheticEvent, useRef, useState, useId} from "react";
import {Toolbar} from "../Toolbar";
import {useAppDispatch} from "../../app/hooks";
import {store} from "../../app/store";
import {setActiveElementId, setTargetComponent} from "../../features/config/configSlice";

export const TemplateElement = (props: { component: React.ElementType, children?: ReactNode, settings?: unknown }) => {

	const dispatch = useAppDispatch();
	const DynamicComp = props.component;

	const [isActive, setIsActive] = useState(false);
	const [styles, setStyles] = useState({});
	const [subscribeRef, setSubscribeRef] = useState({})
	const [uniqueId] = useState(useId())
	const ref = useRef(null)

	function onClick(e: SyntheticEvent, styles: object) {

		e.preventDefault();
		e.stopPropagation();

		if (isActive) {
			return deActivate();
		}

		setIsActive(true);
		dispatch(setActiveElementId(uniqueId));
		dispatch(setTargetComponent(styles));
		const unsub = store.subscribe(subscribeToSettingsChanges);
		setSubscribeRef({unsub});
	}

	function deActivate() {

		setIsActive(false);
		dispatch(setActiveElementId(""));
		// 	@ts-ignore
		subscribeRef.unsub();
		setSubscribeRef({});
		dispatch(setTargetComponent({}));
	}

	function subscribeToSettingsChanges() {

		const config = store.getState().config;
		if (config.activeElementId === uniqueId) {
			console.log("passing styles to ", uniqueId)
			// pass styles to child
			setStyles(config.targetComponent);
		} else {
			console.log("uniqueId is deactivated", uniqueId)
			// TODO: do we really need isActive???
			setIsActive(false);
		}
	}

	return (
		<DynamicComp
			ref={ref}
			className="tb-modifiable"
			onClick={onClick}
			styles={styles}
			settings={props.settings}>
			{props.children}
			<Toolbar/>
		</DynamicComp>
	);
}
