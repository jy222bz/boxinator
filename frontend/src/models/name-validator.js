/**
 * @author Jacob Yousif
 * Provides validator methods.
 */

/**
 * It checks whether the provided input has the characteristics of a name.
 *
 * @param {string} someName the input.
 * @returns {boolean} whether it is a name.
 */
export default function isName(someName) {
	if (someName === '' || someName === null) {
		return false
	} else if (someName.length < 2 || /[^a-zA-Z\s]/.test(someName)) {
		return false
	} else {
		return true
	}
}
