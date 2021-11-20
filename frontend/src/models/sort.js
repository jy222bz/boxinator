import Data from './data'

/**
 * It sorts the array according to one param.
 * @author Jacob Yousif
 *
 * @export
 * @param {object[]} data the array to be sorted.
 * @param {string} property which param should be sorted.
 * @param {string} order either Acsending Desending order.
 * @return {object[]}
 */
export default function sort(data, property, order) {
	var sortedData
	if (order === 'ACS') {
		sortedData = [...data].sort((a, b) => (a[property] > b[property] ? 1 : -1))
	} else {
		sortedData = [...data].sort((a, b) => (a[property] < b[property] ? 1 : -1))
	}
	return new Data(sortedData, order === 'ACS' ? 'DEC' : 'ACS')
}
