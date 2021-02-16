import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
    const state = expensesReducer(undefined, {type: '@@INIT'});

    expect(state).toEqual([]);
});

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };

    const state = expensesReducer(expenses, action);

    expect(state).toEqual([expenses[1], expenses[0]]); 
});

test('should not remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    };

    const state = expensesReducer(expenses, action);

    expect(state).toEqual(expenses); 
});

test('should add an expense', () => {
    const expense ={
        description: 'new expense', 
        note: 'new note', 
        amount: 0, 
        createdAt: 0 
    };

    const action = {
        type: 'ADD_EXPENSE',
        expense
    };

    const state = expensesReducer(expenses, action);

    expect(state).toEqual(...expenses, expense); 
});

test('should edit expense by id', () => {
    const expense = {
        id: '2',
        description: 'new text',
        note: '',
        amount: 109500,
        createdAt: moment(0).subtract(4, 'days').valueOf()
    };

    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        updates: {
            description: 'new text'
        }    
    };

    const state = expensesReducer(expenses, action);

    expect(state[1].description).toBe('new note'); 
});

test('should not edit expense by id', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates: {
            text: 'new text'
        }    
    };

    const state = expensesReducer(expenses, action);

    expect(state).toEqual(expenses); 
});


