import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {ToolsPanel} from "./components/ToolsPanel";
import {WorkPanel} from "./components/WorkPanel";

function App() {
	return (
		<div className="container-fluid">
			<div className="row">
				<div className="col-sm-10">
					<WorkPanel />
				</div>
				<div className="col-sm-2">
					<ToolsPanel />
				</div>
			</div>
		</div>
	);
}

export default App;
