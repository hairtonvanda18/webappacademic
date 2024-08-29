type Obj = {
  [key: string]: any;
};

export const getQueryParams = (json: Obj) => {
  return '?' + Object.keys(json)
    .filter(key => json[key] !== undefined)
    .map(key => key + '=' + json[key])
    .join('&');
};
