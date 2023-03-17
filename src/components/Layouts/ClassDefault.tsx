import React, {useState, cloneElement, useRef} from 'react';
import {TemplateElement} from "../LayoutParts/TemplateElement";
import {Row} from "../Layout/Parts/Row";
import {Col} from "../Layout/Parts/Col";
import {Text} from "../Layout/Parts/Text";
import {Link} from "../Layout/Parts/Link";
import {List} from "../Layout/Parts/List";
import {ContainerFluid} from "../Layout/Parts/ContainerFluid";

export const ClassDefault = (props: any) => {

	return (
		<TemplateElement component={ContainerFluid}>
			<TemplateElement component={Row}>
				<TemplateElement component={Col}>
					<TemplateElement component={Link}>Navbar</TemplateElement>
					<TemplateElement component={List} settings={{elements: [1, 2, 3, 4, 5]}}/>
					<TemplateElement component={Text}>Some text</TemplateElement>
				</TemplateElement>
				<TemplateElement component={Col}>
					<TemplateElement component={Text}>Other text</TemplateElement>
				</TemplateElement>
			</TemplateElement>
		</TemplateElement>
	)
}
