const capitalize = string => {
  const str = string.split('');
  str[0] = str[0].toUpperCase();
  return str.join('');
};

export default capitalize;
