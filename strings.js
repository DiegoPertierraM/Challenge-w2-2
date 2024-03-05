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

export const includes = (str, substr) => {
  if (substr === '') return true;
  const strArr = [];
  let tempSubstr = '';
  for (let i = 0; i <= length(str); i++) {
    if (str[i] === ' ' || i === length(str)) {
      strArr.push(tempSubstr);
      tempSubstr = '';
    }

    if (str[i] !== ' ') tempSubstr += str[i];
  }

  for (const str of strArr) {
    if (str === substr) {
      return true;
    }
  }

  return false;
};

export const indexOf = (str, substr, pos = 0) => {
  if (!includes(str, substr)) return -1;
  for (let i = pos; i < length(str); i++) {
    let match = true;
    for (let j = 0; j < length(substr); j++) {
      if (str[i + j] !== substr[j]) {
        match = false;
        break;
      }
    }

    if (match) {
      return i;
    }
  }

  return -1;
};

export const startsWith = (str, substr) => {
  for (let i = 0; i < length(substr); i++) {
    if (str[i] !== substr[i]) {
      return false;
    }
  }

  return true;
};

export const endsWith = (str, substr) => {
  for (let i = length(str); i > 0; i--) {
    for (let j = length(substr); j > 0; j--) {
      if (str[i - j] !== substr[j]) {
        return false;
      }
    }
  }

  return true;
};

export const charAt = (str, pos) => {
  if (pos > length(str) || pos < 0) return '';
  return str[pos];
};
