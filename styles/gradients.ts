// const blueTealGradient = { from: 'blue', to: 'teal', deg: 250 };

class Gradient {
	public from: string;
	public to: string;
	public deg: number;
	constructor({ from, to, deg }: { from: string; to: string; deg: number }) {
		this.from = from;
		this.to = to;
		this.deg = deg;
	}
	public invertDeg = () => this.deg + 180;

	public withRtl(dir: 'ltr' | 'rtl') {
		return {
			from: this.from,
			to: this.to,
			deg: dir === 'ltr' ? this.deg : this.invertDeg(),
		};
	}
}

const blueTealGradient = new Gradient({
	from: 'blue',
	to: 'teal',
	deg: 250,
});

export { blueTealGradient };
