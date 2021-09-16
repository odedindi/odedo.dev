import * as React from 'react';
import { CalcsDiv } from './style';

const Calcs = () => {
	const [value, setValue] = React.useState(1);
	const changeHandler: React.ChangeEventHandler<HTMLInputElement> = ({
		target: { value },
	}) => setValue(Number(value));

	const factorial = (x: number): number => {
		if (!x) {
			return 1;
		}
		if (x === 0) {
			return 1;
		}
		return x * factorial(x - 1);
	};

	return (
		<CalcsDiv>
			<h2>O(n) Calculations</h2>
			<label>n value:</label>
			<input
				type="number"
				value={value}
				onInput={changeHandler}
				style={{ width: '5rem', borderRadius: '0.2rem' }}
			/>
			<p>
				<strong>Constant:</strong> <span>1</span>
			</p>
			<p>
				<strong>Logarithmic:</strong> <span>{Math.log2(value)}</span>
			</p>
			<p>
				<strong>Linear:</strong> <span>{value}</span>
			</p>
			<p>
				<strong>Quadratic:</strong> <span>{value * value}</span>
			</p>
			<p>
				<strong>Exponential:</strong> <span>{Math.pow(2, value)}</span>
			</p>
			<p>
				<strong>Factorial:</strong> <span>{factorial(value)}</span>
			</p>
		</CalcsDiv>
	);
};

export default Calcs;
