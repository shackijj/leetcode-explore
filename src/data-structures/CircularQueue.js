/**
 * Initialize your data structure here. Set the size of the queue to be k.
 * @param {number} k
 */
var MyCircularQueue = function(k) {
    this.size = k;
    this.head = -1;
    this.tail = -1;
    this.que = new Array(k);
};

/**
 * Insert an element into the circular queue. Return true if the operation is successful. 
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function(value) {
    if (this.isFull()) {
        return false;
    } else if (this.isEmpty()) {
        this.tail = 0;
        this.head = 0;
        this.que[0] = value;
        return true;
    } else {
        this.tail = this._next(this.tail);
        this.que[this.tail] = value;
        return true;
    }
};

/**
 * Delete an element from the circular queue. Return true if the operation is successful.
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function() {
    if (this.isEmpty()) {
        return false;
    } else {
        if (this.head === this.tail) {
            this.head = -1;
            this.tail = -1;
        } else {
            this.head = this._next(this.head);   
        }
        return true;
    }
};

/**
 * Get the front item from the queue.
 * @return {number}
 */
MyCircularQueue.prototype.Front = function() {
    if (this.isEmpty()) {
        return -1;
    }
    return this.que[this.head]
};

/**
 * Get the last item from the queue.
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function() {
    if (this.isEmpty()) {
        return -1;
    }
    return this.que[this.tail];
};

MyCircularQueue.prototype._next = function(index) {
    var next = index + 1;
    if (next === this.size) {
        return 0;
    } else {
        return next;
    }
};

/**
 * Checks whether the circular queue is empty or not.
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function() {
    return this.head === -1 && this.tail === -1;
};

/**
 * Checks whether the circular queue is full or not.
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function() {
    if (this.isEmpty()) {
        return false;
    }
    return this._next(this.tail) === this.head;
};

module.exports = MyCircularQueue;