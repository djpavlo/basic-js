import { NotImplementedError } from '../extensions/index.js';

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
export default function getSeason(date) {

    if (typeof(date) == "undefined") return "Unable to determine the time of year!";
    if (Object.prototype.toString.call(date) === '[object Date]' && date.toString === new Date().toString) {
        switch (date.getMonth()) {
            case 2:
            case 3:
            case 4:
                return "spring";
            case 5:
            case 6:
            case 7:
                return "summer";
            case 8:
            case 9:
            case 10:
                return "autumn";
            default:
                return "winter";
        }

    } else {
        throw new Error('Invalid date!');
    }

}