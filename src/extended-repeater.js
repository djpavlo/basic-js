import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
    let res = "";
    str = String(str)
    if (options.addition || typeof options.addition === 'boolean' || options.addition === null) options.addition = String(options.addition)
    if (!options.separator) options.separator = "+";
    if (!options.additionSeparator) options.additionSeparator = "|";
    if (!options.repeatTimes) options.repeatTimes = 1;
    if (!options.additionRepeatTimes) options.additionRepeatTimes = 1;

    for (let i = 0; i < options.repeatTimes; i++) {
        let add = "";
        if (options.addition) {
            for (let i = 0; i < options.additionRepeatTimes; i++) {
                add += options.addition + options.additionSeparator;
            }
            add = add.substring(0, add.length - options.additionSeparator.length);
        }
        res += str + add + options.separator;
    }
    return res.substring(0, res.length - options.separator.length);
}