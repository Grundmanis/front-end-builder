import React, {useState, cloneElement, useRef} from 'react';
import {Row} from "../LayoutParts/Row";
import {closestCenter, DndContext, KeyboardSensor, PointerSensor, useSensor, useSensors} from "@dnd-kit/core";
import {restrictToVerticalAxis} from "@dnd-kit/modifiers";
import {arrayMove, SortableContext, sortableKeyboardCoordinates, verticalListSortingStrategy} from "@dnd-kit/sortable";

export const Default = (props: any) => {

	let index = 1;
	const [items, setItems] = useState([index]);
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
			return [...currentItems, ...[index]]
		})
	}

	function deleteComponent(index: number): void {
		// @ts-ignore
		setComponents((current: JSX.Element[]) => {
			return current.filter((component) => component.props.index !== index)
		});
		setItems((currentItems) => {
			return currentItems.filter((item) => item !== index)
		})
	}

	const sensors = useSensors(
		useSensor(PointerSensor),
		useSensor(KeyboardSensor, {
			coordinateGetter: sortableKeyboardCoordinates,
		})
	);

	function handleDragEnd(event: any) {
		const {active, over} = event;
		if (active.id !== over.id) {
			setItems((items) => {
				const oldIndex = items.indexOf(active.id);
				const newIndex = items.indexOf(over.id);

				return arrayMove(items, oldIndex, newIndex);
			});
		}
	}

	const renderItems = items.map((itemIndex, key) => {
		const component = components.find(component => component.props.index === itemIndex);
		return <React.Fragment key={key}>{component}</React.Fragment>
		}
	)

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
				{renderItems}
			</SortableContext>
		</DndContext>
	);
}
