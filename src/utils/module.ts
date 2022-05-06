export const inOrOut = (a: string[], it: string) => (a.some((i) => i === it) ? a.filter((i) => i !== it) : [it, ...a]);
