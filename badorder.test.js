describe('Example of tests depending on the order', () => {
    var foo = [];

    it('Adds element to the list', () => {
        foo.push(1);

        expect(foo).toHaveLength(1);
    });

    it('Adds second element to the list', () => {
        foo.push(2);

        expect(foo).toHaveLength(2);
    });

    it('Removes element from the list', () => {
        foo.pop();

        expect(foo).toHaveLength(1);
    });

    it('Adds third element to the list', () => {
        foo.push(3);

        expect(foo).toHaveLength(2);
    });
});
