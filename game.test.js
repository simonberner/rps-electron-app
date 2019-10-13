const compare = require('./game');

// Test Suite for the compare function
describe('The comparison can be', () => {
    test('a draw', () => {
        let text = compare(true, true);
        expect(text)
            .toBeString()
            .toBe('It is a draw!')
            .toStartWith('It')
            .toEndWith('draw!')
    });

    test('a missing selection', () => {
        let text = compare(undefined);
        expect(text)
            .toBeString()
            .toBe('Please select an option before playing.')
            .toStartWith('Please')
            .toEndWith('playing.')
    });
})