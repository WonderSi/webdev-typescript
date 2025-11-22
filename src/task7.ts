function chunkArray<T>(items: readonly T[], chunkSize: number): T[][] {
    if (chunkSize <= 0 || !Number.isInteger(chunkSize)) {
        throw new Error (`chunkSize must be a positive integer. Received: ${chunkSize}`)
    }

    const result: T[][] = [];

    for (let i = 0; i < items.length; i += chunkSize) {
        const chunk = items.slice(i, i + chunkSize);
        result.push(chunk);
    };

    return result;
}

const numbers: readonly number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

try {
    const chunks1 = chunkArray(numbers, 3);
    console.log('For 3 numbers: ', chunks1)

    const chunks2 = chunkArray(numbers, 4);
    console.log('For 3 numbers: ', chunks2)
} catch (e) {
    console.error(e)
}
