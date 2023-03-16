export interface IElementProps {
	index?: number,
	onDuplicate: (component: JSX.Element) => void,
	onDelete: (index: number) => void,
	component?: JSX.Element,
	text?: string
}
