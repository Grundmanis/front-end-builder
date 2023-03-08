import React, { useState } from 'react';
import {ColorPicker} from "../Tools/ColorPicker";
import {Collapse} from 'react-collapse';
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {getColor, setColor} from "../../features/config/configSlice";

export const ConfigColor = (props: {type: "primaryColor"|"secondaryColor"|"tertiaryColor"|"tintColor"|"shadeColor"|"toneColor"}) =>{

    const color = useAppSelector(getColor);
    const [colorOpen, setColorOpen] = useState(false);
    const dispatch = useAppDispatch();

    const onChange = (res: string) => {
        dispatch(setColor({
            type: props.type,
            color: res,
        }))
    }

    return (
        <div>
            <button onClick={() => setColorOpen(!colorOpen)}>
                {props.type}
            </button>
            <Collapse isOpened={colorOpen}>
                <ColorPicker onChange={onChange} color={color[props.type]} />
                <button onClick={() => setColorOpen(false)}>
                    Done
                </button>
            </Collapse>
        </div>
    );
}
