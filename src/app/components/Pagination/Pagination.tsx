import React from 'react';

interface Props {
    totalPages: number;
    itemsPerPage: number;
    paginate: (num: number) => void;
}
const Pagination = ({totalPages, itemsPerPage, paginate}: Props) => {
    const pageNumbers = [];

    for (let i = 1; (i <= totalPages / itemsPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <div>
            <ul>
                {pageNumbers.map(num =>
                    <li key={num}>
                    <div onClick={() => paginate(num)}>{num}</div>
                    </li>)
                }
            </ul>
        </div>
    );
};

export default Pagination;