/*eslint-disable*/
export default class HolbertonCourse {
	constructor (name, length, students) {
		if (typeof name !== 'string') throw new TypeError('Name must be a string');
		if (!Number.isInteger(length)) throw new TypeError('Length must be a number');
		if (!Array.isArray(students)) throw new TypeError('Students must be an array');

		this._name = name;
		this._length = length;
		this._students = students;
	}
	set name(val) {
		if (typeof val !== 'string') throw new TypeError('Name must be a string');
		this._name = val;
	}
	get name() {
		return this._name;
	}
	set length(val) {
		if (!Number.isInteger(val)) throw new TypeError('Length must be a number');
		this._length = length;
	}
	get length() {
		return this._length;
	}
	set students(val) {
		if (!Array.isArray(val)) throw new TypeError('Students must be an array');
		this._students = students;
	}
	get students() {
		return this._students;
	}
}
