const compare = require('./game');

// Test Suite for the compare function
describe('The comparison can be', () => {
    test('a draw', () => {
        let text = compare(true, true);
        expect(text).toBeString('It is a draw!');
    });

    test('a missing selection', () => {
        let text = compare(undefined);
        expect(text).toBeString('Please select an option before playing.');
    });
})