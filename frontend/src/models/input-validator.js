import isName from './name-validator';
import BaseException from '../exceptions/base_exception';
/**
 * A function that validates the user input.
 * It @thrwo BaseException if the input is not valid.
 * 
 * @author Jacob Yousif
 * 
 * @export isValidInput
 * @param {string} name the name of receiver.
 * @param {string} country the name of the country.
 * @param {string} color the color of the box.
 * @param {number} number the weight of the box.
 * @return {boolean} 
 */
export default function isValidInput(name, country, color, number) {
   if (!isName(name)) {
      throw new BaseException('Error: You need to provide a valid name!');
   }
   else if (!isName(country)) {
      throw new BaseException('Error: You need to select a country!');
   }
   else if (number === null || number <= 0) {
      throw new BaseException('Error: You need to provide a positive weight!');
   } else if (color === null || color.length === 0) {
      throw new BaseException('Erorr: You need to select a colour.');
   } else {
      return true;
   }
}