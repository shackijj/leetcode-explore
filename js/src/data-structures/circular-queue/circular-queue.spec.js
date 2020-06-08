const CircularQueue = require('./circular-queue');

describe("CircularQueue", () => {
    describe("enQueue", () => {
        it('will fill queue', () => {
            const queue = new CircularQueue(5);
            expect(queue.isFull()).toBe(false);
            expect(queue.enQueue(1)).toBe(true);
            expect(queue.isFull()).toBe(false);
            expect(queue.Front()).toBe(1);
            expect(queue.Rear()).toBe(1);
            expect(queue.enQueue(2)).toBe(true);
            expect(queue.isFull()).toBe(false);
            expect(queue.Front()).toBe(1);
            expect(queue.Rear()).toBe(2);
            expect(queue.enQueue(3)).toBe(true);
            expect(queue.isFull()).toBe(false);
            expect(queue.Front()).toBe(1);
            expect(queue.Rear()).toBe(3);
            expect(queue.enQueue(4)).toBe(true);
            expect(queue.isFull()).toBe(false);
            expect(queue.Front()).toBe(1);
            expect(queue.Rear()).toBe(4);
            expect(queue.enQueue(5)).toBe(true);
            expect(queue.isFull()).toBe(true);
            expect(queue.Front()).toBe(1);
            expect(queue.Rear()).toBe(5);
            expect(queue.enQueue(6)).toBe(false);
        });
    });
    describe('deQueue', () => {
        it('will return remove element', () => {
            const queue = new CircularQueue(5);
            queue.enQueue(1);
            queue.enQueue(2);
            expect(queue.deQueue()).toBe(true);
            expect(queue.Front()).toBe(2);
            expect(queue.Rear()).toBe(2);
            expect(queue.deQueue()).toBe(true);
            expect(queue.isEmpty()).toBe(true);
        });
    });
    describe('isFull', () => {
        it('will return boolean value', () => {
            const queue = new CircularQueue(1);
            expect(queue.isFull()).toBe(false);
            queue.enQueue(1);
            expect(queue.isFull()).toBe(true);
        });
    });
    describe('isEmpty', () => {
        it('will return boolean value', () => {
            const queue = new CircularQueue(1);
            expect(queue.isEmpty()).toBe(true);
            queue.enQueue(1);
            expect(queue.isEmpty()).toBe(false);
        });
    });

    describe('deQueue/enQueue', () => {
        it('will return boolean value', () => {
            const queue = new CircularQueue(3);
            expect(queue.isEmpty()).toBe(true);
            queue.enQueue(1);
            queue.deQueue();
            queue.enQueue(2);
            queue.enQueue(3);
            queue.deQueue();
            queue.enQueue(4);
            expect(queue.Front()).toBe(3);
            expect(queue.Rear()).toBe(4);
            expect(queue.isEmpty()).toBe(false);
            queue.deQueue();
            queue.deQueue();
            expect(queue.isEmpty()).toBe(true);
        });
    });

    describe('deQueue/enQueue', () => {
        it('will return boolean value', () => {
            const queue = new CircularQueue(6);
            expect(queue.isEmpty()).toBe(true);
            queue.enQueue(5);
            expect(queue.Rear()).toBe(5);
            expect(queue.Rear()).toBe(5);
            expect(queue.deQueue()).toBe(true);
            queue.deQueue();
            queue.deQueue();
            expect(queue.isEmpty()).toBe(true);
            expect(queue.Rear()).toBe(-1);
            expect(queue.Front()).toBe(-1);
        });
    });
});