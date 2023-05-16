import React from 'react'
import ChartBar from './ChartBar'
import './Chart.css'

function Chart({ expenses }) {

    let chartData = [
        { label: 'Jan', value: 0 },
        { label: 'Feb', value: 0 },
        { label: 'Mar', value: 0 },
        { label: 'Apr', value: 0 },
        { label: 'May', value: 0 },
        { label: 'Jun', value: 0 },
        { label: 'Jul', value: 0 },
        { label: 'Aug', value: 0 },
        { label: 'Sep', value: 0 },
        { label: 'Oct', value: 0 },
        { label: 'Nov', value: 0 },
        { label: 'Dec', value: 0 }
    ]

    for (let index = 0; index < expenses.length; index++) {
        let month = expenses[index].date.getMonth()
        chartData[month].value += expenses[index].price;
    }
    const maxValue = Math.max(...(chartData.map((expense) => { return expense.value })))

    return (
        <div className='rowChart'>
            {chartData.map((month) => {
                return <ChartBar key={month.label} label={month.label} value={month.value} max={maxValue} />
            })}
        </div>
    )
}

export default Chart
