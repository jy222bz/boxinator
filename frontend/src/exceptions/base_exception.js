/**
 * A Base Exception class.
 * @author Jacob Yousif
 *
 * @export BaseEception
 * @class InvalidInput
 * @extends {Error}
 */
export default class InvalidInput extends Error {
  constructor(message) {
    super(message);
    this.name = 'InputError';
  }

  getMessage() {
    return this.message;
  }
}
