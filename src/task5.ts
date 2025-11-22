function applyPipeline<T>(value: T, ...fns: Array<(arg: any) => any>): unknown {
    return fns.reduce((currentValue, currentFunction) => {
        return currentFunction(currentValue);
    }, value);
};

const square = (n: number): number => {
    console.log(`Step 1 (Square): ${n} * ${n}`);
    return n * n;
};

const numToString = (n: number): string => {
    console.log(`Step 2 (ToString): converting ${n} to string`);
    return n.toString();
};

const formatMessage = (s: string): string => {
    console.log(`Step 3 (Format): formatting '${s}'`);
    return `🅰️ 🅱️ 🅾️ 🅱️ 🅰️  ${s} 🅰️ 🅱️ 🅾️ 🅱️ 🅰️`;
};

const initialNumber = 5;

const result = applyPipeline(
    initialNumber,
    square,
    numToString,
    formatMessage
);

console.log('\nResult:');
console.log(result);
