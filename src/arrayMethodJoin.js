'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let string = '';
    const newSeparator = separator;
    let lastElement = this[this.length - 1];

    if (this.length === 0) {
      return string;
    }

    for (let i = 0; i < this.length - 1; i++) {
      if (this[i] === null || this[i] === undefined) {
        string += newSeparator;
        continue;
      }
      string += String(this[i]);
      string += newSeparator;
    }

    if (lastElement === undefined || lastElement === null) {
      lastElement = '';
    }

    return string + lastElement;
  };
}

module.exports = applyCustomJoin;
