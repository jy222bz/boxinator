/**
 * A class for holding data.
 *
 * @author Jacob Yousif
 * @class Data
 */
class Data {
	constructor(data, nextOrder) {
		this.data = data
		this.nextOrder = nextOrder
	}

	getData() {
		return this.data
	}

	getNextOrder() {
		return this.nextOrder
	}
}

export default Data
