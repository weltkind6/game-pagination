import React from 'react';
import {Pagination, PaginationItem, PaginationLink} from "reactstrap";

interface Props {
    totalPages: number;
    itemsPerPage: number;
    paginate: (num: number) => void;
    nextPage: () => void;
    previousPage: () => void;
}

const PaginationPage = ({
                            totalPages,
                            itemsPerPage,
                            nextPage,
                            paginate,
                            previousPage
}: Props) => {
    const pageNumbers = [];

    for (let i = 1; (i <= totalPages / itemsPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <nav>
            <Pagination>
                <PaginationItem>
                    <PaginationLink
                        href="#"
                        previous
                        onClick={previousPage}
                    />
                </PaginationItem>
                {
                    pageNumbers.map(number =>
                        <PaginationItem key={number}>
                            <PaginationLink
                                href="#"
                                onClick={() => paginate(number)}>
                                {number}
                            </PaginationLink>
                        </PaginationItem>)
                }
                <PaginationItem>
                    <PaginationLink
                        href="#"
                        next
                        onClick={nextPage}
                    />
                </PaginationItem>
            </Pagination>
        </nav>
    );
};

export default PaginationPage;
