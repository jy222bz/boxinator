/**
 * A class for holding data.
 * @author Jacob Yousif
 *
 * @export Data
 * @class Data
 */
export default class Data {
  constructor(data, nextOrder) {
    this.data = data;
    this.nextOrder = nextOrder;
  }

  getData() {
    return this.data
  }

  getNextOrder() {
    return this.nextOrder
  }
}