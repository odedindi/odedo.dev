// =============== React & Next ===============
import * as React from 'react';
// ================== styles ==================
import * as S from './styles';
// ================ components ================
import { Board, Controllers } from './components';
import { useGameLogic } from './hooks';
// ============================================

const App = () => {
	const { state, controllers } = useGameLogic();

	return (
		<S.GameWrapper>
			<Controllers controllers={controllers} state={state} />
			<Board board={state.board} clickHandler={controllers.handleClick} />
		</S.GameWrapper>
	);
};

export default App;
