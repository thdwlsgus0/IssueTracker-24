const sliceLast = (array) => array.slice(0, array.length - 1);

export const filterTextByYourIssues = (searchText) => {
  const splitedText = searchText.split(' ');
  let index = -1;
  splitedText.forEach((v, i) => {
    if (v.indexOf('author:') !== -1) index = i;
  });

  if (index !== -1) {
    splitedText[index] = 'author:@me';
    return [...splitedText].join(' ');
  } else {
    return [...sliceLast(splitedText), 'author:@me', ''].join(' ');
  }
};

export const filterTextByOpen = (searchText) => {
  const splitedText = searchText.split(' ');
  let index = -1;
  splitedText.forEach((v, i) => {
    if (v.indexOf('is:open') !== -1) {
      index = i;
    } else if (v.indexOf('is:closed') !== -1) {
      index = i;
    }
  });

  if (index !== -1) {
    splitedText[index] = 'is:open';
    return [...splitedText].join(' ');
  } else {
    return [...sliceLast(splitedText), 'is:open', ''].join(' ');
  }
};

export const filterTextByClosed = (searchText) => {
  const splitedText = searchText.split(' ');
  let index = -1;
  splitedText.forEach((v, i) => {
    if (v.indexOf('is:open') !== -1) {
      index = i;
    } else if (v.indexOf('is:closed') !== -1) {
      index = i;
    }
  });

  if (index !== -1) {
    splitedText[index] = 'is:closed';
    return [...splitedText].join(' ');
  } else {
    return [...sliceLast(splitedText), 'is:closed', ''].join(' ');
  }
};
