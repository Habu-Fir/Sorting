"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumberCollection = void 0;
const sorter_1 = require("./sorter");
class NumberCollection extends sorter_1.Sorter {
    constructor(data) {
        super();
        this.data = data;
    }
    length() {
        return this.data.length;
    }
    compare(leftIndex, rightIndex) {
        return (this.data[leftIndex] > this.data[rightIndex]);
    }
    swap(leftIndex, rightIndex) {
        let temp = this.data[leftIndex];
        this.data[leftIndex] = this.data[rightIndex];
        this.data[rightIndex] = temp;
    }
}
exports.NumberCollection = NumberCollection;
