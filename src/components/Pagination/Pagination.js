import React from 'react'
import ReactPaginate from 'react-paginate';

const Pagination = ({ info, pageNumber, setPageNumber }) => {

    return (
        <ReactPaginate pageCount={info?.pages} />
    )
}

export default Pagination