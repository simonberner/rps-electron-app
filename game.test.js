const compare = require('./game');

// Test Suite for the compare function
describe('The comparison can be', () => {
    test('a draw', () => {
        expect(compare(true, true))
            .toBeString()
            .toBe('It is a draw!')
            .toStartWith('It')
            .toEndWith('draw!')
    });

    test('a missing selection', () => {
        expect(compare(undefined))
            .toBeString()
            .toBe('Please select an option before playing.')
            .toStartWith('Please')
            .toEndWith('playing.')
    });
})