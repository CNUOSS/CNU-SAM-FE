// TODO: MOVE NAME
export const getToken = (key: string) => {
  const item = window.localStorage.getItem(key);
  return item && JSON.parse(item);
};
export const setToken = (key: string, token: string) => window.localStorage.setItem(key, JSON.stringify(token));
export const clearToken = (key: string) => window.localStorage.removeItem(key);
