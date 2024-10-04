/*eslint-disable*/
export default class Currency {
	constructor(code, name) {
		this._code = code;
		this._name = name;
	}
	set code(val) {
		this._code = val;
	}
	get code() {
		return this._code;
	}
	set name(val) {
		this._name = val;
	}
	get name() {
		return this._name;
	}

	displayFullCurrency() {
		return `${this.name} (${this.code})`;
	}
}
