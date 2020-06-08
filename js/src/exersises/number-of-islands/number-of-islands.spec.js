const numberOfIslandsBFS = require('./number-of-islands.bfs');
const numberOfIslandsDFS = require('./number-of-islands.dfs');
const numberOfIslandsDFSStack = require('./number-of-islands.dfs-stack');

testImplementation(numberOfIslandsDFS, 'dfs');
testImplementation(numberOfIslandsBFS, 'bfs');
testImplementation(numberOfIslandsDFSStack, 'dfs-stack');

function testImplementation(underTest, name) {
    describe('number of islands: ' + name, () => {
        it('case 1', () => {
            const input = [
                ['1', '1', '1', '1', '0'],
                ['1', '1', '0', '1', '0'],
                ['1', '1', '0', '0', '0'],
                ['0' ,'0', '0', '0', '0'],
            ];
            expect(underTest(input)).toBe(1);
        });
    
        it('case 2', () => {
            const input = [
                ['1', '1', '0', '0', '0'],
                ['1', '1', '0', '0', '0'],
                ['0', '0', '1', '0', '0'],
                ['0', '0', '0', '1', '1'],
            ];
            expect(underTest(input)).toBe(3);
        });
    
        it('case 3', () => {
            const input = [
                ['0'],
            ];
            expect(underTest(input)).toBe(0);
        });
    
        it('case 4', () => {
            const input = [
                ['1'],
            ];
            expect(underTest(input)).toBe(1);
        });
    
        it('case 5', () => {
            const input = [
                ['0', '0', '1'],
                ['0', '0', '0'],
                ['1', '0', '0'],
            ];
            expect(underTest(input)).toBe(2);
        });
    
        it('case 6', () => {
            const input = [
                ['0', '0', '1'],
                ['0', '0', '1'],
                ['1', '1', '1'],
            ];
            expect(underTest(input)).toBe(1);
        });
    });    
}