import React from 'react';
import { connect } from 'react-redux';
import { Link } from'react-router-dom';
import { removeExpense } from '../actions/expenses';

export const ExpenseListItem = ({id, description, amount, createdAt}, props) => (
    <div>
        <Link to={`/edit/${id}`}>{description}</Link>
        <p>{amount} -- {createdAt}</p>
    </div>
);

export default connect()(ExpenseListItem);