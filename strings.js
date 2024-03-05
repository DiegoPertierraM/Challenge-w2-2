export const length = (arg) => {
  let length = 0;
  for (const char of arg) {
    length++;
  }

  return length;
};

export const substring = (str, start, end) => {
  let subStr = '';
  for (let i = 0; i < end; i++) {
    if (i >= start) subStr += str[i];
  }

  return subStr;
};
