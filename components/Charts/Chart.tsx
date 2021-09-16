import { Line } from 'react-chartjs-2';
import { data } from './data';

export const Chart = ({
	type,
	title,
}: {
	type: keyof typeof data;
	title: string;
}) => (
	<>
		<h3>{title}</h3>
		<Line
			className="Chart"
			data={data[type]}
			options={{
				scales: {
					yAxes: [
						{
							ticks: {
								beginAtZero: true,
							},
						},
					],
				},
			}}
			width={100}
			height={25}
		/>
	</>
);
