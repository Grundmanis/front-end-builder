import React, {useState, cloneElement, useRef} from 'react';
import {TemplateElement} from "../LayoutParts/TemplateElement";
import {Row} from "../Layout/Parts/Row";
import {Col} from "../Layout/Parts/Col";
import {Text} from "../Layout/Parts/Text";
import {Link} from "../Layout/Parts/Link";
import {List} from "../Layout/Parts/List";
export const ClassDefault = (props: any) => {

	return (
		<TemplateElement component={Row}>
			{/*<TemplateElement component={Col}>*/}
				{/*<TemplateElement component={Link}>Navbar</TemplateElement>*/}
				{/*<TemplateElement component={List} settings={{elements: [1,2,3,4,5]}}>Navbar</TemplateElement>*/}
				<TemplateElement component={Text}>Some text</TemplateElement>
			{/*</TemplateElement>*/}
		</TemplateElement>
	)
}
