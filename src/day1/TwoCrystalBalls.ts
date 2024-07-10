export default function two_crystal_balls(breaks: boolean[]): number {
    const breaksLength = breaks.length;
    const jmpAmt = Math.floor(Math.sqrt(breaksLength));
    let i = jmpAmt;
    for (; i < breaksLength; i += jmpAmt) {
        if (breaks[i]) break;
    }
    i -= jmpAmt;
    for (let j = 0; j < jmpAmt && i < breaksLength; j++, i++) {
        if (breaks[i]) return i;
    }
    return -1;
}
