/**
 * It computes the total shipping weight and the total cost.
 *
 * @author Jacob Yousif
 * @param {object[]} data the data that contains the weight and the cost.
 * @returns {object} the result as json object.
 */
function computeTotal(data) {
	let totalWeight = 0
	let totalCost = 0
	data.forEach((element) => {
		totalWeight += element.weight
		totalCost += element.cost
	})
	totalCost = totalCost.toFixed(2)
	totalWeight = totalWeight.toFixed(2)

	return { totalWeight, totalCost }
}

export default computeTotal
