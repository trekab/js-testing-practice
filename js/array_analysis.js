const analyze = (array) => ({
  average: array.reduce((accumulator, current) => accumulator + current) / array.length,
  min: Math.min(...array),
  max: Math.max(...array),
  length: array.length,
});
// module.exports = analyze;
export default analyze;
