import React, {useState, cloneElement, useRef} from 'react';
import {Row} from "../LayoutParts/Row";
import {closestCenter, DndContext, KeyboardSensor, PointerSensor, useSensor, useSensors} from "@dnd-kit/core";
import {restrictToVerticalAxis} from "@dnd-kit/modifiers";
import {arrayMove, SortableContext, sortableKeyboardCoordinates, verticalListSortingStrategy} from "@dnd-kit/sortable";
import {SortableItem} from "../SortableItem";

export const Default = (props: any) => {

	let index = 0;
	const [items, setItems] = useState([0]);
	const [components, setComponents] = useState([
		<Row index={index} onDuplicate={duplicate} onDelete={deleteComponent}/>,
	]);

	function duplicate(element: JSX.Element): void {
		index++;
		const clonedElement = cloneElement(element, {
			index
		});
		setComponents((prevComponents) => {
			return [...prevComponents, ...[clonedElement]]
		})
		setItems((currentItems) => {
			return [...currentItems, ...[currentItems.length]]
		})
	}

	function deleteComponent(index: number): void {

		let componentLength: number = 0;
		// @ts-ignore
		setComponents((current: JSX.Element[]) => {
			componentLength = current.length - 1;
			return current.filter((component) => component.props.index !== index)
		});
		// const indexToRemove = oldComponents.findIndex(current => current.props.index === index);

		const newItems = [];
		for (let i = 0; i < componentLength; i++) {
			newItems.push(i);
		}
		console.log({newItems});
		setItems(newItems)
	}

	const sensors = useSensors(
		useSensor(PointerSensor),
		useSensor(KeyboardSensor, {
			coordinateGetter: sortableKeyboardCoordinates,
		})
	);

	function handleDragEnd(event: any) {
		const {active, over} = event;
		console.log({event});
		//
		// if (active.id !== over.id) {
		// 	setItems((items) => {
		// 		const oldIndex = items.indexOf(active.id);
		// 		const newIndex = items.indexOf(over.id);
		//
		// 		return arrayMove(items, oldIndex, newIndex);
		// 	});
		// }
	}

	return (
		<DndContext
			sensors={sensors}
			collisionDetection={closestCenter}
			onDragEnd={handleDragEnd}
			modifiers={[restrictToVerticalAxis]}
		>
			<SortableContext
				items={items}
				strategy={verticalListSortingStrategy}
			>
				{items.map(id =>
					<React.Fragment key={id}>{components[id]}</React.Fragment>
				)}
			</SortableContext>
		</DndContext>
	);
}
