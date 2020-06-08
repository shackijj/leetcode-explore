const Benchmark = require("benchmark");
const wallsAndGates = require('./walls-and-gates');

const suite = new Benchmark.Suite();

const INF = 2147483647;

suite.add('case 1', () => {
    const input = [
        [INF, -1, 0, INF],
        [INF, INF, INF, -1],
        [INF, -1, INF, -1],
        [0, -1, INF, INF]
    ];
    wallsAndGates(input);
})
.add('case 2', () => {
    const input = [
        [INF, INF, INF, -1],
        [INF, -1, INF, -1],
        [INF, INF, INF, -1],
        [-1, -1, -1, -1]
    ];

    wallsAndGates(input);
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