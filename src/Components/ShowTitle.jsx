import React from 'react';

const ShowTitle = ({ titles }) => (
  <div className='show-title'>
    {titles.map((title, index) => (
      <div key={index} className='card-title'>
        <p className='title'>{title}</p>
      </div>
    ))}
  </div>
);

export default ShowTitle
