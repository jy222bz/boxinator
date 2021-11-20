/**
 * A Base Exception class.
 *
 * @author Jacob Yousif
 * @class InvalidInput
 * @augments {Error}
 */
class InvalidInput extends Error {
	constructor(message) {
		super(message)
		this.name = 'InputError'
	}

	getMessage() {
		return this.message
	}
}

export default InvalidInput
