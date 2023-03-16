import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import {Settings} from "./Settings/Settings";

/**
 * Update , so only one component is used
 * And is possible to create a palette (many colors, array)
 * @constructor
 */
export const ToolsPanel = () =>{

    return (
        <Tabs>
            <TabList>
                <Tab>Settings</Tab>
                <Tab>Layouts</Tab>
                <Tab>Pages</Tab>
            </TabList>

            <TabPanel>
                <Settings />
            </TabPanel>
            <TabPanel>
                <h2>Any content 2</h2>
            </TabPanel>
            <TabPanel>
                <h2>Any content 3</h2>
            </TabPanel>
        </Tabs>
        // <div className="border">
        //     <h2>Tools</h2>
        //     <h3>Colors</h3>
        //     <Colors />
        //     <h3>Images</h3>
        //     <ConfigImages />
        // </div>
    );
}
