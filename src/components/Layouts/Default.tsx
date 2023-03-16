import React, {useState, cloneElement, useRef} from 'react';
import {LayoutElement} from "../LayoutParts/LayoutElement";
import {Row} from "../LayoutPartsHtml/Row";

export const Default = (props: any) => {

	let index = 1;
	const [components, setComponents] = useState([
		<LayoutElement component={<Row />} index={index} onDuplicate={duplicate} onDelete={deleteComponent}/>,
	]);

	function duplicate(element: JSX.Element): void {
		index++;
		const clonedElement = cloneElement(element, {
			index
		});
		setComponents((prevComponents) => {
			return [...prevComponents, ...[clonedElement]]
		})
	}

	function deleteComponent(index: number): void {
		setComponents((current: JSX.Element[]) => {
			return current.filter((component) => component.props.index !== index)
		});
	}

	return (
		<React.Fragment>
			{components.map((component, key) => (
				<React.Fragment key={key}>{component}</React.Fragment>
			))}
		</React.Fragment>
	)
}
