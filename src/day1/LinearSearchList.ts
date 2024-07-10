export default function linear_search(
    haystack: number[],
    needle: number,
): boolean {
    const haystackLength = haystack.length;
    for (let i = 0; i < haystackLength; i++) {
        if (haystack[i] === needle) return true;
    }
    return false;
}
