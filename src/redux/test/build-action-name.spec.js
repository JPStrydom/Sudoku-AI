import buildActionName from '../build-action-name';

describe('Build Action Name - Unit Test', () => {
    it('should return an action name', () => {
        const actual = buildActionName('someReducer', 'SOME_ACTION');
        const expected = 'Sudoku-AI/someReducer/SOME_ACTION';
        expect(actual).toEqual(expected);
    });

    it('should throw error when reducer name not given', () => {
        try {
            buildActionName();
        } catch (e) {
            expect(e.message).toEqual('Reducer name cannot be blank');
        }
    });

    it('should throw error when action name not given', () => {
        try {
            buildActionName('someReducer');
        } catch (e) {
            expect(e.message).toEqual('Action name cannot be blank');
        }
    });
});
