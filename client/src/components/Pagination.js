import React from 'react';
import {Button} from 'react-bootstrap'

const Pagination = ({ memesPerPage, totalMemes, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalMemes / memesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className='pagination'>
        {pageNumbers.map(number => (
          <li key={number} className='page-item'>
            <Button onClick={() => paginate(number)}>
              {number}
            </Button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;