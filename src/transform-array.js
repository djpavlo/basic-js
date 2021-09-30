import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
export default function transform(arr) {
    if (!Array.isArray(arr)) throw new Error("'arr' parameter must be an instance of the Array!");
    let res = [];
    for (let index = 0; index < arr.length; index++) {
        let entry = arr[index];
        if (entry === '--discard-next' && arr[index + 2] === '--double-prev' ||
            entry === '--discard-next' && arr[index + 2] === '--discard-prev') {
            index += 2;
            continue;
        } else if (entry === "--discard-prev" && arr[index - 2] !== "--discard-next") {
            res.pop();
        } else if (entry === "--double-prev" && arr[index - 2] !== "--discard-next") {
            if (res[res.length - 1]) res.push(res[res.length - 1]);
        } else if (typeof(arr[index + 1]) == "string" && arr[index + 1] === "--double-next") {
            res.push(entry)
            if (arr[index + 2]) res.push(arr[index + 2])
        } else if (typeof(arr[index + 1]) == "string" && arr[index + 1] === "--discard-next") {
            index += 2;
            res.push(entry);
        } else if (entry !== "--double-next" && entry !== "--discard-next" && entry !== "--double-prev" && entry !== "--discard-prev") {
            res.push(entry)
        }

    }
    return res;
    // console.log(res);
}
// console.log(transform(['--discrard-prev', '1']))
// console.log(transform([1, 2, 3, '--double-next', 4, 5]))
// console.log(transform([1, 2, 3, '--discard-prev', 4, 5]))
// console.log(transform([1, 2, 3, '--discard-next', 1337, '--double-prev', 4, 5]))
// console.log(transform([1, 2, 3, '--double-next', 1337, '--double-prev', 4, 5]))
// console.log(transform([1, 2, 3, '--discard-next', 1337, '--discard-prev', 4, 5]))
// console.log(transform([1, 2, 3, '--double-next', 1337, '--discard-prev', 4, 5]))
// const cases = [
//     ['--discard-prev', 1, 2, 3],
//     ['--double-prev', 1, 2, 3],
//     [1, 2, 3, '--double-next'],
//     [1, 2, 3, '--discard-next']
// ];
// cases.forEach(currCase => {
//     console.log(transform(currCase))
// });