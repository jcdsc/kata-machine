type Node<T> = {
    value: T;
    next?: Node<T>;
};

export default class Stack<T> {
    public length: number;
    private head?: Node<T>;

    constructor() {
        this.length = 0;
        this.head = undefined;
    }

    push(item: T): void {
        const newNode = { value: item } as Node<T>;
        this.length++;
        if (this.head) {
            newNode.next = this.head;
        }
        this.head = newNode;
    }
    pop(): T | undefined {
        if (!this.head) return undefined;
        this.length--;
        const head = this.head;
        if (this.length === 0) this.head = undefined;
        else this.head = this.head.next;
        return head.value;
    }
    peek(): T | undefined {
        return this.head?.value;
    }
}
