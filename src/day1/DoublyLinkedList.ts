type Node<T> = {
    value: T;
    next?: Node<T>;
    prev?: Node<T>;
};

export default class DoublyLinkedList<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.length = 0;
        this.head = undefined;
        this.tail = undefined;
    }

    prepend(item: T): void {
        const newNode = { value: item } as Node<T>;
        this.length++;
        if (this.head) {
            newNode.next = this.head;
            this.head.prev = newNode;
        } else {
            this.tail = newNode;
        }
        this.head = newNode;
    }
    insertAt(item: T, idx: number): void {
        const newNode = { value: item } as Node<T>;
        this.length++;
        if (idx === 0) {
            this.prepend(item);
        } else if (idx >= this.length) {
            this.append(item);
        } else {
            let current = this.head;
            for (let i = 0; i < idx; i++) {
                current = current?.next;
            }
            newNode.next = current;
            newNode.prev = current?.prev;
            current!.prev!.next = newNode;
            current!.prev = newNode;
        }
    }
    append(item: T): void {
        const newNode = { value: item } as Node<T>;
        this.length++;
        if (this.tail) {
            this.tail.next = newNode;
            newNode.prev = this.tail;
        } else {
            this.head = newNode;
        }
        this.tail = newNode;
    }
    remove(item: T): T | undefined {
        if (!this.head) return undefined;
        let current = this.head;
        let prev: Node<T> | undefined;
        while (current) {
            if (current.value === item) {
                this.length--;
                if (prev) prev.next = current.next;
                else this.head = current.next;
                if (current.next) current.next.prev = prev;
                else this.tail = prev;
                return current.value;
            }
            prev = current;
            current = current.next!;
        }
        return undefined;
    }
    get(idx: number): T | undefined {
        if (idx < 0 || idx >= this.length) return undefined;
        let current = this.head;
        for (let i = 0; i < idx; i++) {
            current = current?.next;
        }
        return current?.value;
    }
    removeAt(idx: number): T | undefined {
        if (idx < 0 || idx >= this.length) return undefined;
        let current = this.head;
        for (let i = 0; i < idx; i++) {
            current = current?.next;
        }
        this.length--;
        const prev = current?.prev;
        const next = current?.next;
        if (prev) prev.next = next;
        else this.head = next;
        if (next) next.prev = prev;
        else this.tail = prev;
        return current?.value;
    }
}
