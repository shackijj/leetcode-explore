const Benchmark = require("benchmark");
const {findTargetSumWays} = require('./target-sum');

const suite = new Benchmark.Suite();

const input = Array(20).fill(1);
suite.add('target-sum case 1', () => {
    findTargetSumWays(input, 20);
})
suite.add('target-sum case 2', () => {
    findTargetSumWays([2, 3, 4], 5);
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