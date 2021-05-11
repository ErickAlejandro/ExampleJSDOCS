//@ts-check

/**
 * My math library - learn more {@tutorial secondtutorial}
 * @module Math
 */


/**
 * 
 * @param {Number} x FirstNumber 
 * @param {Number} y SecondNumber
 * @returns {Number} sum of X and Y
 */

const add = (x, y) => x+y;

/**
 * 
 * @param {number} x FirtNumber
 * @param {Number} y  SecondNumber
 * @returns {Number} sum of X and Y
 */

const substract = (x, y) => x-y;


module.exports = {
    add,
    substract
}

