export const stringFormatter = (s) => {
  if (s.length > 15) {
    return s.substring(0, 12) + '...';
  } else {
    return s;
  }
};

export const convertToRupiah = (number) => {
  var rupiah = '';
  var numberrev = number.toString().split('').reverse().join('');
  for (var i = 0; i < numberrev.length; i++)
    if (i % 3 === 0) rupiah += numberrev.substr(i, 3) + '.';
  return (
    'Rp. ' +
    rupiah
      .split('', rupiah.length - 1)
      .reverse()
      .join('')
  );
};
