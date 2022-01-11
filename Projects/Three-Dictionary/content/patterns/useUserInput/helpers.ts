export const tryGet = <U, V extends { [k: string]: U }>(
	data: V,
	key: keyof V,
	def: U,
) => {
	if (data[key]) {
		return data[key];
	} else {
		(data as any)[key] = def;
		return data[key];
	}
};
export const transposeMapping = (mapping: Mapping): MappingT => {
	const t: any = {};
	for (let action in mapping) {
		const keys = mapping[action];
		keys.forEach((k) => tryGet(t, k, []).push(action));
	}
	return t;
};

export const createInputMap = <M extends Mapping>(mapping: M) => {
	const keys = Object.keys(mapping) as InputMapKey<M>[];
	const map = {} as InputMapState<M>;

	for (const k of keys) {
		map[k] = { pressed: false, released: false, held: false };
	}

	return map as InputMapState<M>;
};

export const inputReducer = <M extends Mapping>(
	state: InputMapState<M>,
	action: InputAction<M>,
) => {
	switch (action.type) {
		case 'pressed':
			return {
				...state,
				[action.action]: { pressed: true, released: false, held: true },
			};
		case 'released':
			return {
				...state,
				[action.action]: { released: true, pressed: false, held: false },
			};
		case 'released-timeout':
			return {
				...state,
				[action.action]: { ...state[action.action], released: false },
			};
		case 'pressed-timeout':
			return {
				...state,
				[action.action]: { ...state[action.action], pressed: false },
			};
	}
};
