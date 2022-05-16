// TODO: MOVE NAME
export const getToken = (key: string) => JSON.parse(window.localStorage.getItem(key) || '');
export const setToken = (key: string, token: string) => window.localStorage.setItem(key, JSON.stringify(token));
export const clearToken = (key: string) => window.localStorage.removeItem(key);
