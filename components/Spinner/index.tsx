import { Spin } from 'antd';
import * as S from './style';
type SpinnerProps = {
	notCentered?: boolean;
};
const Spinner = ({ notCentered }: SpinnerProps) =>
	notCentered ? (
		<Spin indicator={<S.Spinner spin />} />
	) : (
		<S.Container>
			<Spin indicator={<S.Spinner spin />} />
		</S.Container>
	);

export default Spinner;
