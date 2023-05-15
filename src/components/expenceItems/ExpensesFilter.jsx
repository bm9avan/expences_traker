import React from 'react';
import './ExpensesFilter.css';

const ExpensesFilter = ({onSetYear, yearSlected}) => {

  function yearHandler(event){
    onSetYear(event.target.value)
  }

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select onChange={yearHandler} value={yearSlected}>
          <option value='all'>All</option>
          <option value='2023'>2023</option>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;