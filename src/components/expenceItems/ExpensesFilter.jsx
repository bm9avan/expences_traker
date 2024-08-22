import React from 'react';
import './ExpensesFilter.css';

const ExpensesFilter = ({yearOptions, onSetYear, yearSlected}) => {
console.log(yearOptions)
  function yearHandler(event){
    onSetYear(event.target.value)
  }

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select onChange={yearHandler} value={yearSlected}>
          <option value='all'>All</option>
          {yearOptions.map((y)=><option key={y.toString()} value={y.toString()}>{y}</option>)}
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;