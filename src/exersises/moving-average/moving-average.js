class MovingAverage {
    constructor(size) {
        this.size = size;
        this.queue = [];
    }
    next(num) {
        if (this.queue.length === this.size) {
            this.queue.shift();
        }
        this.queue.push(num);
        const sum = this.queue.reduce((acc, cur) => acc + cur, 0);
        return sum / this.queue.length;
    }
}

module.exports = MovingAverage;
