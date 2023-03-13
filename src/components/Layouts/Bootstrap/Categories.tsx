import React from 'react';

export function Categories(props: any) {

	return (
		<div className="card mb-4">
			<div className="card-header">Categories</div>
			<div className="card-body">
				<div className="row">
					<div className="col-sm-6">
						<ul className="list-unstyled mb-0">
							<li><a href="src/components/Layouts/Bootstrap/Categories#!">Web Design</a></li>
							<li><a href="src/components/Layouts/Bootstrap/Categories#!">HTML</a></li>
							<li><a href="src/components/Layouts/Bootstrap/Categories#!">Freebies</a></li>
						</ul>
					</div>
					<div className="col-sm-6">
						<ul className="list-unstyled mb-0">
							<li><a href="src/components/Layouts/Bootstrap/Categories#!">JavaScript</a></li>
							<li><a href="src/components/Layouts/Bootstrap/Categories#!">CSS</a></li>
							<li><a href="src/components/Layouts/Bootstrap/Categories#!">Tutorials</a></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}
