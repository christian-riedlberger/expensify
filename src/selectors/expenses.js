import moment from 'moment';

//timestamps (milliseconds)
// Jan.1, 1970 (unix epoch)
// Get Visible expenses
export default (expenses, {text, sortBy, startDate, endDate}) => {

    return expenses.filter((expense) => {
        const createdAt = moment(expense.createdAt);
        const startDateMatch = startDate ? startDate.isSameOrBefore(createdAt, 'day') : true
        const endDateMatch = endDate ? endDate.isSameOrAfter(createdAt, 'day') : true
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch
    }).sort((a, b) => {
        if (sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1;
        } else if (sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1;
        } 
    });
};