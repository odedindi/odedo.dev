export const chooseRandom = <T, M>(firstOpt: T, secondOpt: M) =>
	Math.random() > 0.5 ? [firstOpt, secondOpt] : [secondOpt, firstOpt];
