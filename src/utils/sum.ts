
export const sum = (a: number, b: number, boo: (a: string) => number ) => { 
    return a + b + boo('help me');
};