import * as React from 'react';
import * as S from './style';
import { timeComplexities, TimeComplexity } from './data';
import { Chart } from './Chart';
import Select from 'react-select';
import Calcs from './calc';

const BigONotationAnalyzer = () => {
	const [types, setTypes] = React.useState<TimeComplexity[] | null>(null);

	const [showToggler, setShowToggler] = React.useState(false);

	return (
		<S.AnalyzerWrapper>
			<S.Header>
				<h2>Big O Notation time complexities analyzer.</h2>
				<button onClick={() => setShowToggler(false)}>O(n) calculator</button>
				<button onClick={() => setShowToggler(true)}>Common O(n) types</button>
			</S.Header>
			{showToggler ? (
				<S.ChartsWrapper>
					<Select
						defaultValue={null}
						onChange={(event) => setTypes(event as TimeComplexity[])}
						options={timeComplexities}
						isMulti
						name="timeComplexitiesTypes"
						classNamePrefix="select"
					/>
					{types &&
						types.map((type) => (
							<Chart key={type.label} type={type.label} title={type.value} />
						))}
				</S.ChartsWrapper>
			) : (
				<Calcs />
			)}
		</S.AnalyzerWrapper>
	);
};

export default BigONotationAnalyzer;
