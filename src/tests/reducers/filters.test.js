import filtersReducer from '../../reducers/filters';
import moment from 'moment';

test('should set up default filter values', () => {
    const state = filtersReducer(undefined, { type : '@@INIT'});

    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
});

test('should set sort by to amount', () => {
    const state = filtersReducer(undefined, { type : 'SORT_BY_AMOUNT'});

    expect(state.sortBy).toEqual('amount');
});

test('should set sort by to date', () => {
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    };

    const action = {type: 'SORT_BY_DATE'};
    
    const state = filtersReducer(currentState, action);
    
    expect(state.sortBy).toEqual('date');
});

test('should set text filter', () => {
    const state = filtersReducer(undefined, {type: 'SET_TEXT_FILTER', text: 'text'});
    
    expect(state.text).toEqual('text');
});

test('should set start date filter', () => {
    const state = filtersReducer(undefined, {type: 'SET_START_DATE', startDate: moment().startOf('month')});
    
    expect(state.startDate).toEqual(moment().startOf('month'));
});

test('should set end date filter', () => {
    const state = filtersReducer(undefined, {type: 'SET_END_DATE', endDate: moment().endOf('month')});
    
    expect(state.endDate).toEqual(moment().endOf('month'));
});