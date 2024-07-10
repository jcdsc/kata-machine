export default function bubble_sort(arr: number[]): void {
    const arrLength = arr.length;
    for (let i = 0; i < arrLength - 1; i++) {
        for (let j = 0; j < arrLength - 1 - i; j++) {
            if (arr[j] > arr[j + 1])
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
    }
}
