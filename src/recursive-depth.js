import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
let depth = 0
export default class DepthCalculator {

    calculateDepth(arr) {
        return 1 + (arr instanceof Array ? arr.reduce((max, item) => Math.max(max, this.calculateDepth(item)), 0) : -1);
    }
}