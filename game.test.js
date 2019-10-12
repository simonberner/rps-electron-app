const compare = require('./game');

// Test Suite for the compare function
describe('the comparison can be ', () => {
    test('a draw', () => {
        let text = compare(true, true);
        expect(text).toBe('It is a draw!');
    });

    test('an open selection', () => {
        let text = compare(undefined);
        expect(text).toBe('Please select an option before playing.');
    });
})