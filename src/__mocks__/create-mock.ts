export const generateString = () => Math.random().toString(36).substring(2, 11);

export const generateStringArray = (num: number) => new Array(num).fill('').map(() => generateString());
