const analyze = (array) => {
  const average = array.reduce((accumulator, current) => accumulator + current) / array.length;
  const min = Math.min(...array);
  const max = Math.max(...array);
  const length = array.length;
  return {
    average,
    min,
    max,
    length,
  };
};

