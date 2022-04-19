class Node {
    constructor(value, next=null) {
        this.value = value
        this.next = next
    }
}

class List {
    constructor() {
        this.head = null
    }


    length = () => {
        var len = 0;
        var current = this.head;

        while( current != null ) {
            len ++;
            current = current.next;
        }

        return len;
    }


    push = (item) => {
        var node = new Node(item);

        if ( this.head == null ) {
            this.head = node;
        } else {
            var current = this.head;

            while( current.next != null ) {
                current = current.next;
            }

            current.next = node;
        }
    }

    print = () => {
        var result = '[';

        var current = this.head;
        while( current != null ) {
            result += current.value.toString();
            result += ' ';
            current = current.next;
        }

        result += ']';

        return result;
    }
}

describe('Some tests for list', () => {
    it('works', () => {
        var foo = new List();
        foo.push(1);
        expect(foo.head).not.toBeNull();
    });
});
