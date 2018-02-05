export class Calculator {
    add(a: number, b: number): number {
        if (a === 0) return 0;
        if (b === 0) return -1;
        return a + b;
    }

    sub(a: number, b: number): number {
        return a - b;
    }
}

//