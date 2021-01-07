export const truncateStr = (str, n) => {
  if (str.length <= n) {
    return str;
  } else {
    return str.slice(0, n) + "...";
  }
};
