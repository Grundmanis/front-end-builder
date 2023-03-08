import { SketchPicker } from 'react-color';

export const ColorPicker = (props: {color: string, onChange: (res: string) => void}) => {

    const handleColorChange = (color: any) => {
        props.onChange(color.hex);
    };

    return (
        <SketchPicker
            color={props.color}
            onChange={handleColorChange}
        />
    );
}
