const Benchmark = require("benchmark");
const numberOfIslandsBFS = require('./number-of-islands.bfs');
const numberOfIslandsDFS = require('./number-of-islands.dfs');
const numberOfIslandsDFSStack = require('./number-of-islands.dfs-stack');

const suite = new Benchmark.Suite();


suite.add('numberOfIslandsBFS', () => {
    const input = [
        ['1', '1', '0', '0', '0'],
        ['1', '1', '0', '0', '0'],
        ['0', '0', '1', '0', '0'],
        ['0', '0', '0', '1', '1'],
    ];
    numberOfIslandsBFS(input);
})
.add('numberOfIslandsDFS', () => {
    const input = [
        ['1', '1', '0', '0', '0'],
        ['1', '1', '0', '0', '0'],
        ['0', '0', '1', '0', '0'],
        ['0', '0', '0', '1', '1'],
    ];
    numberOfIslandsDFS(input);
})
.add('numberOfIslandsDFSStack', () => {
    const input = [
        ['1', '1', '0', '0', '0'],
        ['1', '1', '0', '0', '0'],
        ['0', '0', '1', '0', '0'],
        ['0', '0', '0', '1', '1'],
    ];
    numberOfIslandsDFSStack(input);
})
.on('error', function (error) {
    console.log(error.target.error);
})
.on('complete', function () {
    this.forEach((bench) => {
      const {mean, deviation} = bench.stats
      console.log(bench.toString(), `mean ${mean}, deviation ${deviation}`)
    })
})
.run();