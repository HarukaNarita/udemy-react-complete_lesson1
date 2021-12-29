import './ExpenseDate.css';

function ExpenseDate(props) {
    const month = props.date.toLocateString('en-US', {month: 'long'});
    const day = props.date.toLocateString('en-US', {day: 'long'});
    const year = props.date.getFullYear();

    return (
        <div className="expense-data">
            <div className="expense-data__month">{month}</div>
            <div className="expense-data__year">{year}</div>
            <div className="expense-data__day">{day}</div>
        </div>
    );
}

export default ExpenseDate;