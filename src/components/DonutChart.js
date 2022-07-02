import React from 'react';
import { VegaLite } from 'react-vega';

const DonutChart = ({ data }) => {
	const spec = {
		description: 'A simple Donut Chart',
		width: 400,
		height: 400,
		mark: { type: 'arc', innerRadius: 90 },
		title: 'No of Vehicles WorldWide(Millions)',
		encoding: {
			color: { timeUnit: 'year',
				field: 'year',
				type: 'nominal' },
			theta: { field: 'number',
				type: 'quantitative',
				stack: true },
		},
		data: { name: 'values' },
	};

	return <VegaLite { ...{ spec, data } }/>;
};

export default DonutChart;
