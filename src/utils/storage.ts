// TODO: MOVE NAME
const TOKEN = 'token';
export const getToken = () => JSON.parse(window.localStorage.getItem(TOKEN) || '');
export const setToken = (token: string) => window.localStorage.setItem(TOKEN, JSON.stringify(token));
export const clearToken = () => window.localStorage.removeItem(TOKEN);
