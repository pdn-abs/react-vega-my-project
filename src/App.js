import React from 'react';
import BarChart from './components/BarChart';
import PieChart from './components/PieChart';
import DonutChart from './components/DonutChart';
import LineChart from './components/LineChart';
import './App.scss';
import GroupChart from './components/GroupChart';
import ChartManager from './service/chartManager';
import HistogramScatterPlot from './components/HistogramScatterPlot';
import HeatMapWeather from './components/HeatMapWeather';
import HeatMap from './components/HeatMap';

const chartData = {
	values: [
		{ year: '2016', number: 1.2 },
		{ year: '2017', number: 1.9 },
		{ year: '2018', number: 3.1 },
		{ year: '2019', number: 4.8 },
		{ year: '2020', number: 6.9 },
		{ year: '2021', number: 11.3 },
	],
};
const App = (context) => {
	const { getProductsGroupChart } = ChartManager;

	return (
		<div className="App" role="App">
			<BarChart { ...context } data={ chartData }/>
			<GroupChart
				{ ...{ ...context,
					data: getProductsGroupChart(context) } }
			/>
			<PieChart { ...context } data={ chartData }/>
			<DonutChart { ...context } data={ chartData }/>
			<LineChart { ...context }/>
			<HeatMapWeather/>
			<HistogramScatterPlot/>
			<HeatMap { ...context }/>
		</div>);
};

export default App;
