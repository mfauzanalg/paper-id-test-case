export const stringFormatter = (s) => {
  if (s.length > 15) {
    return s.substring(0, 12) + '...';
  } else {
    return s;
  }
};
