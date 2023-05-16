import React from 'react'
import './ChartBar.css'

function ChartBar({ label, value, max}) {
    let hightBar= (max >0 ? Math.round((value/max)*100) : 0) + '%'
  return (
    <div className='chart-bar'>
      <div className='chart-bar__inner'>
        <div
          className='chart-bar__fill'
          style={{ height: hightBar }}
        ></div>
      </div>
      <div className='chart-bar__label'>{label}</div>
    </div>
  );
};

export default ChartBar
