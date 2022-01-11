type Mapping = {
	[action: string]: number[];
};

type MappingT = {
	[key: string]: string[];
};

type InputCallbackMap<M extends Mapping> = {
	[Property in keyof Partial<M>]: {
		onPressed?: () => void;
		onHeld?: () => void;
		onReleased?: () => void;
	};
};

type InputState = {
	pressed: boolean;
	released: boolean;
	held: boolean;
};

type InputMapKey<T> = keyof T;

type InputMapState<T> = {
	[Property in InputMapKey<T>]: InputState;
};

type InputAction<M extends Mapping> =
	| { type: 'pressed'; action: keyof M }
	| { type: 'released'; action: keyof M }
	| { type: 'released-timeout'; action: keyof M }
	| { type: 'pressed-timeout'; action: keyof M };
