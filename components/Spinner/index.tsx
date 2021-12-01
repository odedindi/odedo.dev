import { Spin } from 'antd';
import * as S from './style';

const Spinner = () => (
	<S.Container>
		<Spin indicator={<S.Spinner spin />} />
	</S.Container>
);

export default Spinner;
