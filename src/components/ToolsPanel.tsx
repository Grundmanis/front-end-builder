import React, { useState } from 'react';
import {ConfigImages} from "./Sections/ConfigImages";
import {Colors} from "./Sections/Colors";

/**
 * Update , so only one component is used
 * And is possible to create a palette (many colors, array)
 * @constructor
 */
export const ToolsPanel = () =>{

    return (
        <div className="border">
            <h2>Tools</h2>
            <h3>Colors</h3>
            <Colors />
            <h3>Images</h3>
            <ConfigImages />
        </div>
    );
}
